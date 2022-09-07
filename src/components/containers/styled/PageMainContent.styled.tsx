import styled from 'styled-components';

const PageMainContent  = styled.div`

    width: 100%;
    height: 100%;

    max-width: 1520px;
    min-width: 320px;

    min-height: 480px;
    max-height: 1024px;

    /* border: solid 5px red; */

    position: relative;

    display: flex;
    justify-content: center;

    overflow: hidden;

    position: relative;

    @media screen and (min-width: 1020px) {

        & {

            min-height: 768px;
            justify-content: center;

        }

    }
    
`

// const PageMainContent = ({children} : any) => {

//   return (
//     <_PageMainContent>
//         {children}
//     </_PageMainContent>
//   )

// }

export default PageMainContent;
