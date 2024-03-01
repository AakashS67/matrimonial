import React, { useContext } from "react";
import {
  Grid,
  TextField,
  Button,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from "@mui/material";
import { useFormDataContext } from "../../Contaxt/FormDataProvider";

const PersonalInfo = ({ handleNextClick }) => {
  const { formData, dispatch } = useFormDataContext();

  const handleFieldChange = (field, value) => {
    dispatch({ type: "UPDATE_FIELD", field, value });
  };

  // const handleNextClick = () => {
  //   // Perform any additional logic before moving to the next step
  //   // For now, let's just log the form data
  //   console.log(formData);
  // };

  return (
    <Grid
      container
      spacing={2}
      sx={{ maxWidth: "800px", margin: "auto", padding: "20px" }}
    >
      <Grid item xs={12} md={6}>
        <TextField
          label="Creator Name"
          variant="outlined"
          fullWidth
          name="creatorName"
          value={formData.creator_name}
          onChange={(e) => handleFieldChange("creator_name", e.target.value)}
          sx={{ marginBottom: "16px" }}
        />
      </Grid>

      <Grid item xs={12} md={6}>
        <TextField
          label="Profile Created For"
          variant="outlined"
          fullWidth
          name="profileCreatedFor"
          value={formData.profile_created_for}
          onChange={(e) => handleFieldChange("profile_created_for", e.target.value)}
          sx={{ marginBottom: "16px" }}
        />
      </Grid>

      <Grid item xs={12} md={6}>
        <TextField
          label="Profile Holder Name"
          variant="outlined"
          fullWidth
          name="profileHolderName"
          value={formData.profile_holder_name}
          onChange={(e) =>
            handleFieldChange("profile_holder_name", e.target.value)
          }
          sx={{ marginBottom: "16px" }}
        />
      </Grid>

      {/* Add more form fields as needed */}
      <Grid item xs={12} md={6}>
        <TextField
          label="Email"
          variant="outlined"
          fullWidth
          type="email"
          name="email"
          value={formData.email}
          onChange={(e) => handleFieldChange("email", e.target.value)}
          sx={{ marginBottom: "16px" }}
        />
      </Grid>

      <Grid item xs={12} md={6}>
        <TextField
          label="Aadhsr Card No"
          variant="outlined"
          fullWidth
          type="number"
          name="AadhsrCard"
          value={formData.aadhar_card_number}
          onChange={(e) =>
            handleFieldChange("aadhar_card_number", e.target.value)
          }
          sx={{ marginBottom: "16px" }}
        />
      </Grid>

      <Grid item xs={12} md={6}>
        <TextField
          label="Mobile No"
          variant="outlined"
          fullWidth
          // type="number"
          name="mobile"
          value={formData.mobile_number}
          onChange={(e) =>
            handleFieldChange("mobile_number", e.target.value)
          }
          sx={{ marginBottom: "16px" }}
        />
      </Grid>

      <Grid item xs={12} md={6}>
        <InputLabel>Date of Birth</InputLabel>
        <TextField
          variant="outlined"
          type="date"
          name="dateOfBirth"
          value={formData.date_of_birth}
          onChange={(e) => handleFieldChange("date_of_birth", e.target.value)}
        />
      </Grid>

      <Grid item xs={12} md={6}>
        <TextField
          label="Password"
          variant="outlined"
          fullWidth
          type="password"
          name="password"
          value={formData.password}
          onChange={(e) => handleFieldChange("password", e.target.value)}
          sx={{ marginBottom: "16px" }}
        />
      </Grid>

      <Grid item xs={12}>
        <Button variant="contained" color="primary" onClick={handleNextClick}>
          Next
        </Button>
      </Grid>
    </Grid>
  );
};

export default PersonalInfo;
