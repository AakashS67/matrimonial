import React from "react";
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

const PersonalProfile = ({ handleNextClick }) => {
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
          label="Caste"
          variant="outlined"
          fullWidth
          name="caste"
          value={formData.caste}
          onChange={(e) => handleFieldChange("caste", e.target.value)}
          sx={{ marginBottom: "16px" }}
        />
      </Grid>

      <Grid item xs={12} md={6}>
        <TextField
          label="Gotra"
          variant="outlined"
          fullWidth
          name="gotra"
          value={formData.gotra}
          onChange={(e) => handleFieldChange("gotra", e.target.value)}
          sx={{ marginBottom: "16px" }}
        />
      </Grid>

      <Grid item xs={12} md={6}>
        <TextField
          label="Uncle Gotra"
          variant="outlined"
          fullWidth
          name="uncleGotra"
          value={formData.uncle_gotra}
          onChange={(e) => handleFieldChange("uncle_gotra", e.target.value)}
          sx={{ marginBottom: "16px" }}
        />
      </Grid>

      <Grid item xs={12} md={6}>
        <TextField
          label="Mother Tongue"
          variant="outlined"
          fullWidth
          name="motherTongue"
          value={formData.mother_tongue}
          onChange={(e) => handleFieldChange("mother_tongue", e.target.value)}
          sx={{ marginBottom: "16px" }}
        />
      </Grid>

      <Grid item xs={12} md={6}>
        <TextField
          label="Native Place"
          variant="outlined"
          fullWidth
          name="nativeplace"
          value={formData.native_place}
          onChange={(e) => handleFieldChange("native_place", e.target.value)}
          sx={{ marginBottom: "16px" }}
        />
      </Grid>

      <Grid item xs={12} md={6}>
        <TextField
          label="Height"
          variant="outlined"
          fullWidth
          type="number"
          name="height"
          value={formData.height}
          onChange={(e) => handleFieldChange("height", e.target.value)}
          sx={{ marginBottom: "16px" }}
        />
      </Grid>

      <Grid item xs={12} md={6}>
        <TextField
          label="Physique"
          variant="outlined"
          fullWidth
          name="physique"
          value={formData.physique}
          onChange={(e) => handleFieldChange("physique", e.target.value)}
          sx={{ marginBottom: "16px" }}
        />
      </Grid>

      <Grid item xs={12} md={6}>
        <TextField
          label="Complexion"
          variant="outlined"
          fullWidth
          name="complexion"
          value={formData.complexion}
          onChange={(e) => handleFieldChange("complexion", e.target.value)}
          sx={{ marginBottom: "16px" }}
        />
      </Grid>

      <Grid item xs={12} md={6}>
        <TextField
          label="Weight"
          variant="outlined"
          fullWidth
          type="number"
          name="weight"
          value={formData.weight}
          onChange={(e) => handleFieldChange("weight", e.target.value)}
          sx={{ marginBottom: "16px" }}
        />
      </Grid>

      <Grid item xs={12} md={6}>
        <TextField
          label="Blood Group"
          variant="outlined"
          fullWidth
          name="bloodGroup"
          value={formData.blood_group}
          onChange={(e) => handleFieldChange("blood_group", e.target.value)}
          sx={{ marginBottom: "16px" }}
        />
      </Grid>

      <Grid item xs={12} md={6}>
        <TextField
          label="Hobbies"
          variant="outlined"
          fullWidth
          name="hobbies"
          value={formData.hobbies}
          onChange={(e) => handleFieldChange("hobbies", e.target.value)}
          sx={{ marginBottom: "16px" }}
        />
      </Grid>

      <Grid item xs={12} md={6}>
        <TextField
          label="Family Status"
          variant="outlined"
          fullWidth
          name="familyStatus"
          value={formData.family_status}
          onChange={(e) => handleFieldChange("family_status", e.target.value)}
          sx={{ marginBottom: "16px" }}
        />
      </Grid>

      <Grid item xs={12} md={6}>
        <TextField
          label="Place of Birth"
          variant="outlined"
          fullWidth
          name="placeOfBirth"
          value={formData.place_of_birth}
          onChange={(e) => handleFieldChange("place_of_birth", e.target.value)}
          sx={{ marginBottom: "16px" }}
        />
      </Grid>

      <Grid item xs={12} md={6}>
        <TextField
          label="Horoscope"
          variant="outlined"
          fullWidth
          name="have_horoscope"
          value={formData.have_horoscope}
          onChange={(e) => handleFieldChange("have_horoscope", e.target.value)}
          sx={{ marginBottom: "16px" }}
        />
      </Grid>

      <Grid item xs={12} md={6}>
      <InputLabel>Time of Birth</InputLabel>
        <TextField
          // label="Time of Birth"
          variant="outlined"
          fullWidth
          type="time"
          name="timeOfBirth"
          value={formData.time_of_birth}
          onChange={(e) => handleFieldChange("time_of_birth", e.target.value)}
          sx={{ marginBottom: "16px" }}
        />
      </Grid>

     

      <Grid item xs={12} md={6}>
        <InputLabel>Mangalik</InputLabel>
        <Select
          label="Mangalik"
          variant="outlined"
          fullWidth
          name="mangalik"
          value={formData.mangalik}
          onChange={(e) => handleFieldChange("mangalik", e.target.value)}
          sx={{ marginBottom: "16px" }}
        >
          <MenuItem value={true}>Yes</MenuItem>
          <MenuItem value={false}>No</MenuItem>
        </Select>
      </Grid>

      <Grid item xs={12}>
        <TextField
          label="Personal Description"
          variant="outlined"
          fullWidth
          multiline
          rows={4}
          name="Description"
          value={formData.my_description}
          onChange={(e) =>
            handleFieldChange("my_description", e.target.value)
          }
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

export default PersonalProfile;
