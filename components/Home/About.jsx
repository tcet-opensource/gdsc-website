export default function About() {
  return (
    <div className="sm:bg-[url('/Home/AboutBG.svg')] bg-none bg-no-repeat xl:bg-no-repeat md:bg-repeat 2xl:bg-repeat pt-24 sm:pb-40 pb-20 flex justify-center sm:mt-[130px] mt-0">
    <div className="flex xl:flex-row flex-col gap-14 justify-center xl:max-w-[1150px] ">
      <div className="flex flex-col xl:items-start items-center gap-6">
        <div className="font-bold sm:text-5xl text-3xl">About GDSC-TCET</div>
        <div className="text-[#b1b1b1] sm:text-xl text-lg font-normal sm:w-[545px] w-[320px] xl:text-left text-center">
          GDSC TCET (Google Developer Student Clubs TCET) is a student community
          affiliated with Google that aims to foster collaboration, learning,
          and innovation among the students. GDSC TCET is part of the larger
          Google Developer Student Clubs program, which exists in universities
          and colleges around the world. The primary goal of GDSC TCET is to
          provide a platform for students to develop their technical skills,
          explore new technologies, and gain practical experience in various
          fields of computer science and engineering. The club organizes
          workshops, coding competitions, hackathons, tech talks, and other
          events to facilitate knowledge sharing and skill-building.
        </div>
        <a
          href="#"
          className="text-center border-[1px] border-solid border-white rounded-3xl px-7 py-2 bg-gradient-to-r from-black to-[#333131] w-fit"
        >
          Read more {">"}
        </a>
      </div>
      <div className="relative">
        <img className="rounded-xl border-[1px] border-white sm:h-[450px] h-[320px] w-full object-cover" src="/Home/image1.png" alt="gdscImg" />
        <span className="absolute bottom-10 left-[38%] text-bold text-2xl">GDSC 23-24</span>
      </div>
    </div>
    </div>
  );
}
