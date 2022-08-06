# frozen_string_literal: true

class Api::V1::SubmissionsController < ApplicationController
  def today_counts
    users = User.all.map do |u|
      { name: u.name, id: u.id, count: u.submissions.today.count }
    end

    render json: users
  end
end

