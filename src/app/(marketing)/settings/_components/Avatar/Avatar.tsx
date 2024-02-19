import Image from "next/image";
import css from "./Avatar.module.scss";
import defaultAvatar from "@/../public/user.svg";
import camera from "@/../public/camera.svg";

export default function Avatar() {
  return (
    <div className={css.wrapper}>
      <Image
        src={camera}
        alt=""
        width={35}
        height={35}
        className={css.change}
      />

      <Image
        src={defaultAvatar}
        alt=""
        width={104}
        height={104}
        className={css.avatar}
      />
    </div>
  );
}
