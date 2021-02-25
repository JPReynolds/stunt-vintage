import Header from "./components/Header";
import NavBar from "./components/NavBar";
import '../styles/globals.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Provider } from "react-redux";
import store from "./redux/store";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Header/>
      <NavBar/>
      <Component {...pageProps} />
    </Provider>
  ) 
}

export default MyApp
