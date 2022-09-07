import styled from "styled-components"
import { motion } from 'framer-motion'

const EmailSignup = styled.div`

    width: 100%;

    & > * {
        margin-bottom: 16px;
        color: #DFDFDF;
    }

    input[type='text']{

        background-color: rgba(0, 0, 0, 0);
        width: 100%;
        padding: 8px;

        border-radius: 4px;

        border-bottom: 1px solid #DFDFDF;

        &::placeholder{
            color: #DFDFDF;
            font-size: 1rem;
        }

        &:focus{
           
            outline: none;
        }
    }
`;


export default EmailSignup
