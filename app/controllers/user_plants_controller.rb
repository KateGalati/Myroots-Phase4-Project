class UserPlantsController < ApplicationController

    def index
        userPlant = UserPlant.all
        render json: userPlant, status: :ok
    end 

end
