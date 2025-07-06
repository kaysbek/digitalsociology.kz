import Head from 'next/head'
import { Navbar } from '../components/Navbar'

export default function Home() {
  return (
    <div className="flex flex-col items-center min-h-screen">
      <Head>
        <title>Мой сайт в стиле n8n</title>
        <link rel="icon" href="/logo.png" />
      </Head>

      {/* Эффект Авроры */}
      <div className="aurora-effect"></div>
      
      <Navbar />

      <main className="flex flex-col items-center justify-center flex-1 w-full px-4 text-center">
        <h1 className="text-6xl md:text-8xl font-bold tracking-tighter leading-tight">
          <span className="gradient-text">
            Автоматизируйте
            <br />
            Ваши процессы
          </span>
        </h1>

        <p className="mt-6 text-xl text-gray-300 max-w-2xl">
          Это демонстрация сайта, созданного на Next.js и Tailwind CSS с дизайном, вдохновленным n8n.io.
        </p>

        <a
          href="#"
          className="mt-10 px-8 py-4 bg-n8n-blue hover:bg-opacity-90 text-white font-bold rounded-lg transition-transform transform hover:scale-105"
        >
          Начать работу
        </a>
      </main>

      <footer className="w-full h-24 flex justify-center items-center">
        <p>Сделано с ❤️ в 2025</p>
      </footer>
    </div>
  )
}