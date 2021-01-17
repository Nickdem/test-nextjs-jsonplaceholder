import { useSelector } from 'react-redux';

export default function Comments({ id, show }) {
  const comments = useSelector(state => state.comments[id]);

  return (
    <ul className={show ? "comments show" : "comments"}>
      {show && comments && comments.map((comment) =>
        <li className="comments__item" key={comment.id}>
          <h6 className="comments__item-title">{comment.name}</h6>
          <p className="comments__item-text">{comment.body}</p>
        </li>
      )}
    </ul>
  );
};