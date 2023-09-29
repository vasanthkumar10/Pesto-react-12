import { Container, Grid, Skeleton } from "@mui/material";
import React, { Fragment } from "react";

export function LoadingSkeleton() {
  return (
    <>
      <Skeleton
        animation="wave"
        variant="rectangular"
        width="100%"
        height={100}
      />
      <Container maxWidth="lg">
        <Grid container spacing={2} marginTop={3}>
          {[1, 2, 3, 4, 5, 6].map((item, index) => (
            <Grid item key={index} xs={12} md={4}>
              <Skeleton
                animation="wave"
                variant="rectangular"
                width="100%"
                height={300}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
}
