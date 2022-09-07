
import Background from './styled/Background.styled'
import _NavMenu from './styled/_NavMenu.styled'
import CloseNav from './styled/CloseNav.styled'
import EmailSignup from './styled/EmailSignup.styled'
import Item from './styled/Item.styled'

import React from 'react'
import { IoIosClose } from 'react-icons/io'

import SET_SWITCH, { SWITCH_0, SWITCH_1 } from './enums/switch.enum'
import { AnimNavMenu, TransNavMenu, InitNavMenu, AnimBackground, TransBackground, InitBackground } from './animations/nav-menu.anim'

import { useContext } from 'react'

import { SwitchNavContext } from 'pages/Home/contexts/Home.context'

const NavMenu = () => {

    // Contexts
    const {switchNav} = useContext(SwitchNavContext);

    // States
    const closeNavMenu = () => switchNav[SWITCH_1](SET_SWITCH.OFF)

    // JSX
    const NavMenuJSX = <React.Fragment>

        <_NavMenu animate={AnimNavMenu} transition={TransNavMenu} initial={InitNavMenu}>

            <CloseNav>
                <IoIosClose size={64} color='#FFBD59' onClick={closeNavMenu} style={{ cursor: 'pointer' }}></IoIosClose>
            </CloseNav>

            <div>
                <Item>Blog</Item>
                <Item>Portfolio</Item>
                <Item>Contact</Item>
                <Item>About me</Item>
            </div>

            <EmailSignup>
                <h1>Sign up for latest blog notification</h1>
                <input type="text" placeholder='employer@company.com' />
            </EmailSignup>

        </_NavMenu>

        <Background id='navMenu' animate={AnimBackground} transition={TransBackground} initial={InitBackground}></Background>

    </React.Fragment>

    return <> {switchNav[SWITCH_0] ? NavMenuJSX : null} </>;

}

export default NavMenu;

