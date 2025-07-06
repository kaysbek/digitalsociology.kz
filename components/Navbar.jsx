import Image from 'next/image'
import Link from 'next/link'

export function Navbar() {
    return (
        <nav className="w-full max-w-5xl mx-auto p-4 flex justify-between items-center">
            {/* Логотип */}
            <Link href="/">
                <a>
                    <Image src="/logo.png" alt="Логотип" width={40} height={40} />
                </a>
            </Link>

            {/* Ссылки */}
            <div className="hidden md:flex items-center space-x-6 text-gray-300">
                <Link href="#"><a className="hover:text-white">Продукт</a></Link>
                <Link href="#"><a className="hover:text-white">Цены</a></Link>
                <Link href="#"><a className="hover:text-white">Документация</a></Link>
            </div>

            {/* Кнопка */}
            <a href="#" className="px-5 py-2 border border-gray-600 rounded-md hover:bg-gray-800 transition">
                Войти
            </a>
        </nav>
    )
}