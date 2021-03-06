Rails.application.routes.draw do
  root to: 'home#index'

  get '/templates/:path.html' => 'templates#template', :constraints => { :path => /.+/ }

  namespace :api do
    resources :albums
  end
  
  get '*path' => 'home#index'
end