import SettingsIcon from '@mui/icons-material/Settings';
import NotificationsIcon from '@mui/icons-material/Notifications';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
export default function Navbar() {
  return (
    <main className="flex p-3 bg-black justify-between">
      <div>
        <h2 className='text-white font-semibold'>
            Hello Fazil,                
        </h2>
        <p className=' text-xs text-slate-400'>20 Aug, 2023</p>
      </div>
      <div className='flex'>
            <div className='px-3'>
                <SettingsIcon className='text-white' />
            </div>
            <div className='px-3'>
                <NotificationsIcon className='text-white' />
            </div>
            <div className='flex'>
                <div>
                    <h2 className='text-white font-semibold'>
                        Esther Howard
                    </h2>                     
                    <p className='text-white text-xs text-slate-400'>
                        williejennlngs@test.com 
                    </p>
                </div>
                <KeyboardArrowDownIcon className='text-white w-auto' />


            </div>
      </div>
    </main>
  )
}
