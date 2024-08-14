"use client"

import Image from "next/image"
import { SheetClose, SheetContent, SheetTitle, SheetHeader } from "./ui/sheet"
import { HomeIcon, CalendarIcon } from "lucide-react"
import { QuickSearchOptions } from "../_constants/search"
import { LogOutIcon } from "lucide-react"
import { Avatar, AvatarImage } from "@radix-ui/react-avatar"
import Link from "next/link"
import { Button } from "./ui/button"
import { LogInIcon } from "lucide-react"
import { Dialog, DialogContent, DialogTrigger } from "./ui/dialog"
import { signOut, useSession } from "next-auth/react"
import SignInDialog from "./sign-in-dialog"

const SidebarButton = () => {
  const { data } = useSession()
  const handleLogOout = () => signOut()
  return (
    <SheetContent className="overflow-y-auto">
      <SheetHeader>
        <SheetTitle className="text-left">Menu</SheetTitle>
      </SheetHeader>

      <div className="flex items-center justify-between gap-3 border-b border-solid py-5">
        {data?.user ? (
          <div className="flex items-center gap-2">
            <Avatar>
              <AvatarImage
                className="rounded-2xl"
                width={32}
                height={32}
                src={data?.user?.image ?? ""}
              />
            </Avatar>

            <div>
              <p className="text-sm font-bold">{data.user.name}</p>
              <p className="text-xs">{data.user.email}</p>
            </div>
          </div>
        ) : (
          <>
            <h2 className="font-bold">Olá, faça seu login!</h2>
            <Dialog>
              <DialogTrigger asChild>
                <Button size="icon">
                  <LogInIcon />
                </Button>
              </DialogTrigger>
              <DialogContent className="w-[90%]">
                <SignInDialog />
              </DialogContent>
            </Dialog>
          </>
        )}
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

        <Button variant="ghost" className="justify-start gap-2" asChild>
          <Link href="/bookings">
            <CalendarIcon size={18} />
            Agendamentos
          </Link>
        </Button>
      </div>

      <div className="flex flex-col gap-2 border-b border-solid p-5">
        {QuickSearchOptions.map((option) => (
          <SheetClose key={option.title} asChild>
            <Button className="justify-start gap-2" variant="ghost" asChild>
              <Link href={`/barbershops?service=${option.title}`}>
                <Image
                  alt={option.title}
                  src={option.imageUrl}
                  height={18}
                  width={18}
                ></Image>
                {option.title}
              </Link>
            </Button>
          </SheetClose>
        ))}
      </div>

      {data?.user && (
        <div className="flex flex-col gap-4 border-b border-solid p-5">
          <Button
            variant="ghost"
            className="justify-start gap-1"
            onClick={handleLogOout}
          >
            <LogOutIcon width={18} height={18} />
            Sair da conta
          </Button>
        </div>
      )}
    </SheetContent>
  )
}

export default SidebarButton
