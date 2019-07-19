# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'open-uri'

User.destroy_all 

demo_user = User.create(email: "demouser@test.com", username: "DemoLogin", password: "musiclover59", location: "Oakland, CA")
tame_impala = User.create(email: "tameimpala@music.com", username: "Tame Impala", password: "lonerism123", location: "Perth, Australia")
tame_impala.profile_photo.attach(io: open("https://soundcloud-2-dev.s3-us-west-1.amazonaws.com/profile-photos/Tame+Impala+Profile+Photo.jpg"), filename: "Tame Impala Profile Photo.jpg")
aphex_twin = User.create(email: "aphextwin@music.com", username: "Aphex Twin", password: "rdj123", location: "Cyberspace, UK")
aphex_twin.profile_photo.attach(io: open("https://soundcloud-2-dev.s3-us-west-1.amazonaws.com/profile-photos/Aphex+Twin+Profile+Photo.jpg"), filename: "Aphex Twin Profile Photo.jpg")
miles_davis = User.create(email: "milesdavis@music.com", username: "Miles Davis", password: "kindofblue123", location: "Jazz Heaven")
miles_davis.profile_photo.attach(io: open("https://soundcloud-2-dev.s3-us-west-1.amazonaws.com/profile-photos/Miles+Davis+Profile+Photo.jpg"), filename: "Miles Davis Profile Photo.jpg")
_drift = User.create(email: "drift@music.com", username: "_Drift", password: "whateverhappens123", location: "Oakland, CA")
kanye_west = User.create(email: "kanyewest@music.com", username: "Kanye_West", password: "yeezus123", location: "Chicago, Il")
kanye_west.profile_photo.attach(io: open("https://soundcloud-2-dev.s3-us-west-1.amazonaws.com/profile-photos/Kanye+West+Profile+Photo.jpeg"), filename: "Kanye West Profile Photo.jpeg")
the_microphones = User.create(email: "themicrophones@music.com", username: "The Microphones", password: "theglow123", location: "Anacortes, WA")
the_microphones.profile_photo.attach(io: open("https://soundcloud-2-dev.s3-us-west-1.amazonaws.com/profile-photos/The+Microphones+Profile+Photo.jpg"), filename: "The Microphones Profile Photo.jpg")
ryu_fukui = User.create(email: "ryufukui@music.com", username: "Ryu Fukui", password: "scenery123", location: "Sapporo, Japan")
ryu_fukui.profile_photo.attach(io: open("https://soundcloud-2-dev.s3-us-west-1.amazonaws.com/profile-photos/Ryu+Fukui+Profile+Photo.jpeg"), filename: "Ryu Fukui Profile Photo.jpeg")
sza = User.create(email: "sza@music.com", username: "SZA", password: "ctrl123", location: "Los Angeles, CA")
sza.profile_photo.attach(io: open("https://soundcloud-2-dev.s3-us-west-1.amazonaws.com/profile-photos/SZA+Profile+Photo.jpg"), filename: "SZA Profile Photo.jpg")
mbv = User.create(email: "mybloodyvalentine@music.com", username: "MBV", password: "loveless123", location: "Dublin, Ireland")
mbv.profile_photo.attach(io: open("https://soundcloud-2-dev.s3-us-west-1.amazonaws.com/profile-photos/MBV+Profile+Photo+.jpeg"), filename: "MBV Profile Photo .jpeg")
madvillain = User.create(email: "madvillain@music.com", username: "Madvillain", password: "madvillain123", location: "Oxnard, CA")
madvillain.profile_photo.attach(io: open("https://soundcloud-2-dev.s3-us-west-1.amazonaws.com/profile-photos/Madvillain+Profile+Photo.jpg"), filename: "Madvillain Profile Photo.jpg")
evenings = User.create(email: "evenings@music.com", username: "Evenings", password: "yore123", location: "BK, Unites States")
evenings.profile_photo.attach(io: open("https://soundcloud-2-dev.s3-us-west-1.amazonaws.com/profile-photos/Evenings+Profile+Photo.jpg"), filename: "Evenings Profile Photo.jpg")
nick_drake = User.create(email: "nickdrake@music.com", username: "Nick_Drake", password: "pinkmoon123", location: "UK")
nick_drake.profile_photo.attach(io: open("https://soundcloud-2-dev.s3-us-west-1.amazonaws.com/profile-photos/Nick+Drake+Profile+Photo.jpg"), filename: "Nick Drake Profile Photo.jpg")
lil_nas_x = User.create(email: "lilnasx@music.com", username: "Lil Nas X", password: "oldtownroad123", location: "Old Town Road, USA")
lil_nas_x.profile_photo.attach(io: open("https://soundcloud-2-dev.s3-us-west-1.amazonaws.com/profile-photos/Lil+Nas+X+Profile+Photo.jpg"), filename: "Lil Nas X Profile Photo.jpg")
noname = User.create(email: "noname@music.com", username: "Noname", password: "telefone123", location: "Chicago, Il")
noname.profile_photo.attach(io: open("https://soundcloud-2-dev.s3-us-west-1.amazonaws.com/profile-photos/Noname+Profile+Photo.jpeg"), filename: "Noname Profile Photo.jpeg")
yussef_kamaal = User.create(email: "yussefkamaal@music.com", username: "Yussef Kamaal", password: "blackfocus123", location: "London, UK")
yussef_kamaal.profile_photo.attach(io: open("https://soundcloud-2-dev.s3-us-west-1.amazonaws.com/profile-photos/yussefkamaal+Profile+Photo.jpg"), filename: "yussefkamaal Profile Photo.jpg")
frank_ocean = User.create(email: "frankocean@music.com", username: "Blonded", password: "blond23", location: "Los Angeles, LA")
frank_ocean.profile_photo.attach(io: open("https://soundcloud-2-dev.s3-us-west-1.amazonaws.com/profile-photos/Frank+Ocean+Profile+Photo.png"), filename: "Frank Ocean Profile Photo.png")
joni_mitchell = User.create(email: "jonimitchell@music.com", username: "Joni Mitchell", password: "blue123", location: "Saskatoon, Canada")
joni_mitchell.profile_photo.attach(io: open("https://soundcloud-2-dev.s3-us-west-1.amazonaws.com/profile-photos/Joni+Mitchell+Profile+Photo.jpeg"), filename: "Joni Mitchell Profile Photo.jpeg")
jamie_xx = User.create(email: "jamiexx@music.com", username: "Jamie XX", password: "incolour123", location: "London, UK")
jamie_xx.profile_photo.attach(io: open("https://soundcloud-2-dev.s3-us-west-1.amazonaws.com/profile-photos/Jamie+XX+Profile+Photo.jpeg"), filename: "Jamie XX Profile Photo.jpeg")
jai_paul = User.create(email: "jaipaul@music.com", username: "Jai Paul", password: "neverreleasinganalbum123", location: "London, UK")
jai_paul.profile_photo.attach(io: open("https://soundcloud-2-dev.s3-us-west-1.amazonaws.com/profile-photos/Jai+Paul+Profile+Photo.jpeg"), filename: "Jai Paul Profile Photo.jpeg")
grimes = User.create(email: "grimes@music.com", username: "Grimes", password: "clelon123", location: "Planet C")
grimes.profile_photo.attach(io: open("https://soundcloud-2-dev.s3-us-west-1.amazonaws.com/profile-photos/Grimes+Profile+Photo.jpeg"), filename: "Grimes Profile Photo.jpeg")
jinsang = User.create(email: "jinsang@music.com", username: "Jinsang", password: "jinsang123", location: "Bay Area, CA")
jinsang.profile_photo.attach(io: open("https://soundcloud-2-dev.s3-us-west-1.amazonaws.com/profile-photos/Jinsang+Profile+Photo.jpeg"), filename: "Jinsang Profile Photo.jpeg")

Song.destroy_all 

song_zero = Song.create(title: "RS-1", artist_id: 1, genre: "lo-fi hip hop")
song_zero.audio_file.attach(io: open("https://soundcloud-2-dev.s3-us-west-1.amazonaws.com/4.+RS-1+Demo.mp3"), filename: "4. RS-1 Demo.mp3") 
song_zero.photo.attach(io: open("https://s3-us-west-1.amazonaws.com/soundcloud-2-dev/Whatever+Happens+Cover.jpg"), filename: "Whatever Happens Cover.jpg")
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
song_thirteen.audio_file.attach(io: open("https://soundcloud-2-dev.s3-us-west-1.amazonaws.com/Noname+-+Diddy+Bop+(feat.+Raury+%26+Cam+O'bi).mp3"), filename: "Noname - Diddy Bop (feat. Raury & Cam O'bi).mp3") 
song_thirteen.photo.attach(io: open("https://s3-us-west-1.amazonaws.com/soundcloud-2-dev/noname.jpg"), filename: "noname.jpg")
song_fourteen = Song.create(title: "So What", artist_id: 4, genre: "jazz")
song_fourteen.audio_file.attach(io: open("https://s3-us-west-1.amazonaws.com/soundcloud-2-dev/01+So+What.mp3"), filename: "01 So What.mp3") 
song_fourteen.photo.attach(io: open("https://s3-us-west-1.amazonaws.com/soundcloud-2-dev/Kind+of+Blue.jpg"), filename: "Kind of Blue.jpg")
song_fifteen = Song.create(title: "Go Gina", artist_id: 9, genre: "R&B")
song_fifteen.audio_file.attach(io: open("https://s3-us-west-1.amazonaws.com/soundcloud-2-dev/07+Go+Gina.mp3"), filename: "07 Go Gina.mp3") 
song_fifteen.photo.attach(io: open("https://s3-us-west-1.amazonaws.com/soundcloud-2-dev/Cover.jpg"), filename: "Cover.jpg")
song_sixteen = Song.create(title: "Biking Home", artist_id: 1, genre: "lo-fi hip-hop")
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

Comment.destroy_all

comment_one = Comment.create(body: "Really into this song", artist_id: 1, song_id: 3)
comment_two = Comment.create(body: "Nice, we should collaborate some time", artist_id: 1, song_id: 4)
comment_three = Comment.create(body: "I've also got horses in the back", artist_id: 1, song_id: 9)
comment_four = Comment.create(body: "One of my favorites", artist_id: 1, song_id: 20)
comment_five = Comment.create(body: "Vibes", artist_id: 1, song_id: 23)

comment_six = Comment.create(body: "Great one", artist_id: 2, song_id: 4)
comment_seven = Comment.create(body: "Lovely", artist_id: 2, song_id: 5)
comment_eight = Comment.create(body: "This is real good, let's collaborate", artist_id: 2, song_id: 6)
comment_nine = Comment.create(body: "Wow, amazing", artist_id: 2, song_id: 7)
comment_ten = Comment.create(body: "Vibes", artist_id: 2, song_id: 9)

comment_eleven = Comment.create(body: "Eh", artist_id: 3, song_id: 10)
comment_twelve = Comment.create(body: "Not that big of a fan", artist_id: 3, song_id: 11)
comment_thirteen = Comment.create(body: "This is bad", artist_id: 3, song_id: 12)
comment_fourteen = Comment.create(body: "No bueno", artist_id: 3, song_id: 13)
comment_fifteen = Comment.create(body: "Vibes", artist_id: 3, song_id: 14)

comment_sixteen = Comment.create(body: "Great song", artist_id: 4, song_id: 15)
comment_seventeen = Comment.create(body: "Wow", artist_id: 4, song_id: 16)
comment_eighteen = Comment.create(body: "I'm into it", artist_id: 4, song_id: 17)
comment_nineteen = Comment.create(body: "This is insane", artist_id: 4, song_id: 18)
comment_twenty = Comment.create(body: "Lovely song", artist_id: 4, song_id: 19)

comment_twenty_one = Comment.create(body: "This is really good", artist_id: 5, song_id: 20)
comment_twenty_two = Comment.create(body: "Love this beat", artist_id: 5, song_id: 21)
comment_twenty_three = Comment.create(body: "This is great music to program to", artist_id: 5, song_id: 22)
comment_twenty_four = Comment.create(body: "I like this", artist_id: 5, song_id: 1)
comment_twenty_five = Comment.create(body: "Vibes", artist_id: 5, song_id: 2)

comment_twenty_six = Comment.create(body: "This is really good", artist_id: 6, song_id: 3)
comment_twenty_seven = Comment.create(body: "Nice song", artist_id: 6, song_id: 4)
comment_twenty_eight = Comment.create(body: "Yuuuup", artist_id: 6, song_id: 5)
comment_twenty_nine = Comment.create(body: "Really good", artist_id: 6, song_id: 6)
comment_thirty = Comment.create(body: "This is one of my favorite songs", artist_id: 6, song_id: 7)

comment_thirty_one = Comment.create(body: "Big fan", artist_id: 7, song_id: 8)
comment_thirty_two = Comment.create(body: "Wow", artist_id: 7, song_id: 9)
comment_thirty_three = Comment.create(body: "Yuuuup", artist_id: 7, song_id: 10)
comment_thirty_four = Comment.create(body: "Amazing", artist_id: 7, song_id: 11)
comment_thirty_five = Comment.create(body: "You are a great artist", artist_id: 7, song_id: 12)

comment_thirty_six = Comment.create(body: "Great song", artist_id: 8, song_id: 13)
comment_thirty_seven = Comment.create(body: "Wow", artist_id: 8, song_id: 14)
comment_thirty_eight = Comment.create(body: "Into it", artist_id: 8, song_id: 15)
comment_thirty_nine = Comment.create(body: "Ahhhh", artist_id: 8, song_id: 16)
comment_fourty = Comment.create(body: "You are a great artist", artist_id: 8, song_id: 17)

comment_fourty_one = Comment.create(body: "Amazing", artist_id: 9, song_id: 18)
comment_fourty_two = Comment.create(body: "Feeling this", artist_id: 9, song_id: 19)
comment_fourty_three = Comment.create(body: "Wow", artist_id: 9, song_id: 20)
comment_fourty_four = Comment.create(body: "Love this", artist_id: 9, song_id: 21)
comment_fourty_five = Comment.create(body: "You are a great artist", artist_id: 9, song_id: 22)

comment_fourty_six = Comment.create(body: "Wow", artist_id: 10, song_id: 23)
comment_fourty_seven = Comment.create(body: "Yup", artist_id: 10, song_id: 1)
comment_fourty_eight = Comment.create(body: "I'm into this", artist_id: 10, song_id: 2)
comment_fourty_nine = Comment.create(body: "This is great", artist_id: 10, song_id: 3)
comment_fifty = Comment.create(body: "Fantastic", artist_id: 10, song_id: 4)

comment_fifty_one = Comment.create(body: "Wow", artist_id: 11, song_id: 5)
comment_fifty_two = Comment.create(body: "Yup", artist_id: 11, song_id: 6)
comment_fifty_three = Comment.create(body: "I'm into this", artist_id: 11, song_id: 7)

comment_fifty_four = Comment.create(body: "Love this", artist_id: 12, song_id: 8)
comment_fifty_five = Comment.create(body: "Great song", artist_id: 12, song_id: 9)
comment_fifty_six = Comment.create(body: "Joni Mitchell is the greatest of all time", artist_id: 12, song_id: 10)

comment_fifty_seven = Comment.create(body: "Wow", artist_id: 13, song_id: 11)
comment_fifty_eight = Comment.create(body: "Feels like an anime song", artist_id: 13, song_id: 12)
comment_fifty_nine = Comment.create(body: "Love these vibes", artist_id: 13, song_id: 13)

comment_sixty = Comment.create(body: "Classic", artist_id: 14, song_id: 14)
comment_sixty_one = Comment.create(body: "Great groove to this", artist_id: 14, song_id: 15)
comment_sixty_two = Comment.create(body: "Love these vibes", artist_id: 14, song_id: 16)

comment_sixty_three = Comment.create(body: "Love these vibes", artist_id: 15, song_id: 17)
comment_sixty_four = Comment.create(body: "Makes me feel like I'm home", artist_id: 15, song_id: 18)
comment_sixty_five = Comment.create(body: "This is way different from MBDTF", artist_id: 15, song_id: 19)

comment_sixty_six = Comment.create(body: "One of my favorite songs of all time", artist_id: 16, song_id: 20)
comment_sixty_seven = Comment.create(body: "Jazzzzzzzzzz", artist_id: 16, song_id: 21)
comment_sixty_eight = Comment.create(body: "Yuh", artist_id: 16, song_id: 22)

comment_sixty_six = Comment.create(body: "Vibes on this one", artist_id: 17, song_id: 23)
comment_sixty_seven = Comment.create(body: "Is this a Ryuichi Sakamoto sample?", artist_id: 17, song_id: 1)
comment_sixty_eight = Comment.create(body: "How did you record those guitars", artist_id: 17, song_id: 2)

comment_sixty_nine = Comment.create(body: "What microphone did you use here?", artist_id: 18, song_id: 3)
comment_seventy = Comment.create(body: "We should collab", artist_id: 18, song_id: 4)
comment_seventy_one = Comment.create(body: "Can I use this song in my wedding video?", artist_id: 18, song_id: 5)

comment_seventy_two = Comment.create(body: "Beautiful", artist_id: 19, song_id: 6)
comment_seventy_three = Comment.create(body: "Vibes", artist_id: 19, song_id: 7)
comment_seventy_four = Comment.create(body: "You are a treasure", artist_id: 19, song_id: 8)

comment_seventy_five = Comment.create(body: "Real good", artist_id: 20, song_id: 9)
comment_seventy_six = Comment.create(body: "Yup", artist_id: 20, song_id: 10)
comment_seventy_seven = Comment.create(body: "Thank you, Frank", artist_id: 20, song_id: 11)


comment_seventy_eight = Comment.create(body: "Wow", artist_id: 20, song_id: 12)
comment_seventy_nine = Comment.create(body: "This reminds me of an anime", artist_id: 20, song_id: 13)
comment_eighty = Comment.create(body: "Sweet vibes", artist_id: 20, song_id: 14)

comment_eighty_one = Comment.create(body: "Wow", artist_id: 21, song_id: 15)
comment_eighty_two = Comment.create(body: "Love this", artist_id: 21, song_id: 16)
comment_eighty_three = Comment.create(body: "Great vibes", artist_id: 21, song_id: 17)

comment_eighty_four = Comment.create(body: "Dreamy", artist_id: 22, song_id: 18)
comment_eighty_five = Comment.create(body: "Get em", artist_id: 22, song_id: 19)
comment_eighty_six = Comment.create(body: "Amazing song", artist_id: 22, song_id: 20)