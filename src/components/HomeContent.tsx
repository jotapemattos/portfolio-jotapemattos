import SocialMedia from "./SocialMedia"

const HomeContent = () => {
  return (
    <div className="flex justify-center h-full min-h-full w-full">
      <div className="w-center h-full flex flex-col items-center justify-around">
        <div className="w-4/5 h-2/3 flex flex-col py-10 px-24 gap-6 ml-36 mt-10">
          <h1 className="text-6xl text-slate-300 font-extrabold font-poppins">João Pedro Mattos.</h1>  
          <h2 className="text-5xl text-indigo-300 font-extrabold font-poppins">Digital Craftsman.</h2>
          <h3 className="text-xl text-indigo-300 font-extrabold font-poppins">Front-end Developer</h3>
          <div className="mt-20 h-auto">
            <a href="#" target="_blank" className="border border-contrast-color py-4 px-8 rounded-sm text-base text-contrast-color cursor-pointer hover:bg-contrast-color/20 transition-colors duration-200">Check out my resume!</a>
          </div>
        </div>
      </div>
      <SocialMedia/>
    </div>
  )
}

export default HomeContent