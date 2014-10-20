class Api::AlbumsController < ApplicationController
  respond_to :json

  def index
    albums = Album.order("created_at DESC")
    render json: albums
  end
end