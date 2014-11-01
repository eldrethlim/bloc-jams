class RenameAlbumImageUrlToImage < ActiveRecord::Migration
  def change
    rename_column :albums, :album_image_url, :image
  end
end
