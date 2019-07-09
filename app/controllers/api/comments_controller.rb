class Api::CommentsController < ApplicationController

    def index 
        @comments = Comment.all 
    end 

    def create
        @comment = Comment.new(comment_params)
        # @comment.artist_id = current_user.id 
        if @comment.save 
            render '/api/comments/show'
        else 
            render json: @comment.errors.full_messages, status: 401
        end 
    end 

    def destroy
        @comment = Comment.find(params[:id])
        if @comment 
            @comment.destroy 
            render json: params[:id]
        else 
            render json: ["This Comment Does Not Exist"], status: 404
        end 
    end 

    private
    def comment_params
        params.require(:comment).permit(
            :body, :artist_id, :song_id
            )
    end 
end
