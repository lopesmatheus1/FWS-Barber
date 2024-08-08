import { Card, CardContent } from "./ui/card"
import { Button } from "./ui/button"
import Image from "next/image"
import { MenuIcon } from "lucide-react"
import { Sheet, SheetTrigger } from "./ui/sheet"

import SidebarButton from "./sidebar-sheet"
const Header = () => {
  return (
    <>
      <Card>
        <CardContent className="flex flex-row items-center justify-between p-5">
          <Image
            alt="Logo FSW barber"
            src="/logo.png"
            height={18}
            width={120}
          />

          <Sheet>
            <SheetTrigger asChild>
              <Button size="icon" variant="outline">
                <MenuIcon></MenuIcon>
              </Button>
            </SheetTrigger>
            <SidebarButton></SidebarButton>
          </Sheet>
        </CardContent>
      </Card>
    </>
  )
}

export default Header
