class UserPlantsController < ApplicationController

    def index 
        user_plants = UserPlant.all 
        render json: user_plants, except: [:created_at, :updated_at], status: :ok
    end

end
