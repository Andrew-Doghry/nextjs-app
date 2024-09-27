"use client"

import { ArrowLeft, ArrowRight } from "lucide-react"
import Link from "next/link"
import {   useLayoutEffect, useState } from "react"
import { motion as m, useAnimationControls} from 'framer-motion'

function  Offers() {
// const [offer,setOffer] = useState<number|string>(0)    
// useEffect(()=>{
//   fetch("/api/offers").then(data=>data.json()).then(data=>setOffer(data?.offer))
// },[])
  
// fetch("/api/offers").then(data=>data.json()).then(data=>setOffer(data?.offer))
const controler1 = useAnimationControls();
const controler2 = useAnimationControls();
const [indicator,setIndicator] = useState<boolean>(true);
const animationVariants = {
  firstSlideAppearnce:{
    opacity:1,
    y:0,
  },
  
  firstSlideInit:{
    opacity:1,
    y:0
  },secondeSlideInit:{
    opacity:0,
    y:40
  },firstSlideAnimate:{
    opaciyt:0,
    y:40,
    // transition:{
    //   type:"tween",
    //   delay:2,
    //   duration:0.5
    // }
  },
  secondSlideAnimate:{
    opacity:1,
    y:0,
    // transition:{
    //   type:"tween",
    //   duration:0.5,
    //   delay:2
    // }
  }
  // ,transition:{
  //   type:"tween",
  //   duration:0.6,
  //   repeat:Infinity,
  // }
}
useLayoutEffect(()=>{
setTimeout(() => {
   setIndicator(!indicator)
}, 4000);
},[indicator])


  return (
    <div className="bg-black text-white py-1">
<Link href={'/offers'}>

    <div className="container flex items-center justify-between">
      <div className="ml-10">
        <ArrowLeft size={15} className="rounded-3xl "/>
      </div>
      <div className="font-light capitalize text-sm flex flex-row   w-[70%] flex-nowrap overflow-hidden h-[40px] lg:h-[20px] md:h-[20px] sm:h-[20px]  ">
        <div className="slider flex flex-col relative w-full h-full">
          <m.h1 initial={animationVariants.firstSlideInit}  animate={indicator?animationVariants.firstSlideAnimate:animationVariants.firstSlideInit} transition={{type:"tween",duration:0.5}}   className=" text-center min-w-full min-h-full absolute  text-sm text-wrap">free shippig across Egypt | COD available cash on delivery</m.h1>
          {/* transition={{type:"tween",repeat:Infinity,duration:3.5}} */}
          <m.h1 animate={indicator?animationVariants.secondSlideAnimate:animationVariants.secondeSlideInit} initial={animationVariants.secondeSlideInit}  transition={{type:"tween",duration:0.5}}  className="  text-center min-w-full absolute text-wrap">UpTo 40% off on winter BestSellers | valid Till end Sept</m.h1>
          {/* transition={{type:"tween",repeat:Infinity,duration:3.5}}  */}
        </div>
      </div >
      <div className="mr-10">
        <ArrowRight size={15} className="rounded-3xl "/>
      </div>
    </div>
    </Link>
    </div>
  )
}

export default Offers
// "use client"

// import { ArrowLeft, ArrowRight } from "lucide-react"
// import Link from "next/link"
// import {  useEffect, useState } from "react"
// import { motion as m, useAnimationControls} from 'framer-motion'

// function  Offers() {
// // const [offer,setOffer] = useState<number|string>(0)    
// // useEffect(()=>{
// //   fetch("/api/offers").then(data=>data.json()).then(data=>setOffer(data?.offer))
// // },[])
  
// // fetch("/api/offers").then(data=>data.json()).then(data=>setOffer(data?.offer))
// const controler1 = useAnimationControls();
// const controler2 = useAnimationControls();
// const [indicator,setIndicator] = useState<boolean>(true);
// const animationVariants = {
//   firstSlideAppearnce:{
//     opacity:1,
//     y:0,
//   },
  
//   firstSlideInit:{
//     opacity:1,
//     y:0
//   },secondeSlideInit:{
//     opacity:0,
//     y:40
//   },firstSlideAnimate:{
//     opaciyt:0,
//     y:40,
//     // transition:{
//     //   type:"tween",
//     //   delay:2,
//     //   duration:0.5
//     // }
//   },
//   secondSlideAnimate:{
//     opacity:1,
//     y:0,
//     // transition:{
//     //   type:"tween",
//     //   duration:0.5,
//     //   delay:2
//     // }
//   }
//   // ,transition:{
//   //   type:"tween",
//   //   duration:0.6,
//   //   repeat:Infinity,
//   // }
// }

// function startAnimation(){
//   if(indicator){
//     controler1.start(animationVariants.firstSlideAnimate)
//     controler2.start(animationVariants.secondSlideAnimate)
//     setIndicator(!indicator)
//   }else{
//     controler1.start(animationVariants.firstSlideInit)
//     controler2.start(animationVariants.secondeSlideInit)
//     setIndicator(!indicator)
//   }
// }
// useEffect(()=>{
//   setTimeout(()=>{
//     startAnimation()
//   },4000)
// },[indicator])

//   return (
//     <div className="bg-black text-white py-1">
// <Link href={'/offers'}>

//     <div className="container flex items-center justify-between">
//       <div className="ml-10">
//         <ArrowLeft size={15} className="rounded-3xl "/>
//       </div>
//       <div className="font-light capitalize text-sm flex flex-row   w-[70%] flex-nowrap overflow-hidden h-[40px] lg:h-[20px] md:h-[20px] sm:h-[20px]  ">
//         <div className="slider flex flex-col relative w-full h-full">
//           <m.h1 initial={"firstSlideInit"} variants={animationVariants} animate={controler1} transition={{type:"tween",duration:0.5}}   className=" text-center min-w-full min-h-full absolute  text-sm text-wrap">free shippig across Egypt | COD available cash on delivery</m.h1>
//           {/* transition={{type:"tween",repeat:Infinity,duration:3.5}} */}
//           <m.h1 animate={controler2} initial={"secondeSlideInit"} variants={animationVariants} transition={{type:"tween",duration:0.5}}  className="  text-center min-w-full absolute text-wrap">UpTo 40% off on winter BestSellers | valid Till end Sept</m.h1>
//           {/* transition={{type:"tween",repeat:Infinity,duration:3.5}}  */}
//         </div>
//       </div >
//       <div className="mr-10">
//         <ArrowRight size={15} className="rounded-3xl "/>
//       </div>
//     </div>
//     </Link>
//     </div>
//   )
// }

// export default Offers
// // "use client"
// "use client"

// // import { ArrowLeft, ArrowRight } from "lucide-react"
// // import Link from "next/link"
// // import {  useEffect, useLayoutEffect, useState } from "react"
// // import { motion as m, useAnimationControls} from 'framer-motion'

// // function  Offers() {
// // const [offer,setOffer] = useState<number|string>(0)    
// // // useEffect(()=>{
// // //   fetch("/api/offers").then(data=>data.json()).then(data=>setOffer(data?.offer))
// // // },[])
  
// // // fetch("/api/offers").then(data=>data.json()).then(data=>setOffer(data?.offer))
// // const controler1 = useAnimationControls();
// // const controler2 = useAnimationControls();
// // const [indicator,setIndicator] = useState<boolean>(true);
// // const animationVariants = {
// //   firstSlideAppearnce:{
// //     opacity:1,
// //     y:0,
// //   },
  
// //   firstSlideInit:{
// //     opacity:1,
// //     y:0
// //   },secondeSlideInit:{
// //     opacity:0,
// //     y:40
// //   },firstSlideAnimate:{
// //     opaciyt:0,
// //     y:40,
// //     // transition:{
// //     //   type:"tween",
// //     //   delay:2,
// //     //   duration:0.5
// //     // }
// //   },
// //   secondSlideAnimate:{
// //     opacity:1,
// //     y:0,
// //     // transition:{
// //     //   type:"tween",
// //     //   duration:0.5,
// //     //   delay:2
// //     // }
// //   }
// //   // ,transition:{
// //   //   type:"tween",
// //   //   duration:0.6,
// //   //   repeat:Infinity,
// //   // }
// // }
// // useLayoutEffect(()=>{
// //   console.log("comonent loaded")
// //   window.setInterval(()=>{
// //     if(indicator){
// //       controler1.start(animationVariants.firstSlideAnimate)
// //       controler2.start(animationVariants.secondSlideAnimate)
// //       setIndicator(!indicator)
// //     }else{
// //       controler1.start(animationVariants.firstSlideInit)
// //       controler2.start(animationVariants.secondeSlideInit)
// //       setIndicator(!indicator)
// //     }
// //   },4000)
// // },[])
// // useEffect(()=>{

// //   console.log('offers component rendered')
// // },[])
// //   return (
// //     <div className="bg-black text-white py-1">
// // <Link href={'/offers'}>

// //     <div className="container flex items-center justify-between">
// //       <div className="ml-10">
// //         <ArrowLeft size={15} className="rounded-3xl "/>
// //       </div>
// //       <div className="font-light capitalize text-sm flex flex-row   w-[70%] flex-nowrap overflow-hidden h-[40px] lg:h-[20px] md:h-[20px] sm:h-[20px]  ">
// //         <div className="slider flex flex-col relative w-full h-full">
// //           <m.h1 initial={"firstSlideInit"} variants={animationVariants} animate={controler1} transition={{type:"tween",duration:0.5}}   className=" text-center min-w-full min-h-full absolute  text-sm text-wrap">free shippig across Egypt | COD available cash on delivery</m.h1>
// //           {/* transition={{type:"tween",repeat:Infinity,duration:3.5}} */}
// //           <m.h1 animate={controler2} initial={"secondeSlideInit"} variants={animationVariants} transition={{type:"tween",duration:0.5}}  className="  text-center min-w-full absolute text-wrap">UpTo 40% off on winter BestSellers | valid Till end Sept</m.h1>
// //           {/* transition={{type:"tween",repeat:Infinity,duration:3.5}}  */}
// //         </div>
// //       </div >
// //       <div className="mr-10">
// //         <ArrowRight size={15} className="rounded-3xl "/>
// //       </div>
// //     </div>
// //     </Link>
// //     </div>
// //   )
// // }

// // export default Offers
// // "use client"

// // import { ArrowRight } from "lucide-react"
// // import Link from "next/link"
// // import {  useState } from "react"


// // function  Offers() {
// // const [offer,setOffer] = useState<number|string>(0)    
// // setInterval(()=>{
// //   fetch("/api/offers").then(data=>data.json()).then(data=>setOffer(data?.offer))
// // },60000)
// // fetch("/api/offers").then(data=>data.json()).then(data=>setOffer(data?.offer))

// //   return (
// //     <div className="">
// //     <Link  href={"/offers"} className=" bg-brandRed text-white text-center uppercase  lg:font-light lg:text-lg text-sm   flex items-center justify-center arrowParent ">
// //         Promo Code: super{offer} at checkout for {offer}% Off entire order! 
// //         <span  className="w-4 ml-2">
// //             <span className="overflow-hidden block w-fit">
// //     <ArrowRight  className="block arrowChild -ml-2 hover:ml-0 transition-all" />
// //             </span>
// //         </span>
// //     </Link> 
// //     </div>
// //   )
// // }

// // export default Offers