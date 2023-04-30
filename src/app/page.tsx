import Image from 'next/image'
import { Inter } from 'next/font/google'
import { Home as HomeIcon, SearchIcon, LibraryIcon, ChevronLeft, ChevronRight } from 'lucide-react'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className="h-screen flex flex-col">
      <div className='flex flex-1'>
        <aside className='w-72 bg-zinc-950 p-6'>
          <div className='flex items-center gap-2'>
            <div className='w-3 h-3 bg-red-500 rounded-full'></div>
            <div className='w-3 h-3 bg-yellow-500 rounded-full'></div>
            <div className='w-3 h-3 bg-green-500 rounded-full'></div>

          </div>
          <nav className='space-y-5 mt-10'>
            <a href="" className="flex items-center gap-3 text-s font-semibold text-zinc-200">
              <HomeIcon />
              Home
            </a>
            <a href="" className="flex items-center gap-3 text-s font-semibold text-zinc-200">
              <SearchIcon />
              Search
            </a>
            <a href="" className="flex items-center gap-3 text-s font-semibold text-zinc-200">
              <LibraryIcon />
              Your Library
            </a>
          </nav>

          <nav className='mt-6 pt-10 border-t border-zinc-800 flex flex-col gap-2'>
            <a href="" className="text-sm text-zinc-400 hover:text-zinc-100 ">Work out playlist</a>
            <a href="" className="text-sm text-zinc-400 hover:text-zinc-100 ">Traveling</a>
            <a href="" className="text-sm text-zinc-400 hover:text-zinc-100 ">Drive at night</a>
            <a href="" className="text-sm text-zinc-400 hover:text-zinc-100 ">Brazilian tropicalia</a>
            <a href="" className="text-sm text-zinc-400 hover:text-zinc-100 ">English podcast</a>
          </nav>

        </aside>
        <main className='flex-1 p-6'>
          <div className="flex items-center gap-3">
            <button className="p-1 rounded-full bg-black/40">
              <ChevronLeft />
            </button>
            <button className="p-1 rounded-full bg-black/40">
              <ChevronRight />
            </button>
          </div>

          <h1 className='font-semibold text-3xl mt-10 mb-6'>Good Afternoon</h1>

          <div className="grid grid-cols-3 gap-4">
            <div className="bg-white/10 rounded">
              <Image src="/cover.jpg" width={120} height={120} alt="Cover" />
            </div>
            <div className="bg-white/10 rounded">
              <Image src="/cover.jpg" width={120} height={120} alt="Cover" />
            </div>
            <div className="bg-white/10 rounded">
              <Image src="/cover.jpg" width={120} height={120} alt="Cover" />
            </div>
            <div className="bg-white/10 rounded">
              <Image src="/cover.jpg" width={120} height={120} alt="Cover" />
            </div>
            <div className="bg-white/10 rounded">
              <Image src="/cover.jpg" width={120} height={120} alt="Cover" />
            </div>
            <div className="bg-white/10 rounded">
              <Image src="/cover.jpg" width={120} height={120} alt="Cover" />
            </div>
          </div>

        </main>
      </div>
      <footer className='bg-zinc-800 border-t border-zinc-700 p-6'>
        footer
      </footer>
    </div>
  )
}
