import { Button, Dialog as PDialog } from "@primer/react";
import React, { useRef, useState } from "react";

export function Dialog() {
  const returnFocusRef = useRef<HTMLButtonElement>(null);
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <Button ref={returnFocusRef} onClick={() => setIsOpen(true)}>
        Open
      </Button>
      {isOpen && (
        <PDialog
          title="Title"
          returnFocusRef={returnFocusRef}
          onClose={() => setIsOpen(false)}
        >
          <span>Some content</span>
        </PDialog>
      )}
    </>
  );
}
