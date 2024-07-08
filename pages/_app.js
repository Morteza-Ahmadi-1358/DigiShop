import Footer from "@/components/Footer"
import Header from "@/components/Header"
import { ReduxPersistStore, persistor } from "@/redux/ReduxPersistStore"
import "@/styles/globals.css"
import 'bootstrap/dist/css/bootstrap.min.css'
import localFont from 'next/font/local'
import { Provider } from "react-redux"
import { ClipLoader } from "react-spinners"
import { PersistGate } from "redux-persist/integration/react"

const iranSans = localFont({src: '../public/fonts/iransans.woff'})

export default function App({ Component, pageProps }) {
    return (
      <div className={iranSans.className}>
        <Provider store={ReduxPersistStore}>
          <PersistGate loading={
            <div className='w-50 my-5 py-5 mx-auto'><div className='w-50 my-5 py-5 mx-auto text-center'>
                <ClipLoader className='my-5 py-5 mx-auto' color={'#ff1749'} size={100}/>
            </div></div>
          } persistor={persistor}>
            <Header />
            <Component {...pageProps} />
            <Footer />
          </PersistGate>
        </Provider>
      </div>
    )
}
