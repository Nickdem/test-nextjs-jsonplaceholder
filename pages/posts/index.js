import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import PostCard from '../../components/post-card';
import { Page } from '../../containers';
import { setInfo, setPosts } from '../../store';

export default function Posts(props) {

  const posts = props.posts.slice(-20);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setInfo(null));
    dispatch(setPosts(posts));
  }, []);

  if (props.error) return <p>Что-то пошло не так! {props.error}</p>;

  return <Page Component={PostCard} list={posts} title='Посты' />;
};

export async function getStaticProps() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  if (res.status == 404) return { props: { error: '404 ошибка запроса' } };
  const json = await res.json();

  return {
    props: {
      posts: json
    }
  };
};