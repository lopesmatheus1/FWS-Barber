import { Card, CardContent } from "./ui/card"
const Footer = () => {
  return (
    <Card>
      <CardContent className="px-5 py-6">
        <p className="text-sm text-gray-400">
          ©2024 Copyright <span className="font-bold"> FSW Barber</span>
        </p>
      </CardContent>
    </Card>
  )
}

export default Footer
