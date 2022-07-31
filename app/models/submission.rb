class Submission < ApplicationRecord
  belongs_to :user

  def self.today
    where created_at: Date.today.beginning_of_day..Date.today.end_of_day
  end

  def self.created_on_date(date)
    d = Date.parse date
    where created_at: d.beginning_of_day..d.end_of_day
  end
end
