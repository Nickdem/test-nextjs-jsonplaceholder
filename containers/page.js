import List from '../components/list';
import PageTitle from '../components/page-title';

export default function Page({ Component, list, title }) {
  return (
    <div className="page">
      <PageTitle text={title} />
      <List Component={Component} list={list} />
    </div>
  );
};