import { redirect } from "next/dist/server/api-utils";
import { NextRequest, NextResponse } from "next/server";
export async function GET(req:NextRequest){
    return NextResponse.redirect("http://localhost:3000/")
}
export async function POST(req:NextRequest){
        // const data = await req.json()
        // console.log(data)
        return NextResponse.redirect('http://localhost:3000/')
        

}