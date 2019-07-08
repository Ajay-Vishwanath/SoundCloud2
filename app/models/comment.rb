# == Schema Information
#
# Table name: comments
#
#  id                :bigint           not null, primary key
#  body              :string           not null
#  artist_id         :integer          not null
#  song_id           :integer          not null
#  parent_comment_id :integer
#  created_at        :datetime         not null
#  updated_at        :datetime         not null
#

class Comment < ApplicationRecord
    validates :body, :user_id, :song_id, presence: true 

    belongs_to :artist,
        foreign_key: :artist_id,
        class_name: :User
    
    belongs_to :song,
        foreign_key: :song_id,
        class_name: :Song 

end
