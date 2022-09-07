import styled from 'styled-components'

import { motion } from 'framer-motion'

const _Rectangle = styled(motion.div)`


  height: 100vh;
  min-height: 768px;

  width: 50%;
  background-color: rgba(230, 230, 230, 0.5);
  position: absolute;
  
  @media screen and (min-width: 1020px){
    & {
      z-index: 5;
    }
  }

`

const Rectangle = () => {
  return <_Rectangle animate={{
    y: 0
  }}

    transition={{
      delay: 0.25,
      ease: 'easeIn',
    }}

    initial={{
      y: -1500
    }}
  > </_Rectangle>
}

export default Rectangle;