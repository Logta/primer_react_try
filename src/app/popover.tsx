import { Heading, Button, Popover as PPopover, Text } from "@primer/react";

export function Popover() {
  return (
    <PPopover relative open={true} caret="top">
      <PPopover.Content style={{ marginTop: 8 }}>
        <Heading as="h2" style={{ fontSize: 20 }}>
          Popover heading
        </Heading>
        <Text as="p">Message about popovers</Text>
        <Button>Got it!</Button>
      </PPopover.Content>
    </PPopover>
  );
}
