import Box from "@material-ui/core/Box";
import { Tasks } from "../Tasks";
import { AddDialog } from "../AddDialog";

export const App = () => (
  <Box display="flex" flexDirection="column" alignItems="center">
    <Tasks />
    <AddDialog />
  </Box>
);
