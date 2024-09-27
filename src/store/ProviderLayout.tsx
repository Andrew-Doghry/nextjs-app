"use client"
import Footer from '@/components/Footer/Footer'
import Header2 from '@/components/Header/Header2'
import Offers from '@/components/Offers'
import { usePathname } from 'next/navigation'

import { Provider } from 'react-redux'
import myStore from './store'
// import Store from '../store/store'
function ProviderLayout({children}:{children:React.ReactNode}) {
 const pathname = usePathname()
 console.log(pathname)
  return (
    <div className='relative'>
    <Provider store={myStore}>
    {/* {!pathname.includes('/pepo/lepo')&&  */}
    <div className="fixed left-0 right-0 z-50 ">
    <Offers/>
    <Header2/>
      </div>
    {/* } */}
      <br />
      <br />
      <br className='hidden lg:block'/>
      <br className='hidden lg:block'/>
      <br />
      <div className="">
      {children}
    </div>
    {!pathname.includes('/pepo/lepo')&& <Footer/>
    }
    </Provider>
    </div>
  )
}

export default ProviderLayout
