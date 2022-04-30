import * as React from "react";
import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import SelectDropDown from "./SelectDropDown";
import { Button } from "@mui/material";

function Row(props) {
  const { row, isLoading } = props;
  const [open, setOpen] = React.useState(false);

  return (
    <React.Fragment>
      <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
        <TableCell component="th" scope="row">
          {row?.proposalName}
        </TableCell>
        <TableCell>{row?.customerGroupName}</TableCell>
        <TableCell>{row?.date}</TableCell>
        <TableCell>{row?.description}</TableCell>
        <TableCell>{row?.status}</TableCell>
        <TableCell>
          <Button
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            <Typography variant="button" display="block" gutterBottom>
              VIEW SUMMARY
            </Typography>
          </Button>
        </TableCell>
      </TableRow>

      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={7}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            {!isLoading && row.facilities.length > 0 ? (
              <Box sx={{ margin: 1 }}>
                <SelectDropDown facilities={row.facilities} />
              </Box>
            ) : (
              <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={1}>
                  <Grid item xs={12}>
                    <Typography
                      variant="h6"
                      gutterBottom
                      component="div"
                      style={{ textAlign: "center", padding: "10px" }}
                    >
                      No Data Found
                    </Typography>
                  </Grid>
                </Grid>
              </Box>
            )}
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

export default function DataTable({ proposals, isLoading }) {
  return (
    <>
      <TableContainer component={Paper}>
        <Table aria-label="collapsible table">
          <TableHead>
            <TableRow>
              <TableCell>
                <Typography variant="h6" gutterBottom component="div">
                  Proposal Name
                </Typography>
              </TableCell>
              <TableCell>
                <Typography variant="h6" gutterBottom component="div">
                  Customer Group
                </Typography>
              </TableCell>
              <TableCell>
                <Typography variant="h6" gutterBottom component="div">
                  Date (Last Saved)
                </Typography>
              </TableCell>
              <TableCell>
                <Typography variant="h6" gutterBottom component="div">
                  Description
                </Typography>
              </TableCell>
              <TableCell>
                <Typography variant="h6" gutterBottom component="div">
                  Status
                </Typography>
              </TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {proposals.map((proposal) => (
              <Row
                key={proposal.proposalId}
                row={proposal}
                isLoading={isLoading}
              />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
