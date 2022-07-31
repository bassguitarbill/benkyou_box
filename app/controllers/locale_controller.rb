class LocaleController < ApplicationController
  def set_locale
    I18n.locale = params[:locale]
    redirect_to root_path
  end
end
