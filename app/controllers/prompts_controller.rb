class PromptsController < ApplicationController
  def index
    @lengths = PromptLength.all
    @topics = PromptTopic.all
    @grammars = PromptGrammar.all
  end

  def add_new
    add_prompt_fragments PromptLength, "length"
    add_prompt_fragments PromptTopic, "topic"
    add_prompt_fragments PromptGrammar, "grammar"
    redirect_to '/prompts'
  end

  private

  def add_prompt_fragments(fragment_class, fragment_name)
    arr = []
    for k in params.keys.filter{|k| k.start_with? fragment_name}

      if k.include? "content"
        raise "Empty content parameter!" if params[k].empty?
        arr.push({ content: params[k], added_by_id: current_user.id, weight: 1 })
      else
        arr.last[:weight] = params[k]
      end
    end
    arr.each { |l| fragment_class.create(l) }
  end

end
