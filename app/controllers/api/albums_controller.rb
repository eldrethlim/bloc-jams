class Api::AlbumsController < ApplicationController
  before_action :find_album, only: [:show]
  respond_to :json

  def index
    albums = Album.order("created_at DESC").includes(:songs)
    render json: albums, each_serializer: AlbumsSerializer
  end

  def show
    render json: @album, each_serializer: AlbumSerializer
  end

  def find_album
    @album = Album.find(params[:id])
  end
end