json.extract! song, :id, :artist_id, :title, :genre, :length, :description

if song.photo.attached?
    json.photoUrl url_for(song.photo)
else 
    json.photoUrl ''
end 

if song.audio_file.attached?
    json.audioFileUrl url_for(song.audio_file)
else
    json.audioFileUrl ''
end 