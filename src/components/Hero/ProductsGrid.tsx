import Link from "next/link"

async function ProductsGrid({limit,start}:{limit:number|null,start?:number}) {
  if(start ) limit = start+(limit as number);
  const resp= await fetch('https://api.escuelajs.co/api/v1/products')
  const data = await resp.json() 
  let counter = 0;
  return (
    <div className='grid lg:grid-cols-4 gap-2 lg:gap-4 grid-cols-2 md:w-[80vw]   mx-auto my-10'>
      {
data && data.length >0 ? data.map((product , index)=>{
  //  product.images[0] = (product.images[0] as string).replace('["','')
  //  product.images[1] = (product.images[1] as string)?.replaceAll('"','') 
   if(start&& index < start) return; 
if(index > limit && limit) return; 
if(product.images[0]=='') return;
  return(<Link href={`/products/${product.id}`} className="group block overflow-hidden" key={product.id}>
  <div className="relative h-[350px] sm:h-[450px]">
    <img
      src={`${product.images[0]}`}
      alt="first image of the product"
      className="absolute inset-0 h-full w-full object-cover opacity-100 group-hover:opacity-0 "
      />

    <img
      src={product.images[1]}      alt="second image of the product"
      className="absolute inset-0 h-full w-full object-cover opacity-0 group-hover:opacity-100"
      />
  </div>
  {/* here */}

  <div className="relative bg-white pt-3">
    <h3 className="text-sm text-gray-700 group-hover:underline group-hover:underline-offset-4">
      {product.title}
    </h3>

    <p className="mt-1.5 tracking-wide text-gray-900">${product.price}</p>
  </div>
</Link>)})      
:null
}
                {/* <a href="#" className="group block overflow-hidden">
  <div className="relative h-[350px] sm:h-[450px]">
    <img
      src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
      alt=""
      className="absolute inset-0 h-full w-full object-cover opacity-100 group-hover:opacity-0 transition-all transition-[0.3]"
    />

    <img
      src="https://images.unsplash.com/photo-1523381140794-a1eef18a37c7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8MjQ2fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60"
      alt=""
      className="absolute inset-0 h-full w-full object-cover opacity-0 group-hover:opacity-100 transition-all transition-[0.3]"
    />
  </div>

  <div className="relative bg-white pt-3">
    <h3 className="text-sm text-gray-700 group-hover:underline group-hover:underline-offset-4">
      Limited Edition Sports Trainer
    </h3>

    <p className="mt-1.5 tracking-wide text-gray-900">$189.99</p>
  </div>
</a>
                <a href="#" className="group block overflow-hidden">
  <div className="relative h-[350px] sm:h-[450px]">
    <img
      src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
      alt=""
      className="absolute inset-0 h-full w-full object-cover opacity-100 group-hover:opacity-0"
    />

    <img
      src="https://images.unsplash.com/photo-1523381140794-a1eef18a37c7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8MjQ2fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60"
      alt=""
      className="absolute inset-0 h-full w-full object-cover opacity-0 group-hover:opacity-100"
    />
  </div>

  <div className="relative bg-white pt-3">
    <h3 className="text-sm text-gray-700 group-hover:underline group-hover:underline-offset-4">
      Limited Edition Sports Trainer
    </h3>

    <p className="mt-1.5 tracking-wide text-gray-900">$189.99</p>
  </div>
</a>
                <a href="#" className="group block overflow-hidden">
  <div className="relative h-[350px] sm:h-[450px]">
  <img
      src="/imgs/product.jpg"
      alt=""
      className="absolute inset-0 h-full w-full object-cover opacity-100 group-hover:opacity-0 "
    />

    <img
      src="https://images.unsplash.com/photo-1523381140794-a1eef18a37c7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8MjQ2fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60"
      alt=""
      className="absolute inset-0 h-full w-full object-cover opacity-0 group-hover:opacity-100"
    />
  </div>

  <div className="relative bg-white pt-3">
    <h3 className="text-sm text-gray-700 group-hover:underline group-hover:underline-offset-4">
      Limited Edition Sports Trainer
    </h3>

    <p className="mt-1.5 tracking-wide text-gray-900">$189.99</p>
  </div>
</a>
                <a href="#" className="group block overflow-hidden">
  <div className="relative h-[350px] sm:h-[450px]">
    <img
      src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
      alt=""
      className="absolute inset-0 h-full w-full object-cover opacity-100 group-hover:opacity-0"
    />

    <img
      src="https://images.unsplash.com/photo-1523381140794-a1eef18a37c7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8MjQ2fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60"
      alt=""
      className="absolute inset-0 h-full w-full object-cover opacity-0 group-hover:opacity-100"
    />
  </div>

  <div className="relative bg-white pt-3">
    <h3 className="text-sm text-gray-700 group-hover:underline group-hover:underline-offset-4">
      Limited Edition Sports Trainer
    </h3>

    <p className="mt-1.5 tracking-wide text-gray-900">$189.99</p>
  </div>
</a>
                <a href="#" className="group block overflow-hidden">
  <div className="relative h-[350px] sm:h-[450px]">
    <img
      src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
      alt=""
      className="absolute inset-0 h-full w-full object-cover opacity-100 group-hover:opacity-0"
    />

    <img
      src="https://images.unsplash.com/photo-1523381140794-a1eef18a37c7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8MjQ2fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60"
      alt=""
      className="absolute inset-0 h-full w-full object-cover opacity-0 group-hover:opacity-100"
    />
  </div>

  <div className="relative bg-white pt-3">
    <h3 className="text-sm text-gray-700 group-hover:underline group-hover:underline-offset-4">
      Limited Edition Sports Trainer
    </h3>

    <p className="mt-1.5 tracking-wide text-gray-900">$189.99</p>
  </div>
</a>
                <a href="#" className="group block overflow-hidden">
  <div className="relative h-[350px] sm:h-[450px]">
   <img
      src="/imgs/product.jpg"
      alt=""
      className="absolute inset-0 h-full w-full object-cover opacity-100 group-hover:opacity-0 "
    />

    <img
      src="https://images.unsplash.com/photo-1523381140794-a1eef18a37c7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8MjQ2fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60"
      alt=""
      className="absolute inset-0 h-full w-full object-cover opacity-0 group-hover:opacity-100"
    />
  </div>

  <div className="relative bg-white pt-3">
    <h3 className="text-sm text-gray-700 group-hover:underline group-hover:underline-offset-4">
      Limited Edition Sports Trainer
    </h3>

    <p className="mt-1.5 tracking-wide text-gray-900">$189.99</p>
  </div>
</a>
                <a href="#" className="group block overflow-hidden">
  <div className="relative h-[350px] sm:h-[450px]">
    <img
      src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
      alt=""
      className="absolute inset-0 h-full w-full object-cover opacity-100 group-hover:opacity-0"
    />

    <img
      src="https://images.unsplash.com/photo-1523381140794-a1eef18a37c7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8MjQ2fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60"
      alt=""
      className="absolute inset-0 h-full w-full object-cover opacity-0 group-hover:opacity-100"
    />
  </div>

  <div className="relative bg-white pt-3">
    <h3 className="text-sm text-gray-700 group-hover:underline group-hover:underline-offset-4">
      Limited Edition Sports Trainer
    </h3>

    <p className="mt-1.5 tracking-wide text-gray-900">$189.99</p>
  </div>
</a>
                <a href="#" className="group block overflow-hidden">
  <div className="relative h-[350px] sm:h-[450px]">
    <img
      src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
      alt=""
      className="absolute inset-0 h-full w-full object-cover opacity-100 group-hover:opacity-0"
    />

    <img
      src="https://images.unsplash.com/photo-1523381140794-a1eef18a37c7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8MjQ2fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60"
      alt=""
      className="absolute inset-0 h-full w-full object-cover opacity-0 group-hover:opacity-100"
    />
  </div>

  <div className="relative bg-white pt-3">
    <h3 className="text-sm text-gray-700 group-hover:underline group-hover:underline-offset-4">
      Limited Edition Sports Trainer
    </h3>

    <p className="mt-1.5 tracking-wide text-gray-900">$189.99</p>
  </div>
</a>
                <a href="#" className="group block overflow-hidden">
  <div className="relative h-[350px] sm:h-[450px]">
    <img
      src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
      alt=""
      className="absolute inset-0 h-full w-full object-cover opacity-100 group-hover:opacity-0"
    />

    <img
      src="https://images.unsplash.com/photo-1523381140794-a1eef18a37c7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8MjQ2fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60"
      alt=""
      className="absolute inset-0 h-full w-full object-cover opacity-0 group-hover:opacity-100"
    />
  </div>

  <div className="relative bg-white pt-3">
    <h3 className="text-sm text-gray-700 group-hover:underline group-hover:underline-offset-4">
      Limited Edition Sports Trainer
    </h3>

    <p className="mt-1.5 tracking-wide text-gray-900">$189.99</p>
  </div>
</a>
                <a href="#" className="group block overflow-hidden">
  <div className="relative h-[350px] sm:h-[450px]">
    <img
      src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
      alt=""
      className="absolute inset-0 h-full w-full object-cover opacity-100 group-hover:opacity-0"
    />

    <img
      src="https://images.unsplash.com/photo-1523381140794-a1eef18a37c7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8MjQ2fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60"
      alt=""
      className="absolute inset-0 h-full w-full object-cover opacity-0 group-hover:opacity-100"
    />
  </div>

  <div className="relative bg-white pt-3">
    <h3 className="text-sm text-gray-700 group-hover:underline group-hover:underline-offset-4">
      Limited Edition Sports Trainer
    </h3>

    <p className="mt-1.5 tracking-wide text-gray-900">$189.99</p>
  </div>
</a>
        */}

    </div>
  )
}

export default ProductsGrid



/*
 <div className="hover:underline card    mx-1 min-w-[130px] max-w-[100%]  rounded-md border flex flex-col items-center justify-center border-gray-300/50 overflow-hidden  ">
        <div className='overflow-hidden w-[100%] min-h-[300px]'>

    <div className="w-[100%] min-h-[300px]  hover:scale-[1.05] transition-all" style={{backgroundImage:"url(/imgs/bg.jpg)",backgroundSize:"cover"}} />
        </div>
    <p className="font-light text-[0.9rem] p-2   transition-all">name of the product</p>
</div>
        <div className="hover:underline card    mx-1 min-w-[130px] max-w-[100%]  rounded-md border flex flex-col items-center justify-center border-gray-300/50 overflow-hidden  ">
        <div className='overflow-hidden w-[100%] min-h-[300px]'>

    <div className="w-[100%] min-h-[300px]  hover:scale-[1.05] transition-all" style={{backgroundImage:"url(/imgs/bg.jpg)",backgroundSize:"cover"}} />
        </div>
    <p className="font-light text-[0.9rem] p-2   transition-all">name of the product</p>
</div>
        <div className="hover:underline card    mx-1 min-w-[130px] max-w-[100%]  rounded-md border flex flex-col items-center justify-center border-gray-300/50 overflow-hidden  ">
        <div className='overflow-hidden w-[100%] min-h-[300px]'>

    <div className="w-[100%] min-h-[300px]  hover:scale-[1.05] transition-all" style={{backgroundImage:"url(/imgs/bg.jpg)",backgroundSize:"cover"}} />
        </div>
    <p className="font-light text-[0.9rem] p-2   transition-all">name of the product</p>
</div>
        <div className="hover:underline card    mx-1 min-w-[130px] max-w-[100%]  rounded-md border flex flex-col items-center justify-center border-gray-300/50 overflow-hidden  ">
        <div className='overflow-hidden w-[100%] min-h-[300px]'>

    <div className="w-[100%] min-h-[300px]  hover:scale-[1.05] transition-all" style={{backgroundImage:"url(/imgs/bg.jpg)",backgroundSize:"cover"}} />
        </div>
    <p className="font-light text-[0.9rem] p-2   transition-all">name of the product</p>
</div>
        <div className="hover:underline card    mx-1 min-w-[130px] max-w-[100%]  rounded-md border flex flex-col items-center justify-center border-gray-300/50 overflow-hidden  ">
        <div className='overflow-hidden w-[100%] min-h-[300px]'>

    <div className="w-[100%] min-h-[300px]  hover:scale-[1.05] transition-all" style={{backgroundImage:"url(/imgs/bg.jpg)",backgroundSize:"cover"}} />
        </div>
    <p className="font-light text-[0.9rem] p-2   transition-all">name of the product</p>
</div>
        <div className="hover:underline card    mx-1 min-w-[130px] max-w-[100%]  rounded-md border flex flex-col items-center justify-center border-gray-300/50 overflow-hidden  ">
        <div className='overflow-hidden w-[100%] min-h-[300px]'>

    <div className="w-[100%] min-h-[300px]  hover:scale-[1.05] transition-all" style={{backgroundImage:"url(/imgs/bg.jpg)",backgroundSize:"cover"}} />
        </div>
    <p className="font-light text-[0.9rem] p-2   transition-all">name of the product</p>
</div>
        <div className="hover:underline card    mx-1 min-w-[130px] max-w-[100%]  rounded-md border flex flex-col items-center justify-center border-gray-300/50 overflow-hidden  ">
        <div className='overflow-hidden w-[100%] min-h-[300px]'>

    <div className="w-[100%] min-h-[300px]  hover:scale-[1.05] transition-all" style={{backgroundImage:"url(/imgs/bg.jpg)",backgroundSize:"cover"}} />
        </div>
    <p className="font-light text-[0.9rem] p-2   transition-all">name of the product</p>
</div>
        <div className="hover:underline card    mx-1 min-w-[130px] max-w-[100%]  rounded-md border flex flex-col items-center justify-center border-gray-300/50 overflow-hidden  ">
        <div className='overflow-hidden w-[100%] min-h-[300px]'>

    <div className="w-[100%] min-h-[300px]  hover:scale-[1.05] transition-all" style={{backgroundImage:"url(/imgs/bg.jpg)",backgroundSize:"cover"}} />
        </div>
    <p className="font-light text-[0.9rem] p-2   transition-all">name of the product</p>
</div>
        <div className="hover:underline card    mx-1 min-w-[130px] max-w-[100%]  rounded-md border flex flex-col items-center justify-center border-gray-300/50 overflow-hidden  ">
        <div className='overflow-hidden w-[100%] min-h-[300px]'>

    <div className="w-[100%] min-h-[300px]  hover:scale-[1.05] transition-all" style={{backgroundImage:"url(/imgs/bg.jpg)",backgroundSize:"cover"}} />
        </div>
    <p className="font-light text-[0.9rem] p-2   transition-all">name of the product</p>
</div>
        <div className="hover:underline card    mx-1 min-w-[130px] max-w-[100%]  rounded-md border flex flex-col items-center justify-center border-gray-300/50 overflow-hidden  ">
        <div className='overflow-hidden w-[100%] min-h-[300px]'>

    <div className="w-[100%] min-h-[300px]  hover:scale-[1.05] transition-all" style={{backgroundImage:"url(/imgs/bg.jpg)",backgroundSize:"cover"}} />
        </div>
    <p className="font-light text-[0.9rem] p-2   transition-all">name of the product</p>
</div>
        <div className="hover:underline card    mx-1 min-w-[130px] max-w-[100%]  rounded-md border flex flex-col items-center justify-center border-gray-300/50 overflow-hidden  ">
        <div className='overflow-hidden w-[100%] min-h-[300px]'>

    <div className="w-[100%] min-h-[300px]  hover:scale-[1.05] transition-all" style={{backgroundImage:"url(/imgs/bg.jpg)",backgroundSize:"cover"}} />
        </div>
    <p className="font-light text-[0.9rem] p-2   transition-all">name of the product</p>
</div>
        <div className="hover:underline card    mx-1 min-w-[130px] max-w-[100%]  rounded-md border flex flex-col items-center justify-center border-gray-300/50 overflow-hidden  ">
        <div className='overflow-hidden w-[100%] min-h-[300px]'>

    <div className="w-[100%] min-h-[300px]  hover:scale-[1.05] transition-all" style={{backgroundImage:"url(/imgs/bg.jpg)",backgroundSize:"cover"}} />
        </div>
    <p className="font-light text-[0.9rem] p-2   transition-all">name of the product</p>
</div>
        <div className="hover:underline card    mx-1 min-w-[130px] max-w-[100%]  rounded-md border flex flex-col items-center justify-center border-gray-300/50 overflow-hidden  ">
        <div className='overflow-hidden w-[100%] min-h-[300px]'>

    <div className="w-[100%] min-h-[300px]  hover:scale-[1.05] transition-all" style={{backgroundImage:"url(/imgs/bg.jpg)",backgroundSize:"cover"}} />
        </div>
    <p className="font-light text-[0.9rem] p-2   transition-all">name of the product</p>
</div>
        <div className="hover:underline card    mx-1 min-w-[130px] max-w-[100%]  rounded-md border flex flex-col items-center justify-center border-gray-300/50 overflow-hidden  ">
        <div className='overflow-hidden w-[100%] min-h-[300px]'>

    <div className="w-[100%] min-h-[300px]  hover:scale-[1.05] transition-all" style={{backgroundImage:"url(/imgs/bg.jpg)",backgroundSize:"cover"}} />
        </div>
    <p className="font-light text-[0.9rem] p-2   transition-all">name of the product</p>
</div>
        <div className="hover:underline card    mx-1 min-w-[130px] max-w-[100%]  rounded-md border flex flex-col items-center justify-center border-gray-300/50 overflow-hidden  ">
        <div className='overflow-hidden w-[100%] min-h-[300px]'>

    <div className="w-[100%] min-h-[300px]  hover:scale-[1.05] transition-all" style={{backgroundImage:"url(/imgs/bg.jpg)",backgroundSize:"cover"}} />
        </div>
    <p className="font-light text-[0.9rem] p-2   transition-all">name of the product</p>
</div>
        <div className="hover:underline card    mx-1 min-w-[130px] max-w-[100%]  rounded-md border flex flex-col items-center justify-center border-gray-300/50 overflow-hidden  ">
        <div className='overflow-hidden w-[100%] min-h-[300px]'>

    <div className="w-[100%] min-h-[300px]  hover:scale-[1.05] transition-all" style={{backgroundImage:"url(/imgs/bg.jpg)",backgroundSize:"cover"}} />
        </div>
    <p className="font-light text-[0.9rem] p-2   transition-all">name of the product</p>
</div>
     


*/