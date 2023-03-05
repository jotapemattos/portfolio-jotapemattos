import SocialMedia from "./SocialMedia"

const HomeContent = () => {
  return (
    <div className="flex justify-center items-start min-h-full h-full w-full md:mt-0">
      <div className="w-full lg:w-center h-full md:h-full flex flex-col items-center justify-center md:justify-around mt-20">
        <div className="md:w-4/5 h-2/3 flex flex-col items-center md:items-start md:py-14 xl:py-14 md:px-16 lg:px-10 gap-6 md:ml-0 lg:ml-0 xl:ml-36 md:mt-10">
          <h1 className="text-4xl md:text-6xl text-slate-300 font-extrabold font-main w-4/5 md:w-full">João Pedro Mattos.</h1>  
          <h2 className="text-3xl md:text-5xl text-indigo-300 font-extrabold font-main w-4/5 md:w-full">Digital Craftsman.</h2>
          <h3 className="text-xl md:text-xl text-indigo-300 font-extrabold font-main w-4/5 md:w-full">Front-end Developer</h3>
          <div className="mt-20 h-auto">
            <a href="#" target="_blank" className="border border-contrast-color py-4 px-8 rounded-sm text-base text-contrast-color cursor-pointer hover:bg-contrast-color/20 transition-colors duration-200">Check out my resume!</a>
          </div>
        </div>
      </div>
      <div className="hidden lg:flex"><SocialMedia/></div>
    </div>
  )
}

export default HomeContent