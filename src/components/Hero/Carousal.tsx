"use client"
import * as React from "react"
import Autoplay from "embla-carousel-autoplay"

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Link from "next/link"

export function CarouselPlugin() {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  )

  return (
    <div className=" flex justify-center container">
    <Carousel
      plugins={[plugin.current]}
      className="w-full max-w-xs"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent>
        {Array.from({ length: 8 }).map((_, index) => (
            <CarouselItem key={index}>
              <Link href={`/products/${index}`}>
            <div className="p-1">
              <Card>
                <CardContent className="flex flex-col  p-6 h-[150px] w-[75px] lg:h-[300px] lg:w-[150px]">
                  <img   src="https://placehold.co/600x400" alt="" className="w-[100%] h-[70%]" />
                </CardContent>
              </Card>
            </div>
            </Link>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
      </div>
  )
}
