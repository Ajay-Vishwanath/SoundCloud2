import React from 'react';

class CreateComment extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            body: null 
        }

        this.handleSubmit = this.handleSubmit.bind(this); 
    }

    update() {
        return e => {
            this.setState({body: e.target.value})
        }
    }

    handleSubmit(e) {
        const formData = new FormData(); 
        formData.append('comment[artist_id]', this.props.userId)
        formData.append('comment[song_id]', this.props.songId)
        formData.append('comment[body]', this.state.body)

        if (this.state.body) {
            debugger 
            this.props.createComment(formData)
        } 
    }

    render() {
        const artistphotoUrl = (this.props.profilePic === '') ?
            ('https://soundcloud-2-dev.s3-us-west-1.amazonaws.com/moonassii.jpg') : (this.props.profilePic)
        
        const loggedIn= () => {
            return (
            <form className="comment-form-container" onSubmit={this.handleSubmit}>
                <img src={artistphotoUrl} className="comment-profile-pic" />
                <input type="text" onChange={this.update()} placeholder="Write a Comment" className="comment-input" />
            </form>
            )
        } 

        const loggedOut = () => {
            debugger 
            return null 
        }

        return this.props.currentUser? loggedIn() : loggedOut(); 
    }

}

export default CreateComment