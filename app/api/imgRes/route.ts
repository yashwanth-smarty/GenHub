import { auth } from '@clerk/nextjs';
import { NextResponse } from 'next/server';
import Replicate from "replicate";

const replicate = new Replicate({
    auth: process.env.REPLICATE_API_TOKEN!
});

export async function POST(
    req: Request 
){
    try{
        const{ userId } = auth();
        const body = await req.json();
        const{ img } = body;

        if(!userId){
            return new NextResponse("Unauthorized",{ status: 401 });
        }
        
        if(!prompt){
            return new NextResponse("Prompt is required",{ status: 400});
        }
        const img = await replicate.run(
            "nightmareai/real-esrgan:42fed1c4974146d4d2414e2be2c5277c7fcf05fcc3a73abf41610695738c1d7b",
            {
              input: {
                image: "..."
              }
            }
          );

          return NextResponse.json(response);

    }catch(error){
        console.log("[VIDEO_ERROR]",error);
        return new NextResponse("Internal error",{status:500});
    }
}