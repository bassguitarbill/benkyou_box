class User < ApplicationRecord
  validates :email, presence: true, uniqueness: { case_sensitive: false }

  passwordless_with :email

  def submissions
    Submission.where(user: self)
  end

  def has_discord?
    discord_username.present? && discord_id.present? && discord_discriminator.present?
  end
end
