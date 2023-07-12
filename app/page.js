import Hero from '@/components/Hero'
import Section2 from '@/components/Section2'
import Slider from '@/components/Slider/Slider'
import Nav from '../components/Nav'

export default function Home() {
  return (
    <main className="flex flex-col justify-center items-center">
      <Nav/>
      <Hero/>
      <Section2/>
      <Slider/>
    
    </main>
  )
}
