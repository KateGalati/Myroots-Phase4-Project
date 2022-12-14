class UsersController < ApplicationController
    skip_before_action :authorize, only: :create
    # before_action :authorize, only: [:show]

    # def show
    #     user = User.find(params[:id])
    #     render json: user.to_json(include: [:plants]), status: :ok
    # end 

    def create
        user = User.create!(user_params)
        session[:user_id] = user.id
        render json: user, status: :created
    end

    def show
        render json: @current_user
    end

    private

    def user_params 
        params.require(:user).permit(:name, :email, :password, :password_confirmation)
    end

end
