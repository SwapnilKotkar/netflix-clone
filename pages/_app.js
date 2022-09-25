import "../styles/globals.css";
import { LoginContext } from "../context/LoginContext";
import { Toaster } from "react-hot-toast";
import Layout from "../components/Layout";

function MyApp({ Component, pageProps }) {
  return (
    <LoginContext>
      <Layout>
        <Toaster />
        <Component {...pageProps} />
      </Layout>
    </LoginContext>
  );
}

export default MyApp;
