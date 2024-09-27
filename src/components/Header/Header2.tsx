"use client"
import { GitPullRequest, ShoppingBag,  User } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"

import {motion as m, useAnimationControls} from "framer-motion"
import { useAppDispatch, useAppSelector } from "@/lib/hooks"
import { selectCart } from "@/store/cartSlice"
const navigation = [
    { name: 'Shop', to: '/' },
    { name: 'New Arrivals', to: '/newarrivals' },
    { name: 'Hoodies', to: '/hoodies' },
    { name: 'T-shirts', to: '/tshirts' },
    { name: 'All Products', to: "/allproducts" },
  ]
export default function Header2(){
    const [mobileMenuOpen,setMobileMenuOpen] = useState(false)
    const animationVariants ={
        initial:{
            opacity:0.5 ,
            x:'120%'
        },
    open:{
        opacity:1,
        x:'20%'
    },
    close:{
        opacity:0.5 ,
        x:'120%'
    },
} 
    const controler = useAnimationControls();
    const cartState = useAppSelector(selectCart)
    function handleMenuOpen(){
         setMobileMenuOpen(!mobileMenuOpen)
     }
     useEffect(()=>{
        if(mobileMenuOpen)controler.start(animationVariants.open);else controler.start(animationVariants.close)

     },[mobileMenuOpen])
    
    return (
        <div className="  bg-bgs  right-0 left-0 z-50 fixed  ">
            <header className="container flex py-2 px-5 justify-between items-center ">
                {/* the cart  */}
                <Link href={'/cart'} className="text-black font-light cursor-pointer">
                {cartState.length !== 0?<span className={`bg-black/80 h-6 w-6 text-sm font-light  text-white absolute rounded-full top-6 translate-x-4 flex justify-center items-center`}>
                    {cartState.length}
                </span>:null}
                <span className="z-2 relative">
                <ShoppingBag size={25} strokeWidth={1} />
                </span>
                </Link>
                <Link href={'/'} className="cursor-pointer">

                <Image alt="logo icon" src={'/imgs/logo.svg'} className="rotate-45"  width={35} height={35}/>
                </Link>
                <div className="hidden lg:block">
                    <Link href={'/signup'}>
                    <User/>
                    </Link>
                </div>
{/* mobile menu */}
                <div onClick={handleMenuOpen} className="myMenu lg:hidden  translate-x-2 ">
                    <div className={`${mobileMenuOpen?'gap-0 relative':"gap-1"} menuIcon w-8 h-8  flex flex-col justify-center items-center  `}>
                    <span className={`transition-all ${mobileMenuOpen?'rotate-45 w-[50%] absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]':"w-[80%]"}
                    origin-center bg-slate-950 w-[80%]  h-[2px] rounded-2xl`} ></span>
                    {!mobileMenuOpen&&<span className={`transition-all bg-slate-950 w-[80%] mx-auto h-[2px] rounded-2xl`} ></span>}
                    <span className={`transition-all ${mobileMenuOpen?'-rotate-45 w-[50%] absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]':"w-[80%]"}
                    origin-center bg-slate-950 w-[80%]  h-[2px] rounded-2xl`} ></span>
                    {/* <span className={`${mobileMenuOpen?'-rotate-45 w-[50%]':"w-[80%]"} 
                    origin-center
                    bg-slate-950 w-[80%]  h-[2px] rounded-2xl`}></span> */}
                
                    </div>
                    <m.div variants={animationVariants}
                    animate={controler} transition={{type:"tween" ,duration:0.3}} initial={'initial'} className="dropMenu    bg-bgs  absolute -right-full  w-[80vw] min-h-screen  top-full mt-2 ">
                        <m.div variants={animationVariants}
                    animate={controler} transition={{type:"tween" ,duration:0.1}} initial={'initial'} className="absolute bg-black/40 h-screen w-[200vw]  right-0 p-5 top-0 "/>


                        <ul className="absolute z-1 bg-bgs w-full h-full p-5">
                        {navigation.map((item) => (
                            <li key={item.name}>
                    <Link
                      key={item.name}
                      href={item.to}
                      className={ ` hover:pl-2 transition-all -mx-3 block rounded-lg px-3 py-2 text-base  leading-7   text-black`}
                      // text-gray-900
                      onClick={() => setMobileMenuOpen(false)}
                      >
                      {item.name}
                    </Link>
                        </li>
                  ))}
                            <li >
                    <Link
                      href={'/signup'}
                      className={ ` hover:pl-2 transition-all -mx-3 block rounded-lg px-3 py-2 text-base  leading-7   text-black`}
                      // text-gray-900
                      onClick={() => setMobileMenuOpen(false)}
                      >
                      {"Account"}
                    </Link>
                        </li>
                        </ul>

                    </m.div>
                </div>

                


            </header>
            {/* border-t-2 border-t-gray-200  */}
                <div className="hidden lg:block ">
                    <div className="container flex  justify-center items-center p-2">
                    
                    <ul className="flex flex-row gap-10 ">
                        {navigation.map((item) => (
                            <li key={item.name}>
                    <Link
                      key={item.name}
                      href={item.to}

                      className={` transition-all -mx-3 flex items-center justify-center rounded-lg px-3 py-2 text-base  leading-[15px]   text-black   overflow-hidden relative before:absolute before:w-full before:h-[2px] before:bg-black   before:bottom-0 before:-left-full hover:before:left-0 before:transition-all `}
                      // text-gray-900
                      onClick={() => setMobileMenuOpen(false)}
                      >
                      {item.name}
                    </Link>
                        </li>
                  ))}
                            
                        </ul>
                    </div>
                </div>
        </div>
    )
} 