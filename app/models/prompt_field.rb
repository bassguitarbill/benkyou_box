# frozen_string_literal: true

class PromptField < ApplicationRecord
  self.abstract_class = true
  def self.weighted_random
    # TODO: there's a deep magic way to do this
    # https://stackoverflow.com/a/56006340
    weight_index = rand * sum(:weight)
    result = nil
    all.each do |p|
      result = p
      weight_index -= p.weight
      break if weight_index.negative?
    end

    result
  end
end
