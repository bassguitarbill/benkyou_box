# frozen_string_literal: true

class PromptFragment < ApplicationRecord
  def self.lengths
    where category: 'length'
  end

  def self.topics
    where category: 'topic'
  end

  def self.grammars
    where category: 'grammar'
  end

  def self.weighted_random(category)
    of_category = where(category: category)
    weight_index = rand * of_category.sum(:weight)

    result = nil
    of_category.each do |p|
      result = p
      weight_index -= p.weight
      break if weight_index.negative?
    end

    result
  end
end
