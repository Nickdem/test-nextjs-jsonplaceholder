import { Provider } from 'react-redux';
import Layout from '../components/layout';
import { store } from '../store';
import '../styles/styles.scss';

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
};

export default MyApp;
