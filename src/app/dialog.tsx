import { Button, Box, Dialog as PDialog } from "@primer/react";
import React, { useRef, useState } from "react";

export function Dialog() {
  const returnFocusRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <Button ref={returnFocusRef} onClick={() => setIsOpen(true)}>
        Open
      </Button>
      <PDialog
        returnFocusRef={returnFocusRef}
        isOpen={isOpen}
        onDismiss={() => setIsOpen(false)}
        aria-labelledby="header-id"
      >
        <PDialog.Header id="header-id">Title</PDialog.Header>
        <Box p={3}>
          <span>Some content</span>
        </Box>
      </PDialog>
    </>
  );
}
