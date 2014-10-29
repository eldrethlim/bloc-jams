class AlbumsSerializer < ActiveModel::Serializer
  attributes :id, :created_at, :title, :author, :description, :album_image_url

  has_many :songs
end
