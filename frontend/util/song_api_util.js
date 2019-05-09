export const fetchSongs = () => (
    $.ajax({
        url: '/api/songs',
        method: 'get'
    })
);

export const fetchSong = id => (
    $.ajax({
        method: 'get',
        url: `/api/songs/${id}`
    })
);

export const createSong = song => (
    $.ajax({
        method: 'post',
        url: '/api/songs',
        data: song,
        contentType: false,
        processData: false
    })
);

export const updateSong = (song) => (
    $.ajax({
        method: 'patch',
        url: `/api/songs/${song.id}`,
        data: { song }
    })
);

export const deleteSong = id => (
    $.ajax({
        method: 'delete',
        url: `/api/songs/${id}`
    })
);