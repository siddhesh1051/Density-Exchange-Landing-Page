
const Vacancy = () => {
    return (
        <section className="md:px-40 flex  mt-24 font-[Montserrat] flex-col w-[85%] gap-8">
            <div className='flex justify-start items-start'>
                <h1 className='text-4xl font-bold text-black ml-2 '>Open Vacancies</h1>
            </div>
            <div className='flex justify-center items-center gap-4'>
                <div className='flex flex-[0.33] flex-col bg-[#FEFBEC] rounded-xl px-6 py-8'>
                    <h1 className='text-lg font-bold text-black '>Senior Engineer</h1>
                    <ul className="list-disc">
                        <li className="ml-4 text-sm font-semibold text-[#535353]">Full Time Position</li>
                        <li className="ml-4 text-sm font-semibold text-[#535353]">Berlin</li>
                        <li className="ml-4 text-sm font-semibold text-[#535353]">€65-85k</li>
                    </ul>
                </div>
                <div className='flex flex-[0.33] flex-col bg-[#FEFBEC] rounded-xl px-6 py-8'>
                    <h1 className='text-lg font-bold text-black '>Senior Designer</h1>
                    <ul className="list-disc">
                        <li className="ml-4 text-sm font-semibold text-[#535353]">Full Time Position</li>
                        <li className="ml-4 text-sm font-semibold text-[#535353]">Remote</li>
                        <li className="ml-4 text-sm font-semibold text-[#535353]">€45-65k</li>
                    </ul>
                </div>
                <div className='flex flex-[0.33] flex-col bg-[#FEFBEC] rounded-xl px-6 py-8'>
                    <h1 className='text-lg font-bold text-black '>Superstar Intern</h1>
                    <ul className="list-disc">
                        <li className="ml-4 text-sm font-semibold text-[#535353]">Part Time Position</li>
                        <li className="ml-4 text-sm font-semibold text-[#535353]">England</li>
                        <li className="ml-4 text-sm font-semibold text-[#535353]">€40-50k</li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default Vacancy
