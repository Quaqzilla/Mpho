import { NavBar } from "@/Components/NavBar";
import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-label";
import { Separator } from "@radix-ui/react-separator";
import * as React from "react";
import{
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";
import { Footer } from "@/Components/Footer";

const frameworks = [
  {
    value: "next.js",
    label: "Next.js",
  },
  {
    value: "sveltekit",
    label: "SvelteKit",
  },
]

export function Contact(){
    {/*Combobox state checks */}
    const [open, setOpen] = React.useState(false)
    const [value, setValue] = React.useState("")

    return(
        <div className="min-h-screen w-full bg-black text-white overflow-x-hidden">
            <NavBar/>
            <section className="flex items-center justify-center min-h-screen mt-20 md:mt-25">
                <div className="bg-[#222222] rounded-3xl mx-auto max-w-[calc(100%-2.5rem)] flex flex-col items-center justify-center p-12 ">
                
                    <div>
                        <h1 className="text-2xl font-medium text-orange-600">Request for Quotation</h1>
                        <p className="text-gray-400">Fill out the form below and we'll get back to you with a detailed update</p>
                    </div>

                    <Separator className="my-4 bg-white"/>

                    <div className="flex flex-col items-center justify-evenly">

                        <div className="p-4 flex flex-col gap-4 md:flex-row">

                            <div className="grid w-full max-w-sm items-center gap-3">
                                <Label htmlFor="Name">First Name<span className="text-red-400">*</span></Label>
                                <Input id="name" type="text" required/>
                            </div>

                            <div className="grid w-full max-w-sm items-center gap-3">
                                <Label htmlFor="Name">Last Name<span className="text-red-400">*</span></Label>
                                <Input id="surname" type="text" required/>
                            </div>

                        </div>

                        <div className="p-4 flex flex-col gap-4 md:flex-row">

                            <div className="grid w-full max-w-sm items-center gap-3">
                                <Label htmlFor="Name">Email<span className="text-red-400">*</span></Label>
                                <Input id="email" type="email" required />
                            </div>

                            <div className="grid w-full max-w-sm items-center gap-3">
                                <Label htmlFor="Name">Phone Number<span className="text-red-400">*</span></Label>
                                <Input id="phone-number" type="text" required/>
                            </div>

                        </div>

                        <div className="p-4 flex flex-col w-full gap-4 md:flex-row">

                            <div className="grid w-full max-w-sm items-center gap-3">
                                <Label htmlFor="Name">Company Name</Label>
                                <Input id="companyName" type="email" />
                            </div>

                            <div className="grid w-full max-w-sm items-center gap-3">
                                <Label htmlFor="Name">Service Type<span className="text-red-400">*</span></Label>
                                <Popover open={open} onOpenChange={setOpen}>
                                    <PopoverTrigger asChild>
                                        <Button
                                        variant="outline"
                                        role="combobox"
                                        aria-expanded={open}
                                        className="w-full justify-between text-black"
                                        >
                                        {value
                                            ? frameworks.find((framework) => framework.value === value)?.label
                                            : "Select framework..."}
                                        </Button>
                                    </PopoverTrigger>
                                    <PopoverContent className="w-[200px] p-0">
                                        <Command>
                                        <CommandInput placeholder="Search framework..." className="h-9" required/>
                                        <CommandList>
                                            <CommandEmpty>No framework found.</CommandEmpty>
                                            <CommandGroup>
                                            {frameworks.map((framework) => (
                                                <CommandItem
                                                key={framework.value}
                                                value={framework.value}
                                                onSelect={(currentValue) => {
                                                    setValue(currentValue === value ? "" : currentValue)
                                                    setOpen(false)
                                                }}
                                                >
                                                {framework.label}
                                                <Check
                                                    className={cn(
                                                    "ml-auto",
                                                    value === framework.value ? "opacity-100" : "opacity-0"
                                                    )}
                                                />
                                                </CommandItem>
                                            ))}
                                            </CommandGroup>
                                        </CommandList>
                                        </Command>
                                    </PopoverContent>
                                </Popover>
                            </div>

                        </div>

                        <div className="p-4 w-full flex flex-col gap-4">
                            <Label>Detailed Comment</Label>
                            <textarea className="bg-white p-3 rounded-sm h-20 text-black md:h-30" placeholder="Enter a detailed comment here"></textarea>
                        </div>

                        <div className="p-4 flex flex-col items-center  gap-4 md:flex-row">
                            <button className="px-9 py-3 bg-orange-600 text-white cursor-pointer hover:bg-amber-500 rounded-md font-semibold transition-colors">
                                Submit Request
                            </button>
                            <button className="px-9 py-3 bg-gray-200 text-black cursor-pointer hover:bg-gray-300 rounded-md font-semibold transition-colors">
                                Cancel
                            </button>
                        </div>

                    </div>

                </div>
            </section>

            <Footer/>
            
        </div>
    )
}