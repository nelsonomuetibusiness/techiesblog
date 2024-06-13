import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"



export default function Admin() {
    return (
        <div>
            <h1>Admin Dashboard</h1>

            <div className="flex justify-center">
                <div className="h-auto w-80 rounded pb-4">
                    <div>
                        <h1 className="text-white">Admin Login</h1>
                        <Input placeholder="Email" className="mb-2" />
                        <Input placeholder="password" />
                        <Button variant={"outline"} className="mt-2">Login</Button>
                    </div>
                </div>
            </div>


            <div className="mt-12 flex justify-center">
                <div className="">
                    <div className="flex mb-4 justify-between">
                        <h1 className="font-bold me-2 mt-4">Title: </h1>
                        <Input type="title" placeholder="Post Title" />
                    </div>
                    <Textarea placeholder="Type Post Body........" className="h-80 w-96 mb-4" />
                    

                    <div className="flex mb-4 justify-between">
                        <Label className="font-bold me-2 mt-4" htmlFor="Image">Picture: </Label>
                        <Input id="picture" type="file" />
                    </div>

                    <Button>Submit Post</Button>
                </div>
                
            </div>

            
        </div>

    )
}

