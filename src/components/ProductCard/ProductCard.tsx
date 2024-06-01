import { Box, BoxProps, Typography, styled } from '@mui/material'
import Image from 'next/image';
import React from 'react'

const ProductCardWrapper = styled(Box)`
    
`

export interface Product {
    brand: string;
    category: string;
    color: string;
    description: string;
    discount: number;
    _id?: number;
    image: string;
    model: string;
    price: number;
    title: string;
  };


const ProductCard:React.FC<BoxProps & Product> = ({brand,category,color,description,discount,image,model,price,title,...props}) => {
  return (
    <ProductCardWrapper {...props}>
         <Box className='card_fig'>
            <figure>
                <Image src={image} alt='card image' width={400} height={300}/>
            </figure>
         </Box>
          <Box className='card_content'>
            <Typography variant='h3'>{title}</Typography>
            <Typography>Price: {price}</Typography>
            <Typography>Model:{model}</Typography>
            <Typography>{brand}</Typography>
            <Typography>{category}</Typography>
            <Typography>{color}</Typography>
            <Typography>{description}</Typography>
            <Typography>{discount}</Typography>
          </Box>
    </ProductCardWrapper>
  )
}

export default ProductCard;


