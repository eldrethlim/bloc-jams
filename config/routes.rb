Rails.application.routes.draw do
  root to: 'pages#index'
  get 'profile' => 'users#profile'

  resources :albums do
    resources :songs
  end

  namespace :api do
    resources :albums
  end
  
end