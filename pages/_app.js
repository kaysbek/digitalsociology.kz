
"use client";
import '../styles/globals.css'
import {useEffect,useState} from 'react'

export default function MyApp({Component,pageProps}){
  const [theme,setTheme] = useState('light')
  useEffect(()=>{ document.documentElement.classList.toggle('dark',theme==='dark')},[theme])
  if(typeof window==='undefined') return null
  return(
    <>
      <button onClick={()=>setTheme(t=>t==='light'?'dark':'light')}
        className="fixed top-5 right-5 z-50 bg-white/80 dark:bg-gray-700/80 px-4 py-2 rounded">
        {theme==='light'?'Dark':'Light'} mode
      </button>
      <Component {...pageProps}/>
    </>
  )
}
