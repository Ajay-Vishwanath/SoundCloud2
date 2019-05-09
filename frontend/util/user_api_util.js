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

