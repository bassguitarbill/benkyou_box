# frozen_string_literal: true

class ApplicationController < ActionController::Base
  include Passwordless::ControllerHelpers # <-- This!

  around_action :set_time_zone
  before_action :require_user!

  helper_method :current_user
  helper_method :current_locale

  private

  def current_user
    @current_user ||= authenticate_by_session(User)
  end

  def current_locale
    current_user.try(:locale) || I18n.default_locale
  end

  def require_user!
    return if current_user

    redirect_to auth.sign_in_path, flash: { error: 'You are not worthy!' }
  end

  def set_time_zone(&block)
    Time.use_zone('Eastern Time (US & Canada)', &block)
  end
end

::Passwordless::SessionsController.class_eval do
  skip_before_action :require_user!
end
