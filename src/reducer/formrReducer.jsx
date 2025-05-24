export const loginFormreducer = (state, action) => {
    switch (action.type) {
        case "LOGIN": {
            return { 
                 username: action.payload.username,
                 password: action.payload.password
            }
        }
        default: {
            throw Error("Unknown action", action.type)
        }
    }
}   


