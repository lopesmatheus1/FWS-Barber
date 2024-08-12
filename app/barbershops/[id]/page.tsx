import { db } from "@/app/_lib/primsa"
import Image from "next/image"
import { Button } from "@/app/_components/ui/button"
import { ChevronLeftIcon, MenuIcon } from "lucide-react"
import { MapPinIcon } from "lucide-react"
import { Star } from "lucide-react"
import Link from "next/link"
import { notFound } from "next/navigation"
import ServiceItem from "@/app/_components/service-item"
import PhoneItem from "@/app/_components/phone-item"
import { Sheet, SheetTrigger } from "@/app/_components/ui/sheet"
import SidebarButton from "@/app/_components/sidebar-sheet"

interface BarbershopPageProps {
  params: {
    id: string
  }
}

const BarbershopPage = async ({ params }: BarbershopPageProps) => {
  const barbershop = await db.barbershop.findUnique({
    where: {
      id: params.id,
    },
    include: {
      services: true,
    },
  })

  if (!barbershop) {
    return notFound()
  }

  return (
    <div>
      {/*IMAGEM*/}
      <div className="relative h-[250px] w-full">
        <Image
          alt={barbershop.name}
          src={barbershop?.imageUrl}
          fill
          className="object-cover"
        ></Image>

        <Button
          size="icon"
          variant="secondary"
          className="absolute left-4 top-4"
          asChild
        >
          <Link href="/">
            <ChevronLeftIcon />
          </Link>
        </Button>

        <Sheet>
          <SheetTrigger asChild>
            <Button
              size="icon"
              variant="outline"
              className="absolute right-4 top-4"
            >
              <MenuIcon></MenuIcon>
            </Button>
          </SheetTrigger>
          <SidebarButton></SidebarButton>
        </Sheet>
      </div>

      {/*TITLE*/}
      <div className="border-b border-solid p-5">
        <h1 className="mb-3 text-xl font-bold">{barbershop.name}</h1>
        <div className="mb-2 flex items-center gap-2">
          <MapPinIcon className="text-primary" size={18} />
          <p className="text-sm">{barbershop?.address}</p>
        </div>

        <div className="flex items-center gap-2">
          <Star className="fill-primary text-primary" size={18} />
          <p className="text-sm">5.0(400 avaliações)</p>
        </div>
      </div>

      {/* DESCRIÇÃO */}
      <div className="space-y-3 border-b border-solid p-5">
        <h2 className="font bold text-xs uppercase text-gray-400">Sobre nós</h2>
        <p className="text-justify text-sm">{barbershop?.description}</p>
      </div>

      {/*SERVICES*/}
      <div className="space-y-3 border-b border-solid p-5">
        <h2 className="font bold mb-4 text-xs uppercase text-gray-400">
          Serviços
        </h2>
        <div className="space-y-4">
          {barbershop.services.map((service) => (
            <ServiceItem
              key={service.id}
              barbershop={barbershop}
              service={service}
            />
          ))}
        </div>
      </div>

      {/*CONTATO*/}
      <div className="space-y-3 p-5">
        {barbershop.phones.map((phone) => (
          <PhoneItem key={phone} phone={phone} />
        ))}
      </div>
    </div>
  )
}

export default BarbershopPage
