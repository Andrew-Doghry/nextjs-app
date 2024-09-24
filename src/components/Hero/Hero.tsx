import Link from "next/link"
import ProductsGrid from "./ProductsGrid"
// import Carousal2 from "./Carousal2"

function Hero() {
  return (
    <main className="">
        <div className=" lg:min-h-[70vh] min-h-[60vh] bg-red-950/10" style={{
            backgroundImage:"url(/imgs/bg.jpg)",
            backgroundSize:"cover"
        }}></div>

        <div className="links flex lg:flex-row flex-col  items-center justify-center pt-10  gap-5 h-fit">
            <button className="border-black uppercase font-light border-2 rounded-3xl px-5 py-2 hover:border-[3px] transition-all w-[50%] lg:w-[25%] ">
                <Link href={'newArrivals'}>
                NEW ARRIVALS
                </Link>
            </button>
            <button className="border-black uppercase font-light border-2 rounded-3xl px-5 py-2 hover:border-[3px] transition-all w-[50%] lg:w-[25%]">
                <Link href={'shopAll'}>
                SHOP ALL
                </Link>
            </button>

        </div>
        {/* <Carousal2/> */}
        <ProductsGrid/>

        



    </main>
  )
}

export default Hero