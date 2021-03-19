import { ApolloProvider } from "@apollo/client";
import { useApollo } from "../lib/apolloClient";
import { Provider } from "react-redux";
import store from "./redux/store";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import '../styles/globals.css';
import 'bootstrap/dist/css/bootstrap.min.css';


function MyApp({ Component, pageProps }) {
  const apolloClient = useApollo(pageProps.initialApolloState);
  return (
    <ApolloProvider client={apolloClient}>
      <Provider store={store}>
        <Header/>
        <NavBar/>
        <Component {...pageProps} />
      </Provider>
    </ApolloProvider>
  ) 
}

export default MyApp
