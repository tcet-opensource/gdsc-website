import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import teamObject from "@/data/Team/teamObject";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

function CarouselDemo() {
  const imageArray = [
    "/Team/mobile-team/Frame1.svg",
    "/Team/mobile-team/Frame2.svg",
    "/Team/mobile-team/Frame3.svg",
  ];
  return (
    <Carousel
      opts={{
        align: "start",
        loop: true,
      }}
      className="w-full bg-transparent"
    >
      <CarouselContent className="bg-transparent">
        {imageArray.map((index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <Card className="w-full h-full bg-transparent border-0">
                <CardContent className="flex aspect-video bg-transparent items-center justify-center mx-auto">
                  <Image
                    src={index}
                    alt="Team Member"
                    width={0}
                    height={0}
                    className="object-cover h-full w-full rounded-xl items-center"
                  />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
const page = () => {
  const teamDataObject = teamObject;
  return (
    <div className="flex flex-col mb-0">
      <div className="relative mt-0 sm:mt-[120px] sm:mb-[200px]">
        <img
          src="/Team/Frame14.svg"
          className="w-full absolute sm:block hidden"
          alt="Line1"
        />
        <div className="flex flex-col mt-36 sm:mt-56 gap-8 ">
          <div className="flex flex-col items-center justify-center gap-5">
            <div className="block sm:hidden">
              <CarouselDemo />
            </div>
            <div className="sm:w-auto w-[300px] text-center px-8 py-2.5 sm:rounded-3xl rounded-full border-[1.5px] border-solid border-[#9f9f9f] border-b-[#7b7a7a] border-r-[#939191] border-l-[#939191] text-[#9f9f9f]">
              GDSC-TCET
            </div>
            <div className="font-bold md:text-6xl sm:text-5xl text-4xl text-center">
              <span className="text-transparent bg-clip-text bg-gradient-to-b from-45% from-[#dfdede] to-[#3a3a3a]">
                Meet The Team
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center gap-10 mt-12 sm:mt-36 px-4 sm:px-0">
        <Tabs
          defaultValue="Leads"
          className="w-full max-w-5xl relative bg-transparent"
        >
          <TabsList className="bg-transparent justify-center gap-6 flex-wrap hidden sm:flex">
            {Object.keys(teamDataObject).map((team) => (
              <TabsTrigger
                key={team}
                value={team}
                className="rounded-3xl bg-gradient-to-r from-[teambuttonfrom] to-[teambuttonto] px-4 py-2"
              >
                {team}
              </TabsTrigger>
            ))}
          </TabsList>
          <TabsList className="bg-transparent justify-center gap-6 flex-wrap block sm:hidden mb-16 mx-auto ">
            {Object.keys(teamDataObject).map((team) => (
              <TabsTrigger
                key={team}
                value={team}
                className="rounded-3xl bg-gradient-to-r from-[teambuttonfrom] to-[teambuttonto] px-4 py-2"
              >
                {team}
              </TabsTrigger>
            ))}
          </TabsList>
          {Object.keys(teamDataObject).map((team) => (
            <TabsContent
              key={team}
              value={team}
              className="items-center rounded-lg mt-8"
            >
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {teamDataObject[team].map((member) => (
                  <Card
                    key={member}
                    className="h-[436px] w-full bg-[#03050C] mx-auto"
                  >
                    <CardContent>
                      <div className="grid gap-9 pt-[22px] pr-[25px] pl-[25px] pb-[22px] justify-center">
                        <div className="flex-col relative w-full h-[221px] border-[#393939] border-[3px] rounded-lg">
                          <img
                            src="/Team/image8.png"
                            alt="Team member"
                            className="rounded-lg absolute w-full h-full object-cover border-[#393939]"
                          />
                          <div className="absolute bottom-7 left-2 right-0 z-10 text-start">
                            <div className="font-medium text-white">
                              {member["name"]}
                            </div>
                            <div className="text-sm text-transparent bg-clip-text bg-gradient-to-b from-45% from-[#dfdede] to-[#3a3a3a]">
                              {member["role"]}
                            </div>
                          </div>
                        </div>
                        <div className="text-sm mx-auto text-transparent justify-center text-center w-[200px] h-[54px] bg-clip-text bg-gradient-to-b from-45% from-[#dfdede] to-[#3a3a3a]">
                          {member["quote"]}
                        </div>
                        <div className="grid grid-cols-5 gap-[14px] w-[158px] h-[24px] mx-auto items-center">
                          <img src="Team/Vectorgithub.svg" alt="GitHub" />
                          <img src="Team/Vectorseperate.svg" alt="Seperate" />
                          <img src="Team/Vectorinstagram.svg" alt="Instagram" />
                          <img src="Team/Vectorseperate.svg" alt="Seperate" />
                          <img src="Team/VectorX.svg" alt="X" />
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </div>
  );
};

export default page;
