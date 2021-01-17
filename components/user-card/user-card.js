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
    <li className="page__list-item" key={item.id}>
      <div className="user-card item">
        <h6 className="user-card__title item-title" onClick={() => dispatch(setInfo(item))}>{item.name}</h6>
        <p className="user-card__text">{item.address.city}</p>
        <a className="user-card__link item-link" onClick={(e) => onLinkClick(e, item)}>Смотреть посты</a>
      </div>
    </li>
  );
};