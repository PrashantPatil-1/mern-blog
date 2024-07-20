import {Link, useLocation} from 'react-router-dom'
import { Navbar } from 'flowbite-react'
import { TextInput } from 'flowbite-react'
import {AiOutlineSearch} from 'react-icons/ai'
import { Button } from 'flowbite-react'
import {FaMoon} from 'react-icons/fa'



function Header() {
  const path= useLocation().pathname;
  return (
   <Navbar className='border-b-2 '>
    <Link to="/"className='self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white'>
    <span className='px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white'>My</span>
    Blog
    </Link>
    <form >
    <TextInput
        type='text' 
        placeholder='Search...'
        rightIcon={AiOutlineSearch}
        className='hidden lg:inline'
   />
    </form>
    <Button className='w-12 h-10 lg:hidden' color='grey' pill>
      <AiOutlineSearch/>
    </Button>

    <div className='flex gap-2 md:order-2'>
      <Button className='w-12 h-10 hidden sm:inline' color='grey' pill>
        <FaMoon/>
      </Button>
      <Link to='/sign-in'>
      <Button gradientDuoTone='purpleToBlue' pill >Sign In</Button>
      </Link>
      <Navbar.Toggle/>
    </div>
    <Navbar.Collapse>
      {/* we can not use two anchor tag or Link tag at time we make as div using  as={'div'} */}
        <Navbar.Link active={path === "/"} as={'div'}> 
          <Link to='/'>Home</Link>
        </Navbar.Link>
        <Navbar.Link active={path === "/about"}  as={'div'}>
          <Link to='/about'>About</Link>
        </Navbar.Link>
        <Navbar.Link active={path === "/project"} as={'div'}>
          <Link to='/project'>Projects</Link>
        </Navbar.Link>
      </Navbar.Collapse>
   </Navbar>
  )
}

export default Header