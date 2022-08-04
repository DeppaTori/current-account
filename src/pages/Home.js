import { Link } from "react-router-dom";
import Button from "@mui/material/Button";

export const Home = () => {
  return (
    <>
      <h1>Current Account</h1>
      <Link to="/form">
        <Button variant="contained">Aplikasi Pembukaan Rekening Giro</Button>
      </Link>
    </>
  );
};
