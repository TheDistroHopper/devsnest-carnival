export interface data {
    username: string,
    profilePicture: string,
    post: string[]
}

export interface actionType{
    type: string,
    payload: data[]
}

const fetchProfiles = () => {
    return async (dispatch : (arg : actionType) => void) => {
          await fetch('./DATA/user.json')
         .then(res => res.json())
         .then(data => {
            dispatch({
                type : "FETCH_DATA",
                payload: data
            })
        });
    }
    }

export { fetchProfiles };