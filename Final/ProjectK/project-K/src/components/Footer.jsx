import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import { Facebook, Instagram, Twitter } from "@mui/icons-material";
import { Box } from "@mui/material";
import '../assets/css/Footer.css'
export default function Footer() {
  return (
    <div className="foot" style={{justifyItems:'center',padding:'0px'}}>

    <Box 
      component="footer"
      sx={{
        backgroundColor: (theme) =>
        theme.palette.mode === "light"
        ? theme.palette.grey[200]
        : theme.palette.grey[800],
        p: 6,
      }}
      >
      <Container maxWidth="lg">
        <Grid container spacing={10}>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" color="text.primary" gutterBottom>
              About Us
            </Typography>
            <Typography variant="body2" color="text.secondary">
            At EventPro, we are passionate about creating seamless and unforgettable experiences. As a team of dedicated event professionals, we understand the importance of every detail when it comes to planning and executing events that leave a lasting impression.
{/* <br></br>Our journey began with a vision to redefine event management by combining innovation, precision, and a deep understanding of our clients' needs. With a diverse team of experts in event planning, logistics, and technology, we strive to elevate every event to new heights. */}
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" color="text.primary" gutterBottom style={{fontWeight:'3000px'}}>
              Contact Us
            </Typography>
            <Typography variant="body2" color="text.secondary">
              123 Main Street, Anytown, USA
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Email: info@example.com
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Phone: +1 234 567 8901
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" color="text.primary" gutterBottom>
              Follow Us
            </Typography>
            <Link href="https://www.facebook.com/" color="inherit">
              <Facebook />
            </Link>
            <Link
              href="https://www.instagram.com/"
              color="inherit"
              sx={{ pl: 1, pr: 1 }}
              >
              <Instagram />
            </Link>
            <Link href="https://www.twitter.com/" color="inherit">
              <Twitter />
            </Link>
          </Grid>
        </Grid>
        <Box mt={5}>
          <Typography variant="body2" color="text.secondary" align="center">
            {"Copyright © "}
            <Link color="inherit" href="https://your-website.com/">
              EventPro
            </Link>{" "}
            {new Date().getFullYear()}
            {"."}
          </Typography>
        </Box>
      </Container>
    </Box>
              </div>
  );
}