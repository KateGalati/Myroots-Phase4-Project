class User < ApplicationRecord
    has_many :user_plants
    has_many :plants, through: :user_plants
    has_many :comments
    has_many :plants, through: :comments

    has_secure_password
    
end
