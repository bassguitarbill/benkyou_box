# frozen_string_literal: true

class Api::V1::SubmissionsController < ApplicationController
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
end

