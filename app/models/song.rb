# == Schema Information
#
# Table name: songs
#
#  id          :bigint           not null, primary key
#  title       :string           not null
#  length      :integer          not null
#  artist_id   :integer          not null
#  genre       :string           not null
#  description :string
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Song < ApplicationRecord
    validates :title, :genre, :length, presence: true
    belongs_to :artist {
        foreign_key: :artist_id,
        class_name: :User
    }


end
