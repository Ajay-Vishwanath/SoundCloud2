import {connect} from 'react-redux';
import {fetchSong, deleteSong, updateSong} from '../../actions/song_actions';
import {fetchUsers} from '../../actions/user_actions';
import {fetchComments, removeComment} from '../../actions/comment_actions';
import { openModal } from '../../actions/modal_actions';
import SongShow from './song-show';
import {receivePlayerSong} from '../../actions/player_action';

const mapStateToProps = (state, ownProps) => {
    const song = state.entities.songs[ownProps.match.params.songId]
    let artist
    if (!song) {
        artist = "";
    } else {
        artist = state.entities.users[song.artist_id]
    }

    let comments=[]

    if (Object.values(state.entities.comments).length > 0 && song) {
    Object.values(state.entities.comments).forEach(comment => {
        if (comment.song_id === song.id) {
            comments.push(comment);
        }
    }); 
} 

    return{
    users: state.entities.users, 
    song: song,
    artist: artist,
    currentUser: state.entities.users[state.session.id],
    currentSong: state.ui.playbar.currentSong,
    player: state.ui.playbar.player,
    comments: comments
    }
}

const mapDispatchToProps = (dispatch) => ({
    fetchSong: (id) => dispatch(fetchSong(id)),
    fetchUsers: () => dispatch(fetchUsers()),
    fetchComments: () => dispatch(fetchComments()),
    removeComment: (id) => dispatch(removeComment(id)),
    deleteSong: (id) => dispatch(deleteSong(id)),
    updateSong: (song) => dispatch(updateSong(song)),
    openModal: modal => dispatch(openModal(modal)),
    receivePlayerSong: (song) => dispatch(receivePlayerSong(song))

})

export default connect(mapStateToProps, mapDispatchToProps)(SongShow);
