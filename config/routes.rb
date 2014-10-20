Rails.application.routes.draw do
  root to: 'pages#index'

  resources :albums do
    resources :songs
  end

  namespace :api do
    resources :albums
  end
  
end
