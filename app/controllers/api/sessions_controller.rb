class Api::SessionsController < ApplicationController
    def create
    @user = User.find_by_credentials(
      params[:user][:username],
      params[:user][:password]
    )

    if @user
      login(@user)
    else
      render json: ["Invalid Username/Password"], status: 401
    end
  end

  def destroy
    @user = current_user
    if @user
      logout
      render json: {}
    else
      render json: ["No Account Currently Signed In"], status: 404
    end
  end
end
