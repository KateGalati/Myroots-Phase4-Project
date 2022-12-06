class Plant < ApplicationRecord
    has_many :user_plants 
    has_many :users, through: :user_plants 
    has_many :comments
    has_many :users, through: :comments

    validates :plant_name, presence: true, uniqueness: true
    validates :water_requirement, presence: true
    validates :light_requirement, presence: true
    

end
