import PostCard from '../components/post-card';

export default function PostsPage({ posts }) {
  return (
    <div className="posts wrapper">
      <h2 className="posts__title title">Посты</h2>
      <ul className="posts__list">
        {posts
          ?
          posts.map(item => <PostCard key={item.id} item={item} />)
          : null
        }
      </ul>
    </div>
  );
};
