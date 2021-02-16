import Header from "./components/Header";
import NavBar from "./components/NavBar";

import '../styles/globals.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header/>
      <NavBar/>
      <Component {...pageProps} />
    </>
  ) 
}

export default MyApp
