class AlbumsSerializer < ActiveModel::Serializer
  attributes :id, :created_at, :title, :author, :description

  has_many :songs
end
