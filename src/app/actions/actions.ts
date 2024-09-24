"use server"


export async function getProducts(){
    try {
        const resp = await fetch("https://api.escuelajs.co/api/v1/products")
        

        const rawData = await resp.json()
        return rawData
    }catch(error){
        throw new Error("there is an error fetching products"+(error as Error).message)
    }
    
}
