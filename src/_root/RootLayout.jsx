import Navbar from '../Components/Navbar'
import { Outlet } from 'react-router-dom'

const RootLayout = () => {
  return (
    <>
    {/* use the tailwind css */}
    <div className="flex flex-col min-h-screen bg-gray-50">
        <header className="flex items-center justify-between ">
            {/* your header components here */}
            <Navbar/>
        </header>
        <main className="flex-grow">
            <Outlet/>
        </main>
        
    </div>
    </>
  )
}

export default RootLayout
