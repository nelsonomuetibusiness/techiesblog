import Image from "next/image";
import pic from "@/public/land.jpg"
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton"







export default function Content() {
    return (
        <div className="pt-6 grid grid-cols-1 lg:grid-cols-2 gap-4">
            <section className="">
                <Image src={pic} alt="" className="h-[400px] w-[900px] rounded-3xl" />
                <div className="flex flex-row justify-between mt-2 bg-black rounded text-white">
                    <p>Admin: admin name</p>
                    <p>date</p>
                    <p>comments</p>
                </div>
                <div>
                    <h1 className="text-2xl font-bold">Topic(Just an example)</h1>
                    <h2 className="text-xs font-bold">Tags: IT, Production, Development</h2>
                    <h3 className="text-wrap text-slate-400 text-muted-foreground text-sm overflow-hidden line-clamp-6 font-semibold">Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus perferendis eius voluptatem tenetur numquam corrupti modi animi, dignissimos voluptate officiis! Est, cupiditate laboriosam. Laborum, id. Dolores necessitatibus ipsum sequi optio!
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati sed consequuntur consectetur dolore explicabo nobis adipisci odit, provident assumenda rem! Id est obcaecati, provident iusto culpa eligendi doloremque perferendis quia!
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, numquam fuga in nobis doloribus dolor nam ut, sequi magnam officia, incidunt adipisci? Quis, fugit laudantium nostrum rem corrupti earum obcaecati?
                    </h3>
                    <Button className="mt-4">READ MORE</Button>
                </div>
            </section>
            <section className="">
                <Image src={pic} alt="" className="h-[400px] w-[900px] rounded-3xl" />
                <div className="flex flex-row justify-between mt-2 bg-black rounded text-white">
                    <p>Admin: admin name</p>
                    <p>date</p>
                    <p>comments</p>
                </div>
                <div>
                    <h1 className="text-2xl font-bold">Topic(Just an example)</h1>
                    <h2 className="text-xs font-bold">Tags: IT, Production, Development</h2>
                    <h3 className="text-wrap text-slate-400 text-muted-foreground text-sm overflow-hidden line-clamp-6 font-semibold">Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus perferendis eius voluptatem tenetur numquam corrupti modi animi, dignissimos voluptate officiis! Est, cupiditate laboriosam. Laborum, id. Dolores necessitatibus ipsum sequi optio!
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati sed consequuntur consectetur dolore explicabo nobis adipisci odit, provident assumenda rem! Id est obcaecati, provident iusto culpa eligendi doloremque perferendis quia!
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, numquam fuga in nobis doloribus dolor nam ut, sequi magnam officia, incidunt adipisci? Quis, fugit laudantium nostrum rem corrupti earum obcaecati?
                    </h3>
                    <Button className="mt-4">READ MORE</Button>
                </div>
            </section>

            <section className="">
                <Skeleton className="h-[400px] w-auto rounded-3xl" />
                <Skeleton className="flex flex-row justify-between mt-2 bg-black rounded text-white">
                    <p></p>
                    <p></p>
                    <p></p>
                </Skeleton>
                <Skeleton className="mt-2">
                    <Skeleton className="text-2xl font-bold mt-2"></Skeleton>
                    <Skeleton className="text-xs font-bold h-2 mt-2"></Skeleton>
                    <Skeleton className="text-wrap text-slate-400 text-muted-foreground text-sm overflow-hidden h-24 mt-2">
                    </Skeleton>
                    <Skeleton className="space-y-2 mt-2"></Skeleton>
                </Skeleton>
                <div className="space-y-2 mt-4">
                    <Skeleton className="h-4 w-[250px]" />
                    <Skeleton className="h-4 w-[200px]" />
                </div>
            </section>


            <section className="">
                <Skeleton className="h-[400px] w-auto rounded-3xl" />
                <Skeleton className="flex flex-row justify-between mt-2 bg-black rounded text-white">
                    <p></p>
                    <p></p>
                    <p></p>
                </Skeleton>
                <Skeleton className="mt-2">
                    <Skeleton className="text-2xl font-bold mt-2"></Skeleton>
                    <Skeleton className="text-xs font-bold h-2 mt-2"></Skeleton>
                    <Skeleton className="text-wrap text-slate-400 text-muted-foreground text-sm overflow-hidden h-24 mt-2">
                    </Skeleton>
                    <Skeleton className="space-y-2 mt-2"></Skeleton>
                </Skeleton>
                <div className="space-y-2 mt-4">
                    <Skeleton className="h-4 w-[250px]" />
                    <Skeleton className="h-4 w-[200px]" />
                </div>
            </section>

            <section className="">
                <Skeleton className="h-[400px] w-auto rounded-3xl" />
                <Skeleton className="flex flex-row justify-between mt-2 bg-black rounded text-white">
                    <p></p>
                    <p></p>
                    <p></p>
                </Skeleton>
                <Skeleton className="mt-2">
                    <Skeleton className="text-2xl font-bold mt-2"></Skeleton>
                    <Skeleton className="text-xs font-bold h-2 mt-2"></Skeleton>
                    <Skeleton className="text-wrap text-slate-400 text-muted-foreground text-sm overflow-hidden h-24 mt-2">
                    </Skeleton>
                    <Skeleton className="space-y-2 mt-2"></Skeleton>
                </Skeleton>
                <div className="space-y-2 mt-4">
                    <Skeleton className="h-4 w-[250px]" />
                    <Skeleton className="h-4 w-[200px]" />
                </div>
            </section>

            <section className="">
                <Skeleton className="h-[400px] w-auto rounded-3xl" />
                <Skeleton className="flex flex-row justify-between mt-2 bg-black rounded text-white">
                    <p></p>
                    <p></p>
                    <p></p>
                </Skeleton>
                <Skeleton className="mt-2">
                    <Skeleton className="text-2xl font-bold mt-2"></Skeleton>
                    <Skeleton className="text-xs font-bold h-2 mt-2"></Skeleton>
                    <Skeleton className="text-wrap text-slate-400 text-muted-foreground text-sm overflow-hidden h-24 mt-2">
                    </Skeleton>
                    <Skeleton className="space-y-2 mt-2"></Skeleton>
                </Skeleton>
                <div className="space-y-2 mt-4">
                    <Skeleton className="h-4 w-[250px]" />
                    <Skeleton className="h-4 w-[200px]" />
                </div>
            </section>







        </div>
    )
}