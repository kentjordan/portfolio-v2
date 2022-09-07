import 'styles/Navbar.css'
import _Navbar from './styled/_Navbar.styled';

import { AnimNavbar, TransNavbar, InitNavbar } from './animations/navbar.anim';

import { useContext } from 'react';
import SET_SWITCH, { SWITCH_1 } from './enums/switch.enum';

import { BsGithub, BsTwitter } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa'

import { SwitchNavContext } from 'pages/Home/contexts/Home.context'

const Navbar = () => {

  // Contexts
  const {switchNav} = useContext(SwitchNavContext);

  // States
  const openNavMenu = () => switchNav[SWITCH_1](SET_SWITCH.ON);

  return (

    <_Navbar animate={AnimNavbar} transition={TransNavbar} initial={InitNavbar}>

      <div className='DownloadCV'>
        <p className='font-bold'>DOWNLOAD CV</p>
        <div className="Line"></div>
      </div>

      <div className='SocialMedia'>

        <BsGithub size={27} className='SocialMediaIcons' />
        <BsTwitter size={29} className='SocialMediaIcons' />
        <FaFacebookF size={28} className='SocialMediaIcons' />

        <div onClick={openNavMenu} className='HamburgerMenu'>
          <div className='Line'></div>
          <div className='Line'></div>
        </div>

      </div>

    </_Navbar>
  )
}

export default Navbar;

