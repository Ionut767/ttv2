import style from "./style/FooterMenuBar.module.css";
import * as fa from "react-icons/fa";
const FooterMenuBar: React.FC = () => {
  return (
    <div className={style.FooterMenuBar}>
      <span>
        <fa.FaHome />
        <p>Home</p>
      </span>
      <span>
        <fa.FaGlobeAmericas />
        <p>Explore</p>
      </span>
      <span className={style.plus}>
        <fa.FaPlus />
      </span>
      <span>
        <fa.FaBell />
        <p>Updates</p>
      </span>
      <span>
        <fa.FaUserAlt />
        <p>Profile</p>
      </span>
    </div>
  );
};
export default FooterMenuBar;
