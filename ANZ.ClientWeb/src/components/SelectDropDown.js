import * as React from "react";
import Box from "@mui/material/Box";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";

const headings = [
  { key: "bookingCountry", value: "Booking Country" },
  { key: "currency", value: "Currency" },
  { key: "limit", value: "Limit" },
  { key: "startDate", value: "Start Date" },
  { key: "maturityDate", value: "Maturity Date" },
];

export default function SelectDropDown({ facilities }) {
  const [facility, setFacility] = React.useState(
    facilities.length > 0 ? facilities[0] : null
  );
  console.log({ facilities, facility });

  const handleChange = (event) => {
    setFacility(event.target.value);
  };

  return (
    <>
      {facility && (
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            <Grid item xs={1}>
              Facility
            </Grid>
            <Grid item xs={2}>
              <FormControl fullWidth>
                <Select
                  defaultValue=""
                  labelId="facility"
                  id="facility"
                  value={facility}
                  onChange={handleChange}
                >
                  {facilities.map((facility) => (
                    <MenuItem key={facility.facilityId} value={facility}>
                      {facility.facilityName}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
          </Grid>

          <Grid container spacing={2}>
            {headings.map((heading) => (
              <React.Fragment key={heading.key}>
                <Grid item xs={3}>
                  <Typography variant="h6" gutterBottom component="div">
                    {heading.value}
                  </Typography>
                  <Typography variant="subtitle1" gutterBottom component="div">
                    {facility[heading.key]}
                  </Typography>
                </Grid>
              </React.Fragment>
            ))}
          </Grid>
        </Box>
      )}
    </>
  );
}
