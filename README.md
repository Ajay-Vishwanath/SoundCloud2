# SoundCloud-2

SoundCloud-2 is a full-stack clone of the music and audio-sharing app SoundCloud, where users can upload, edit, and stream music, and comment on other users' songs. 

A large portion of the project was completed over a 10-day timeframe, with new features and improvements added over time. SoundCloud-2 makes use of a Ruby on Rails/PostgreSQL backend, with React.js and Redux on the frontend. 

Below are images of the splash page a user encounters before signing in, and then the discover page they are taken to afterwards.               
     
###        
![alt text](https://github.com/Ajay-Vishwanath/SoundCloud2/blob/master/app/assets/images/splash_page_screenshot.png)

###
![alt text](https://github.com/Ajay-Vishwanath/SoundCloud2/blob/master/app/assets/images/discover_page_screenshot.png)

## Features 

* Secure frontend to backend user authentication using BCrypt
* Users can upload, edit, and delete songs, and comment on songs from other users
* User show pages with user information and an index of user songs
* Modal integration for sign-up, sign-in, song-edit, and song-delete components
* Audio Player that persists across navigation with play/pause and volume controls
* Clickable progress bar and waveform visualization to skip around within the song
* Dynamic page rendering depending on whether user is signed in or out

#### Custom-Built Audio Player

SoundCloud-2 uses a custom-built audio-player utilizing React.js state management and the HTML5 audio API. When the audio-player component is mounted, a timeupdate event listener is placed on the HTML audio element which updates state in real-time, keeping track of the songs current time, its duration, and whether or not it has finished playing. The current time, progress bar, and song duration elements which appear on the page all make use of this information and update accordingly. 

```javascript
componentDidMount() {
        this.props.fetchUsers(); 
        this.audio = document.getElementById("playbar-audio-player")
        this.playbarAudio.addEventListener("timeupdate", e => {
             this.setState({
                 currentTime: e.target.currentTime,
                 duration: e.target.duration,
                 ended: false 
             });
         });
    }
```

The progress bar also has a click-handler applied which allows the user to adjust the song's playback time. A percent variable is initialized which keeps track of where relative to the full-width of the progress bar the user has clicked, and then uses that number to adjust the song's current time and progress bar value.

```javascript
handleClick(e){
    e.preventDefault() 
    const percent = e.nativeEvent.offsetX/ e.currentTarget.offsetWidth
    this.playbarAudio.currentTime = percent * this.playbarAudio.duration;
    this.progressBar.value = percent / 100 
}
```
Below is a demonstration of the progress bar updating as the song progresses and updating when I click on a different section of the waveform and progress bar elements.

![alt text](https://github.com/Ajay-Vishwanath/SoundCloud2/blob/master/app/assets/images/audio_player_gif.gif)

## Technologies

Rails was chosen due to its built-in support for relational databases and its RESTful architecture with PostgreSQL handling the database management. 

React was chosen for the frontend due to its dynamic capability and efficiency. The React design allowed for a single-page web application experience, where every component does not need to be re-rendered and updated when a piece of information changes. Redux allowed for a normalized application state which made communication across components easier and more organized.

## Future Releases 

In the future, I would like to add

* A search bar component
* A likes feature
* A playlist feature
* A way to optimize the waveform visualization component (currently, it draws the waveform in real-time using canvas, which takes some time for the browser to perform)

