Rails.application.routes.draw do
  resources :submissions
  resources :users, only: [:create, :new, :update]

  get "set_locale/:locale", to: "locale#set_locale", as: :locale
  root "welcome#index"
  passwordless_for :users, at: '/', as: :auth

  get "prompts", to: "prompts#index", as: :prompts
  post "prompts", to: "prompts#add_new"

  namespace :api do
    namespace :v1 do
      namespace :prompts do
        get "generate"
      end
    end
  end
end
