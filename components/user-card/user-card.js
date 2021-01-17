import { useRouter } from "next/router"
import { useDispatch } from 'react-redux';
import { setInfo } from '../../store';

export default function UserCard({ item }) {
  const router = useRouter();
  const dispatch = useDispatch();

  function onLinkClick(e, item) {
    e.preventDefault();
    dispatch(setInfo(item));
    router.push(`/posts/${item.id}`);
  };

  return (
    <li key={item.id}>
      <div className="users__item item">
        <h6 onClick={() => dispatch(setInfo(item))} className="users__item-title item-title">{item.name}</h6>
        <p className="users__item-text">{item.address.city}</p>
        <a className="users__item-link item-link" onClick={(e) => onLinkClick(e, item)}>Смотреть посты</a>
      </div>
    </li>
  );
};