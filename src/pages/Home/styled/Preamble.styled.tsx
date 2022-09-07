import styled from 'styled-components'

import { motion } from 'framer-motion'

const _Preamble = styled.div`
    z-index: 5;
    margin-bottom: 12vh;

    color: #FFF;

    padding: 0 40px 0 40px;

    max-width: 560px;

    & > * {

        margin: 8px 0 8px 0;

        text-align: center;
    }

    & h1 {
    
        font-family: Anton;

        font-size: 3.5rem;
        font-weight: bold;
        color: #ececec;
    }

    & > h5 {

        font-weight: 300;
        font-size: 1.25rem;
        color: #ffffffaf;   
    }

    & .Highlight{

        display: inline-block;
        color: #ffbd59d8;
        font-weight: bold;
    }

    @media screen and (min-width: 1020px) {
        
        & {

            grid-row: 4 / span 2;
            grid-column: 2 / span 7;

            color: #000;

            padding: 0;

            max-width: 500px;

        }

        & > * {
            text-align: start;
        }

        & h1 {
            font-size: 4rem;
            color: #303030;
        }

        & h5, div {
            color: #303030bd;
            font-size: 1.25rem;
            /* width: 80%; */
        }

    }

    @media screen and (min-width: 1360px){

        & {
        grid-row: 4 / span 2;
        grid-column: 3 / span 7;

        color: #000;

        padding: 0;

        max-width: auto;
    }

    }

`

const Preamble = () => {
    return (
        <_Preamble>
            <div style={{ overflow: 'hidden' }}>
                <motion.h1

                    animate={{
                        y: 0
                    }}

                    transition={{
                        delay: 0.5
                    }}

                    initial={{
                        y: 300
                    }}

                    className='Title'>I'm Kent Jordan</motion.h1>
            </div>

            <div style={{ overflow: 'hidden' }}>
                <motion.div className='Summary' animate={{
                    x: 0
                }}

                    transition={{
                        delay: 0.75
                    }}

                    initial={{
                        x: 800
                    }}
                >a <h5 className='Highlight'>Software Engineer</h5> who specializes in creating web apps & interested in Data Science.</motion.div>

            </div>
        </_Preamble>
    )
}

export default Preamble;