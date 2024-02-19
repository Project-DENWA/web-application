import css from "./Settings.module.scss";
import Tabs from "./_components/Tabs/Tabs";
import Title from "./_components/Title/Title";

export default function Settings() {
  return (
    <div className={css.settings}>
      <Title />
      <Tabs />
    </div>
  );
}
