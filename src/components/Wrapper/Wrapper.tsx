import { Box, BoxProps, styled } from '@mui/material'
import React from 'react'
import Header from '../Header/Header'

const WrapperStyle = styled(Box)`
    
`

const Wrapper:React.FC<BoxProps> = ({...props}) => {
  return (
    <WrapperStyle {...props}>
        <Header/>
         <Box className='main_body'>
            {props?.children}
         </Box>
    </WrapperStyle>
  )
}

export default Wrapper