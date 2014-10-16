Rails.application.routes.draw do
  root to: 'pages#index'
  get 'album' => 'pages#album'
end
