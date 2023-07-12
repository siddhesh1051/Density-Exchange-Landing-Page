import Card from './Card'
import Proud from '../../assets/emoji/proud.png'

const Slider = () => {

    const cardData = {
        "cardData":[
            {"heading":"You argue with a colleague", "info":"You get angry and defensive, instead of staying open and working towards common ground" ,"bg":"bg-[#EFEBFF]"},
            {"heading":"You get a promotion at work", "info":"You question yourself and wonder when they will realize you are an unqualified imposter","bg":"bg-[#D9F2FF]"},
            {"heading":"You attend a class reunion", "info":"You reconnect with old friends and reminisce about the good times you shared during your school days.","bg":"bg-[#FFEFD5]"},
            {"heading":"You receive critical feedback", "info":"Instead of taking it constructively, you become defensive and dismissive, hindering personal growth.", "bg":"bg-[#EFEBFF]"},
{"heading":"You receive praise for your work", "info":"You struggle to accept compliments and downplay your achievements, underestimating your abilities.", "bg":"bg-[#D9F2FF]"},
{"heading":"You face a setback", "info":"Rather than seeing it as an opportunity to learn and grow, you feel discouraged and give up easily.", "bg":"bg-[#FFEFD5]"},
{"heading":"You collaborate on a project", "info":"You insist on having things done your way, disregarding the ideas and input of others.", "bg":"bg-[#EFEBFF]"},
{"heading":"You make a mistake", "info":"Instead of taking responsibility, you blame others and refuse to acknowledge your error.", "bg":"bg-[#D9F2FF]"},
{"heading":"You receive a promotion", "info":"You doubt your worthiness for the new role and fear not living up to expectations.", "bg":"bg-[#FFEFD5]"},
{"heading":"You receive an unexpected gift", "info":"You feel uncomfortable and unworthy of receiving such generosity.", "bg":"bg-[#EFEBFF]"}
          ]
       
    }

  return (
    <section className=' flex flex-col items-start justify-start mt-24 font-[Montserrat] w-full gap-4  '>
      <h1 className='md:px-40 flex text-4xl font-bold'>Does this sound familiar...</h1>
      <div className='flex overflow-hidden'>
{
        cardData.cardData.map((item,index)=>(
            <Card emote={Proud} bg={item.bg} heading={item.heading} info={item.info} key={index}/>

        ))
        
}
        </div>
    </section>
  )
}

export default Slider