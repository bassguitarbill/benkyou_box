# frozen_string_literal: true

module Api
  module V1
    class PromptsController < ApplicationController
      def generate
        render json: {
          length: PromptFragment.weighted_random('length').try(:content),
          topic: PromptFragment.weighted_random('topic').try(:content),
          grammar: PromptFragment.weighted_random('grammar').try(:content)
        }
      end

      def fetch
        render json: {
          lengths: PromptFragment.lengths.all.order(:id),
          topics: PromptFragment.topics.all.order(:id),
          grammars: PromptFragment.grammars.all.order(:id)
        }
      end

      def update
        rsp = JSON.parse(request.body.read)
        update_column(rsp, 'lengths')
        update_column(rsp, 'topics')
        update_column(rsp, 'grammars')
      end

      private

      def update_column(rsp, col_name)
        entries = rsp[col_name]
        entries.each do |e|
          update_entry e
        end
      end

      def update_entry(data)
        entry = PromptFragment.find_by_id(data['id'])
        if entry
          update_existing_entry entry, data
        else
          PromptFragment.create(
            content: data['content'], weight: data['weight'], id: data['id'],
            added_by_id: current_user.id, category: data['category']
          )
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
