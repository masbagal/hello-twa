import '../styles/index.css'
import Header from '../components/Header';
import BottomNav from '../components/BottomNav';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <div style={{ height: 65 }} />
      <BottomNav />
    </>
  )
}

export default MyApp
