class User < ApplicationRecord
    has_many :user_plants
    has_many :plants, through: :user_plants
    has_many :comments, dependent: :destroy
    has_many :plants, through: :comments

    has_secure_password
    
    validates :name, presence: true, uniqueness: true
    validates :email, presence: true, uniqueness: true

end
