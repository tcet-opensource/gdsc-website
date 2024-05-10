import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const page = () => {
  const teamData = [
    "Leads",
    "Technical",
    "Secretariat",
    "Logistics",
    "Event",
    "Marketing",
    "Press",
    "Outreach",
  ];
  return (
    <div className="flex flex-col mb-0">
      <div className="relative  mt-0 sm:mt-[120px] sm:mb-[200px]">
        <img
          src="/Team/Frame14.svg "
          className=" w-full absolute sm:block hidden"
          alt="Line1"
        />
        <div className="flex flex-col mt-56 gap-8 ">
          <div className="flex flex-col items-center justify-center gap-5">
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
      <div className="flex  ml-14 gap-10 mt-36 ">
        <Tabs
          defaultValue="Leads"
          className="w-[400px] relative bg-transparent w-full "
        >
          <TabsList className="bg-transparent justify-end gap-6">
            <TabsTrigger
              value="Leads"
              className="rounded-3xl rounded-full  bg-gradient-to-r from-[teambuttonfrom] to-[teambuttonto]"
            >
              Leads
            </TabsTrigger>
            <TabsTrigger
              value="Technical"
              className="rounded-3xl rounded-full  bg-gradient-to-r from-[teambuttonfrom] to-[teambuttonto]"
            >
              Technical
            </TabsTrigger>
            <TabsTrigger
              value="Secretariat"
              className="rounded-3xl rounded-full  bg-gradient-to-r from-[teambuttonfrom] to-[teambuttonto]"
            >
              Secretariat
            </TabsTrigger>
            <TabsTrigger
              value="Logistics"
              className="rounded-3xl rounded-full  bg-gradient-to-r from-[teambuttonfrom] to-[teambuttonto]"
            >
              Logistics
            </TabsTrigger>
            <TabsTrigger
              value="Event"
              className="rounded-3xl rounded-full  bg-gradient-to-r from-[teambuttonfrom] to-[teambuttonto]"
            >
              Event
            </TabsTrigger>
            <TabsTrigger
              value="Marketing"
              className="rounded-3xl rounded-full  bg-gradient-to-r from-[teambuttonfrom] to-[teambuttonto]"
            >
              Marketing
            </TabsTrigger>
            <TabsTrigger
              value="Press"
              className="rounded-3xl rounded-full  bg-gradient-to-r from-[teambuttonfrom] to-[teambuttonto]"
            >
              Press
            </TabsTrigger>
            <TabsTrigger
              value="Outreach"
              className="rounded-3xl rounded-full  bg-gradient-to-r from-[teambuttonfrom] to-[teambuttonto]"
            >
              Outreach
            </TabsTrigger>
          </TabsList>
          <TabsContent value="Leads" className=" items-center  rounded-lg ">
            <div className="grid grid-cols-3 gap-40 ml-14 mt-36 mr-14 mb-8 ">
              {teamData.map((team) => (
                <Card
                  x-chunk="dashboard-01-chunk-3"
                  key={team}
                  className="h-[436px] w-[346px] bg-[#03050C]"
                >
                  <CardContent>
                    <div className="grid gap-9 pt-[22px] pr-[25px] pl-[25px] pb-[22px] justify-center">
                      <div className="flex-col relative  w-[289px] h-[221px] border-[#393939] border-[3px] rounded-lg">
                        <img
                          src="/Team/image8.png"
                          alt="Team member"
                          className="rounded-lg absolute z-0 border-[#393939]"
                        />
                        <div className="absolute bottom-7 left-2 right-0 z-10 text-start">
                          <div className="font-medium text-white">
                            Vansh Baghel
                          </div>
                          <div className="text-sm text-transparent bg-clip-text bg-gradient-to-b from-45% from-[#dfdede] to-[#3a3a3a]">
                            Lead
                          </div>
                        </div>
                      </div>
                      <div className="text-sm mx-auto text-transparent justify-center  text-center w-[200px] h-[54px] bg-clip-text bg-gradient-to-b from-45% from-[#dfdede] to-[#3a3a3a]">
                        “ Growth is painful, but what is worse is staying the
                        same.“
                      </div>
                      <div className="grid grid-cols-5 gap-[14px] w-[158px] h-[24px] mx-auto  items-center">
                        <div className="">
                          <img src="Team/Vectorgithub.svg"></img>
                        </div>
                        <div className="">
                          <img src="Team/Vectorseperate.svg"></img>
                        </div>
                        <div className="">
                          <img src="Team/Vectorinstagram.svg"></img>
                        </div>
                        <div className="">
                          <img src="Team/Vectorseperate.svg"></img>
                        </div>
                        <div className="">
                          <img src="Team/VectorX.svg"></img>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
              {/* Add more cards as needed */}
            </div>
          </TabsContent>
          <TabsContent
            value="Technical"
            className="fle items-center  rounded-lg "
          >
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3  ml-14 mt-36 mr-14 mb-8">
              {teamData.map((team) => (
                <Card
                  x-chunk="dashboard-01-chunk-3"
                  key={team}
                  className="h-[436px] w-[346px] bg-[#03050C]"
                >
                  <CardContent>
                    <div className="grid gap-9 pt-[22px] pr-[25px] pl-[25px] pb-[22px] justify-center">
                      <div className="flex-col relative  w-[289px] h-[221px] border-[#393939] border-[3px] rounded-lg">
                        <img
                          src="/Team/image8.png"
                          alt="Team member"
                          className="rounded-lg absolute z-0 border-[#393939]"
                        />
                        <div className="absolute bottom-7 left-2 right-0 z-10 text-start">
                          <div className="font-medium text-white">
                            Vansh Baghel
                          </div>
                          <div className="text-sm text-transparent bg-clip-text bg-gradient-to-b from-45% from-[#dfdede] to-[#3a3a3a]">
                            Lead
                          </div>
                        </div>
                      </div>
                      <div className="text-sm mx-auto text-transparent justify-center  text-center w-[200px] h-[54px] bg-clip-text bg-gradient-to-b from-45% from-[#dfdede] to-[#3a3a3a]">
                        “ Growth is painful, but what is worse is staying the
                        same.“
                      </div>
                      <div className="grid grid-cols-5 gap-[14px] w-[158px] h-[24px] mx-auto  items-center">
                        <div className="">
                          <img src="Team/Vectorgithub.svg"></img>
                        </div>
                        <div className="">
                          <img src="Team/Vectorseperate.svg"></img>
                        </div>
                        <div className="">
                          <img src="Team/Vectorinstagram.svg"></img>
                        </div>
                        <div className="">
                          <img src="Team/Vectorseperate.svg"></img>
                        </div>
                        <div className="">
                          <img src="Team/VectorX.svg"></img>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
              {/* Add more cards as needed */}
            </div>
          </TabsContent>
          <TabsContent
            value="Secretariat"
            className="fle items-center  rounded-lg "
          >
            <div className="grid grid-cols-3 gap-10 ml-14 mt-36 mr-14 mb-8">
              {teamData.map((team) => (
                <Card
                  x-chunk="dashboard-01-chunk-3"
                  key={team}
                  className="h-[436px] w-[346px] bg-[#03050C]"
                >
                  <CardContent>
                    <div className="grid gap-9 pt-[22px] pr-[25px] pl-[25px] pb-[22px] justify-center">
                      <div className="flex-col relative  w-[289px] h-[221px] border-[#393939] border-[3px] rounded-lg">
                        <img
                          src="/Team/image8.png"
                          alt="Team member"
                          className="rounded-lg absolute z-0 border-[#393939]"
                        />
                        <div className="absolute bottom-7 left-2 right-0 z-10 text-start">
                          <div className="font-medium text-white">
                            Vansh Baghel
                          </div>
                          <div className="text-sm text-transparent bg-clip-text bg-gradient-to-b from-45% from-[#dfdede] to-[#3a3a3a]">
                            Lead
                          </div>
                        </div>
                      </div>
                      <div className="text-sm mx-auto text-transparent justify-center  text-center w-[200px] h-[54px] bg-clip-text bg-gradient-to-b from-45% from-[#dfdede] to-[#3a3a3a]">
                        “ Growth is painful, but what is worse is staying the
                        same.“
                      </div>
                      <div className="grid grid-cols-5 gap-[14px] w-[158px] h-[24px] mx-auto  items-center">
                        <div className="">
                          <img src="Team/Vectorgithub.svg"></img>
                        </div>
                        <div className="">
                          <img src="Team/Vectorseperate.svg"></img>
                        </div>
                        <div className="">
                          <img src="Team/Vectorinstagram.svg"></img>
                        </div>
                        <div className="">
                          <img src="Team/Vectorseperate.svg"></img>
                        </div>
                        <div className="">
                          <img src="Team/VectorX.svg"></img>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
              {/* Add more cards as needed */}
            </div>
          </TabsContent>
          <TabsContent
            value="Logistics"
            className="fle items-center  rounded-lg "
          >
            <div className="grid grid-cols-3 gap-10 ml-14 mt-36 mr-14 mb-8">
              {teamData.map((team) => (
                <Card
                  x-chunk="dashboard-01-chunk-3"
                  key={team}
                  className="h-[436px] w-[346px] bg-[#03050C]"
                >
                  <CardContent>
                    <div className="grid gap-9 pt-[22px] pr-[25px] pl-[25px] pb-[22px] justify-center">
                      <div className="flex-col relative  w-[289px] h-[221px] border-[#393939] border-[3px] rounded-lg">
                        <img
                          src="/Team/image8.png"
                          alt="Team member"
                          className="rounded-lg absolute z-0 border-[#393939]"
                        />
                        <div className="absolute bottom-7 left-2 right-0 z-10 text-start">
                          <div className="font-medium text-white">
                            Vansh Baghel
                          </div>
                          <div className="text-sm text-transparent bg-clip-text bg-gradient-to-b from-45% from-[#dfdede] to-[#3a3a3a]">
                            Lead
                          </div>
                        </div>
                      </div>
                      <div className="text-sm mx-auto text-transparent justify-center  text-center w-[200px] h-[54px] bg-clip-text bg-gradient-to-b from-45% from-[#dfdede] to-[#3a3a3a]">
                        “ Growth is painful, but what is worse is staying the
                        same.“
                      </div>
                      <div className="grid grid-cols-5 gap-[14px] w-[158px] h-[24px] mx-auto  items-center">
                        <div className="">
                          <img src="Team/Vectorgithub.svg"></img>
                        </div>
                        <div className="">
                          <img src="Team/Vectorseperate.svg"></img>
                        </div>
                        <div className="">
                          <img src="Team/Vectorinstagram.svg"></img>
                        </div>
                        <div className="">
                          <img src="Team/Vectorseperate.svg"></img>
                        </div>
                        <div className="">
                          <img src="Team/VectorX.svg"></img>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
              {/* Add more cards as needed */}
            </div>
          </TabsContent>
          <TabsContent value="Event" className="fle items-center  rounded-lg ">
            <div className="grid grid-cols-3 gap-10 ml-14 mt-36 mr-14 mb-8">
              {teamData.map((team) => (
                <Card
                  x-chunk="dashboard-01-chunk-3"
                  key={team}
                  className="h-[436px] w-[346px] bg-[#03050C]"
                >
                  <CardContent>
                    <div className="grid gap-9 pt-[22px] pr-[25px] pl-[25px] pb-[22px] justify-center">
                      <div className="flex-col relative  w-[289px] h-[221px] border-[#393939] border-[3px] rounded-lg">
                        <img
                          src="/Team/image8.png"
                          alt="Team member"
                          className="rounded-lg absolute z-0 border-[#393939]"
                        />
                        <div className="absolute bottom-7 left-2 right-0 z-10 text-start">
                          <div className="font-medium text-white">
                            Vansh Baghel
                          </div>
                          <div className="text-sm text-transparent bg-clip-text bg-gradient-to-b from-45% from-[#dfdede] to-[#3a3a3a]">
                            Lead
                          </div>
                        </div>
                      </div>
                      <div className="text-sm mx-auto text-transparent justify-center  text-center w-[200px] h-[54px] bg-clip-text bg-gradient-to-b from-45% from-[#dfdede] to-[#3a3a3a]">
                        “ Growth is painful, but what is worse is staying the
                        same.“
                      </div>
                      <div className="grid grid-cols-5 gap-[14px] w-[158px] h-[24px] mx-auto  items-center">
                        <div className="">
                          <img src="Team/Vectorgithub.svg"></img>
                        </div>
                        <div className="">
                          <img src="Team/Vectorseperate.svg"></img>
                        </div>
                        <div className="">
                          <img src="Team/Vectorinstagram.svg"></img>
                        </div>
                        <div className="">
                          <img src="Team/Vectorseperate.svg"></img>
                        </div>
                        <div className="">
                          <img src="Team/VectorX.svg"></img>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
              {/* Add more cards as needed */}
            </div>
          </TabsContent>
          <TabsContent
            value="Marketing"
            className="fle items-center  rounded-lg "
          >
            <div className="grid grid-cols-3 gap-10 ml-14 mt-36 mr-14 mb-8">
              {teamData.map((team) => (
                <Card
                  x-chunk="dashboard-01-chunk-3"
                  key={team}
                  className="h-[436px] w-[346px] bg-[#03050C]"
                >
                  <CardContent>
                    <div className="grid gap-9 pt-[22px] pr-[25px] pl-[25px] pb-[22px] justify-center">
                      <div className="flex-col relative  w-[289px] h-[221px] border-[#393939] border-[3px] rounded-lg">
                        <img
                          src="/Team/image8.png"
                          alt="Team member"
                          className="rounded-lg absolute z-0 border-[#393939]"
                        />
                        <div className="absolute bottom-7 left-2 right-0 z-10 text-start">
                          <div className="font-medium text-white">
                            Vansh Baghel
                          </div>
                          <div className="text-sm text-transparent bg-clip-text bg-gradient-to-b from-45% from-[#dfdede] to-[#3a3a3a]">
                            Lead
                          </div>
                        </div>
                      </div>
                      <div className="text-sm mx-auto text-transparent justify-center  text-center w-[200px] h-[54px] bg-clip-text bg-gradient-to-b from-45% from-[#dfdede] to-[#3a3a3a]">
                        “ Growth is painful, but what is worse is staying the
                        same.“
                      </div>
                      <div className="grid grid-cols-5 gap-[14px] w-[158px] h-[24px] mx-auto  items-center">
                        <div className="">
                          <img src="Team/Vectorgithub.svg"></img>
                        </div>
                        <div className="">
                          <img src="Team/Vectorseperate.svg"></img>
                        </div>
                        <div className="">
                          <img src="Team/Vectorinstagram.svg"></img>
                        </div>
                        <div className="">
                          <img src="Team/Vectorseperate.svg"></img>
                        </div>
                        <div className="">
                          <img src="Team/VectorX.svg"></img>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
              {/* Add more cards as needed */}
            </div>
          </TabsContent>
          <TabsContent value="Press" className="fle items-center  rounded-lg ">
            <div className="grid grid-cols-3 gap-10 ml-14 mt-36 mr-14 mb-8">
              {teamData.map((team) => (
                <Card
                  x-chunk="dashboard-01-chunk-3"
                  key={team}
                  className="h-[436px] w-[346px] bg-[#03050C]"
                >
                  <CardContent>
                    <div className="grid gap-9 pt-[22px] pr-[25px] pl-[25px] pb-[22px] justify-center">
                      <div className="flex-col relative  w-[289px] h-[221px] border-[#393939] border-[3px] rounded-lg">
                        <img
                          src="/Team/image8.png"
                          alt="Team member"
                          className="rounded-lg absolute z-0 border-[#393939]"
                        />
                        <div className="absolute bottom-7 left-2 right-0 z-10 text-start">
                          <div className="font-medium text-white">
                            Vansh Baghel
                          </div>
                          <div className="text-sm text-transparent bg-clip-text bg-gradient-to-b from-45% from-[#dfdede] to-[#3a3a3a]">
                            Lead
                          </div>
                        </div>
                      </div>
                      <div className="text-sm mx-auto text-transparent justify-center  text-center w-[200px] h-[54px] bg-clip-text bg-gradient-to-b from-45% from-[#dfdede] to-[#3a3a3a]">
                        “ Growth is painful, but what is worse is staying the
                        same.“
                      </div>
                      <div className="grid grid-cols-5 gap-[14px] w-[158px] h-[24px] mx-auto  items-center">
                        <div className="">
                          <img src="Team/Vectorgithub.svg"></img>
                        </div>
                        <div className="">
                          <img src="Team/Vectorseperate.svg"></img>
                        </div>
                        <div className="">
                          <img src="Team/Vectorinstagram.svg"></img>
                        </div>
                        <div className="">
                          <img src="Team/Vectorseperate.svg"></img>
                        </div>
                        <div className="">
                          <img src="Team/VectorX.svg"></img>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
              {/* Add more cards as needed */}
            </div>
          </TabsContent>
          <TabsContent
            value="Outreach"
            className="fle items-center  rounded-lg "
          >
            <div className="grid grid-cols-3 gap-10 ml-14 mt-36 mr-14 mb-8">
              {teamData.map((team) => (
                <Card
                  x-chunk="dashboard-01-chunk-3"
                  key={team}
                  className="h-[436px] w-[346px] bg-[#03050C]"
                >
                  <CardContent>
                    <div className="grid gap-9 pt-[22px] pr-[25px] pl-[25px] pb-[22px] justify-center">
                      <div className="flex-col relative  w-[289px] h-[221px] border-[#393939] border-[3px] rounded-lg">
                        <img
                          src="/Team/image8.png"
                          alt="Team member"
                          className="rounded-lg absolute z-0 border-[#393939]"
                        />
                        <div className="absolute bottom-7 left-2 right-0 z-10 text-start">
                          <div className="font-medium text-white">
                            Vansh Baghel
                          </div>
                          <div className="text-sm text-transparent bg-clip-text bg-gradient-to-b from-45% from-[#dfdede] to-[#3a3a3a]">
                            Lead
                          </div>
                        </div>
                      </div>
                      <div className="text-sm mx-auto text-transparent justify-center  text-center w-[200px] h-[54px] bg-clip-text bg-gradient-to-b from-45% from-[#dfdede] to-[#3a3a3a]">
                        “ Growth is painful, but what is worse is staying the
                        same.“
                      </div>
                      <div className="grid grid-cols-5 gap-[14px] w-[158px] h-[24px] mx-auto  items-center">
                        <div className="">
                          <img src="Team/Vectorgithub.svg"></img>
                        </div>
                        <div className="">
                          <img src="Team/Vectorseperate.svg"></img>
                        </div>
                        <div className="">
                          <img src="Team/Vectorinstagram.svg"></img>
                        </div>
                        <div className="">
                          <img src="Team/Vectorseperate.svg"></img>
                        </div>
                        <div className="">
                          <img src="Team/VectorX.svg"></img>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
              {/* Add more cards as needed */}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default page;
