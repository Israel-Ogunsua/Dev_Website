import React from "react";
import { Box, Grid, Typography, Container } from "@mui/material";
import { motion } from "framer-motion";
import WorkImage from "../assets/kids1.jpg"; // Replace with your actual image path

const OurWork: React.FC = () => {
  return (
    <Container maxWidth="lg" sx={{ mt: 5 }}>
      <Grid container spacing={4} alignItems="center" justifyContent="center">
        <Grid item xs={12} md={5}>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Box
              component="img"
              sx={{
                width: "100%",
                maxWidth: 250,
                maxHeight: 250,
                borderRadius: 2,
                boxShadow: 3,
              }}
              alt="Our Work"
              src={WorkImage}
            />
          </motion.div>
        </Grid>
        <Grid item xs={12} md={5}>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Box sx={{ mt: { xs: 3, md: 0 }, ml: { xs: 0, md: -20 } }}>
              <Typography
                variant="h5"
                gutterBottom
                sx={{ fontWeight: "bold", color: "green" }}
              >
                Our work makes the world work.
              </Typography>
              <Typography variant="body2" sx={{ color: "black" }} paragraph>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </Typography>
            </Box>
          </motion.div>
        </Grid>
      </Grid>
    </Container>
  );
};

export default OurWork;
