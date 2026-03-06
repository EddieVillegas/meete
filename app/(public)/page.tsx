import { Metadata } from "next"

import Hero from "@/components/ui/Hero"

export const metadata: Metadata = {
  title: "Meeti - Home"
}

export default function Home(){
  return (
    <>
    <Hero/>
    </>
  )
}
