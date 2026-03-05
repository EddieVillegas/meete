import { Metadata } from "next"

import Link from "next/link"
import Sidebar from "@/components/Sidebar"

export const metadata: Metadata = {
  title: "Meeti - Home"
}

export default function Home(){
  return (
    <>
    <h1>Inicio</h1>
    <Link href="/about">Go to about</Link>
    <Sidebar/>
    </>
  )
}
