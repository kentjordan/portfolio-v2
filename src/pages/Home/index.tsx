import 'styles/Home.css'

import { motion } from 'framer-motion'

import Navbar from 'components/nav/Navbar'
import NavMenu from 'components/nav/NavMenu'

import ImgMe from 'assets/me.png'
import Rectangle from './components/Rectagle'
import GradientRect from './components/GradientRect';

import PageMainContent from 'components/containers/styled/PageMainContent.styled';
import PreambleContainer from './styled/Preamble.styled';

import _Home from './styled/Home.styled';

import { useState } from 'react';

import { SwitchNavContext } from './contexts/Home.context'
import { SyncLoader } from 'react-spinners'

const Home = () => {

  const switchNav = useState<any>(false);

  const [spinnerVisibility, updateSpinnerVisibility] = useState(true);
  const [count, setCount] = useState(3);

  if (count >= 0) {
    setTimeout(() => {

      setCount(count - 1);

      if (count === 1) {
        updateSpinnerVisibility(false);
      }

    }, 1000)
  }

  return (


    <_Home>

      {spinnerVisibility ? <SyncLoader /> : <PageMainContent>

        <SwitchNavContext.Provider value={{ switchNav }}>

          <Navbar />

          <div className='HomeContentGrid'>

            <NavMenu />
            <Rectangle />
            <PreambleContainer />

          </div>

          <GradientRect />

          <motion.img animate={{ x: 0 }} transition={{ ease: 'anticipate', delay: 3 }} initial={{ x: 1200 }} src={ImgMe} alt="Me" className='ImgMe' />

        </SwitchNavContext.Provider>

      </PageMainContent>}

    </_Home>

  )

}

// Styles

export default Home
