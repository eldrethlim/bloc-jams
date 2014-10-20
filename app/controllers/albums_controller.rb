class AlbumsController < ApplicationController
  before_action :set_album, except: [:index]
  
  def index
  end
  
  private
    def set_album
      @album = Album.find(params[:id])
      @songs = @album.songs.all
    end
end
