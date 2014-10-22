# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
require 'faker'

15.times do
  Album.create!(
    title: Faker::Lorem.sentence(3),
    author: Faker::Name.name,
    description: Faker::Lorem.sentence(3)
  )
end

albums = Album.all

albums.each do |album|
  random = rand(5..25)
  x = 1
  random.times do
    Song.create!(
      album: album,
      title: Faker::Lorem.sentence(3),
      number: x,
      duration: Faker::Number.number(2)
    )
    x += 1
  end
end