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
      <section style={{padding: '60px 20px', background: '#f8f9fc'}}>
        <h2 style={{textAlign: 'center', fontFamily: 'serif', fontSize: '2rem', marginBottom: '8px', color: '#1a1d3a'}}>Take Our Free Level Test</h2>
        <p style={{textAlign: 'center', color: '#7a8099', marginBottom: '32px'}}>Find out your English level in 10 minutes</p>
        <iframe src="https://write2improve-level-test.netlify.app" width="100%" height="900px" style={{border: 'none', borderRadius: '16px'}} title="Write2Improve Level Test" />
      </section>
      <CtaFinal />
    </>
  )
}
