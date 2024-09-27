"use client"

import Link from "next/link"
import { useEffect, useState } from "react"
import { Checkbox } from "@/components/ui/checkbox"
import Design from "@/app/design/page"
import { useParams } from "next/navigation"
import useSWR from 'swr'
import { useAppDispatch, useAppSelector } from "@/lib/hooks"
import { selectCart,addProduct } from "@/store/cartSlice"
const fetcher = (args:string)=>(fetch(args,{cache:"force-cache"})).then(data=>data.json())
export default function ProductDisplay (){
    const dispatch = useAppDispatch()
    const productsState = useAppSelector(selectCart)
  const params = useParams()
  const productId = params['productId']
  const {data,error,isLoading} = useSWR(`https://api.escuelajs.co/api/v1/products/${productId}`,fetcher)
  if(data?.images){
    data.images[0] = (data.images[0] as string).replace('["','')
    data.images[1] = (data.images[1] as string)?.replaceAll('"','')
    data.images[2] = (data.images[2] as string)?.replace('"]','')
  }
  const [amount,setAmount] = useState<number>(1)
  const [size,setSize] = useState<number>(32)
  const [sale,setSale] = useState<boolean>(true)


    if(error){
      return <h1>please refresh the page <button onClick={()=>window.location.reload()}>refresh</button></h1>

    }
    if(isLoading){
      return(
        <h1 className="flex justify-center items-start h-screen pt-28">loading.....</h1>
      )
    }

    return (
        <main className="container  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2  lg:mt-0 mt-5 lg:relative lg:mb-20" >
            <div className="w-full flex flex-col gap-2 h-fit ">
            <img
            src={data?.images[0]}
            alt=""
            className=" hidden lg:block w-full object-cover "
            />

    <img
            src={data?.images[1]}
            alt=""
            className=" block w-full object-cover "
            />
    <img
      src={data?.images[2]}
      alt=""
      className="  w-full object-cover block"
    />

    
            </div>
            <div className="w-full h-fit p-2 lg:p-10 lg:sticky lg:top-[180px]
            lg:w-[50vw] lg:right-0">
                {/* <form action="" method="post"  className="w-full"> */}
        <span className="font-thin text-sm ">sun&moon</span>
        <h1 className="text-2xl -mt-1 mb-2">{data.title}</h1>
        <h2 className="text-gray-600 font-light leading-6  -mt-1 mb-2 ">{data.description}</h2>
        <p className="font-light flex justify-between">
          <span className="flex gap-4">
          ${data.price}
          {sale&&<del>${data.price + 20}</del>}
          </span>
          {sale&& <span className="bg-brandRed font-bold text-white  px-4 rounded-3xl">Sale</span>}
          </p>
        <div className="flex gap-10 py-2 mx-1 items-center lg:justify-start justify-center">
        <label htmlFor="size">Size</label>
        <select name="size" className="bg-white border-slate-400 border rounded-lg px-4 py-2" value={size} 
              onChange={(e)=>setSize(+e?.target?.value)}
              id="size">
            <option value="32">32</option>
            <option value="34">34</option>
            <option value="36">36</option>
            <option value="38">38</option>
            <option value="40">40</option>
            <option value="42">42</option>
            <option value="44">44</option>
        </select>
        </div>
        <div>
        <div>
  <label htmlFor="Quantity" className="sr-only"> Quantity </label>
<div className="flex lg:justify-start justify-center items-center gap-2">

    <span>Amount</span>
  <div className="flex items-center gap-1 border justify-center w-fit ">
    <button type="button" className="size-10 leading-10 text-black transition hover:opacity-75"
    onClick={()=>amount>1 && setAmount(amount-1)}
    >
      &minus;
    </button>

    <input
      type="number"
      id="Quantity"
      value={amount}
      onChange={()=>setAmount(amount)}
      className="h-10 w-16 rounded border-gray-200 text-center [-moz-appearance:_textfield] sm:text-sm [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none"
    />

    <button type="button" className="size-10 leading-10 text-black transition hover:opacity-75"
     onClick={()=>setAmount(amount+1)}
     >
      +
    </button>
  </div>
  </div>

        </div>
  {/* <div className="lg:m-0 items-center colors mx-auto w-fit py-4 flex gap-5">
    colors:
    
    <Checkbox name="green"  className="bg-green-600 inline-block border-none  rounded-xl ring-4 ring-offset-2 ring-bgs accent-green-600 data-[state=checked]:bg-green-600 "/>
    <Checkbox name="red"  className="bg-red-600 inline-block border-none ring-bgs rounded-xl ring-2 ring-offset-2 data-[state=checked]:bg-red-600 "/>
    <Checkbox name="blue"  className="bg-blue-600 inline-block border-none ring-bgs rounded-xl ring-2 ring-offset-2 data-[state=checked]:bg-blue-600"/>
    <Checkbox name="sky"  className="bg-sky-600 inline-block border-none ring-bgs rounded-xl ring-2 ring-offset-2 data-[state=checked]:bg-sky-600 "/>
    <Checkbox name="black"  className="bg-black inline-block border-none ring-bgs rounded-xl ring-2 ring-offset-2 data-[state=checked]:bg-black"/>
   

  </div> */}
{(data.title as string).includes('Shirt')&&<Design/>}
{/* {(data.category as string)['name'].includes('Clothes')&&<Design/>} */}

  
        {/* out of the amount */}
        <div className="links flex  flex-col  items-center justify-center pt-10  gap-5 h-fit">
            <button className="border-black uppercase  border-2 rounded-3xl px-5 py-2  transition-all min-w-[50%]   text-black" onClick={()=>{dispatch(addProduct({id:data.id,title:data.title,amount:amount,size:+size,image:data.images[0],timeStamp:new Date().getTime().toString(),price:data.price,color: (data.title as string).includes('Shirt')?"green":""

            }))}}>
                Add To Cart
            </button>
            <button className=" uppercase  rounded-3xl px-5 py-2   text-white bg-black  transition-all min-w-[50%] lg:w-[25%]">
                <Link href={'shopAll'}>
                Buy it now
                </Link>
            </button>
            {/* <button className=" uppercase  rounded-3xl px-5 py-2   text-white bg-black  transition-all min-w-[50%] lg:w-[25%]">
                <Link href={'/design'}>
                Design custom One
                </Link>
            </button> */}

        </div>
</div>
                {/* </form> */}
            </div>
        </main>
    )

//     return (
//         <main className="container  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2  lg:mt-0 mt-5 lg:relative lg:mb-20" >
//             <div className="w-full flex flex-col gap-2 h-fit ">
//             <img
//       src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
//       alt=""
//       className=" hidden lg:block w-full object-cover "
//     />

//     <img
//       src="https://images.unsplash.com/photo-1523381140794-a1eef18a37c7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8MjQ2fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60"
//       alt=""
//       className=" block w-full object-cover "
//     />
//     {/* <img
//       src="https://images.unsplash.com/photo-1523381140794-a1eef18a37c7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8MjQ2fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60"
//       alt=""
//       className=" block w-full object-cover lg:hidden"
//     /> */}
//     <img
//       src="/imgs/menSizing.webp"
//       alt=""
//       className="  w-full object-cover block"
//     />

    
//             </div>
//             <div className="w-full h-fit p-2 lg:p-10 lg:sticky lg:top-[180px]
//             lg:w-[50vw] lg:right-0">
//                 <form action="" method="post" className="w-full">
//         <span className="font-thin text-sm ">sun&moon</span>
//         <h1 className="text-2xl -mt-1 mb-2">product name</h1>
//         <p className="font-light flex justify-between">
//           <span className="flex gap-4">
//           900.0 L.E
//           {sale&&<del>1300 L.E</del>}
//           </span>
//           {sale&& <span className="bg-brandRed font-bold text-white  px-4 rounded-3xl">Sale</span>}
//           </p>
//         <div className="flex gap-10 py-2 mx-1 items-center lg:justify-start justify-center">
//         <label htmlFor="size">Size</label>
//         <select name="size" className="bg-white border-slate-400 border rounded-lg px-4 py-2" value={size} 
//               onChange={(e)=>setSize(+e?.target?.value)}
//               id="size">
//             <option value="32">32</option>
//             <option value="34">34</option>
//             <option value="36">36</option>
//             <option value="38">38</option>
//             <option value="40">40</option>
//             <option value="42">42</option>
//             <option value="44">44</option>
//         </select>
//         </div>
//         <div>
//         <div>
//   <label htmlFor="Quantity" className="sr-only"> Quantity </label>
// <div className="flex lg:justify-start justify-center items-center gap-2">

//     <span>Amount</span>
//   <div className="flex items-center gap-1 border justify-center w-fit ">
//     <button type="button" className="size-10 leading-10 text-black transition hover:opacity-75"
//     onClick={()=>amount>1 && setAmount(amount-1)}
//     >
//       &minus;
//     </button>

//     <input
//       type="number"
//       id="Quantity"
//       value={amount}
//       onChange={()=>setAmount(amount)}
//       className="h-10 w-16 rounded border-gray-200 text-center [-moz-appearance:_textfield] sm:text-sm [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none"
//     />

//     <button type="button" className="size-10 leading-10 text-black transition hover:opacity-75"
//      onClick={()=>setAmount(amount+1)}
//      >
//       +
//     </button>
//   </div>
//   </div>

//         </div>
//   {/* <div className="lg:m-0 items-center colors mx-auto w-fit py-4 flex gap-5">
//     colors:
    
//     <Checkbox name="green"  className="bg-green-600 inline-block border-none  rounded-xl ring-4 ring-offset-2 ring-bgs accent-green-600 data-[state=checked]:bg-green-600 "/>
//     <Checkbox name="red"  className="bg-red-600 inline-block border-none ring-bgs rounded-xl ring-2 ring-offset-2 data-[state=checked]:bg-red-600 "/>
//     <Checkbox name="blue"  className="bg-blue-600 inline-block border-none ring-bgs rounded-xl ring-2 ring-offset-2 data-[state=checked]:bg-blue-600"/>
//     <Checkbox name="sky"  className="bg-sky-600 inline-block border-none ring-bgs rounded-xl ring-2 ring-offset-2 data-[state=checked]:bg-sky-600 "/>
//     <Checkbox name="black"  className="bg-black inline-block border-none ring-bgs rounded-xl ring-2 ring-offset-2 data-[state=checked]:bg-black"/>
   

//   </div> */}

// <Design/>

  
//         {/* out of the amount */}
//         <div className="links flex  flex-col  items-center justify-center pt-10  gap-5 h-fit">
//             <button className="border-black uppercase  border-2 rounded-3xl px-5 py-2  transition-all min-w-[50%]   text-black">
//                 <Link href={'newArrivals'}>
//                 Add To Cart
//                 </Link>
//             </button>
//             <button className=" uppercase  rounded-3xl px-5 py-2   text-white bg-black  transition-all min-w-[50%] lg:w-[25%]">
//                 <Link href={'shopAll'}>
//                 Buy it now
//                 </Link>
//             </button>
//             {/* <button className=" uppercase  rounded-3xl px-5 py-2   text-white bg-black  transition-all min-w-[50%] lg:w-[25%]">
//                 <Link href={'/design'}>
//                 Design custom One
//                 </Link>
//             </button> */}

//         </div>
// </div>
//                 </form>
//             </div>
//         </main>
//     )
}