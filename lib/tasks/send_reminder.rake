# frozen_string_literal: true

require 'discordrb'

namespace :benkyou_box do
  desc "Sends a Discord reminder to any user who hasn't done a submission yet today"
  task send_reminder: [:environment] do
    bot = Discordrb::Bot.new token: ENV['DISCORD_TOKEN']

    puts "Sending Discord reminders"
    for u in User.select(&:has_discord?) do
      next unless u.submissions.today.empty?
      next unless u.discord_reminders
      puts "Sending a reminder to #{u.name}(#{u.id})"
      data = {}
      data['username'] = u.discord_username
      data['id'] = u.discord_id
      data['discriminator'] = u.discord_discriminator
      user = Discordrb::User.new(data, bot)
      user.pm "Hello #{u.name}! Don't forget to do your study today! https://intense-plains-70311.herokuapp.com"
    end
  end
end
