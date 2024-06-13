/* eslint-disable @next/next/no-img-element */
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";

import facebok from "@/public/facebok.png"
import x from "@/public/xxxxxxx.png"
import insta from "@/public/instttta.png"
import Image from "next/image";

export default function About() {
    return (
        <div className="bg-black  text-white px-16 pb-8 ">
            <div>
                <div>
                    <h1 className="pt-4 pb-8 text-2xl font-bold">About Us</h1>
                    <p className="text-sm text-gray-400 text-muted-foreground text-wrap overflow-clip">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam quos quo doloribus commodi, praesentium quisquam rerum laudantium ipsam repellat sequi provident facilis libero vel earum molestiae aspernatur nostrum reiciendis. Neque!. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos dicta asperiores ullam earum totam doloribus doloremque quos sequi rem qui, neque, vero ea! Molestias delectus maiores nobis dolores, sunt veritatis quos laboriosam exercitationem dolore quam, facere dignissimos excepturi dolor labore iste totam explicabo numquam nisi? Amet eligendi nam at ducimus. Modi mollitia adipisci quia! Soluta praesentium earum ut aliquam, repellat fugiat totam reprehenderit, possimus optio quas minima nam harum, dicta officia? Maiores fugiat modi expedita laboriosam quo, voluptatibus fuga doloribus laudantium iure dicta eveniet! Eius eveniet facere rem asperiores vel quidem saepe accusamus laudantium quibusdam, tempore ratione quos nesciunt voluptas Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo dolorem sed soluta nobis eos. Laboriosam incidunt velit dolorem, corrupti maxime praesentium. Neque voluptatem molestias assumenda consequuntur sit impedit optio deserunt omnis necessitatibus, aperiam accusamus eligendi eum alias, soluta exercitationem hic autem consectetur rem iste? Animi voluptates voluptatem excepturi nulla vel est amet molestias, ipsum dolore eveniet, fugit illum laudantium? Voluptates quidem odio accusantium, magni, pariatur velit autem expedita assumenda atque, qui quos iste. Labore enim voluptas quos iure asperiores animi! Necessitatibus repellat animi libero exercitationem reprehenderit similique cupiditate et dignissimos! Veniam dolorum optio omnis laudantium velit quibusdam consequatur distinctio dolore.</p>
                </div>

                <div className="bg-gray-300 text-black mt-12  px-3 mb-4 pb-3">
                    <h1 className="pt-4 pb-8 text-2xl font-bold">NewsLetter</h1>
                    <h3 className="text-muted-foreground text-wrap">Stay updated with our latest Posts as we send to your email</h3>
                    <div className="flex justify-between ">
                        <Input className="me-3" placeholder="Enter Email" />
                        <Button>Subscribe</Button>
                    </div>

                </div>


                <div className="mt-12  ps-3 mb-4">
                    <h1 className="pt-8 pb-4 text-2xl font-bold">Our Social Media</h1>
                    <h3 className="text-muted-foreground text-wrap">Follow us</h3>
                    <h4>Let Us Be Socials</h4>
                    <div className="flex flex-wrap">

                        <Link href={""}>
                            <Image src={x} className="w-8 h-8" alt={"x"} />
                        </Link>

                        <Link href={""}>
                            <Image src={insta} className="w-8 h-8" alt={"instagram"} />
                        </Link>

                        <Link href={""}>
                            <Image src={facebok} className="w-8 h-8" alt={"facebook"} />
                        </Link>
                    </div>


                </div>
            </div>
        </div>
    )
}