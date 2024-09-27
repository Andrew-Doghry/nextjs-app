import { revalidatePath } from "next/cache";
import { NextRequest, NextResponse } from "next/server";
let Offer:number = 0
export function GET(){
    console.log("route [GET] /api/offers called 🛑")
    return NextResponse.json({offer:Offer})    
    // ||'follow the page for promo codes and regular discounts '
}
export async function POST(req:NextRequest){
    const data =  await req.json()
    Offer = data?.offer

    revalidatePath('/')
    return NextResponse.json({msg:`done offer=> ${Offer}`})
}