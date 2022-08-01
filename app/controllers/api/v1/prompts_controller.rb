class Api::V1::PromptsController < ApplicationController
  def generate
    render json: {
      length: PromptLength.weighted_random.try(:content),
      topic: PromptTopic.weighted_random.try(:content),
      grammar: PromptGrammar.weighted_random.try(:content),
    }
  end
end
