import Image from "next/image"
import { MenuIcon } from "lucide-react"
import { SheetClose, SheetContent, SheetTitle, SheetHeader } from "./ui/sheet"
import { HomeIcon, CalendarIcon } from "lucide-react"
import { QuickSearchOptions } from "../_constants/search"
import { LogOutIcon } from "lucide-react"
import { Avatar, AvatarImage } from "@radix-ui/react-avatar"
import Link from "next/link"
import { Button } from "./ui/button"

const SidebarButton = () => {
  return (
    <SheetContent className="overflow-y-auto">
      <SheetHeader>
        <SheetTitle className="text-left">Menu</SheetTitle>
      </SheetHeader>

      <div className="flex items-center gap-3 border-b border-solid py-5">
        <Avatar>
          <AvatarImage
            className="rounded-2xl"
            width={32}
            height={32}
            src="https://img.freepik.com/psd-gratuitas/ilustracao-3d-de-avatar-ou-perfil-humano_23-2150671126.jpg?w=826&t=st=1723152995~exp=1723153595~hmac=8d077fb0010faddce883e3d0493f710ed875e95c6759ecee2c191df6aa87d94d"
          />
        </Avatar>
        <div>
          <p className="text-sm font-bold">Matheus lopes</p>
          <p className="text-xs">Matheus@hotmail.com</p>
        </div>
      </div>

      <div className="flex flex-col gap-2 border-b border-solid p-5">
        <SheetClose asChild>
          <Button asChild variant="ghost" className="justify-start gap-2">
            <Link href="/">
              <HomeIcon size={18} />
              Início
            </Link>
          </Button>
        </SheetClose>

        <Button variant="ghost" className="justify-start gap-2">
          <CalendarIcon size={18} />
          Agendamentos
        </Button>
      </div>

      <div className="flex flex-col gap-2 border-b border-solid p-5">
        {QuickSearchOptions.map((option) => (
          <Button
            key={option.title}
            className="justify-start gap-2"
            variant="ghost"
          >
            <Image
              alt={option.title}
              src={option.imageUrl}
              height={18}
              width={18}
            ></Image>
            {option.title}
          </Button>
        ))}
      </div>

      <div className="flex flex-col gap-4 border-b border-solid p-5">
        <Button variant="ghost" className="justify-start gap-1">
          <LogOutIcon width={18} height={18} />
          Sair da conta
        </Button>
      </div>
    </SheetContent>
  )
}

export default SidebarButton
