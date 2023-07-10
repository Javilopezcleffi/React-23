import { Box, Container } from "@mui/material";

const Footer = () => {
  return (
    <Box
      sx={{
        height: "auto",
        background: "linear-gradient(to right, #430089, #82ffa1)",
        paddingTop: "1rem",
        mt: "2rem",
        paddingBottom: "1rem",
        color: "white",
        width: "100%",
      }}
    >
      <Container className="container">
        <h3>Esta web es gesionada por lxs creadorxs de las obras</h3>
        <h6>
          Javi López Cleffi y Vale Caracola. Todos los derechos reservados
        </h6>
      </Container>
    </Box>
  );
};

export default Footer;
