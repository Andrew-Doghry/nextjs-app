import {  Facebook, Instagram, Twitter } from "lucide-react"

function Footer() {
  return (
    <div className="bg-bgs p-10 mt-10">

    <div className="flex container flex-col lg:flex-row bg-bgs items-center justify-between">
        
        <form action="/api/email" method="post" className="flex flex-col lg:ml-16 mx-auto relative">
        <p className="py-4 font-light">Be the first to know. </p>
        <div>

        <input required type="email" placeholder="Email" className="lg:w-[400px] py-2 placeholder:text-black/80 placeholder:font-light focus:border-[0.5px] focus:outline-none bg-bgs px-4 border-black  border-[0.5px] border-solid"/>
        <input type="submit" value={'send'} className="-ml-20 bg-gray-400/20 py-1 px-5 rounded-xl uppercase font-light hover:bg-gray-400/70 transition-all" />
        </div>
        </form>
    <div className="icons flex-row flex justify-center gap-4 p-4 lg:mr-16">
        <a target="_blank" href="http://www.instgram.com/sunNmoon">
        <Instagram/>
        </a>
        
        <a target="_blank" href="http://www.twitter.com/sunNmoon">
        <Twitter/>
        </a>
        <a target="_blank" href="http://www.facebook.com/sunNmoon">
        <Facebook/>
        </a>
    </div>

    </div>
    </div>
  )
}

export default Footer