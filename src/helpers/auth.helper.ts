

export const getSessionData = ()=> {
    const token = localStorage.getItem('token')
    return token
}