import Link from "next/link"


export default function Home(){
  return (
    <>
    <h1>Inicio</h1>
    <Link href="/about">Ir a nosotros</Link>
    </>
  )
}