class PlantsController < ApplicationController
    # rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response

    def index 
        plants = Plant.all 
        render json: plants, except: [:created_at, :updated_at], status: :ok
    end

    def create
        plant = Plant.create!(plant_params)
        render json: plant, status: :created 
    end

    private 

    def plant_params
        params.require(:plant).permit(:plant_name, :scientific_name, :light_requirement, :water_requirement, :humidity, :image)
    end

    # def render_unprocessable_entity_response(invalid)
    #     render json: { errors: invalid.record.errors.full_messages }, status: :unprocessable_entity
    # end

end
