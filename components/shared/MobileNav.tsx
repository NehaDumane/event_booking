import {
  Sheet,
  SheetContent,
  SheetTrigger
} from "@/components/ui/sheet"
import Image from "next/image"
import { Separator } from "../ui/separator"
import NavItems from "./NavItems"

const MobileNav = () => {
  return (
    <nav className="mx-3">
      <Sheet>
          <SheetTrigger>
            <Image src="/assets/icons/menu.svg"
          alt="menu"
          width={24}
          height={24}
          className="cursor-pointer"/>
          </SheetTrigger>
         
          
    <SheetContent className="flex flex-col gap-6 bg-white">
             <Image src="/assets/images/logo.svg"
          alt="logo"
          width={128}
          height={38}></Image> 
          <Separator className="border border-gray-50"></Separator>
          <NavItems/>
          </SheetContent>
      </Sheet>
   </nav>
)
}

export default MobileNav