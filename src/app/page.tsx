import Image from 'next/image'
import { Inter } from 'next/font/google'
import { ChevronLeft, ChevronRight, Play } from 'lucide-react'
import Sidebar from '@/components/Sidebar'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <div className="h-screen flex flex-col">
      <div className='flex flex-1'>
        <Sidebar />
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
              <Image src="https://th.bing.com/th/id/OIP.64KElBN_xJ_8yM8WLAB7VwHaHa?pid=ImgDet&rs=1" width={104} height={104} alt="Cover" />
              <strong>13th Floor Elevator</strong>

              <button className='w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible'>
                <Play />
              </button>

            </a>
            <a href="#" className="bg-white/10 group flex items-center gap-4 rounded overflow-hidden hover:bg-white/20 transition-colors">
              <Image src="https://th.bing.com/th/id/OIP.64KElBN_xJ_8yM8WLAB7VwHaHa?pid=ImgDet&rs=1" width={104} height={104} alt="Cover" />
              <strong>13th Floor Elevator</strong>
              <button className='w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible'>
                <Play />
              </button>
            </a>
            <a href="#" className="bg-white/10 group flex items-center gap-4 rounded overflow-hidden hover:bg-white/20 transition-colors">
              <Image src="https://th.bing.com/th/id/OIP.64KElBN_xJ_8yM8WLAB7VwHaHa?pid=ImgDet&rs=1" width={104} height={104} alt="Cover" />
              <strong>13th Floor Elevator</strong>
              <button className='w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible'>
                <Play />
              </button>
            </a>
            <a href="#" className="bg-white/10 group flex items-center gap-4 rounded overflow-hidden hover:bg-white/20 transition-colors">
              <Image src="https://th.bing.com/th/id/OIP.64KElBN_xJ_8yM8WLAB7VwHaHa?pid=ImgDet&rs=1" width={104} height={104} alt="Cover" />
              <strong>13th Floor Elevator</strong>
              <button className='w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible'>
                <Play />
              </button>
            </a>
            <a href="#" className="bg-white/10 group flex items-center gap-4 rounded overflow-hidden hover:bg-white/20 transition-colors">
              <Image src="https://th.bing.com/th/id/OIP.64KElBN_xJ_8yM8WLAB7VwHaHa?pid=ImgDet&rs=1" width={104} height={104} alt="Cover" />
              <strong>13th Floor Elevator</strong>
              <button className='w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible'>
                <Play />
              </button>
            </a>
            <a href="#" className="bg-white/10 group flex items-center gap-4 rounded overflow-hidden hover:bg-white/20 transition-colors">
              <Image src="https://th.bing.com/th/id/OIP.64KElBN_xJ_8yM8WLAB7VwHaHa?pid=ImgDet&rs=1" width={104} height={104} alt="Cover" />
              <strong>13th Floor Elevator</strong>
              <button className='w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible'>
                <Play />
              </button>
            </a>
          </div>

          <h2 className='font-semibold text-2xl mt-10'>Made for Célio Júnior</h2>
          <div className='grid grid-cols-5 gap-4 mt-4'>
            <a href="#" className='flex flex-col gap-2 bg-white/5 p-3 rounded hover:bg-white/10'>
              <Image src="https://th.bing.com/th/id/OIP.64KElBN_xJ_8yM8WLAB7VwHaHa?pid=ImgDet&rs=1" className="w-full" width={104} height={104} alt="Cover" />
              <strong className='font-semibold'>Daily Mix 1</strong>
              <span className='text-sm text-zinc-400'>Chico Science, Beyoncé, Heavy Baile and more</span>
            </a>
            <a href="#" className='flex flex-col gap-2 bg-white/5 p-3 rounded-md hover:bg-white/10'>
              <Image src="https://th.bing.com/th/id/OIP.64KElBN_xJ_8yM8WLAB7VwHaHa?pid=ImgDet&rs=1" className="w-full" width={104} height={104} alt="Cover" />
              <strong className='font-semibold'>Daily Mix 1</strong>
              <span className='text-sm text-zinc-400'>Chico Science, Beyoncé, Heavy Baile and more</span>
            </a>
            <a href="#" className='flex flex-col gap-2 bg-white/5 p-3 rounded-md hover:bg-white/10'>
              <Image src="https://th.bing.com/th/id/OIP.64KElBN_xJ_8yM8WLAB7VwHaHa?pid=ImgDet&rs=1" className="w-full" width={104} height={104} alt="Cover" />
              <strong className='font-semibold'>Daily Mix 1</strong>
              <span className='text-sm text-zinc-400'>Chico Science, Beyoncé, Heavy Baile and more</span>
            </a>
            <a href="#" className='flex flex-col gap-2 bg-white/5 p-3 rounded-md hover:bg-white/10'>
              <Image src="https://th.bing.com/th/id/OIP.64KElBN_xJ_8yM8WLAB7VwHaHa?pid=ImgDet&rs=1" className="w-full" width={104} height={104} alt="Cover" />
              <strong className='font-semibold'>Daily Mix 1</strong>
              <span className='text-sm text-zinc-400'>Chico Science, Beyoncé, Heavy Baile and more</span>
            </a>
            <a href="#" className='flex flex-col gap-2 bg-white/5 p-3 rounded-md hover:bg-white/10'>
              <Image src="https://th.bing.com/th/id/OIP.64KElBN_xJ_8yM8WLAB7VwHaHa?pid=ImgDet&rs=1" className="w-full" width={104} height={104} alt="Cover" />
              <strong className='font-semibold'>Daily Mix 1</strong>
              <span className='text-sm text-zinc-400'>Chico Science, Beyoncé, Heavy Baile and more</span>
            </a>
          </div>

        </main>
      </div>
      <Footer />
    </div>
  )
}
