class SessionsController < ApplicationController

    def create
        user = User.find_by(name:params[:name])
        # user && user.authenticate
        if user&.authenticate(params[:password])
            render json: user, status: :ok 
        else
            render json: {errors: "Invalid User or Password"}
        end
    end

    def destroy
        session.delete :user_id
        head :no_content
    end

end
