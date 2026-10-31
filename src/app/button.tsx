import { Button, ButtonGroup } from "@primer/react";

export function Buttons() {
  return (
    <div>
      <Button style={{ marginBottom: "1rem" }}>Button</Button>
      <div style={{ marginBottom: "1rem" }}>
        <Button variant="danger">Button Danger</Button>
        <Button variant="invisible">Button Invisible</Button>
        <Button variant="primary">Button Primary</Button>
      </div>
      <div>
        <ButtonGroup>
          <Button>Button</Button>
          <Button>Button</Button>
          <Button>Button</Button>
        </ButtonGroup>
      </div>
    </div>
  );
}
