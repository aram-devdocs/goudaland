import { Container } from "@mui/system";
import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import CreateNewPost from "./CreateNewPost";
import CreateNewModule from "./CreateNewModule";
import CreateNewActivity from "./CreateNewActivity";
import EditUser from "./EditUser";
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
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

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}
export default function Admin(props) {
  const { _state } = props;

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Container>
      <Tabs
        value={value}
        onChange={handleChange}
        aria-label="basic tabs example"
      >
        <Tab label="Posts" {...a11yProps(0)} />
        <Tab label="Modules" {...a11yProps(1)} />
        <Tab label="Activites" {...a11yProps(2)} />
        <Tab label="Users" {...a11yProps(3)} />

      </Tabs>

      <TabPanel value={value} index={0}>
        <CreateNewPost _state={_state} />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <CreateNewModule _state={_state} />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <CreateNewActivity _state={_state} />
      </TabPanel>
      <TabPanel value={value} index={3}>
        <EditUser _state={_state} />
      </TabPanel>
    </Container>
  );
}
