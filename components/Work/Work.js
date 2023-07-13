// import Boo from '../../public/assets/boo.svg'
import AboutCard from './AboutCard'
import Image from 'next/image'



const Work = () => {


    const aboutcardData =
        [
            {
                "heading": "Power through, even when the going gets tough", "info": "We help you spot and work around whatever stands in the way, be it bad habits, fears etc."
            },
            {
                "heading": "Learn more about who you are and where you want to go", "info": "We ask the right questions to help you better understand why you do things the way you do"
            },

            {
                "heading": "Embrace challenges and overcome obstacles with resilience",
                "info": "Discover effective strategies to tackle difficult situations head-on and come out stronger than ever."
            },
            {
                "heading": "Uncover your true potential and chart your path to success",
                "info": "Gain insights into your strengths and passions, empowering you to set clear goals and achieve them."
            },
            {
                "heading": "Breaking free from limitations and reaching new heights",
                "info": "Equip yourself with the tools and mindset necessary to push beyond your boundaries and achieve greatness."
            },
            {
                "heading": "Understanding your fears and transforming them into opportunities",
                "info": "Explore the root causes of your fears and learn how to harness them as catalysts for personal growth and achievement."
            },
            {
                "heading": "Navigating through self-defeating habits and forging new, empowering ones",
                "info": "Identify detrimental habits that hinder your progress and replace them with positive, productive behaviors that propel you forward."
            },
            {
                "heading": "Unlocking self-awareness to unlock your potential",
                "info": "Delve into the depths of self-discovery to gain a profound understanding of yourself and unlock your limitless potential."
            },
            {
                "heading": "Conquering self-doubt and cultivating unshakable self-belief",
                "info": "Develop the confidence and self-assurance needed to overcome self-doubt and unleash your true capabilities."
            },
            {
                "heading": "Discovering your purpose and designing a fulfilling life",
                "info": "Uncover your life's purpose and create a meaningful existence aligned with your values, passions, and aspirations."
            },
            {
                "heading": "Building resilience in the face of adversity and setbacks",
                "info": "Develop the mental and emotional strength to bounce back from challenges, setbacks, and failures, emerging stronger than ever."
            }
        ]


    return (
        <section className="md:px-40 flex justify-center items-center mt-36 font-[Montserrat]">
            <div className="bg-[#F3F1FF] w-[90%] h-full md:h-[90vh] rounded-3xl flex px-12 pt-20  pb-8 gap-12">
                <div className="flex flex-1 flex-col  ">
                    <div className="flex">
                        <h1 className="text-4xl text-black font-bold">Work with us</h1>
                    </div>
                    <div className="flex flex-col bg-white rounded-3xl gap-1 h-[60vh] mt-6">
                        <div className="flex flex-[0.7] flex-col px-6 py-4 ">
                            <Image
                                src='/assets/boo.svg'
                                width={100}
                                height={100}
                                alt="boo"
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

                <div className="flex flex-1 flex-col justify-end">
                    <div className="flex items-center justify-end">
                        <h1 className="text-4xl text-[#6B4DEE] text-end font-bold">ahead</h1>
                    </div>
                    <div className="flex flex-col overflow-y-scroll  py-8 w-full px-4 mt-4">
                        {
                            aboutcardData.map((item, index) => (
                                <AboutCard heading={item.heading} info={item.info} key={index} />
                            ))
                        }
                    </div>
                </div>








            </div>
        </section>
    )
}

export default Work
