import { Box, Tooltip, Button } from "@primer/react";

export function Tool() {
  return (
    <Box
      borderWidth="1px"
      borderStyle="solid"
      borderColor="border.default"
      borderRadius={2}
      p={3}
    >
      <Tooltip aria-label="Hello, Tooltip!">
        <Button>Hover me</Button>
      </Tooltip>
    </Box>
  );
}
