import Footer from "@/Components/ui/Footer";
import Navbar from "@/Components/ui/Navbar";
import { store } from "@/redux/store";
import "@/styles/globals.css";
import { Toaster } from "react-hot-toast";
import { Provider } from "react-redux";

export default function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <>
        <Navbar />
        <Toaster />
        <Component {...pageProps} />
        <Footer />
      </>
    </Provider>
  );
}
