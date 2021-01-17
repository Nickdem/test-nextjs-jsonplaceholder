import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import UserCard from '../components/user-card';
import { Page } from '../containers';
import { setUsers } from '../store';

function Home(props) {
  
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setUsers(props.users));
  }, []);

  if (props.error) return <p>Что-то пошло не так! {props.error}</p>;

  return <Page Component={UserCard} list={props.users} title='Пользователи' />;
};

export async function getStaticProps() {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  if (res.status == 404) return { props: { error: '404 ошибка запроса' } };
  const users = await res.json();
  return {
    props: {
      users
    }
  };
};

export default Home;