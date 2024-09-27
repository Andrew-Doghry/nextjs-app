"use client"

import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import Link from "next/link"

import { useState } from "react"

export default function Design(){
const [color,SetColor] = useState<string>('green')
function handleColorSelect(e){
    if(e?.target?.value as string == color || e?.target?.value == undefined ){
        console.log(color)
        return;
    }
    SetColor(e?.target?.value as string)
}
    return <div className=" container ">
        <div className="grid lg:grid-cols-2 grid-cols-1 w-full lg:h-full min-h-fit">
            <div className=" h-fit ">

            <div className="mx-auto"  style={{ marginBottom: 20 }}>
            <div
              style={{
                height: 250,
                width: 250,
                backgroundColor: color,
                position: "relative",
              }}
              className="mx-auto mt-10 rounded-xl overflow-hidden"
            >
              <img
                src={"/images/shadow.png"}
                style={{ position: "absolute", height: "100%", opacity: 0.29 }}
              />
              <img
                src={"/images/collar.png"}
                style={{ position: "absolute", height: "100%", opacity: 0.33 }}
              />
              <img
                src={"/images/outerr.png"}
                style={{ position: "absolute", height: "100%" }}
              />
            </div>
          </div>

            </div>
            <div className="bg-transparent bg-bgs h-fit  lg:mt-32 ">
            <div className="lg:m-0 items-center colors mx-auto w-fit py-4 flex gap-5 ">
    colors:
    
    {/* <Checkbox name="green"  className="bg-green-600 inline-block border-none  rounded-xl ring-4 ring-offset-2 ring-bgs accent-green-600 data-[state=checked]:bg-green-600 "/>
    <Checkbox name="red"  className="bg-red-600 inline-block border-none ring-bgs rounded-xl ring-2 ring-offset-2 data-[state=checked]:bg-red-600 "/>
    <Checkbox name="blue"  className="bg-blue-600 inline-block border-none ring-bgs rounded-xl ring-2 ring-offset-2 data-[state=checked]:bg-blue-600"/>
    <Checkbox name="sky"  className="bg-sky-600 inline-block border-none ring-bgs rounded-xl ring-2 ring-offset-2 data-[state=checked]:bg-sky-600 "/>
    <Checkbox name="black"  className="bg-black inline-block border-none ring-bgs rounded-xl ring-2 ring-offset-2 data-[state=checked]:bg-black"/> */}
    <RadioGroup  className="flex" defaultValue={color}>
  <div className="flex items-center space-x-2">
    <RadioGroupItem onClick={e=>handleColorSelect(e)} value="green" id="option-one" className="bg-green-500 data-[state=checked]:bg-green-500"/>
  </div>
  <div className="flex items-center space-x-2">
    <RadioGroupItem onClick={e=>handleColorSelect(e)} value="blue" id="option-two" className="bg-blue-500 data-[state=checked]:bg-blue-500"/>
  </div>
  <div className="flex items-center space-x-2">
    <RadioGroupItem onClick={e=>handleColorSelect(e)} value="red" id="option-three" className="bg-red-500 data-[state=checked]:bg-red-500"/>
  </div>
  <div className="flex items-center space-x-2">
    <RadioGroupItem onClick={e=>handleColorSelect(e)} value="white" id="option-four" className="bg-white data-[state=checked]:bg-white"/>
  </div>
  <div className="flex items-center space-x-2">
    <RadioGroupItem onClick={e=>handleColorSelect(e)} value="#5D7774" id="option-four" className="bg-[#5D7774] data-[state=checked]:bg-[#5D7774]"/>
  </div>
  
</RadioGroup>

   

  </div>
                
  {/* <button className=" uppercase  rounded-3xl px-5 py-2   text-white bg-black  transition-all min-w-[50%] lg:w-[25%]  block mx-auto animate-bounce mt-10 ">
                <Link href={'/signup'}>
                Check Out
                </Link>
            </button> */}

            </div>
            {/* the end of the right grid */}
        </div>

    </div>
}