class Submission < ApplicationRecord
  belongs_to :user

  def self.today
    where created_at: Date.today.beginning_of_day..Date.today.end_of_day
  end
end
