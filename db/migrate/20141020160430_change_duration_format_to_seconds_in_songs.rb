class ChangeDurationFormatToSecondsInSongs < ActiveRecord::Migration
  def up
    change_column :songs, :duration, :integer
  end

  def down
    change_column :songs, :duration, :decimal, precision: 8, scale: 2
  end
end