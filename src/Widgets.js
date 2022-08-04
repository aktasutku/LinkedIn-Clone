import React from "react";
import "./Widgets.css";
import { AiFillInfoCircle } from "react-icons/ai";
import { BsFillRecordFill } from "react-icons/bs";

const Widgets = () => {
  const newsArticle = (heading, subtitle) => (
    <div className="widgets__article">
      <div className="widgets__articleLeft">
        <BsFillRecordFill />
      </div>
      <div className="widgets__articleRight">
        <h4>{heading}</h4>
        <p>{subtitle}</p>
      </div>
    </div>
  );
  return (
    <div className="widgets">
      <div className="widgets__header">
        <h2>Linkedin News</h2>
        <AiFillInfoCircle />
      </div>
      {newsArticle("Utku is here ", "Top news - 9999 readers")}
      {newsArticle("Tesla stocks new high record", "Top news - 874 readers")}
      {newsArticle("New York is too hot", "Top news - 650 readers")}
      {newsArticle("How to find job", "Top news - 9999 readers")}
    </div>
  );
};

export default Widgets;
