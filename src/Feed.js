import React, { useEffect, useState } from "react";
import "./Feed.css";
import { MdCreate } from "react-icons/md";
import InputOption from "./InputOption";
import { MdInsertPhoto, MdEventNote, MdArticle } from "react-icons/md";
import { GoDeviceCameraVideo } from "react-icons/go";
import Post from "./Post";
import { db } from "./firebase";
import {
  onSnapshot,
  query,
  orderBy,
  serverTimestamp,
  collection,
  addDoc,
} from "firebase/firestore";
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";
import profile from "./assets/utku.jpg";
import FlipMove from 'react-flip-move';

const Feed = () => {
  const user = useSelector(selectUser);
  const [input, setInput] = useState("");
  const [posts, setPosts] = useState([]);

  // getPosts
  const postRef = collection(db, "posts");
  const q = query(postRef, orderBy("timestamp", "desc"));
  useEffect(() => {
    const getPost = onSnapshot(q, (snapshot) => {
      setPosts(snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() })));
    });
    return () => {
      getPost();
    };
  }, []);

  const sendPost = (e) => {
    e.preventDefault();

    //  Add Data to FireBase
    addDoc(postRef, {
      name: user.displayName,
      description: user.email,
      message: input,
      photoUrl: user.photoUrl || profile,
      timestamp: serverTimestamp(),
    })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error.message);
      });

    setInput("");
  };
  return (
    <div className="feed">
      <div className="feed__inputContainer">
        <div className="feed_input">
          <MdCreate />
          <form>
            <input
              type="text"
              placeholder="Start a Post"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <button onClick={sendPost} type="submit">
              Send
            </button>
          </form>
        </div>
        <div className="feed__inputOptions">
          <InputOption title="Photo" Icon={MdInsertPhoto} color="#70B5F9" />
          <InputOption
            title="Video"
            Icon={GoDeviceCameraVideo}
            color="#E7A33E"
          />
          <InputOption title="Event" Icon={MdEventNote} color="#C0CBCD" />
          <InputOption title="Write Article" Icon={MdArticle} color="#7FC15E" />
        </div>
      </div>
      <FlipMove>
        {posts.map(({ id, data: { name, description, message, photoUrl } }) => (
          <Post
            key={id}
            name={name}
            description={description}
            message={message}
            photoUrl={photoUrl}
          />
        ))}
      </FlipMove>
    </div>
  );
};

export default Feed;
