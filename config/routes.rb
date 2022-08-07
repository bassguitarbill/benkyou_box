Rails.application.routes.draw do
  get "set_locale/:locale", to: "locale#set_locale", as: :locale
  root "welcome#index"
  passwordless_for :users, at: '/', as: :auth

  namespace :api do
    namespace :v1 do
      namespace :prompts do
        get "generate"
        get "fetch"
        put "update"
      end
      namespace :submissions do
        get "today_counts"
        get "daily"
        post "submit"
      end
    end
  end
  get "*path" => redirect("/")
end
