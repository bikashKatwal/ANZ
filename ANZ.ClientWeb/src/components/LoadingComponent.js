import * as React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import { Stack } from "@mui/material";

export default function LoadingComponent() {
  return (
    <Stack alignItems="center">
      <CircularProgress />
    </Stack>
  );
}
