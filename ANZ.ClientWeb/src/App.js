import "./App.css";

import { Button, Typography } from "@mui/material";
import DataTable from "./components/DataTable";
import { get } from "./api";
import { useState } from "react";
import LoadingComponent from "./components/LoadingComponent";
import { Box } from "@mui/system";

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [proposalData, setProposalData] = useState([]);

  const handleClick = async () => {
    try {
      setIsLoading(true);
      const response = await get(`${process.env.REACT_APP_BASE_URL}/GetData`);
      setProposalData([...response]);
      setIsLoading(false);
    } catch (e) {
      console.log("Error", e);
      setIsLoading(false);
    }
  };
  return (
    <>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        backgroundColor="#1367bb"
        height="80px"
        marginBottom="10px"
      >
        <Typography
          variant="h6"
          gutterBottom
          component="div"
          style={{ color: "white" }}
        >
          Institutional Pricing Tool
        </Typography>
      </Box>

      <Box ml={2} mr={2}>
        <Button
          variant="contained"
          onClick={handleClick}
          style={{ marginBottom: "10px" }}
        >
          Get Data
        </Button>

        {isLoading && (
          <Box
            sx={{
              position: "fixed",
              top: "50%",
              width: "100%",
              height: "100%",
              zIndex: "9999",
            }}
          >
            <LoadingComponent />
          </Box>
        )}
        <DataTable proposals={proposalData} isLoading={isLoading} />
      </Box>
    </>
  );
}

export default App;
