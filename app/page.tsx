import { Hero } from "@/components/sections/Hero"
import { EnUnaFrase } from "@/components/sections/EnUnaFrase"
import { ComoFunciona } from "@/components/sections/ComoFunciona"
import { QueRecibe } from "@/components/sections/QueRecibe"
import { Niveles } from "@/components/sections/Niveles"
import { ParaAcademias } from "@/components/sections/ParaAcademias"
import { CtaFinal } from "@/components/sections/CtaFinal"

export default function Home() {
  return (
    <>
      <Hero />
      <EnUnaFrase />
      <ComoFunciona />
      <QueRecibe />
      <Niveles />
      <ParaAcademias />
      <CtaFinal />
    </>
  )
}
