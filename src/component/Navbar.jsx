import { useContext } from 'react'
import { AppContext } from '../App'
import Logo from '../assets/icon.webp'

function Navbar() {

  const {toggleNavbar, toggle, navigateTo} = useContext(AppContext)

  return (
    <header>
      <nav className='flex justify-between'>
        {/* logo */}

        <a href="/">
        <img src={Logo} alt="JM" className='object-cover w-10 h-10 md:w-14 ' />
        </a>

        {/* Navbar */}
        <div className=' grid gap-4 place-content-center text-end md:text-center '>
          <button aria-label='menu' className='block md:hidden text-end' onClick={toggleNavbar}><i className="fa-solid fa-bars"></i></button>
          <div className={`${toggle ? 'block' : 'hidden'} md:block `}>
            <ul className='gap-4 md:gap-10 grid md:flex md:text-center text-base'>
              <li onClick={() => navigateTo("home")}>Home</li>
              <li onClick={() => navigateTo("about")}>About</li>
              <li onClick={() => navigateTo("projects")}>Project</li>
              <li><a href="https://mail.google.com/mail/?view=cm&fs=1&to=jmtdelremedio@gmail.com" target='_blank'>Contact</a></li>
            </ul>
          </div>
        </div>
       
        
      </nav>
    </header>
  )
}

export default Navbar