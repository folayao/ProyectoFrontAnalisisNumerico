import { Layout } from '../components/Layout';
import styles from '../styles/myapp.modules.scss';
function MyApp({ Component, pageProps }) {
  return (
    <div className={styles['myapp']}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </div>
  );
}

export default MyApp;
