import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Sidebar() {
  const router = useRouter();

  const links = [
    { name: 'Пользователи', path: '/' },
    { name: 'Посты', path: '/posts' }
  ];

  function renderLinks(arr) {
    return arr.map((item) => {
      return (
        <li
          className={((item.path === router.pathname)) ? 'sidebar__nav-list--active-item' : undefined}
          key={item.name}
        >
          <Link href={item.path}>
            {item.name}
          </Link>
        </li>
      )
    });
  };

  return (
    <div className="sidebar">
      <nav>
        <ul className="sidebar__nav-list">
          {renderLinks(links)}
        </ul>
      </nav>
    </div>
  );
};