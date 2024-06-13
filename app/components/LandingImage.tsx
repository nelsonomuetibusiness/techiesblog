/* eslint-disable @next/next/no-img-element */
import * as React from "react"
import Image from 'next/image'
import { AspectRatio } from "@/components/ui/aspect-ratio"
import landings from '@/public/landings.jpg'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import { Card, CardContent } from "@/components/ui/card"

export default function LandingImage() {
    return (
        <div className="">

            <Image src={landings} alt="Image" className="h-[500px] sm:h-[300px] md:h-[200px] rounded-2xl" />

        </div>
    )
}