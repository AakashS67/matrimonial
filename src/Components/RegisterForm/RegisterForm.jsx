import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useMediaQuery } from "@mui/material";
import { RiLoginBoxLine } from "react-icons/ri";
import { ImProfile } from "react-icons/im";
import { MdFamilyRestroom } from "react-icons/md";
import { RiProfileFill } from "react-icons/ri";
import { GiHabitatDome } from "react-icons/gi";
import { MdOutlineContactPhone } from "react-icons/md";
import ContactInfo from "./ContactInfo";
import FamilyDetails from "./FamilyDetails";
import PersonalHabits from "./PersonalHabits";
import PersonalInfo from "./PersonalInfo";
import PersonalProfile from "./PersonalProfile";
import ProfessionalDetails from "./ProfessionalDetails";
import { useFormDataContext } from "../../Contaxt/FormDataProvider";
import { FormDataProvider } from "../../Contaxt/FormDataProvider";


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

export default function RegisterForm() {
  const [value, setValue] = React.useState(0);
  const isLargeScreen = useMediaQuery("(min-width:768px)");
  const { formData, dispatch } = useFormDataContext();

  const SmallScreenIconSize = 30;
  const LargeScreenIconSize = 50;
  const IconSize = isLargeScreen ? LargeScreenIconSize : SmallScreenIconSize;
  const displayStyle = isLargeScreen ? "block" : "none";

  const tabData = [
    {
      icon: <RiLoginBoxLine style={{ width: IconSize, height: IconSize }} />,
      label: "Personal",
    },
    {
      icon: <ImProfile style={{ width: IconSize, height: IconSize }} />,
      label: "Profile",
    },
    {
      icon: <MdFamilyRestroom style={{ width: IconSize, height: IconSize }} />,
      label: "Family Details",
    },
    {
      icon: <RiProfileFill style={{ width: IconSize, height: IconSize }} />,
      label: "Professional",
    },
    {
      icon: <GiHabitatDome style={{ width: IconSize, height: IconSize }} />,
      label: "Habits",
    },
    {
      icon: (
        <MdOutlineContactPhone style={{ width: IconSize, height: IconSize }} />
      ),
      label: "Contact",
    },
  ];

  // const handleChange = (event, newValue) => {
  //   setValue(newValue);
  // };
  // // const handleChange = (newValue) => {
  // //   setValue(newValue);
  // // };
  const handleTabChange = (event, newValue) => {
    setValue(newValue);
  };
  const handleNextClick = () => {
    console.log("Form Data:", formData);
    setValue((prevValue) => (prevValue < tabData.length - 1 ? prevValue + 1 : prevValue));
  };
  return (
    <Box
      sx={{
        flexGrow: 1,
        bgcolor: "rgba(255, 255, 255, 0.76)",
        display: isLargeScreen ? "flex" : "flex-column",
        flexDirection: isLargeScreen ? "row" : "column",
        height: "100%",
        width: "100%",
      }}
    >
      <Tabs
        orientation={isLargeScreen ? "vertical" : "horizontal"}
        variant={isLargeScreen ?  "standard" : "scrollable"}
        value={value}
        onChange={handleTabChange}
        aria-label="Tabs example"
        // className=" overflow-scroll "
        sx={
          isLargeScreen
            ? { borderBottom: 1, borderColor: "divider" }
            : { borderLeft: 1, borderColor: "divider" }
        }
      >
        {tabData.map((tab, index) => (
          <Tab
            key={index}
            label={
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {tab.icon}
                <span style={{ display: displayStyle }}>{tab.label}</span>
              </div>
            }
          />
        ))}
      </Tabs>

      {value === 0 && (
        <PersonalInfo  handleNextClick={handleNextClick}/>
      )}
      {value === 1 && (
        <PersonalProfile  handleNextClick={handleNextClick}/>
      )}
      {value === 2 && (
        <FamilyDetails  handleNextClick={handleNextClick}/>
      )}
      {value === 3 && (
        <ProfessionalDetails  handleNextClick={handleNextClick}/>
      )}
      {value === 4 && (
        <PersonalHabits  handleNextClick={handleNextClick}/>
      )}
      {value === 5 && (
        <ContactInfo  handleNextClick={handleNextClick}/>
      )}
    </Box>
  );
}
