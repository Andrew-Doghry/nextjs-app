'use client'

import { useState } from 'react'
import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon, } from '@heroicons/react/24/outline'
import Link from 'next/link'
import { ExternalLink, SearchIcon, ShoppingCart, User} from 'lucide-react'
import Image from 'next/image'


const navigation = [
  { name: 'Shop', to: '/' },
  { name: 'New Arrivals', to: '/newarrivals' },
  { name: 'Hoodies', to: 'hoodies' },
  { name: 'T-shirts', to: 'tshirts' },
  // { name: 'TankTops', to: "tankTops" },
  // { name: 'Jeans', to: "jeans" },
  { name: 'All Products', to: "allproducts" },
  // { name: 'Coll', to: "coll" },
]




export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className=" ">
      <header className=" inset-x-0 top-0 z-50 border-b  border-b-white/20 bg-bgs ">
      <div className="container  ">      
        <nav aria-label="Global" className="flex items-center justify-between px-6 py-2 lg:px-8 relative">
          <div className='flex gap-8'>
            <Link href={'/cart'}>
            <ShoppingCart size={20} className='cursor-pointer text-black'/>
            </Link>
            <span  className='lg:hidden inline-block md:w-10 sm:w-14 w-8 lg:w-0 cursor-pointer invisible text-black'></span>
          </div>
          <div className="flex  w-fit ">
            <Link href={'/'} className="-my-1.5 p-1.5">
            <Image width={80} height={80} src="/imgs/logo.svg" alt="logo" className='h-8 rotate-45' />
             </Link>
          </div>
          <Link href={'/signup'}>
          <User className='hidden lg:inline-block text-black'/>
          </Link>
        
          <div className="flex  lg:hidden ">
            
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white"
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className={`h-6 w-6 ${mobileMenuOpen ? "" : ""}  text-black `} />
            </button>
          </div>
        </nav>
        <div className="hidden lg:container lg:flex lg:gap-x-12  bg-bgs w-screen left- p-2 justify-center ">
            {navigation.map((item) => (
              <Link key={item.name} href={item.to} className={`text-sm font-semibold  transition leading-6   hover:text-brandRed  hover:text-gray-400"}`}>
                {item.name}
              </Link>
            ))}
          </div>
       
       

        <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden bg-red-500">
          <div className="inset-0 z-50" />
          <DialogPanel className=" inset-y-0 bottom-0 absolute right-0 top-24 z-50 h-screen   overflow-y-auto bg-bgs px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10 w-[80vw]">
            <div className="flex items-center justify-between">
              <Link href={"/"} className="-m-1.5 p-1.5">
               <ExternalLink/>
              </Link>
              {/* clsoing button */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon aria-hidden="true" className="h-6 w-6" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.to}
                      className={ `-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7   text-blue-900`}
                      // text-gray-900
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
               
              </div>
            </div>
          </DialogPanel>

        </Dialog>
      </div>

      </header>
      



    </div>
  )
}
