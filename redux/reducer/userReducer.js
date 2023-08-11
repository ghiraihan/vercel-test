const initState = {
  username: null,
  id: null
}

export function user (
  state = initState, 
  action
) {
  switch(action.type) {
    case "LOGIN_CASE":
      return { 
        ...state, 
        ...action.payload 
      }
    default:
      return state
  }
}