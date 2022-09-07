
import styled from 'styled-components'

const Page = styled.div`
    
    width: 100%;
    height: 100vh;
    
    min-height: 768px;

    display: flex;

    justify-content: start;
    align-items: start;

   
  overflow-x: hidden;

    @media screen and (min-width: 1020px) {
    & {
        justify-content: center;
        align-items: center;
        
    }
  }

  @media screen and (min-width: 1020px) and (max-height: 768px) {
    & {
        align-items: start;
    }
  }

`;

export default Page;
