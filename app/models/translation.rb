# frozen_string_literal: true

class Translation < ApplicationRecord
  def update_json(json)
    hash = {}
    json.each { |k, v| hash[k.underscore] = v }
    update hash
  end
end
