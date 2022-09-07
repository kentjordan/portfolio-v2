import styled from 'styled-components'
import { motion } from 'framer-motion'

const _Navbar = styled(motion.div)`
    
    z-index: 10;

    width: 8%;
    display: flex;

    justify-content: space-between;
    align-items: center;

    position: absolute;
    margin: 32px 0px 0px 0px;
    font-size: 0.75rem;

    height: auto;

    @media screen and (min-width: 1020px) {

        &  {
            width: 90%;
            margin-top: 72px;

            height: auto;
            /* background-color: rebeccapurple; */
        }
    }
`

export default _Navbar