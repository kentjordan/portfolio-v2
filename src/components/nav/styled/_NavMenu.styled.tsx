import styled from "styled-components"
import { motion } from 'framer-motion'

const _NavMenu = styled(motion.div)`

    z-index: 20;

    position: absolute;
    
    min-width: 320px;

    max-width: 560px;

    width: 100%;
    height: 100%;

    background-color: #272727;

    right: 0;

    padding: 64px;

    display: flex;
    flex-direction: column;
    justify-content: space-between;

    @media screen and (max-width: 425px) {
        & {
            padding: 64px 48px 64px 48px;
        }
    }
`

export default _NavMenu;