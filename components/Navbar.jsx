// components/Navbar.jsx
"use client";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-white/50 dark:bg-gray-900/50 backdrop-blur z-50">
      <div className="max-w-6xl mx-auto flex items-center justify-between p-4">
        <div className="flex items-center space-x-3">
          {/* Логотип: помести файл logo.png в папку public/ */}
          <Image src="/logo.png" alt="Logo" width={40} height={40} />
          <span className="text-lg font-bold text-gray-900 dark:text-white">
            Digital Sociology
          </span>
        </div>
        <ul className="flex space-x-6 text-gray-800 dark:text-gray-200">
          <li>
            <a href="#about" className="hover:text-gray-600 dark:hover:text-gray-400">
              О проекте
            </a>
          </li>
          <li>
            <a href="#dashboards" className="hover:text-gray-600 dark:hover:text-gray-400">
              Дашборды
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-gray-600 dark:hover:text-gray-400">
              Контакты
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}


// pages/_app.js
"use client";
import "../styles/globals.css";
import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";

export default function MyApp({ Component, pageProps }) {
  const [theme, setTheme] = useState("light");
  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  return (
    <>
      {/* Переключатель темы */}
      <button
        onClick={() => setTheme((t) => (t === "light" ? "dark" : "light"))}
        className="fixed top-5 right-5 z-50 bg-white/80 dark:bg-gray-700/80 px-4 py-2 rounded shadow"
      >
        {theme === "light" ? "Dark" : "Light"} mode
      </button>
      {/* Навигация */}
      <Navbar />
      <Component {...pageProps} />
    </>
  );
}


// pages/index.js
"use client";
export default function Home() {
  return (
    <main className="min-h-screen pt-20 bg-gradient-to-br from-[#4E4FFE] to-[#89FFBC] dark:from-gray-900 dark:to-gray-800 text-gray-900 dark:text-gray-100 transition-colors duration-700 flex flex-col items-center justify-center">
      <h1 className="text-4xl md:text-6xl font-bold mb-6 font-montserrat">
        DIGITAL SOCIOLOGY KAZAKHSTAN
      </h1>
      <p className="text-lg md:text-xl max-w-2xl text-center">
        A platform for research, data visualization, and insight into Kazakhstan’s digital society.
      </p>
    </main>
  );
}