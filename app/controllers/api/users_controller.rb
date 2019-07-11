class Api::UsersController < ApplicationController

    def index
      @users = User.all
    end 
    
    def create
    @user = User.new(user_params)

    if @user.save
      login(@user)
      render '/api/users/show'
    else
      render json: @user.errors.full_messages, status: 422
    end
  
  end
  
  def show 
    @user = User.find(params[:id])
    render 'api/users/show'
  end
  
  def update 
    @user = User.find(params[:id])

    if @user && @user.update_attributes(user_params)
      render 'api/users/show'
    else 
      render json: @user.errors.full_messages, status: 401
    end 
  end

  private

  def user_params
    params.require(:user).permit(:username, :password, :email, :profile_photo, :location)
  end

end
