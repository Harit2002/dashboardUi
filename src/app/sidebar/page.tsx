import HomeIcon from '@mui/icons-material/Home';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import BarChartIcon from '@mui/icons-material/BarChart';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import DescriptionIcon from '@mui/icons-material/Description';
import SettingsIcon from '@mui/icons-material/Settings';
export default function Sidebar() {
  return (
    <div className="">
     <ul>
        <li className='text-white font-semibold text-l py-2'> <HomeIcon className='text-white' /> Home </li>
        <li className='text-slate-600 text-l py-2'> <PersonAddAltIcon className='text-slate-600' /> Configure <KeyboardArrowUpIcon className='text-slate-600' />  </li>
        <div className='ml-2 pl-2 border border-r-transparent border-t-transparent border-b-transparent border-l-slate-600 '>
          <ul>
            <li className='text-slate-600 text-l py-2'> <AccountCircleIcon className='text-slate-600' /> Account </li>
            <li className='text-slate-600  text-l py-2'> <BarChartIcon className='text-slate-600' /> Trade </li>
            <li className='text-slate-600  text-l py-2'> <EmojiEventsIcon className='text-slate-600' /> Expert Advisor </li>
          </ul>
        </div>
        <li className='text-slate-600 text-l py-2'> <TrendingUpIcon className='text-slate-600' /> Analytics </li>
        <li className='text-slate-600 text-l py-2'> <DescriptionIcon className='text-slate-600' /> News </li>
        <li className='text-slate-600 text-l py-2'> <SettingsIcon className='text-slate-600' /> Settings </li>
     </ul>
    </div>
  )
}
