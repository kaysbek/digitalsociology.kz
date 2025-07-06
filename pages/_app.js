
import '../styles/globals.css'
import { useEffect, useState } from 'react'

function MyApp({ Component, pageProps }) {
  const [dark, setDark] = useState(false)

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark)
  }, [dark])

  return (
    <>
      <button 
        onClick={() => setDark(!dark)} 
        className="fixed top-4 right-4 z-50 bg-white dark:bg-gray-800 text-black dark:text-white border px-4 py-2 rounded"
      >
        Toggle Theme
      </button>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
