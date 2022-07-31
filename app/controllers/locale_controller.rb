class LocaleController < ApplicationController
  def set_locale
    current_user.locale = params[:locale]
    current_user.save
    redirect_to root_path
  end
end
