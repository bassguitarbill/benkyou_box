# frozen_string_literal: true

class User < ApplicationRecord
  validates :email, presence: true, uniqueness: { case_sensitive: false }

  passwordless_with :email

  def submissions
    Submission.where(user: self)
  end

  def discord?
    discord_username.present? && discord_id.present? && discord_discriminator.present?
  end

  def update_json(json)
    hash = {}
    json.each { |k, v| hash[k.underscore] = v }
    update hash
  end
end
