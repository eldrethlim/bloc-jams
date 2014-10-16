class CreateAlbums < ActiveRecord::Migration
  def change
    create_table :albums do |t|
      t.string :title
      t.string :author
      t.string :description

      t.timestamps
    end
  end
end
