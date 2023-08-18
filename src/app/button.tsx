import { Button, ButtonGroup } from "@primer/react";
import {
  ButtonDanger,
  ButtonOutline,
  ButtonPrimary,
} from "@primer/react/deprecated";

export function Buttons() {
  return (
    <div>
      <Button sx={{ marginBottom: "1rem" }}>Button</Button>
      <div style={{ marginBottom: "1rem" }}>
        <ButtonDanger>Button Danger</ButtonDanger>
        <ButtonOutline>Button Outline</ButtonOutline>
        <ButtonPrimary>Button Primary</ButtonPrimary>
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
