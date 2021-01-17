import InfoBlock from '../info-block';
import Sidebar from '../sidebar';

export default function Layout({children}) {
  return (
    <div className="layout">
      <Sidebar />
      {children}
      <InfoBlock />
    </div>
  );
};