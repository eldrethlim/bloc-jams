class Album < ActiveRecord::Base
  has_many :songs

  def next_album
    Album.all.unscoped.where("created_at <= ? AND id != ?", created_at, id).order("created_at DESC").first
  end

  def previous_album
    Album.all.unscoped.where("created_at >= ? AND id != ?", created_at, id).order("created_at DESC").last
  end
end
