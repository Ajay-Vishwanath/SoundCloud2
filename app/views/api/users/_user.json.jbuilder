json.extract! user, :id, :email, :username, :location

if user.profile_photo.attached?
    json.photoUrl url_for(user.profile_photo)
else 
    json.photoUrl ''
end 