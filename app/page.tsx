import Header from "./_components/header"
import { Input } from "./_components/ui/input"
import { Button } from "./_components/ui/button"
import { EyeIcon, Footprints, FootprintsIcon, SearchIcon } from "lucide-react"
import Image from "next/image"
import Banner from "../public/banner-01.png"
import { Card, CardContent } from "./_components/ui/card"
import { Badge } from "./_components/ui/badge"
import { Avatar, AvatarImage } from "./_components/ui/avatar"
import { db } from "./_lib/primsa"
import BarbershopItem from "./_components/barbershop-item"

const Home = async () => {
  const barbershops = await db.barbershop.findMany({})
  const popularBarbershops = await db.barbershop.findMany({
    orderBy: {
      name: "desc",
    },
  })

  return (
    <div>
      <Header></Header>
      <div className="p-5">
        {/* TEXTO */}
        <h2 className="text-xl font-bold">Olá, Matheus!</h2>
        <p>Segunda-feira, 05 de agosto.</p>

        {/*BUSCA*/}
        <div className="mt-6 flex items-center gap-2">
          <Input placeholder="Faça sua busca.."></Input>
          <Button size="icon">
            <SearchIcon></SearchIcon>
          </Button>
        </div>

        {/*BUSCA RAPIDA*/}

        <div className="mt-6 flex gap-3 overflow-x-scroll [&::-webkit-scrollbar]:hidden">
          <Button className="gap-2" variant="secondary">
            <Image alt="Cabelo" src="/cabelo.svg" width={16} height={16} />
            Cabelo
          </Button>

          <div className="flex gap-3">
            <Button className="gap-2" variant="secondary">
              <Image alt="Barba" src="/barba.svg" width={16} height={16} />
              Barba
            </Button>
          </div>

          <div className="flex gap-3">
            <Button className="gap-2" variant="secondary">
              <Image
                alt="Acabamento"
                src="/acabamento.svg"
                width={16}
                height={16}
              />
              Acabamento
            </Button>
          </div>

          <div className="flex gap-3">
            <Button className="gap-2" variant="secondary">
              <FootprintsIcon size={16} />
              Pezinho
            </Button>
          </div>

          <div className="flex gap-3">
            <Button className="gap-2" variant="secondary">
              <EyeIcon />
              Sobrancelha
            </Button>
          </div>
        </div>

        {/*IMGAGEM*/}
        <div className="relative mt-6 h-[150px] w-full">
          <Image
            alt="Agente nos melhores com FSW Barber"
            src={Banner}
            fill
            className="rounded-xl object-cover"
          />
        </div>

        {/*AGENDAMENTO*/}
        <h2 className="mb-3 mt-6 text-xs font-bold uppercase text-gray-400">
          Agendamento
        </h2>
        <Card>
          <CardContent className="flex justify-between p-0">
            {/*ESQUERDA*/}
            <div className="flex flex-col gap-2 py-5 pl-5">
              <Badge className="w-fit">Confirmado</Badge>
              <h3 className="font-semibold">Corte de Cabelo</h3>
              <div className="flex items-center gap-2">
                <Avatar className="h-6 w-6">
                  <AvatarImage src="https://utfs.io/f/c97a2dc9-cf62-468b-a851-bfd2bdde775f-16p.png"></AvatarImage>
                </Avatar>
                <p className="text-sm">Barbearia FSW</p>
              </div>
            </div>

            {/*Direita*/}
            <div className="flex flex-col items-center justify-center border-l-2 border-solid px-5">
              <p className="text-sm">Agosto</p>
              <p className="text-2xl">05</p>
              <p className="text-sm">20:00</p>
            </div>
          </CardContent>
        </Card>

        <h2 className="mb-3 mt-6 text-xs font-bold uppercase text-gray-400">
          Recomendados
        </h2>
        <div className="flex gap-4 overflow-auto [&::-webkit-scrollbar]:hidden">
          {barbershops.map((barbershop) => (
            <BarbershopItem key={barbershop.id} barbershop={barbershop} />
          ))}
        </div>

        <h2 className="mb-3 mt-6 text-xs font-bold uppercase text-gray-400">
          Populares
        </h2>
        <div className="flex gap-4 overflow-auto [&::-webkit-scrollbar]:hidden">
          {popularBarbershops.map((barbershop) => (
            <BarbershopItem key={barbershop.id} barbershop={barbershop} />
          ))}
        </div>
      </div>
      <footer>
        <Card>
          <CardContent className="px-5 py-6">
            <p className="text-sm text-gray-400">
              ©2024 Copyright <span className="font-bold"> FSW Barber</span>
            </p>
          </CardContent>
        </Card>
      </footer>
    </div>
  )
}

export default Home
