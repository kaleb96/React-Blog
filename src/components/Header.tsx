import { mdiAccount } from "@mdi/js";
import Icon from "@mdi/react";

function Header() {
  return (
    <div className="flex justify-end">
      <Icon path={mdiAccount} size={2} />
    </div>
  );
}

export default Header;
