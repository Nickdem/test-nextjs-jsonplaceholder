import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchComments } from '../../store';
import Comments from '../comments';

export default function PostCard({ item }) {
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();

  function clickHandler(e, id) {
    e.preventDefault();
    dispatch(fetchComments(id));
    setShow(!show);
  };

  return (
    <li key={item.id}>
      <div className="posts__item item">
        <h6 className="posts__item-title item-title">{item.title}</h6>
        <p className="posts__item-text">{item.body}</p>
        <a className="posts__item-link item-link" onClick={(e) => clickHandler(e, item.id)}>{show ? 'Скрыть комментарии' : 'Открыть комментарии'}</a>
        <Comments id={item.id} show={show} />
      </div>
    </li>
  );
};