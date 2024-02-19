import { Button } from "@/shared/ui/button";
import SignInModal from "../SignInModal/SignInModal";
import SignUpModal from "../SignUpModal/SignUpModal";
import { useState } from "react";

export default function UnauthorizedUser() {
  const handleOpenModal = (modalType: "signUp" | "signIn") => {
    if (modalType === "signUp") {
      setIsOpenSignUp(!isOpenSignUp);
      setIsOpenSignIn(false);
    } else if (modalType === "signIn") {
      setIsOpenSignUp(false);
      setIsOpenSignIn(!isOpenSignIn);
    }
  };

  const [isOpenSignUp, setIsOpenSignUp] = useState<boolean>(false);
  const [isOpenSignIn, setIsOpenSignIn] = useState<boolean>(false);
  return (
    <>
      <SignInModal
        open={isOpenSignIn}
        setIsOpen={setIsOpenSignIn}
        handleOpenModal={() => handleOpenModal("signUp")}
      >
        <Button variant={"default"}>Войти</Button>
      </SignInModal>
      <SignUpModal
        open={isOpenSignUp}
        setIsOpen={setIsOpenSignUp}
        handleOpenModal={() => handleOpenModal("signIn")}
      />
    </>
  );
}
