'use client'

import Image from "next/image"
import Boo from "../assets/boo.svg"
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

const Steps = () => {
  return (
    <section className="md:px-40 flex flex-col mt-28 justify-center items-start font-[Montserrat] w-[80%]">
      <p className='text-md font-medium text-[#535353] '>Wrong with self-improvement & how we're fixing it.</p>
      <div className='flex'>

        <h1 className='text-4xl font-bold  text-black mt-4 inline'>Self Improvement. Ugh.</h1>
        <Image
          src={Boo}
          width={80}
          height={80}
          alt="boo"
          className='inline rounded-full rotate-[8deg] opacity-90'
        />

      </div>

      <div className="flex flex-col w-full ">
        <VerticalTimeline
          layout={'1-column-left'}
          lineColor={"#C3B6F9"}
        >

          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            contentStyle={{ background: '#FAF8FF', borderBottom: 'none ', borderRadius:'15px'}}
            iconStyle={{ background: 'rgb(45, 30, 99)', color: '#000' }}
            icon={"🧠"}
            iconClassName='flex justify-center items-center '

          >
            <h3 className="vertical-timeline-element-title text-black font-semibold text-lg ">It’s not as easy as 1-2-3.</h3>
            <h4 className="vertical-timeline-element-subtitle text-[#535353] font-medium text-sm">The journey of change may be long, but our sessions are quick. We get to the point and tell you what you want to know (and nothing else).</h4>
           
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--education "
            contentStyle={{ background: '#FAF8FF', borderBottom: 'none ', borderRadius:'15px'}}
            iconStyle={{ background: 'rgb(45, 30, 99)', color: '#000' }}
            icon={"🏋️"}
            iconClassName='flex justify-center items-center '
          >
            <h3 className="vertical-timeline-element-title text-black font-semibold text-lg ">Old habits are hard to break.</h3>
            <h4 className="vertical-timeline-element-subtitle text-[#535353] font-medium text-sm">And bad behaviors die hard. Fortunately, we give you great, science-backed techniques to use (instead of shouting at your boss).</h4>
            
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--education "
            contentStyle={{ background: '#FAF8FF', borderBottom: 'none ', borderRadius:'15px'}}
            iconStyle={{ background: 'rgb(45, 30, 99)', color: '#000' }}
            icon={"💡"}
            iconClassName='flex justify-center items-center '
          >
            <h3 className="vertical-timeline-element-title text-black font-semibold text-lg ">You and your motivation don’t have a long-term relationship.</h3>
            <h4 className="vertical-timeline-element-subtitle text-[#535353] font-medium text-sm">Luckily, we can proactively prepare you for the marathon, not just the race. Effective, memorable exercises.</h4>
            
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--education "
            contentStyle={{ background: '#FAF8FF', borderBottom: 'none ', borderRadius:'15px'}}
            iconStyle={{ background: 'rgb(45, 30, 99)', color: '#000' }}
            icon={"📖"}
            iconClassName='flex justify-center items-center '
          >
            <h3 className="vertical-timeline-element-title text-black font-semibold text-lg ">Books just don’t offer practical solutions.</h3>
            <h4 className="vertical-timeline-element-subtitle text-[#535353] font-medium text-sm">Remember when you learned to ride a bike just by reading? Yeah, we don’t either. We help you take concrete small steps towards your goals.</h4>
            
          </VerticalTimelineElement>

        </VerticalTimeline>

      </div>

    </section>
  )
}

export default Steps
