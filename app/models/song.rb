# == Schema Information
#
# Table name: songs
#
#  id          :bigint           not null, primary key
#  title       :string           not null
#  length      :integer
#  artist_id   :integer          not null
#  genre       :string           not null
#  description :string
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Song < ApplicationRecord
    validates :title, :genre, presence: true
    belongs_to :artist, 
        foreign_key: :artist_id,
        class_name: :User

    has_many :comments,  
        primary_key: :id,
        foreign_key: :song_id,
        class_name: :Comment 

    has_one_attached :photo
    has_one_attached :audio_file

end
