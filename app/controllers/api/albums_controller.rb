class Api::AlbumsController < ApplicationController
  respond_to :json

  def index
    albums = Album.order("created_at DESC").includes(:songs)
    render json: albums
  end

  def show
    album = Album.find(params[:id])
    render json: album
  end
end