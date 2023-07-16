import Image from 'next/image'
import Header from '@/components/header/header'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col ">
      <header className="h-24 p-8 flex justify-between items-center w-100 bg-teal-200">
        <div className="logo font-bold">LOGO</div>
        <div className="menu flex-0">
          <button className="flex items-center focus:outline-none focus:bg-teal-300 p-2">
            <Link href="/login">

              <span className="mr-4">Login/user</span>
            </Link>
          </button>
        </div>
      </header>
    </main>
  )
}
