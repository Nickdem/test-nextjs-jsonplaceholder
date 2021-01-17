const initialState = {
  users: [],
  posts: [],
  comments: {},
  info: null
};

export function reducer(state = initialState, action) {
  switch (action.type) {
    case 'SET_USERS':
      return {
        ...state,
        users: action.payload
      };
    case 'SET_POSTS':
      return {
        ...state,
        posts: action.payload
      };
    case 'SET_INFO':
      return {
        ...state,
        info: action.payload
      };
    case 'SET_COMMENTS':
      return {
        ...state,
        comments: { ...state.comments, ...action.payload }
      };
    default:
      return state;
  };
};