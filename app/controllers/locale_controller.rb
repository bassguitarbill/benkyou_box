# frozen_string_literal: true

class LocaleController < ApplicationController
  def set_locale
    current_user.update(locale: params[:locale])
    redirect_to root_path
  end
end
