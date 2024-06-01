import { Inter } from "next/font/google";
import { Box, Container, styled, Grid, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getAllPropducts } from "@/redux/slice/productSlice";
import ProductCard, { Product } from "@/components/ProductCard/ProductCard";
import Wrapper from "@/components/Wrapper/Wrapper";

const inter = Inter({ subsets: ["latin"], display: "swap" });

const HomeWrapper = styled(Box)`

`;

export default function Home() {
  const [products, setProducts] = useState<Product[]>([]);

  const dispatch = useDispatch();

  const { allProducts, isLoading } = useSelector(
    (state: any) => state.productSlice
  );

  useEffect(() => {
    dispatch(getAllPropducts() as any);
  }, [dispatch]);

  useEffect(() => {
    if (allProducts.length) {
      setProducts(allProducts);
    }
  }, [allProducts]);

  console.log(products, "allProducts");

  return (
    <Wrapper>
      <HomeWrapper>
        <Container fixed>
          {isLoading ? (
            <Typography variant="h1">Loading...</Typography>
          ) : (
            <>
              {products.length && (
                <Grid container spacing={3}>
                  {products?.map((data: Product) => (
                    <Grid item md={4} xs={12} key={data?._id}>
                      <ProductCard {...data} />
                    </Grid>
                  ))}
                </Grid>
              )}
            </>
          )}
        </Container>
      </HomeWrapper>
    </Wrapper>
  );
}
