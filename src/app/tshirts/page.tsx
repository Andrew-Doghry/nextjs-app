import ProductsGrid from "@/components/Hero/ProductsGrid";

export default function TShirts(){
    return (
        <section>
          <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
            <header>
              <h2 className="text-xl text-gray-900 sm:text-3xl">T-Shirts Collection</h2>
        
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
{/*         
            <ul className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              <li>
                <a href="#" className="group block overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                    alt=""
                    className="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
                  />
        
                  <div className="relative bg-white pt-3">
                    <h3 className="text-xs text-gray-700 group-hover:underline group-hover:underline-offset-4">
                      Basic Tee
                    </h3>
        
                    <p className="mt-2">
                      <span className="sr-only"> Regular Price </span>
        
                      <span className="tracking-wider text-gray-900"> £24.00 GBP </span>
                    </p>
                  </div>
                </a>
              </li>
        
              <li>
                <a href="#" className="group block overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                    alt=""
                    className="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
                  />
        
                  <div className="relative bg-white pt-3">
                    <h3 className="text-xs text-gray-700 group-hover:underline group-hover:underline-offset-4">
                      Basic Tee
                    </h3>
        
                    <p className="mt-2">
                      <span className="sr-only"> Regular Price </span>
        
                      <span className="tracking-wider text-gray-900"> £24.00 GBP </span>
                    </p>
                  </div>
                </a>
              </li>
        
              <li>
                <a href="#" className="group block overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                    alt=""
                    className="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
                  />
        
                  <div className="relative bg-white pt-3">
                    <h3 className="text-xs text-gray-700 group-hover:underline group-hover:underline-offset-4">
                      Basic Tee
                    </h3>
        
                    <p className="mt-2">
                      <span className="sr-only"> Regular Price </span>
        
                      <span className="tracking-wider text-gray-900"> £24.00 GBP </span>
                    </p>
                  </div>
                </a>
              </li>
        
              <li>
                <a href="#" className="group block overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                    alt=""
                    className="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
                  />
        
                  <div className="relative bg-white pt-3">
                    <h3 className="text-xs text-gray-700 group-hover:underline group-hover:underline-offset-4">
                      Basic Tee
                    </h3>
        
                    <p className="mt-2">
                      <span className="sr-only"> Regular Price </span>
        
                      <span className="tracking-wider text-gray-900"> £24.00 GBP </span>
                    </p>
                  </div>
                </a>
              </li>
              <li>
                <a href="#" className="group block overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                    alt=""
                    className="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
                  />
        
                  <div className="relative bg-white pt-3">
                    <h3 className="text-xs text-gray-700 group-hover:underline group-hover:underline-offset-4">
                      Basic Tee
                    </h3>
        
                    <p className="mt-2">
                      <span className="sr-only"> Regular Price </span>
        
                      <span className="tracking-wider text-gray-900"> £24.00 GBP </span>
                    </p>
                  </div>
                </a>
              </li>
              <li>
                <a href="#" className="group block overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                    alt=""
                    className="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
                  />
        
                  <div className="relative bg-white pt-3">
                    <h3 className="text-xs text-gray-700 group-hover:underline group-hover:underline-offset-4">
                      Basic Tee
                    </h3>
        
                    <p className="mt-2">
                      <span className="sr-only"> Regular Price </span>
        
                      <span className="tracking-wider text-gray-900"> £24.00 GBP </span>
                    </p>
                  </div>
                </a>
              </li>
              <li>
                <a href="#" className="group block overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                    alt=""
                    className="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
                  />
        
                  <div className="relative bg-white pt-3">
                    <h3 className="text-xs text-gray-700 group-hover:underline group-hover:underline-offset-4">
                      Basic Tee
                    </h3>
        
                    <p className="mt-2">
                      <span className="sr-only"> Regular Price </span>
        
                      <span className="tracking-wider text-gray-900"> £24.00 GBP </span>
                    </p>
                  </div>
                </a>
              </li>
            </ul> */}
            <ProductsGrid limit={null}/>
          </div>
        </section>)
}