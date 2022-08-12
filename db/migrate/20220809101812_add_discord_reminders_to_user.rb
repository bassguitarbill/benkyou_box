# frozen_string_literal: true

class AddDiscordRemindersToUser < ActiveRecord::Migration[7.0]
  def change
    add_column :users, :discord_reminders, :boolean
  end
end
