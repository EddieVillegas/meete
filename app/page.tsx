import Link from "next/link"
import Sidebar from "@/components/Sidebar"

export default function Home(){
  return (
    <>
    <h1>Inicio</h1>
    <Link href="/about">Ir a nosotros</Link>
    <Sidebar/>
    </>
  )
}