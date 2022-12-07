Rails.application.routes.draw do
  resources :comments
  resources :user_plants
  resources :plants
  resources :users
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"

  # Custom Route: Login
  post "/login", to: "sessions#create"
  # Custom Route: Logout
  delete '/logout', to: "sessions#destroy"
  get '/authorised_user', to: 'users#show'

end
