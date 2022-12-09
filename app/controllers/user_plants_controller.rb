class UserPlantsController < ApplicationController

    def index
        userPlant = UserPlant.all
        render json: userPlant, status: :ok
    end 

    def destroy
        userPlant = UserPlant.find(params[:id])
        userPlant.destroy
        head :no_content
    end

end
