
Rails.application.routes.draw do
  resources :itineraries, only: [:index, :create, :destroy, :update]
  resources :events, only: [:index, :create, :destroy, :update]
  post '/signup', to: 'users#create'
  get '/me', to: 'users#show'
  post '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy'
end