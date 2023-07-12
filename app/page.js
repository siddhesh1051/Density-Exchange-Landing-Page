import Hero from '@/components/Hero'
import Section2 from '@/components/Section2'
import Slider from '@/components/Slider/Slider'
import Nav from '../components/Nav'
import Appbanner from '@/components/Appbanner'
import Steps from '../components/Steps';
import Bebest from '@/components/Bebest'
import Procedure from '@/components/Procedure'

export default function Home() {
  return (
    <main className="flex flex-col justify-center items-center">
      <Nav/>
      <Hero/>
      <Section2/>
      <Slider/>
      <Appbanner/>
      <Steps/>
      <Bebest/>
      <Procedure/>
    
    </main>
  )
}
