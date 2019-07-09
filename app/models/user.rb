# == Schema Information
#
# Table name: users
#
#  id              :bigint           not null, primary key
#  email           :string           not null
#  username        :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  location        :string
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

class User < ApplicationRecord
    validates :username, :password_digest, :session_token, :email, presence: true
    validates :username, :email, uniqueness: true
    validates :password, length: {minimum: 6, allow_nil: true}

    has_many :songs,  
        primary_key: :id,
        foreign_key: :artist_id,
        class_name: :Song 
    
    has_many :comments,  
        primary_key: :id,
        foreign_key: :artist_id,
        class_name: :Comment 
    
    has_one_attached :profile_photo

    attr_reader :password 
    after_initialize :ensure_session_token

    def self.find_by_credentials(username, password)
        user = User.find_by(username: username)
        if user && user.is_password?(password) == true
            return user 
        end 
        nil 
    end 

    def password=(password)
        @password = password
        self.password_digest = BCrypt::Password.create(@password)
    end 

    def is_password?(password)
        BCrypt::Password.new(self.password_digest).is_password?(password)
    end 

    def reset_session_token!
        self.session_token = SecureRandom::urlsafe_base64(16)
        self.save!
        self.session_token 
    end 

    def ensure_session_token
        self.session_token ||= SecureRandom::urlsafe_base64(16)
    end 
end
