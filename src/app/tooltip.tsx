import { Tooltip, Button } from "@primer/react";

export function Tool() {
  return (
    <div
      style={{
        border: "1px solid var(--borderColor-default)",
        borderRadius: 6,
        padding: 16,
      }}
    >
      <Tooltip text="Hello, Tooltip!">
        <Button>Hover me</Button>
      </Tooltip>
    </div>
  );
}
