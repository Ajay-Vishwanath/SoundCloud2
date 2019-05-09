import * as UserAPIUtil from '../util/user_api_util';

export const RECEIVE_USER = "RECEIVE_USER"
export const RECEIVE_USERS = "RECEIVE_USERS"

export const receiveUser = user => ({
    type: RECEIVE_USER,
    user: user
})

export const receiveUsers = users => ({
    type: RECEIVE_USERS,
    users: users
})

export const fetchUser = id => dispatch => (
    UserAPIUtil.fetchUser(id).then((user) => dispatch(receiveUser(user)),
        err => (dispatch(receiveErrors(err.responseJSON)))
    )
) 

export const fetchUsers = () => dispatch => (
    UserAPIUtil.fetchUsers().then((users) => dispatch(receiveUsers(users)),
        err => (dispatch(receiveErrors(err.responseJSON)))
    )
) 


