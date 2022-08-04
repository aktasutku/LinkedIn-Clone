import React from "react";
import "./Header.css";
import { AiOutlineSearch, AiFillHome, AiFillBell } from "react-icons/ai";
import { MdPeopleAlt, MdShoppingBag, MdMessage } from "react-icons/md";
import HeaderOption from "./HeaderOption";
import linkedin from "./assets/linkedin.png";
import { useDispatch } from "react-redux";
import { signOut } from "firebase/auth";
import { auth } from "./firebase";
import { logout } from "./features/userSlice";

const Header = () => {
  const dispatch = useDispatch();

  const logoutOfApp =()=>{
    dispatch(logout())
    signOut(auth)
  }

  return (
    <div className="header">
      <div className="header__left">
        <img src={linkedin} />

        <div className="header__search">
          <AiOutlineSearch />
          <input placeholder="Search" type="text" />
        </div>
      </div>

      <div className="header__right">
        <HeaderOption Icon={AiFillHome} title="Home" />
        <HeaderOption Icon={MdPeopleAlt} title="My Network" />
        <HeaderOption Icon={MdShoppingBag} title="Jobs" />
        <HeaderOption Icon={MdMessage} title="Messaging" />
        <HeaderOption Icon={AiFillBell} title="Notification" />
        <HeaderOption avatar={true} title="Me" onClick={logoutOfApp}/>
      </div>
    </div>
  );
};

export default Header;
