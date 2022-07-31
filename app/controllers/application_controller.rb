class ApplicationController < ActionController::Base
  include Passwordless::ControllerHelpers # <-- This!

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
    redirect_to root_path, flash: { error: 'You are not worthy!' }
  end
end
