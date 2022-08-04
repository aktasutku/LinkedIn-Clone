import React, { forwardRef } from "react";
import InputOption from "./InputOption";
import "./Post.css";
import { HiThumbUp } from "react-icons/hi";
import { BiCommentDetail, BiSend } from "react-icons/bi";
import { BsFillShareFill } from "react-icons/bs";
import profile from "./assets/utku.jpg";

const Post = forwardRef(({ name, description, message, photoUrl }, ref) => {
  return (
    <div ref={ref} className="post">
      <div className="post__header">
        <img src={photoUrl ? photoUrl : profile} />
        <div className="post__info">
          <h2>{name}</h2>
          <p>{description}</p>
        </div>
      </div>
      <div className="post__body">
        <p>{message}</p>
      </div>
      <div className="post__buttons">
        <InputOption Icon={HiThumbUp} title="Like" color="gray" />
        <InputOption Icon={BiCommentDetail} title="Comment" color="gray" />
        <InputOption Icon={BsFillShareFill} title="Share" color="gray" />
        <InputOption Icon={BiSend} title="Send" color="gray" />
      </div>
    </div>
  );
});

export default Post;
