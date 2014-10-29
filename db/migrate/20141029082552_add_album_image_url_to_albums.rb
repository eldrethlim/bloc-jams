class AddAlbumImageUrlToAlbums < ActiveRecord::Migration
  def change
    add_column :albums, :album_image_url, :string
  end
end
