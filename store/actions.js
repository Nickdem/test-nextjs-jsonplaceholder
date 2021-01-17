let commentsIds = [];

export function fetchComments(id) {
  return async dispatch => {
    if (commentsIds.find(item => item === id)) return;
    commentsIds.push(id);
    try {
      const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
      const json = await res.json();
      dispatch(setComments(json));
    } catch (e) {
      console.log(e);
    }
  };
};

function setComments(item) {
  const newItem = { [item[0].postId]: item };
  return {
    type: 'SET_COMMENTS',
    payload: newItem
  };
};

export function setInfo(item) {
  if (item === null) {
    return {
      type: 'SET_INFO',
      payload: item
    };
  }

  const newItem = {
    id: item.id,
    name: item.name,
    email: item.email,
    list: [
      { title: 'Ник', text: item.username },
      { title: 'Сайт', text: item.website },
      { title: 'Компания', text: item.company.name },
      { title: 'Телефон', text: item.phone },
      { title: 'Город', text: item.address.city },
      { title: 'Улица', text: item.address.street }
    ]
  };

  return {
    type: 'SET_INFO',
    payload: newItem
  };
};

export function setUsers(users) {
  return {
    type: 'SET_USERS',
    payload: users
  };
};

export function setPosts(posts) {
  return {
    type: 'SET_POSTS',
    payload: posts
  };
};
