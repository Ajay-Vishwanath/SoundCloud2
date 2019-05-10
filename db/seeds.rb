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
kanye_west = User.create(email: "kanyewest@music.com", username: "Kanye_West", password: "yeezus123")
the_microphones = User.create(email: "themicrophones@music.com", username: "The Microphones", password: "theglow123")
ryu_fukui = User.create(email: "ryufukui@music.com", username: "Ryu Fukui", password: "scenery123")
sza = User.create(email: "sza@music.com", username: "SZA", password: "ctrl123")
mbv = User.create(email: "mybloodyvalentine@music.com", username: "MBV", password: "loveless123")
madvillain = User.create(email: "madvillain@music.com", username: "Madvillain", password: "madvillain123")
evenings = User.create(email: "evenings@music.com", username: "Evenings", password: "yore123")
nick_drake = User.create(email: "nickdrake@music.com", username: "Nick_Drake", password: "pinkmoon123")
lil_nas_x = User.create(email: "lilnasx@music.com", username: "Lil Nas X", password: "oldtownroad123")
noname = User.create(email: "noname@music.com", username: "Noname", password: "telefone123")
yussef_kamaal = User.create(email: "yussefkamaal@music.com", username: "Yussef Kamaal", password: "blackfocus123")
frank_ocean = User.create(email: "frankocean@music.com", username: "Blonded", password: "blond23")
joni_mitchell = User.create(email: "jonimitchell@music.com", username: "Joni Mitchell", password: "blue123")
jamie_xx = User.create(email: "jamiexx@music.com", username: "Jamie XX", password: "incolour123")
jai_paul = User.create(email: "jaipaul@music.com", username: "Jai Paul", password: "neverreleasinganalbum123")
grimes = User.create(email: "grimes@music.com", username: "Grimes", password: "clelon123")
jinsang = User.create(email: "jinsang@music.com", username: "Jinsang", password: "jinsang123")

Song.destroy_all 

song_one = Song.create(title: "I Don't Really Mind", artist_id: 2, genre: "alternative-rock")
song_one.audio_file.attach(io: open("https://s3-us-west-1.amazonaws.com/soundcloud-2-dev/11+I+Don't+Reall+Mind+-+Tame+Impala.mp3"), filename: "11 I Don't Reall Mind - Tame Impala.mp3") 
song_one.photo.attach(io: open("https://s3-us-west-1.amazonaws.com/soundcloud-2-dev/innerspeaker.jpg"), filename: "innerspeaker.jpg")
song_two = Song.create(title: "I Will Not Contain You", artist_id: 7, genre: "indie-folk")
song_two.audio_file.attach(io: open("https://s3-us-west-1.amazonaws.com/soundcloud-2-dev/10+I'll+Not+Contain+You.mp3"), filename: "01 I Want Wind To Blow.mp3") 
song_two.photo.attach(io: open("https://s3-us-west-1.amazonaws.com/soundcloud-2-dev/The+Glow+Pt+2.jpg"), filename: "The Glow Pt 2.jpg")
song_three = Song.create(title: "It's Not Meant to Be", artist_id: 2, genre: "alternative-rock")
song_three.audio_file.attach(io: open("https://s3-us-west-1.amazonaws.com/soundcloud-2-dev/01+It's+Not+Meant+To+Be+-+Tame+Impala.mp3"), filename: "01 It's Not Meant To Be - Tame Impala.mp3") 
song_three.photo.attach(io: open("https://s3-us-west-1.amazonaws.com/soundcloud-2-dev/innerspeaker.jpg"), filename: "innerspeaker.jpg")
song_four = Song.create(title: "Egyptian Pools", artist_id: 22, genre: "lo-fi hip hop")
song_four.audio_file.attach(io: open("https://s3-us-west-1.amazonaws.com/soundcloud-2-dev/jinsang+-+egyptian+pools.mp3"), filename: "01 I Want Wind To Blow.mp3") 
song_four.photo.attach(io: open("https://s3-us-west-1.amazonaws.com/soundcloud-2-dev/egyptian_pools.jpeg"), filename: "egyptian_pools.jpeg")
song_five = Song.create(title: "Pink Moon", artist_id: 13, genre: "folk")
song_five.audio_file.attach(io: open("https://s3-us-west-1.amazonaws.com/soundcloud-2-dev/Pink+Moon.mp3"), filename: "01 I Want Wind To Blow.mp3") 
song_five.photo.attach(io: open("https://s3-us-west-1.amazonaws.com/soundcloud-2-dev/nick_drake.jpg"), filename: "nick_drake.jpg")
song_six = Song.create(title: "The Rest is Noise", artist_id: 19, genre: "electronica")
song_six.audio_file.attach(io: open("https://s3-us-west-1.amazonaws.com/soundcloud-2-dev/Jamie+xx+-+The+Rest+Is+Noise.mp3"), filename: "Jamie xx - The Rest Is Noise.mp3") 
song_six.photo.attach(io: open("https://s3-us-west-1.amazonaws.com/soundcloud-2-dev/in_colour.jpeg"), filename: "in_colour.jpeg")
song_seven = Song.create(title: "Jasmine (Demo)", artist_id: 20, genre: "electropop")
song_seven.audio_file.attach(io: open("https://s3-us-west-1.amazonaws.com/soundcloud-2-dev/Jai+Paul+-+Jasmine+(Demo).mp3"), filename: "01 I Want Wind To Blow.mp3") 
song_seven.photo.attach(io: open("https://s3-us-west-1.amazonaws.com/soundcloud-2-dev/jai_paul.jpg"), filename: "jai_paul.jpg")
song_eight = Song.create(title: "Old Town Road (feat. Billy Ray Cyrus)[Remix]", artist_id: 14, genre: "country trap")
song_eight.audio_file.attach(io: open("https://s3-us-west-1.amazonaws.com/soundcloud-2-dev/Lil+Nas+X+-+Old+Town+Road+(feat.+Billy+Ray+Cyrus)+%5BRemix%5D.mp3"), filename: "Lil Nas X - Old Town Road (feat. Billy Ray Cyrus) [Remix].mp3") 
song_eight.photo.attach(io: open("https://s3-us-west-1.amazonaws.com/soundcloud-2-dev/old_town_road.jpg"), filename: "old_town_road.jpg")
song_nine = Song.create(title: "Case of You", artist_id: 18, genre: "folk")
song_nine.audio_file.attach(io: open("https://s3-us-west-1.amazonaws.com/soundcloud-2-dev/Joni+Mitchell-A+Case+of+You.mp3"), filename: "Joni Mitchell-A Case of You.mp3") 
song_nine.photo.attach(io: open("https://s3-us-west-1.amazonaws.com/soundcloud-2-dev/blue_joni_mitchell.jpeg"), filename: "blue_joni_mitchell.jpeg")
song_ten = Song.create(title: "Solo", artist_id: 17, genre: "R&B")
song_ten.audio_file.attach(io: open("https://s3-us-west-1.amazonaws.com/soundcloud-2-dev/Frank+Ocean+-+Solo.mp3"), filename: "Frank Ocean - Solo.mp3") 
song_ten.photo.attach(io: open("https://s3-us-west-1.amazonaws.com/soundcloud-2-dev/blond.jpg"), filename: "blond.jpg")
song_eleven = Song.create(title: "Remembrance", artist_id: 16, genre: "jazz fusion")
song_eleven.audio_file.attach(io: open("https://s3-us-west-1.amazonaws.com/soundcloud-2-dev/Remembrance.mp3"), filename: "Remembrance.mp3") 
song_eleven.photo.attach(io: open("https://s3-us-west-1.amazonaws.com/soundcloud-2-dev/black_focus.jpg"), filename: "black_focus.jpg")
song_twelve = Song.create(title: "Genesis", artist_id: 21, genre: "electroncia")
song_twelve.audio_file.attach(io: open("https://s3-us-west-1.amazonaws.com/soundcloud-2-dev/Grimes+Genesis.mp3"), filename: "Grimes Genesis.mp3") 
song_twelve.photo.attach(io: open("https://s3-us-west-1.amazonaws.com/soundcloud-2-dev/grimes_visions.jpg"), filename: "grimes_visions.jpg")
song_thirteen = Song.create(title: "Diddy bop (feat. Raury & Cam O'bi)", artist_id: 15, genre: "Hip Hop")
song_thirteen.audio_file.attach(io: open("https://s3-us-west-1.amazonaws.com/soundcloud-2-dev/Noname+-+Diddy+Bop+(feat.+Raury+%26+Cam+O'bi).mp3"), filename: "Noname - Diddy Bop (feat. Raury & Cam O'bi).mp3") 
song_thirteen.photo.attach(io: open("https://s3-us-west-1.amazonaws.com/soundcloud-2-dev/noname.jpg"), filename: "noname.jpg")
song_fourteen = Song.create(title: "So What", artist_id: 4, genre: "jazz")
song_fourteen.audio_file.attach(io: open("https://s3-us-west-1.amazonaws.com/soundcloud-2-dev/01+So+What.mp3"), filename: "01 So What.mp3") 
song_fourteen.photo.attach(io: open("https://s3-us-west-1.amazonaws.com/soundcloud-2-dev/Kind+of+Blue.jpg"), filename: "Kind of Blue.jpg")
song_fifteen = Song.create(title: "Go Gina", artist_id: 9, genre: "R&B")
song_fifteen.audio_file.attach(io: open("https://s3-us-west-1.amazonaws.com/soundcloud-2-dev/07+Go+Gina.mp3"), filename: "07 Go Gina.mp3") 
song_fifteen.photo.attach(io: open("https://s3-us-west-1.amazonaws.com/soundcloud-2-dev/Cover.jpg"), filename: "Cover.jpg")
song_sixteen = Song.create(title: "Biking Home", artist_id: 5, genre: "lo-fi hip-hop")
song_sixteen.audio_file.attach(io: open("https://s3-us-west-1.amazonaws.com/soundcloud-2-dev/Biking+Home.mp4"), filename: "Biking Home.mp4") 
song_sixteen.photo.attach(io: open("https://s3-us-west-1.amazonaws.com/soundcloud-2-dev/Whatever+Happens+Cover.jpg"), filename: "Whatever Happens Cover.jpg")
song_seventeen = Song.create(title: "Goodbye Forever", artist_id: 12, genre: "Electronica")
song_seventeen.audio_file.attach(io: open("https://s3-us-west-1.amazonaws.com/soundcloud-2-dev/Evenings+-+Yore+LP+-+10+Goodbye+Forever.mp3"), filename: "Evenings - Yore LP - 10 Goodbye Forever.mp3") 
song_seventeen.photo.attach(io: open("https://s3-us-west-1.amazonaws.com/soundcloud-2-dev/Yore.jpg"), filename: "Yore.jpg")
song_eighteen = Song.create(title: "On Sight", artist_id: 6, genre: "Hip-Hop")
song_eighteen.audio_file.attach(io: open("https://s3-us-west-1.amazonaws.com/soundcloud-2-dev/01+-+On+Sight.m4a"), filename: "01 - On Sight.m4a") 
song_eighteen.photo.attach(io: open("https://s3-us-west-1.amazonaws.com/soundcloud-2-dev/Yeezus.jpg"), filename: "Yeezus.jpg")
song_nineteen = Song.create(title: "Sometimes", artist_id: 10, genre: "Shoegaze")
song_nineteen.audio_file.attach(io: open("https://s3-us-west-1.amazonaws.com/soundcloud-2-dev/08+Sometimes.mp3"), filename: "08 Sometimes.mp3") 
song_nineteen.photo.attach(io: open("https://s3-us-west-1.amazonaws.com/soundcloud-2-dev/front.jpg"), filename: "front.jpg")
song_twenty = Song.create(title: "Autum Leaves", artist_id: 8, genre: "Jazz")
song_twenty.audio_file.attach(io: open("https://s3-us-west-1.amazonaws.com/soundcloud-2-dev/05.+Autumn+Leaves.mp3"), filename: "05. Autumn Leaves.mp3") 
song_twenty.photo.attach(io: open("https://s3-us-west-1.amazonaws.com/soundcloud-2-dev/ryu+fukui+scenery.jpg"), filename: "ryu fukui scenery.jpg")
song_twenty_one = Song.create(title: "All Caps", artist_id: 11, genre: "Hip Hop")
song_twenty_one.audio_file.attach(io: open("https://s3-us-west-1.amazonaws.com/soundcloud-2-dev/20+All+Caps.mp3"), filename: "20 All Caps.mp3") 
song_twenty_one.photo.attach(io: open("https://s3-us-west-1.amazonaws.com/soundcloud-2-dev/Madvillainy.png"), filename: "Madvillainy.png")
song_twenty_two = Song.create(title: "Xtal", artist_id: 3, genre: "Ambient Techno")
song_twenty_two.audio_file.attach(io: open("https://s3-us-west-1.amazonaws.com/soundcloud-2-dev/01+-+Aphex+Twin+-+Xtal.flac"), filename: "01 - Aphex Twin - Xtal.flac") 
song_twenty_two.photo.attach(io: open("https://s3-us-west-1.amazonaws.com/soundcloud-2-dev/selected+ambient+works+85-92.jpg"), filename: "selected ambient works 85-92.jpg")