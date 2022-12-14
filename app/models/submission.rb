# frozen_string_literal: true

class Submission < ApplicationRecord
  belongs_to :user
  has_many :translations

  def self.today
    created_on_date nil
  end

  def self.created_on_date(date)
    date = date ? Date.parse(date) : Date.current
    offset = date.in_time_zone('Eastern Time (US & Canada)').utc_offset
    start = date.in_time_zone('UTC').beginning_of_day - offset
    ending = date.in_time_zone('UTC').end_of_day - offset

    where created_at: start..ending
  end
end
