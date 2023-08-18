import { Heading, Button, Popover as PPopover, Text } from "@primer/react";

export function Popover() {
  return (
    <PPopover relative open={true} caret="top">
      <PPopover.Content
        sx={{
          marginTop: 2,
        }}
      >
        <Heading
          sx={{
            fontSize: 2,
          }}
        >
          Popover heading
        </Heading>
        <Text as="p">Message about popovers</Text>
        <Button>Got it!</Button>
      </PPopover.Content>
    </PPopover>
  );
}
