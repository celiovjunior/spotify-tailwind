import { LayoutList, Maximize2, Repeat, SkipBack } from 'lucide-react'
import { SkipForward } from 'lucide-react'
import { Laptop2 } from 'lucide-react'
import { Volume } from 'lucide-react'
import { Mic2 } from 'lucide-react'
import { Play } from 'lucide-react'
import { Shuffle } from 'lucide-react'
import Image from 'next/image'

export default function Footer() {
  return(
    <footer className='bg-zinc-800 border-t border-zinc-700 px-6 py-4 flex items-center justify-between'>
    <div className='flex items-center gap-3'>
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
            <div className='bg-zinc-200 w-40 h-1 rounded-full'></div>
          </div>
        <span className='text-xs text-zinc-400'>2:49</span>
      </div>
    </div>
    <div className='flex items-center gap-4'>
      <Mic2 size={20} />
      <LayoutList size={20} />
      <Laptop2 size={20} />
      <div className='flex items-center gap-2'>
        <Volume size={20} />
        <div className='h-1 rounded-full w-24 bg-zinc-600'>
          <div className='bg-zinc-200 w-10 h-1 rounded-full'></div>
        </div>
      </div>
      <Maximize2 size={20} />
    </div>
  </footer>
  )
}