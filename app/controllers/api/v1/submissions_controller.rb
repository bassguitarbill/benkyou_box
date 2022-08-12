# frozen_string_literal: true

module Api
  module V1
    class SubmissionsController < ApplicationController
      def today_counts
        users = User.all.map do |u|
          { name: u.name, id: u.id, count: u.submissions.today.count }
        end

        render json: users
      end

      def daily
        user = User.find(params[:user])
        submissions = user.submissions.created_on_date params[:date]
        render json: { user: user, submissions: submissions }
      end

      def submit
        # TODO: This doesn't seem like the safest way to do this
        submission = Submission.new(JSON.parse(request.body.read))
        submission.user = current_user
        submission.save
        submission.id
      end

      private

      def submission_params
        request.body.read.permit(:prompt, :response)
      end
    end
  end
end
