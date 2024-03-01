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

const ProfessionalDetails = ({ handleNextClick }) => {
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
        <FormControl fullWidth variant="outlined" sx={{ marginBottom: "16px" }}>
          <InputLabel>Profession</InputLabel>
          <Select
            value={formData.profession}
            onChange={(e) => handleFieldChange("profession", e.target.value)}
            label="Profession"
          >
            <MenuItem value="Self Employed">Self Employed</MenuItem>
            <MenuItem value="Student">Student</MenuItem>
            <MenuItem value="Not Working">Not Working</MenuItem>
            <MenuItem value="Business">Business</MenuItem>
            <MenuItem value="Small Business">Small Business</MenuItem>
            <MenuItem value="Trading">Trading</MenuItem>
            <MenuItem value="Govt. Job">Govt. Job</MenuItem>
            <MenuItem value="Private Job">Private Job</MenuItem>
            <MenuItem value="Agent">Agent</MenuItem>
            <MenuItem value="Other">Other</MenuItem>
          </Select>
        </FormControl>
      </Grid>

      <Grid item xs={12} md={6}>
        <TextField
          label="Monthly Income"
          variant="outlined"
          fullWidth
          type="number"
          name="salaryPerMonth"
          value={formData.salary_per_month}
          onChange={(e) => handleFieldChange("salary_per_month", e.target.value)}
          sx={{ marginBottom: "16px" }}
        />
      </Grid>

      <Grid item xs={12} md={6}>
        <TextField
          label="Company"
          variant="outlined"
          fullWidth
          name="company"
          value={formData.company}
          onChange={(e) => handleFieldChange("company", e.target.value)}
          sx={{ marginBottom: "16px" }}
        />
      </Grid>

      <Grid item xs={12} md={6}>
        <TextField
          label="Designation"
          variant="outlined"
          fullWidth
          name="designation"
          value={formData.designation}
          onChange={(e) => handleFieldChange("designation", e.target.value)}
          sx={{ marginBottom: "16px" }}
        />
      </Grid>

      <Grid item xs={12} md={6}>
        <TextField
          label="Occupation Address"
          variant="outlined"
          fullWidth
          name="occupationAddress"
          value={formData.occupation_address}
          onChange={(e) =>
            handleFieldChange("occupation_address", e.target.value)
          }
          sx={{ marginBottom: "16px" }}
        />
      </Grid>

      <Grid item xs={12}>
        <TextField
          label="Academic Qualifications"
          variant="outlined"
          fullWidth
          multiline
          rows={4}
          name="academicQualifications"
          value={formData.academic_qualifications}
          onChange={(e) =>
            handleFieldChange("academic_qualifications", e.target.value)
          }
          sx={{ marginBottom: "16px" }}
        />
      </Grid>

      <Grid item xs={12}>
        <TextField
          label="Profession Description"
          variant="outlined"
          fullWidth
          multiline
          rows={4}
          name="professionDescription"
          value={formData.profession_description}
          onChange={(e) =>
            handleFieldChange("profession_description", e.target.value)
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

export default ProfessionalDetails;
