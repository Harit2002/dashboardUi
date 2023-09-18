import HomeIcon from "@mui/icons-material/Home";
import PersonAddAltIcon from "@mui/icons-material/PersonAddAlt";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import BarChartIcon from "@mui/icons-material/BarChart";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import DescriptionIcon from "@mui/icons-material/Description";
import SettingsIcon from "@mui/icons-material/Settings";
import { FiLogOut } from "react-icons/fi";

export default function Sidebar() {
  return (
    <div className="text-slate-600 font-semibold text-sm">
      <ul>
        <li className="text-white font-semiboldpy-2">
          <HomeIcon className="text-white" /> Home
        </li>
        <li className="py-2">
          <PersonAddAltIcon className="text-slate-600" /> Configure
          <KeyboardArrowUpIcon className="text-slate-600" />
        </li>
        <div className="ml-2 pl-2">
          <ul>
            <li className="py-2">
              <AccountCircleIcon  className="text-slate-600" />{" "}
              Account
            </li>
            <li className="py-2">
              <BarChartIcon className="text-slate-600" /> Trade
            </li>
            <li className="py-2">
              <EmojiEventsIcon className="text-slate-600" /> Expert Advisor
            </li>
          </ul>
        </div>
        <li className="py-2">
          <TrendingUpIcon className="text-slate-600" /> Analytics
        </li>
        <li className="py-2">
          <DescriptionIcon className="text-slate-600" /> News
        </li>
        <li className="py-2">
          <SettingsIcon className="text-slate-600" /> Settings
        </li>
      </ul>
      <div className="flex gap-2 text-red-600 place-items-center absolute bottom-8 left-4">
        <FiLogOut size={20} />
        <div>Logut</div>
      </div>
    </div>
  );
}
