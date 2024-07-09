import Image from "next/image"
import foodImage from '@/public/icons/foodimageauth.jpg'

export default function FoodieLogo() {
  return (
      <Image src={foodImage} className="object-center rounded-br-2xl rounded-tr-2xl h-full" alt="foodielogo" />
  )
}
