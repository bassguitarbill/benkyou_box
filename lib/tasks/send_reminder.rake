# frozen_string_literal: true

require 'discordrb'

namespace :benkyou_box do
  desc "Sends a Discord reminder to any user who hasn't done a submission yet today"
  task send_reminder: [:environment] do
    bot = Discordrb::Bot.new token: ENV.fetch('DISCORD_TOKEN', nil)

    puts 'Sending Discord reminders'
    User.select(&:discord?).each do |u|
      next unless u.submissions.today.empty?
      next unless u.discord_reminders

      puts "Sending a reminder to #{u.name}(#{u.id})"
      data = {}
      data['username'] = u.discord_username
      data['id'] = u.discord_id
      data['discriminator'] = u.discord_discriminator
      user = Discordrb::User.new(data, bot)
      user.pm "Hello #{u.name}! Don't forget to do your study today! https://benkyou-box.herokuapp.com"
    end
  end
end
