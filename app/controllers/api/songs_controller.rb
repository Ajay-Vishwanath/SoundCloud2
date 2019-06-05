class Api::SongsController < ApplicationController

    def index
        @songs = Song.all
    end 

    def show
        @song = Song.find(params[:id])
    end 

    def create 
        @song =  Song.new(song_params) 
        @song.artist_id = current_user.id
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
        @song = Song.find(params[:id])
        if @song
            @song.destroy
            render json: params[:id]
        else 
            render json: ["This Song Does Not Exist"], status: 404
        end 
    end 
    
    private 
    def song_params 
        params.require(:song).permit(
            :title,
            :length,
            :genre,
            :description,
            :audio_file,
            :photo
        )
    end 

end
