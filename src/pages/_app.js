import Footer from "@/Components/ui/Footer";
import Navbar from "@/Components/ui/Navbar";
import { store } from "@/redux/store";
import "@/styles/globals.css";
import { Toaster } from "react-hot-toast";
import { Provider } from "react-redux";
import { SessionProvider } from "next-auth/react";

export default function App({ Component, pageProps }) {
  return (
    <SessionProvider session={pageProps.session}>
      <Provider store={store}>
        <>
          <Navbar />
          <Toaster />
          <Component {...pageProps} />
          <Footer />
        </>
      </Provider>
    </SessionProvider>
  );
}
