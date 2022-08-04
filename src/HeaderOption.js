import React from "react";
import "./HeaderOptions.css";
import profile from "./assets/utku.jpg";
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";

const HeaderOption = ({ avatar, Icon, title, onClick }) => {
  const user = useSelector(selectUser);
  return (
    <div onClick={onClick} className="headerOption">
      {Icon && <Icon className="headerOption__icon" />}
      {avatar && (
        <img
          className="headerOption__icon"
          // src={user.photoUrl ? user.photoUrl : profile}
          src={profile}
        />
      )}
      <h3 className="headerOption__title">{title}</h3>
    </div>
  );
};

export default HeaderOption;
