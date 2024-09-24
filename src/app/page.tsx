import Header from "@/components/Header/Header";
import Hero from "@/components/Hero/Hero";
import Offers from "@/components/Offers";
export default  function Home() {
  
  return (
<div className="relative"> 
    <Hero />
</div>
  );
}
/*
  {
    id: 111,
    title: 'New Product',
    price: 10,
    description: 'A description',
    images: [ '["https://placeimg.com/640/480/any"]' ],
    creationAt: '2024-09-19T11:52:54.000Z',
    updatedAt: '2024-09-19T11:52:54.000Z',
    category: {
      id: 1,
      name: 'nuevo',
      image: 'https://i.imgur.com/QkIa5tT.jpeg',
      creationAt: '2024-09-19T03:05:08.000Z',
      updatedAt: '2024-09-19T10:12:27.000Z'
    }
  }



*/ 
  // import { getProducts } from "./actions/actions";
  // type Proudct = {
  //   id:number,
  //   title:string,
  //   price:number,
  //   description:string
  // }
  // export async function getServerSideProps({req}){
  //   const baseUrl = `http://${req.headers.host}`;
  //   const res = await fetch(`${baseUrl}/api/offers`)
  //   const data = await res.json()
  //   return {props:{data}}
  // }
  // import type { GetServerSideProps } from "next";
  // type Offer = {
  //   offer:number
  // }
  // export const getServerSideProps =( async()=>{
  //   const res = await fetch("http://localhost:3000/api/offers")
  //   const offer : Offer = await res.json()
  //   return {props:{offer}}
  // }) satisfies GetServerSideProps<{offer:Offer}>