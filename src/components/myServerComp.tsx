const getData = async()=>{
    const data = await fetch("https://dummyjson.com/products")
    const rawData = await data.json()
    return rawData;

}
export default async function MYComp (){
        const data = await getData()
        console.log(data)
    return (
        <h1>
            welcome there
        </h1>
    )

}