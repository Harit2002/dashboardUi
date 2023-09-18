import { Avatar } from "@mui/material";
import { FiChevronDown, FiSettings } from "react-icons/fi";
import { PiBellLight } from "react-icons/pi";

export default function Navbar() {
  return (
    <header className="flex justify-between px-4  py-3">
      {/* left side of navbar */}
      <div className="flex-row ">
        <div className="font-medium text-white">Hello Fazil,</div>
        <div className="text-xs font-medium text-gray-500">20 Aug 2023</div>
      </div>

      {/* right of navbar */}
      <div className="flex gap-4">
        <div className="flex place-items-center gap-4 border-gray-700 border-r my-3 pr-3">
          <FiSettings size={16} color="grey" />
          <PiBellLight size={18} color="grey" />
        </div>
        <div className="flex gap-4 place-items-center">
          <Avatar
            alt="Remy Sharp"
            src="https://e0.pxfuel.com/wallpapers/813/924/desktop-wallpaper-cute-for-girls-anime-girl-avatar.jpg"
          />
          <div>
            <div className="font-semibold text-sm text-white">
              Esther Howard
            </div>
            <div className="text-xs text-gray-500">
              willie.jenning@example.com
            </div>
          </div>
        </div>
        <div className="grid place-items-center ">
          <FiChevronDown color="gray"/>
        </div>
      </div>
    </header>
  )
}
