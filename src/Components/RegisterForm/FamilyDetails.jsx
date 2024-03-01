import React from "react";
import { Grid, TextField, Button, Select, MenuItem, FormControl, InputLabel } from '@mui/material';
import { useFormDataContext } from '../../Contaxt/FormDataProvider';

const FamilyDetails = ({ handleNextClick }) => {
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
    <Grid container spacing={2} sx={{ maxWidth: "800px", margin: "auto", padding: "20px" }} >

<Grid item xs={12} md={6}>
        <TextField
          label="Unmarried Brothers"
          variant="outlined"
          fullWidth
          type="number"
          name="unmarriedBrothers"
          value={formData.unmarried_brothers}
          onChange={(e) => handleFieldChange('unmarried_brothers', e.target.value)}
          sx={{ marginBottom: '16px' }}
        />
      </Grid>

      <Grid item xs={12} md={6}>
        <TextField
          label="Married Brothers"
          variant="outlined"
          fullWidth
          type="number"
          name="marriedBrothers"
          value={formData.married_brothers}
          onChange={(e) => handleFieldChange('married_brothers', e.target.value)}
          sx={{ marginBottom: '16px' }}
        />
      </Grid>

      <Grid item xs={12} md={6}>
        <TextField
          label="Unmarried Sisters"
          variant="outlined"
          fullWidth
          type="number"
          name="unmarriedSisters"
          value={formData.unmarried_sisters}
          onChange={(e) => handleFieldChange('unmarried_sisters', e.target.value)}
          sx={{ marginBottom: '16px' }}
        />
      </Grid>

      <Grid item xs={12} md={6}>
        <TextField
          label="Married Sisters"
          variant="outlined"
          fullWidth
          type="number"
          name="marriedSisters"
          value={formData.married_sisters}
          onChange={(e) => handleFieldChange('married_sisters', e.target.value)}
          sx={{ marginBottom: '16px' }}
        />
      </Grid>

      <Grid item xs={12} md={6}>
        <TextField
          label="Father Full Name"
          variant="outlined"
          fullWidth
          name="fatherFullName"
          value={formData.father_full_name}
          onChange={(e) => handleFieldChange('father_full_name', e.target.value)}
          sx={{ marginBottom: '16px' }}
        />
      </Grid>

      <Grid item xs={12} md={6}>
        <TextField
          label="Mother Full Name"
          variant="outlined"
          fullWidth
          name="motherFullName"
          value={formData.mother_full_name}
          onChange={(e) => handleFieldChange('mother_full_name', e.target.value)}
          sx={{ marginBottom: '16px' }}
        />
      </Grid>

      <Grid item xs={12} md={6}>
        <FormControl fullWidth variant="outlined" sx={{ marginBottom: '16px' }}>
          <InputLabel>Marital Status</InputLabel>
          <Select
            value={formData.marital_status}
            onChange={(e) => handleFieldChange('marital_status', e.target.value)}
            label="Marital Status"
          >
            <MenuItem value="Unmarried">Unmarried</MenuItem>
            <MenuItem value="Divorced">Divorced</MenuItem>
            <MenuItem value="Widow">Widow</MenuItem>
            <MenuItem value="Widower">Widower</MenuItem>
          </Select>
        </FormControl>
      </Grid>



      <Grid item xs={12} md={6}>
        <TextField
          label="Number of Children"
          variant="outlined"
          fullWidth
          type="number"
          name="numberOfChildren"
          value={formData.number_of_children}
          onChange={(e) => handleFieldChange('number_of_children', e.target.value)}
          sx={{ marginBottom: '16px' }}
        />
      </Grid>


      <Grid item xs={12}>
        <TextField
          label="Family Description"
          variant="outlined"
          fullWidth
          multiline
          rows={4}
          name="FamilyDescription"
          value={formData.family_description}
          onChange={(e) =>
            handleFieldChange("family_description", e.target.value)
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

export default FamilyDetails;
