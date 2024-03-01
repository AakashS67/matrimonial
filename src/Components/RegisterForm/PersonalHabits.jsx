import React from "react";
import { Grid, TextField, Button, Select, MenuItem, FormControl, InputLabel , FormControlLabel ,Checkbox } from '@mui/material';
import { useFormDataContext } from '../../Contaxt/FormDataProvider';

const PersonalHabits = ({ handleNextClick }) => {
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
        <InputLabel>Mangalik</InputLabel>
        <Select
          label="Smoke"
          variant="outlined"
          fullWidth
          name="Smoke"
          value={formData.smoke}
          onChange={(e) => handleFieldChange("smoke", e.target.value)}
          sx={{ marginBottom: "16px" }}
        >
          <MenuItem value={true}>Yes</MenuItem>
          <MenuItem value={false}>No</MenuItem>
        </Select>
      </Grid>


      <Grid item xs={12} md={6}>
        <InputLabel>Drink</InputLabel>
        <Select
          label="Drink"
          variant="outlined"
          fullWidth
          name="Drink"
          value={formData.drink}
          onChange={(e) => handleFieldChange("drink", e.target.value)}
          sx={{ marginBottom: "16px" }}
        >
          <MenuItem value={true}>Yes</MenuItem>
          <MenuItem value={false}>No</MenuItem>
        </Select>
      </Grid>


      <Grid item xs={12} md={6}>
        <FormControl fullWidth variant="outlined" sx={{ marginBottom: '16px' }}>
          <InputLabel>Diet</InputLabel>
          <Select
            value={formData.diet}
            onChange={(e) => handleFieldChange('diet', e.target.value)}
            label="Diet"
          >
            <MenuItem value={true}>Vegetarian</MenuItem>
            <MenuItem value={false}>Non-Vegetarian</MenuItem>
          </Select>
        </FormControl>
      </Grid>


      <Grid item xs={12}>
        <TextField
          label="Other Amusements"
          variant="outlined"
          fullWidth
          multiline
          rows={4}
          name="otherAmusements"
          value={formData.other_amusements}
          onChange={(e) =>
            handleFieldChange("other_amusements", e.target.value)
          }
          sx={{ marginBottom: "16px" }}
        />
      </Grid>


      <Grid item xs={12}>
        <TextField
          label="habits Description"
          variant="outlined"
          fullWidth
          multiline
          rows={4}
          name="habitsDescription"
          value={formData.habits_description}
          onChange={(e) =>
            handleFieldChange("habits_description", e.target.value)
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

export default PersonalHabits;
