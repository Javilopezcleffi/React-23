import { Box, Container } from "@mui/material";

const Footer = () => {
  return (
    <Box
      sx={{
        height: "auto",
        background: "linear-gradient(to right, #430089, #82ffa1)",
        paddingTop: "1rem",
        marginTop: "2rem",
        paddingBottom: "1rem",
        color: "white",
        width: "100%",
      }}
    >
      <Container className="container">
        <h3>Esta web es gestionada por lxs creadorxs de las obras</h3>
        <h6>
          <a href="https://www.instagram.com/javilopezcleffi/" target="blank">
            Javi López Cleffi
          </a>{" "}
          y{" "}
          <a href="https://www.instagram.com/v_caracola/" target="blank">
            Vale Caracola
          </a>{" "}
          . Todos los derechos reservados
        </h6>
      </Container>
    </Box>
  );
};

export default Footer;
