export const LoginStart = () => ({
    type: "LOGIN_START"
})
export const LoginSuccess = (user) => ({
    type: "LOGIN_SUCCESS",
    payload: user
})
export const LoginFailure = () => ({
    type: "LOGIN_FAILORE"
})
export const LogOut = () => ({
    type: "LOG_OUT"
})
export const  userUpdate = (user) => ({
    type: "USER_UPDATE",
    payload:user
})