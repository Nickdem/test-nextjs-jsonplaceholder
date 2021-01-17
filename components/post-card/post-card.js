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
    <li className="page__list-item" key={item.id}>
      <div className="post-card item">
        <h6 className="post-card__title item-title">{item.title}</h6>
        <p className="post-card__text">{item.body}</p>
        <a className="post-card__link item-link" onClick={(e) => clickHandler(e, item.id)}>{show ? 'Скрыть комментарии' : 'Открыть комментарии'}</a>
        <Comments id={item.id} show={show} />
      </div>
    </li>
  );
};