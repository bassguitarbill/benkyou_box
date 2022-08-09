class Api::V1::UsersController < ApplicationController
  def update
    req = JSON.parse(request.body.read)

    # TODO: fix this
    current_user.update({
      name: req['name'],
      japanese_name: req['japaneseName'],
      email: req['email'],
      discord_username: req['discordUsername'],
      discord_id: req['discordId'],
      discord_discriminator: req['discordDiscriminator'],
      discord_reminders: req['discordReminders'],
    })
  end
end
