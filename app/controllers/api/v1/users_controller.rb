# frozen_string_literal: true

module Api
  module V1
    class UsersController < ApplicationController
      def update
        req = JSON.parse(request.body.read)
        current_user.update_json req
        render json: current_user
      end
    end
  end
end
