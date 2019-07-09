export const fetchComments = () => (
    $.ajax({
        method: 'get',
        url: '/api/comments'
    })
);

export const fetchComment = id => (
    $.ajax({
        method: 'get',
        url: `/api/comments/${id}`
    })
);

export const createComment = comment => {
    $.ajax({
        method: 'post',
        url: '/api/comments',
        data: comment
    })
}

export const deleteComment = id => {
    $.ajax({
        method: 'delete',
        url: `/api/comments/${id}`
    })
}