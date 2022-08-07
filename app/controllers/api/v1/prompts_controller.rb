class Api::V1::PromptsController < ApplicationController
  def generate
    render json: {
      length: PromptLength.weighted_random.try(:content),
      topic: PromptTopic.weighted_random.try(:content),
      grammar: PromptGrammar.weighted_random.try(:content),
    }
  end

  def fetch
    render json: {
      lengths: PromptLength.all.order(:id),
      topics: PromptTopic.all.order(:id),
      grammars: PromptGrammar.all.order(:id),
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
    for e in entries do
      entry = col_class.find_by_id(e['id'])
      if entry
        if e['content'].present? || e['weight'].present?
          entry.update(content: e['content'], weight: e['weight'])
        else
          entry.delete
        end
      else
        col_class.create(content: e['content'], weight: e['weight'], id: e['id'], added_by_id: current_user.id)
      end
    end
  end
end
