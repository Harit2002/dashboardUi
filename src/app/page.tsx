import Sidebar from "./sidebar/page";
import chartImage from "./pichart.jpeg";
import { PiCrownSimpleFill } from "react-icons/pi";
import ToggleOnIcon from "@mui/icons-material/ToggleOn";
import SettingsIcon from "@mui/icons-material/Settings";
import ArrowDropDownCircleIcon from "@mui/icons-material/ArrowDropDownCircle";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import AutorenewIcon from "@mui/icons-material/Autorenew";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import TrendingDownIcon from "@mui/icons-material/TrendingDown";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import ScheduleIcon from "@mui/icons-material/Schedule";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Image from "next/image";
import { FiChevronLeft } from "react-icons/fi";
import { Avatar } from "@mui/material";
import Timeline from "./timeline.jpeg";
import Graph from "../../public/gainGraph.png";
import iconAvatar from "../../public/avatar.png";
import { grey, purple } from "@mui/material/colors";
import { BsGraphUpArrow, BsTrophy } from "react-icons/bs";

export default function Home() {
  return (
    <>
      <main className="flex justify-between px-24 bg-black mb-4">
        <div className="mt-4 px-8 py-4 border border-slate-600 rounded-lg w-full min-h-screen flex">
          <div className="w-64 relative">
            <div className="flex place-items-center gap-2 mb-10 my-4">
              <Avatar sx={{ bgcolor: purple[200], width: 30, height: 30 }}>
                U
              </Avatar>
              <div className="font-bold text-lg">Untrade.ai</div>
              <Avatar
                sx={{
                  backgroundColor: grey[600],
                  opacity: 0.5,
                  width: 12,
                  height: 12,
                }}
              >
                <FiChevronLeft color="black" />
              </Avatar>
            </div>
            <Sidebar />
          </div>
          <div className="w-full mx-8">
            <div className="flex-row mb-10 my-3">
              <div>Dashboard</div>
              <div className="text-xs font-medium text-gray-500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptas, magnam!
              </div>
            </div>
            <div className="bg-gradient-to-br from-slate-600 rounded-lg via-transparent to-transparent p-[1px]">
              <div className="bg-black rounded-lg p-4">
                <div className="flex ml-4 my-3 text-md font-semibold text-gray-500 gap-5">
                  <div className="flex text-white border-b-2 border-gray-500 px-4 py-2 place-items-center gap-2">
                    <BsGraphUpArrow />
                    <div>Trade Copier</div>
                  </div>
                  <div className="flex place-items-center px-4 py-2 gap-2">
                    <BsTrophy />
                    <div>Expert Advisor</div>
                  </div>
                </div>
                {/* card */}
                <div>
                  <div className="flex m-4">
                    <div className="m-2">
                      <Avatar
                        sx={{
                          height: 35,
                          width: 35,
                          backgroundColor: grey[900],
                        }}
                      >
                        <img
                          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGPyQET4JmQppLFTehkeWm6BPfKooy1jq1Ep3KIgFRW4NC5YuQK1ejWcXvfV4m0n2EuT0&usqp=CAU"
                          alt="chart"
                          className="h-4"
                        />
                      </Avatar>
                    </div>
                    <div>
                      <p className="text-slate-600 text-xs">Strategy Name</p>
                      <h2 className="text-l font-semibold text-white">Fazil</h2>
                    </div>
                  </div>

                  <div className="w-full bg-slate-900 m-4 rounded-lg p-4">
                    <div className="flex m-4 justify-between ">
                      <div className="flex">
                        <div className="flex place-items-center m-2 ">
                          <Avatar
                            sx={{
                              width: 40,
                              height: 40,
                              backgroundColor: "black",
                              padding: "4px",
                            }}
                          >
                            <Image src={iconAvatar} alt="na" />
                          </Avatar>
                        </div>
                        <div>
                          <p className="flex gap-1 place-items-center text-slate-600 text-xs">
                            <PiCrownSimpleFill className="text-slate-600" />

                            <div>Strategy Name</div>
                          </p>
                          <h2 className="font-semibold text-white">#493094</h2>
                          <h2 className="font-semibold text-xs text-white">
                            IC Market
                          </h2>
                        </div>
                      </div>
                      <div className="flex ">
                        <div className="mx-2 align-middle">
                          <p className="text-slate-600 text-xs">EA STATUS</p>
                          <h2 className="text-green-400 text-xl">Connected</h2>
                        </div>
                        <div className="align-middle">
                          <ToggleOnIcon className="text-[50px] mx-2 text-indigo-500" />
                        </div>
                        <div className="mx-2 align-middle">
                          <SettingsIcon className="text-[45px] mx-2 text-indigo-500" />
                        </div>
                      </div>
                    </div>
                    <hr className="text-slate-900" />
                    <div className="flex justify-between align-middle">
                      <div className="text-center p-2">
                        <p className="text-xs text-slate-600 my-2">PROVIDER</p>
                        <div className="flex gap-3 place-items-center border rounded-lg p-3 border-indigo-800">
                          <PiCrownSimpleFill
                            size={24}
                            className="text-indigo-600"
                          />
                          <h2 className="text-white text-semibold">
                            Master Account-123456789
                          </h2>
                        </div>
                      </div>
                      <div className="text-center p-2">
                        <p className="text-xs text-slate-600 my-2">
                          SUBSCRIBER
                        </p>
                        <div className="flex  rounded-lg p-3 bg-slate-600 gap-x-2">
                          <div className=" rounded-lg p-3 bg-slate-800">
                            <h2 className="text-white text-xs text-semibold ">
                              5678932
                            </h2>
                          </div>

                          <div className="rounded-lg p-3 bg-slate-800">
                            <h2 className="text-white text-xs text-semibold">
                              453644
                            </h2>
                          </div>

                          <div className="rounded-lg p-3 bg-slate-800">
                            <h2 className="text-white text-xs text-semibold">
                              423245
                            </h2>
                          </div>

                          <div className="rounded-lg p-3 bg-slate-800">
                            <h2 className="text-white text-xs text-semibold">
                              752644
                            </h2>
                          </div>

                          <div className="rounded-lg p-3 bg-slate-800">
                            <h2 className="text-white text-xs text-semibold">
                              10+
                            </h2>
                          </div>
                        </div>
                      </div>
                      <div className="m-auto mx-0">
                        <h2 className="bg-white text-black p-2 px-5 rounded-3xl">
                          View Stats <ArrowDropDownCircleIcon />
                        </h2>
                      </div>
                    </div>
                  </div>

                  {/* Account Summary  */}

                  <div className="p-4 flex justify-between">
                    <div>
                      <h2 className="text-white text-xl font-semibold">
                        Account Summary
                        <RemoveRedEyeIcon className="text-white ml-1" />
                      </h2>
                      <p className="text-slate-600  text-xs ">
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Repellat culpa quibusdam dignissimos, nobis
                        asperiores
                      </p>
                    </div>
                    <div>
                      <p className="text-slate-600  text-xs ">
                        <AutorenewIcon className="text-slate-600" /> refreshed
                        recently 2 min ago
                      </p>
                    </div>
                  </div>
                  <div className="grid grid-rows-[190px_190px_190px_190px] grid-cols-3 m-4 gap-4">
                    <div className="border border-slate-600 rounded-lg px-2 py-4 bg-[#141414]">
                      <h2 className="text-indigo-300 ">
                        <AccountBalanceWalletIcon className="text-indigo-300 mx-1" />
                        Account Balance
                      </h2>
                      <div className="flex justify-between">
                        <div>
                          <h1 className="text-white font-semibold text-xl m-[30px]">
                            $ 234,532.90
                          </h1>
                        </div>
                        <div>
                          <p className="text-slate-600 text-xs text-right">
                            last 4 weeks
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="border border-slate-600 rounded-lg px-2 py-4 bg-[#141414]">
                      <h2 className="text-indigo-300 ">
                        <TrendingUpIcon className="text-indigo-300 mx-1" />
                        Total Profit
                      </h2>
                      <div className="flex justify-between">
                        <div>
                          <h1 className="text-white font-semibold text-xl m-[30px]">
                            $ 234,532.90
                          </h1>
                        </div>
                        <div>
                          <p className="text-slate-600 text-xs text-right">
                            last 4 weeks
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="row-span-2  border border-green-600 bg-green-950 p-2 rounded-lg">
                      <h1 className="text-l text-white font-bold ">
                        Strike Rate
                      </h1>
                      <Image src={chartImage} alt="chart" className="py-2" />
                      <div className="flex justify-start ml-10 gap-10 my-5">
                        <div>
                          <p className="text-white text-xs">50%</p>
                          <p className="text-xs text-green-300">
                            <FiberManualRecordIcon className="text-green-300 text-xs" />
                            Longs Won
                          </p>
                        </div>
                        <div>
                          <p className="text-white text-xs">$ 1,039</p>
                          <p className="text-xs text-rose-400">
                            <FiberManualRecordIcon className="text-rose-400 text-xs" />
                            Short Won
                          </p>
                        </div>
                      </div>

                      <div className="m-auto text-center text-white w-full px-14 ">
                        <h2 className="bg-black w-auto m-auto p-4 rounded-3xl w-[200px]">
                          View Trade History
                        </h2>
                      </div>
                    </div>

                    <div className="border border-slate-600 rounded-lg px-2 py-4 bg-[#141414]">
                      <h2 className="text-indigo-300 ">
                        <AccountBalanceWalletIcon className="text-indigo-300 mx-1" />
                        Overall Gain
                      </h2>
                      <div className="flex justify-between">
                        <div>
                          <h1 className="text-white font-semibold text-xl m-[30px]">
                            <TrendingUpIcon className="text-green-700" />
                            7.89%
                          </h1>
                        </div>
                        <div>
                          <h2 className="text-green-600 inline-flex">
                            <div className="text-slate-900 rounded-[50%] bg-indigo-300 w-[25px] mx-2 text-center">
                              D
                            </div>
                            2.34 %
                          </h2>
                          <p className="text-slate-600 text-xs text-right">
                            daily
                          </p>
                          <h2 className="text-rose-600 inline-flex">
                            <div className="text-slate-900 rounded-[50%] bg-indigo-300 w-[25px] mx-2 text-center">
                              M
                            </div>
                            6.64 %
                          </h2>
                          <p className="text-slate-600 text-xs text-right">
                            monthly
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="border border-slate-600 rounded-lg px-2 py-4 bg-[#141414]">
                      <h2 className="text-indigo-300 ">
                        <TrendingUpIcon className="text-indigo-300 mx-1" />
                        Overall DD
                      </h2>
                      <div className="flex justify-between">
                        <div>
                          <h1 className="text-white font-semibold text-xl m-[30px]">
                            <TrendingDownIcon className="text-rose-700" />
                            7.89%
                          </h1>
                        </div>
                        <div>
                          <h2 className="text-green-600 inline-flex">
                            <div className="text-slate-900 rounded-[50%] bg-indigo-300 w-[25px] mx-2 text-center">
                              D
                            </div>
                            3.83 %
                          </h2>
                          <p className="text-slate-600 text-xs text-right">
                            daily
                          </p>
                          <h2 className="text-rose-600 inline-flex">
                            <div className="text-slate-900 rounded-[50%] bg-indigo-300 w-[25px] mx-2 text-center">
                              M
                            </div>
                            7.21 %
                          </h2>
                          <p className="text-slate-600 text-xs text-right">
                            monthly
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="row-span-2 col-span-2 border border-slate-600 rounded-lg px-2 py-4 bg-[#141414]">
                      <div className="flex justify-between mb-4">
                        <div className="flex gap-4">
                          <h2 className="text-white border border-white border-t-transparent border-r-transparent border-l-transparent">
                            Overall Gain
                          </h2>
                          <h2 className="text-slate-600 "> Drawdown </h2>
                        </div>
                        <div className="bg-[#393939] rounded-lg p-2">
                          <h2 className="text-white text-xs">
                            <CalendarTodayIcon /> Last 30 Days
                            <KeyboardArrowDownIcon />
                          </h2>
                        </div>
                      </div>
                      <Image
                        src={Graph}
                        className="m-auto h-80 w-full"
                        alt="Picture of the author"
                      />
                    </div>

                    <div className="border border-slate-600 rounded-lg px-2 py-4 bg-[#141414] ">
                      <h2 className="text-indigo-300 ">
                        <AccountBalanceWalletIcon className="text-indigo-300 mx-1" />
                        Average RR
                      </h2>
                      <div className="flex justify-between mx-4">
                        <div className="flex place-items-center">
                          <h1 className="text-white font-semibold text-xl">
                            7.89%
                          </h1>
                        </div>
                        <div>
                          <h2 className="text-green-600 inline-flex">
                            <TrendingUpIcon className="mr-2" /> 10 Pips
                          </h2>
                          <p className="text-slate-600 text-xs text-right">
                            Avg Pips Won
                          </p>
                          <h2 className="text-rose-600 inline-flex">
                            <TrendingDownIcon className="mr-2" /> 12 Pips
                          </h2>
                          <p className="text-slate-600 text-xs text-right">
                            Avg Pips Lost
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="border border-slate-600 rounded-lg px-2 py-4 bg-[#141414]">
                      <h2 className="text-indigo-300 ">
                        <AccountBalanceWalletIcon className="text-indigo-300 mx-1" />
                        Average Trade Durattions
                      </h2>
                      <div className="flex justify-between mx-4 m-1">
                        <div className="flex flex-col place-items-center">
                          <h1 className="text-white font-semibold text-xl">
                            15 Mins
                          </h1>
                          <div className="text-center ">
                            <p className="text-white bg-indigo-400 rounded-2xl p-2 mx-[30px] mt-3 text-xs">
                              <FitnessCenterIcon className="text-xs" />
                              Scalper
                            </p>
                          </div>
                        </div>
                        <div>
                          <h2 className="text-white inline-flex">
                            <ScheduleIcon className="text-rose-600 mr-3" /> 10
                            Mins
                          </h2>
                          <p className="text-slate-600 text-xs text-right">
                            Longest
                          </p>
                          <h2 className="text-white inline-flex">
                            <ScheduleIcon className="text-green-600 mr-3" /> 12
                            Mins
                          </h2>
                          <p className="text-slate-600 text-xs text-right">
                            Shortest
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-auto m-4 border border-slate-600 rounded-lg px-2 py-4 bg-[#141414]">
                    <h2 className="text-indigo-300 inline-flex ">
                      <AccountBalanceWalletIcon className="text-indigo-300 mx-1" />
                      Overall Trades
                      <p className="text-white text-l ml-3 text-semibold">
                        1022
                      </p>
                    </h2>
                    <div className="flex justify-between">
                      <div className="m-auto">
                        <h2 className="text-green-600 inline-flex ">
                          <TrendingUpIcon className="mr-2" /> 12 Avg
                        </h2>
                        <p className="text-slate-600 text-xs text-right">
                          Trades per day
                        </p>
                      </div>
                      <Image
                        src={Timeline}
                        className="m-auto w-[80%]"
                        alt="Picture of the author"
                      />
                    </div>
                  </div>

                  {/**/}
                  {/* <img src={cards} alt="cards"/> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
