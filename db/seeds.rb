# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'open-uri'

User.destroy_all 

demo_user = User.create(email: "demouser@test.com", username: "DemoLogin", password: "musiclover59")
tame_impala = User.create(email: "tameimpala@music.com", username: "Tame Impala", password: "lonerism123")
aphex_twin = User.create(email: "aphextwin@music.com", username: "Aphex Twin", password: "rdj123")
miles_davis = User.create(email: "milesdavis@music.com", username: "Miles Davis", password: "kindofblue123")
_drift = User.create(email: "drift@music.com", username: "_Drift", password: "whateverhappens123")

Song.destroy_all 

song_one = Song.create(title: "It's Not Meant to Be", artist_id: 2, genre: "alternative-rock")
song_one.audio_file.attach(io: File.open("https://s3-us-west-1.amazonaws.com/soundcloud-2-seeds/01+It's+Not+Meant+To+Be+-+Tame+Impala.mp3"), filename: "01 It's Not Meant To Be - Tame Impala.mp3") 
song_one.photo.attach(io: open("https://s3-us-west-1.amazonaws.com/soundcloud-2-seeds/innerspeaker.jpg"), filename: "innerspeaker.jpg")
