
Rails.application.routes.draw do
  resources :mymaps
  resources :events
  post '/signup', to: 'users#create'
  get '/me', to: 'users#show'
  post '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy'
  get '/users', to: 'users#index'
end