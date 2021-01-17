import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';

export default function InfoBlock() {
  const router = useRouter();
  const info = useSelector(state => state.info);

  function renderInfoList(arr) {
    return arr.map(item => {
      return (
        <li
          className="info-block__list-item"
          key={item.title}
        >
          <span>{item.title}:</span> {item.text}
        </li>
      );
    });
  };

  return (
    <div className={info === null ? "info-block hide" : "info-block"}>
      {info &&
        <>
          <div className="info-block__top">
            <h6 className="info-block__title">{info.name}</h6>
            <span className="info-block__subtitle">{info.email}</span>
          </div>
          <div className="info-block__bottom">
            <ul className="info-block__list">
              {renderInfoList(info.list)}
            </ul>
            <button
              onClick={() => router.push(`/posts/${info.id}`)}
              className={router.pathname === '/posts/[id]' ? "info-block__button hide" : "info-block__button"}
            >
              Смотреть посты
            </button>
          </div>
        </>
      }
    </div>
  );
};