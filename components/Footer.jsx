import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="mt-12 pb-4 relative">
      <img
        className="hidden absolute -top-56 h-[450px]"
        src="Home/EllipseGrad2.svg"
        alt="Ellipse"
      />
      <footer className="bg-black text-white border-t-[1px] border-t-solid border-[#494949]">
        <div className="container mx-auto py-8">
          <div className="flex flex-col gap-4 lg:flex-row lg:justify-between lg:items-start items-center">
            <div className="flex flex-col lg:items-start items-center gap-4">
              <h1 className="text-2xl font-bold">GDSC-TCET</h1>
              <p className="text-sm">Google Developer Student Clubs - TCET</p>
            </div>
            <div className="flex flex-col lg:items-start items-center gap-4">
              <h1 className="text-xl font-bold">Contact</h1>
              <p className="text-sm">
                Thakur College of Engineering and Technology
              </p>
              <p className="text-sm">Kandivali, Mumbai</p>
              <p className="text-sm">Maharashtra, India</p>
            </div>
            <div className="flex flex-col lg:items-start items-center gap-4">
              <h1 className="text-xl font-bold">Social</h1>
              <div className="flex gap-4">
                <a
                  href="https://www.instagram.com/dsc.tcet/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaInstagram size={24} />
                </a>
                <a
                  href="https://in.linkedin.com/company/dsc-tcet"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaLinkedin size={24} />
                </a>
                <a
                  href="https://github.com/DSC-TCET"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaGithub size={24} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
