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

export const updateSong = (song, id) => {
    return(
    $.ajax({
        method: 'patch',
        url: `/api/songs/${id}`,
        data: song,
        contentType: false,
        processData: false
    })
    )
};

export const deleteSong = id => (
    $.ajax({
        method: 'delete',
        url: `/api/songs/${id}`
    })
);