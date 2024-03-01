import React from "react";
import {
  Grid,
  TextField,
  Button,
  Alert,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from "@mui/material";
import { useFormDataContext } from "../../Contaxt/FormDataProvider";
import axios from "axios";
import { useState } from "react";
import Cookies from "js-cookie";

const ContactInfo = ({ handleNextClick }) => {
  const { formData, dispatch } = useFormDataContext();
  const [errorMessage, setErrorMessage] = useState(null);
  const [errorAlert, setErrorAlert] = useState("none");

  const handleFieldChange = (field, value) => {
    dispatch({ type: "UPDATE_FIELD", field, value });
  };

  const handleSubmit = async () => {
    try {
      handleNextClick();
      // Replace the URL with your registration endpoint
      const response = await axios.post(
        "http://127.0.0.1:8000/api/register",
        formData
      );
      Cookies.set('authToken', response.data.token, { expires: 7 }); // Set the expiry as needed
      console.log("Registration successful:", response.data);

      // You may want to handle the response according to your application requirements
    } catch (error) {
      console.error("Registration failed:", error);

      // Handle errors
      if (error.response && error.response.data && error.response.data.error) {
        const errorMessage = error.response.data.error;

        // Show alert with error messages
        setErrorMessage(Object.values(errorMessage).flat().join("\n"));
        setErrorAlert("block");

        console.log("Registration error message:", errorMessage);

        // Remove the error message after 3 seconds
        setTimeout(() => {
          setErrorAlert("none");
        }, 10000);
        // You can set the error message in your component state or display it to the user.
      }
    }
  };
  return (
    <Grid
      container
      spacing={2}
      sx={{ maxWidth: "800px", margin: "auto", padding: "20px" }}
    >
      <Grid item xs={12}>
        <TextField
          label="Address"
          variant="outlined"
          fullWidth
          name="address"
          value={formData.address}
          onChange={(e) => handleFieldChange("address", e.target.value)}
          sx={{ marginBottom: "16px" }}
        />
      </Grid>

      <Grid item xs={12} md={6}>
        <TextField
          label="City"
          variant="outlined"
          fullWidth
          name="city"
          value={formData.city}
          onChange={(e) => handleFieldChange("city", e.target.value)}
          sx={{ marginBottom: "16px" }}
        />
      </Grid>

      <Grid item xs={12} md={6}>
        <TextField
          label="State"
          variant="outlined"
          fullWidth
          name="state"
          value={formData.state}
          onChange={(e) => handleFieldChange("state", e.target.value)}
          sx={{ marginBottom: "16px" }}
        />
      </Grid>

      <Grid item xs={12} md={6}>
        <TextField
          label="Country"
          variant="outlined"
          fullWidth
          name="country"
          value={formData.country}
          onChange={(e) => handleFieldChange("country", e.target.value)}
          sx={{ marginBottom: "16px" }}
        />
      </Grid>

      <Grid item xs={12} md={6}>
        <TextField
          label="Pin Code"
          variant="outlined"
          fullWidth
          name="pinCode"
          value={formData.pin_code}
          onChange={(e) => handleFieldChange("pin_code", e.target.value)}
          sx={{ marginBottom: "16px" }}
        />
      </Grid>

      <Grid item xs={12}>
        <TextField
          label="Contact Number"
          variant="outlined"
          fullWidth
          name="contactNumber"
          value={formData.contact_number}
          onChange={(e) => handleFieldChange("contact_number", e.target.value)}
          sx={{ marginBottom: "16px" }}
        />
      </Grid>
      <div style={{ display: errorAlert }}>
        {errorMessage && (
          <Alert severity="error" onClose={() => setErrorAlert("none")}>
            {errorMessage.split("\n").map((msg, index) => (
              <div key={index}>{msg}</div>
            ))}
          </Alert>
        )}
      </div>
      <Grid item xs={12}>
        <Button variant="contained" color="primary" onClick={handleSubmit}>
          Register
        </Button>
      </Grid>
    </Grid>
  );
};

export default ContactInfo;
