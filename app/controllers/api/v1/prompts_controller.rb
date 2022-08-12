# frozen_string_literal: true

module Api
  module V1
    class PromptsController < ApplicationController
      def generate
        render json: {
          length: PromptLength.weighted_random.try(:content),
          topic: PromptTopic.weighted_random.try(:content),
          grammar: PromptGrammar.weighted_random.try(:content)
        }
      end

      def fetch
        render json: {
          lengths: PromptLength.all.order(:id),
          topics: PromptTopic.all.order(:id),
          grammars: PromptGrammar.all.order(:id)
        }
      end

      def update
        rsp = JSON.parse(request.body.read)
        update_column(rsp, 'lengths', PromptLength)
        update_column(rsp, 'topics', PromptTopic)
        update_column(rsp, 'grammars', PromptGrammar)
      end

      private

      def update_column(rsp, col_name, col_class)
        entries = rsp[col_name]
        entries.each do |e|
          update_entry e, col_class
        end
      end

      def update_entry(data, col_class)
        entry = col_class.find_by_id(data['id'])
        if entry
          update_existing_entry entry, data
        else
          col_class.create(content: data['content'], weight: data['weight'], id: data['id'],
                           added_by_id: current_user.id)
        end
      end

      def update_existing_entry(entry, data)
        if data['content'].present? || data['weight'].present?
          entry.update(content: data['content'], weight: data['weight'])
        else
          entry.delete
        end
      end
    end
  end
end
