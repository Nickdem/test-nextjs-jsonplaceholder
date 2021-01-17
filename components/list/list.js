export default function List({ Component, list }) {
  return (
    <ul className="page__list">
      {list
        ?
        list.map(item => <Component key={item.id} item={item} />)
        : null
      }
    </ul>
  );
};