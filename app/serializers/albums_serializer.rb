class AlbumsSerializer < ActiveModel::Serializer
  attributes :id, :created_at, :title, :author, :description, :image

  has_many :songs
end
