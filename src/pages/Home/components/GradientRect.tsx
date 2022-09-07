import styled from 'styled-components'

import { motion } from 'framer-motion'

const _GradientRect = styled(motion.div)`
    & {

        z-index: 1;
        background: linear-gradient(0deg, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0) 70%);

        width: 100vw;
        height: 100%;

        min-width: 320px;
        min-height: 480px;

        position: absolute;
    }

    @media screen and (min-width: 1020px) {
        
        & {
            display: none;
        }
    }

`

const GradientRect = () => {
    return <_GradientRect

        animate={{
            y: 0
        }}

        transition={{
            delay: 0.15,
            ease: 'easeIn'
        }}

        initial={{
            y: 800
        }}
    ></_GradientRect>
}

export default GradientRect;