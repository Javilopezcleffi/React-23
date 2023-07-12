import { Button, Grid, TextField } from "@mui/material";

const Checkout = ({ handleSubmit, handleChange, errors }) => {
  return (
    <Grid
      style={{
        paddingTop: "50px",
        paddingBottom: "50px",
        maxWidth: "40%",
        marginLeft: "20px",
      }}
    >
      <form onSubmit={handleSubmit}>
        <TextField
          sx={{ mb: 1 }}
          label="Name"
          variant="outlined"
          name="name"
          onChange={handleChange}
          helperText={errors.name}
          error={errors.name ? true : false}
        />
        <TextField
          sx={{ mb: 1 }}
          label="Email"
          variant="outlined"
          name="email"
          onChange={handleChange}
          helperText={errors.email}
          error={errors.email ? true : false}
        />
        <TextField
          sx={{ mb: 1 }}
          label="Phone"
          variant="outlined"
          name="phone"
          onChange={handleChange}
          helperText={errors.phone}
          error={errors.phone ? true : false}
        />
        <Button variant="outlined" type="submit">
          Comprar
        </Button>
      </form>
    </Grid>
  );
};

export default Checkout;
