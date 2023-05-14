import Image from 'next/image'
import { Inter } from 'next/font/google'
import { Home as HomeIcon, SearchIcon, LibraryIcon, ChevronLeft, ChevronRight, Play, Shuffle, SkipBack, SkipForward, Repeat } from 'lucide-react'

const inter = Inter({ subsets: ['latin']})

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

          <h1 className='font-semibold text-3xl mt-10'>Good Afternoon</h1>

          <div className="grid grid-cols-3 gap-4 mt-4">
            <a href="#" className="bg-white/10 group flex items-center gap-4 rounded overflow-hidden hover:bg-white/20 transition-colors">
              <Image src="/cover.jpg" width={104} height={104} alt="Cover" />
              <strong>13th Floor Elevator</strong>

              <button className='w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible'>
                <Play />
              </button>

            </a>
            <a href="#" className="bg-white/10 group flex items-center gap-4 rounded overflow-hidden hover:bg-white/20 transition-colors">
              <Image src="/cover.jpg" width={104} height={104} alt="Cover" />
              <strong>13th Floor Elevator</strong>
              <button className='w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible'>
                <Play />
              </button>
            </a>
            <a href="#" className="bg-white/10 group flex items-center gap-4 rounded overflow-hidden hover:bg-white/20 transition-colors">
              <Image src="/cover.jpg" width={104} height={104} alt="Cover" />
              <strong>13th Floor Elevator</strong>
              <button className='w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible'>
                <Play />
              </button>
            </a>
            <a href="#" className="bg-white/10 group flex items-center gap-4 rounded overflow-hidden hover:bg-white/20 transition-colors">
              <Image src="/cover.jpg" width={104} height={104} alt="Cover" />
              <strong>13th Floor Elevator</strong>
              <button className='w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible'>
                <Play />
              </button>
            </a>
            <a href="#" className="bg-white/10 group flex items-center gap-4 rounded overflow-hidden hover:bg-white/20 transition-colors">
              <Image src="/cover.jpg" width={104} height={104} alt="Cover" />
              <strong>13th Floor Elevator</strong>
              <button className='w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible'>
                <Play />
              </button>
            </a>
            <a href="#" className="bg-white/10 group flex items-center gap-4 rounded overflow-hidden hover:bg-white/20 transition-colors">
              <Image src="/cover.jpg" width={104} height={104} alt="Cover" />
              <strong>13th Floor Elevator</strong>
              <button className='w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible'>
                <Play />
              </button>
            </a>
          </div>

          <h2 className='font-semibold text-2xl mt-10'>Made for Célio Júnior</h2>
          <div className='grid grid-cols-5 gap-4 mt-4'>
            <a href="#" className='flex flex-col gap-2 bg-white/5 p-3 rounded hover:bg-white/10'>
              <Image src="/cover.jpg" className="w-full" width={104} height={104} alt="Cover" />
              <strong className='font-semibold'>Daily Mix 1</strong>
              <span className='text-sm text-zinc-400'>Chico Science, Beyoncé, Heavy Baile and more</span>
            </a>
            <a href="#" className='flex flex-col gap-2 bg-white/5 p-3 rounded-md hover:bg-white/10'>
              <Image src="/cover.jpg" className="w-full" width={104} height={104} alt="Cover" />
              <strong className='font-semibold'>Daily Mix 1</strong>
              <span className='text-sm text-zinc-400'>Chico Science, Beyoncé, Heavy Baile and more</span>
            </a>
            <a href="#" className='flex flex-col gap-2 bg-white/5 p-3 rounded-md hover:bg-white/10'>
              <Image src="/cover.jpg" className="w-full" width={104} height={104} alt="Cover" />
              <strong className='font-semibold'>Daily Mix 1</strong>
              <span className='text-sm text-zinc-400'>Chico Science, Beyoncé, Heavy Baile and more</span>
            </a>
            <a href="#" className='flex flex-col gap-2 bg-white/5 p-3 rounded-md hover:bg-white/10'>
              <Image src="/cover.jpg" className="w-full" width={104} height={104} alt="Cover" />
              <strong className='font-semibold'>Daily Mix 1</strong>
              <span className='text-sm text-zinc-400'>Chico Science, Beyoncé, Heavy Baile and more</span>
            </a>
            <a href="#" className='flex flex-col gap-2 bg-white/5 p-3 rounded-md hover:bg-white/10'>
              <Image src="/cover.jpg" className="w-full" width={104} height={104} alt="Cover" />
              <strong className='font-semibold'>Daily Mix 1</strong>
              <span className='text-sm text-zinc-400'>Chico Science, Beyoncé, Heavy Baile and more</span>
            </a>
          </div>

        </main>
      </div>
      <footer className='bg-zinc-800 border-t border-zinc-700 p-6 flex items-center justify-between'>
        <div>
          <Image src="/cover.jpg" width={56} height={56} alt="Cover" />
          <div className='flex flex-col'>
            <strong className='font-normal'>Music Name</strong>
            <span className="text-xs text-zinc-400">Artist Name</span>
          </div>
        </div>
        <div className="flex flex-col items-center gap-2">
          <div className='flex items-center gap-3'>
            <Shuffle className='text-zinc-200' size={20} />
            <SkipBack className='text-zinc-200' size={20} />
            <button className='w-10 h-10 flex items-center justify-center pl-1 rounded-full bg-white text-black ml-auto'>
              <Play />
            </button>
            <SkipForward className='text-zinc-200' size={20} />
            <Repeat className='text-zinc-200' size={20} />
          </div>
          <div className='flex items-center gap-2'>
            <span className='text-xs text-zinc-400'>0:22</span>
              <div className='h-1 rounded-full w-96 bg-zinc-600'>
                <div className='bg-zinc-200 w-40 h-1 rounded-full'>

                </div>
              </div>
            <span className='text-xs text-zinc-400'>2:49</span>
          </div>
        </div>
        <div></div>
      </footer>
    </div>
  )
}
