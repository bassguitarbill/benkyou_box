class Submission < ApplicationRecord
  belongs_to :user

  def self.today
    self.created_on_date nil
  end

  def self.created_on_date(date)
    
    date = date ? Date.parse(date) : Date.today
    offset = date.in_time_zone('Eastern Time (US & Canada)').utc_offset
    start = date.in_time_zone('Eastern Time (US & Canada)').beginning_of_day - offset
    ending = date.in_time_zone('Eastern Time (US & Canada)').end_of_day - offset

    where created_at: start..ending
  end
end
