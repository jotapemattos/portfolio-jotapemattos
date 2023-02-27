const HomeContent = () => {
  return (
    <div className="flex h-main">
      <div className="w-left h-full"></div>
      <div className="w-center h-full flex flex-col items-center justify-around">
        <div className="w-4/5 h-2/3 flex flex-col py-10 px-24 gap-6">
          <h4 className="text-contrast-color text-base font-main">Hi there, I'm</h4>
          <h1 className="text-6xl text-slate-300 font-extrabold font-poppins">João Pedro Mattos.</h1>  
          <h2 className="text-5xl text-indigo-300 font-extrabold font-poppins">Digital Craftsman.</h2>
          <h3 className="text-xl text-indigo-300 font-extrabold font-poppins">Frontend Developer</h3>
          <div className="mt-20 h-auto">
            <a href="#" className="border-2 border-contrast-color py-4 px-8 rounded-md text-lg text-contrast-color cursor-pointer hover:bg-contrast-color/20 transition-colors duration-200">Checkout my resume!</a>
          </div>
        </div>
      </div>
      <div className="w-right h-full"></div>
    </div>
  )
}

export default HomeContent