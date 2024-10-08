import ProductsGrid from "@/components/Hero/ProductsGrid";

export default function NewArrivals(){
  return (
      <section>
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 ">
          <header>
            <h2 className="text-xl  text-gray-900 sm:text-3xl">New Arrivals</h2>
      
            <p className="mt-4 max-w-md text-gray-500">
      
            </p>
          </header>
      
          <div className="mt-8 sm:flex sm:items-center sm:justify-between">
            <div className="block sm:hidden">
              <button
                className="flex cursor-pointer items-center gap-2 border-b border-gray-400 pb-1 text-gray-900 transition hover:border-gray-600"
              >
                <span className="text-sm font-medium"> Filters & Sorting </span>
      
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-4 rtl:rotate-180"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
              </button>
            </div>
      
      
          </div>
          <ProductsGrid limit={4} start={6}/>

        </div>
      </section>)
}