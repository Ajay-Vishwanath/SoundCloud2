export const fetchUser = id => (
    $.ajax({
        method: 'get',
        url: `/api/users/${id}`
    })
);

export const fetchUsers = () => (
    $.ajax({
        method: 'get',
        url: `/api/users`
    })
)

export const updateUser = (user, id) => {
    debugger 
    return (
    $.ajax({
        method: 'patch',
        url: `/api/users/${id}`,
        data: user,
        contentType: false,
        processData: false
    }))};
