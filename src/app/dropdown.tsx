import { ActionMenu, ActionList } from "@primer/react";

export function Dropdown() {
  return (
    <ActionMenu>
      <ActionMenu.Button>Menu</ActionMenu.Button>

      <ActionMenu.Overlay>
        <ActionList>
          <ActionList.Item onSelect={(event) => console.log("New file")}>
            New file
          </ActionList.Item>
          <ActionList.Item>Copy link</ActionList.Item>
          <ActionList.Item>Edit file</ActionList.Item>
          <ActionList.Divider />
          <ActionList.Item variant="danger">Delete file</ActionList.Item>
        </ActionList>
      </ActionMenu.Overlay>
    </ActionMenu>
  );
}
