class PromptField < ApplicationRecord
  self.abstract_class = true
  def self.weighted_random
    # TODO: there's a deep magic way to do this
    # https://stackoverflow.com/a/56006340
    weight_index = rand * self.sum(:weight)
    for p in self.all
      result = p
      weight_index -= p.weight
      break if weight_index < 0
    end

    result
  end
end
