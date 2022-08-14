# frozen_string_literal: true

module Api
  module V1
    class TranslationsController < ApplicationController
      def update
        req = JSON.parse(request.body.read)
        t = Translation.find_by(
          user_id: current_user.id,
          submission_id: req['submissionId']
        )

        if t.nil?
          t = Translation.new(
            user_id: current_user.id,
            submission_id: req['submissionId'],
            content: req['content']
          )
        else
          t.content = req['content']
        end
        t.save
      end
    end
  end
end
