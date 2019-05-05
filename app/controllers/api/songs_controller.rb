class Api::SongsController < ApplicationController

    def index
        @songs = Song.all
    end 

    def show
        @song = Song.find(params[:id])
    end 

    def create 
        @song = current_user.songs.new(song_params) 
        if @song.save 
            render '/api/songs/show'
        else 
            render json: @song.errors.full_messages, status: 401
        end 
    end

    def update 
        @song = Song.find(params[:id])

        if @song.update_attributes(song_params)
            render '/api/songs/show'
        else 
            render json: @song.errors.full_messages, status: 401
        end 
    end 
    
    def destroy 
        @song = Song.find_by(params[:id])
        @song.destroy
        render '/api/songs/show' 
    end 
    
    private 
    def song_params 
        params.require(:song).permit(
            :title,
            :length,
            :genre,
            :description
        )
    end 

end
