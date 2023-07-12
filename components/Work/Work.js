import Boo from '../../assets/boo.svg'
import Image from 'next/image'



const Work = () => {


    const aboutcardData = 
         [
          { "heading": "You argue with a colleague", "info": "You get angry and defensive, instead of staying open and working towards common ground" },
          { "heading": "You get a promotion at work", "info": "You question yourself and wonder when they will realize you are an unqualified imposter"},
          { "heading": "You attend a class reunion", "info": "You reconnect with old friends and reminisce about the good times you shared during your school days."},
          { "heading": "You receive critical feedback", "info": "Instead of taking it constructively, you become defensive and dismissive, hindering personal growth." },
          { "heading": "You receive praise for your work", "info": "You struggle to accept compliments and downplay your achievements, underestimating your abilities." },
          { "heading": "You face a setback", "info": "Rather than seeing it as an opportunity to learn and grow, you feel discouraged and give up easily."},
          { "heading": "You collaborate on a project", "info": "You insist on having things done your way, disregarding the ideas and input of others."},
          { "heading": "You make a mistake", "info": "Instead of taking responsibility, you blame others and refuse to acknowledge your error."},
          { "heading": "You receive a promotion", "info": "You doubt your worthiness for the new role and fear not living up to expectations."},
          { "heading": "You receive an unexpected gift", "info": "You feel uncomfortable and unworthy of receiving such generosity." }
        ]
    
      
    return (
        <section className="md:px-40 flex justify-center items-center mt-36 font-[Montserrat]">
            <div className="bg-[#F3F1FF] w-[90%] h-full md:h-[90vh] rounded-3xl flex px-12 pt-20  gap-2">
                <div className="flex flex-1 flex-col  ">
                    <div className="flex">
                        <h1 className="text-4xl text-black font-bold">Work with us</h1>
                    </div>
                    <div className="flex flex-col bg-white rounded-3xl gap-1 h-[60vh] mt-6">
                        <div className="flex flex-[0.7] flex-col px-6 py-4 ">
                        <Image
                            src={Boo}
                            width={100}
                            height={100}
                            alt="hero"
                            className='-ml-5'
                            />
                        <h2 className='text-start text-[#363636] text-xl font-semibold'>About</h2>
                        <p className='text-start text-[#535353] font-semibold'>At ahead our goal is to make self-improvement dun and lasting. We know there's a way how to make it work. And that's what aHead is all about!    </p>



                        </div>
                        <div className="flex flex-[0.3] flex-col p-2 bg-[#FEF6F0] rounded-3xl gap-1 px-6 py-4">
                        <h2 className='text-start text-[#363636] text-xl font-semibold'>Product</h2>
                        <p className='text-start text-[#535353] font-semibold'>Sure, you could spend ages reading books or sitting in seminars on how to become a better spouse, parent, or manager-like we did... </p>
                        </div>
                    </div>
                </div>

                <div className="flex flex-1 flex-col">
                    <div className="flex items-center justify-end">
                    <h1 className="text-4xl text-[#6B4DEE] text-end font-bold">ahead</h1>
                    </div>
                    <div className="flex flex-col overflow-y-scroll">
                        {
                            aboutcardData.map((item,index)=>(
                                <AboutCard heading={item.heading} info={item.info} key={index}/>
                            ))
                        }
                    </div>
                </div>








            </div>
        </section>
    )
}

export default Work
