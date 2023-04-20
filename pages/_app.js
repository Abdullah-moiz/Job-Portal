import '@/styles/globals.css'
import { store } from '@/Store/store'
import { Provider } from 'react-redux'
import { useEffect } from "react";
import { useRouter } from "next/router";
import Cookies from 'js-cookie';
import 'react-toastify/dist/ReactToastify.css';




export default function App({
  Component,
  pageProps: { session, ...pageProps },
})
{
  const router = useRouter();

  useEffect(() => {
    const handleBeforeUnload = (event) => {
      event.preventDefault();
      localStorage.removeItem("user")
      Cookies.remove('token')
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, [router]);
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
}