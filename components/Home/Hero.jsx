export default function Hero() {
  return (
    <div className="relative sm:mt-[220px] mt-[160px] sm:mb-[120px] mb-0">
      <img
        className="absolute -top-16 left-44"
        src="/Home/Line1.svg"
        alt="Line1"
      />
      <img
        className="absolute lg:top-16 top-36 left-44 sm:block hidden"
        src="/Home/Line2.svg"
        alt="Line2"
      />
      <img
        className="absolute lg:top-48 top-72 right-44"
        src="/Home/Line3.svg"
        alt="Line3"
      />
      <img
        className="absolute -top-16 right-44 sm:block hidden"
        src="/Home/Line4.svg"
        alt="Line4"
      />
      <div className="flex flex-col gap-8">
        <div className="flex flex-col items-center justify-center gap-5">
          <div className="sm:w-auto w-[300px] text-center px-8 py-2.5 sm:rounded-3xl rounded-full border-[1.5px] border-solid border-[#9f9f9f] border-b-[#7b7a7a] border-r-[#939191] border-l-[#939191] text-[#9f9f9f]">
            Thakur College of Engineering and Technology
          </div>
          <div className="font-bold md:text-6xl sm:text-5xl text-4xl text-center">
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-45% from-[#dfdede] to-[#3a3a3a]">
              Google Developer Students Clubs
            </span>
          </div>
        </div>
        <div className="flex gap-3 items-center justify-center text-[#C2C2C2] font-light text-xl">
          Learn
          <img className="w-4 h-4" src="/Home/learn-connect.svg" alt="Learn" />
          Connect
          <img className="w-4 h-4" src="/Home/connect-grow.svg" alt="Grow" />
          Grow
        </div>
      </div>
    </div>
  );
}
