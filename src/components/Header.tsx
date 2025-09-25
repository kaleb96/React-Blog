import { mdiMenu, mdiAccount, mdiLogin } from "@mdi/js";
import Icon from "@mdi/react";
import { useState } from "react";

function Header() {
  const menuContents = [1, 2, 3, 4, 5, 6];
  const [isLogin, setIsLogin] = useState(false);
  const [openLoginModal, setopenLoginModal] = useState(false);

  const onClickLoginModal = () => {
    setopenLoginModal((prev) => !prev);
  };
  return (
    <>
      <div className="flex justify-end p-4">
        <Icon
          path={isLogin ? mdiAccount : mdiMenu}
          size={2}
          onClick={onClickLoginModal}
        />
      </div>
      {openLoginModal && (
        <div className="w-60 fixed right-5 ">
          {menuContents.map((_, index) => (
            <p className="border-1 mb-px">content{index}</p>
          ))}
        </div>
      )}
    </>
  );
}

export default Header;
