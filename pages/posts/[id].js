import PostCard from '../../components/post-card';
import { Page } from '../../containers';

export default function Posts(props) {
  if (props.error) return <p>Что-то пошло не так! {props.error}</p>;

  return <Page Component={PostCard} list={props.posts} title='Посты' />;
};

export async function getServerSideProps(context) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${context.query.id}`);
  if (res.status == 404) return { props: { error: '404 ошибка запроса' } };
  const json = await res.json();

  return {
    props: {
      posts: json
    }
  };
};