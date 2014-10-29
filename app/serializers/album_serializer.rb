class AlbumSerializer < ActiveModel::Serializer
  attributes :id, :created_at, :title, :author, :description, :album_image_url, :previous_album_id, :next_album_id

  has_many :songs

  def previous_album_id
    object.previous_album.try(:id)
  end

  def next_album_id
    object.next_album.try(:id)
  end
end
