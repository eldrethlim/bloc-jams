class AlbumsController < ApplicationController
  before_action :set_album, except: [:index]
  
  def index
    @albums = Album.order("created_at DESC").paginate(page: params[:page], per_page: 10)
  end

  def show
  end

  private
    def set_album
      @album = Album.find(params[:id])
      @songs = @album.songs.all
    end
end
