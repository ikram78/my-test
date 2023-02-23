import { useEffect, useState } from "react";

import "./App.css";
import Header from "./Header";
import { User, Post } from "./interfaces/userInterface";
import { urls } from "./Apis";
import UserListing from "./users/UserListing";
import Loader from "./loader";
function App() {
  const [userList, setUserList] = useState<User[]>([]);
  const [postList, setPostList] = useState<Post[]>([]);
  const [showPostList, setShowPostList] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  useEffect(() => {
    setLoading(true);
    getUsers();
  }, []);
  const getUsers = async () => {
    const res: Response = await fetch(urls.getUser);
    const users: User[] = await res.json();
    setUserList(users || []);
    setLoading(false);
  };
  const getUsersPosts = async (id: number) => {
    setLoading(true);
    const res: Response = await fetch(
      `${urls.getUser}/${id}${urls.getUserPost}`
    );
    const posts: Post[] = await res.json();
    setPostList(posts || []);
    setLoading(false);
    setShowPostList(true);
  };

  const userClicks = (id: number) => {
    getUsersPosts(id);
  };
  const postClick = (id: number) => {};
  const back = () => {
    setShowPostList(false);
  };
  return (
    <>
      <Header showPostList={showPostList} back={back}></Header>
      {loading && <Loader></Loader>}
      {!showPostList &&
        userList.map((val: User) => {
          return (
            <UserListing
              key={val.id}
              id={val.id}
              name={val.name}
              email={val.email}
              userClicks={userClicks}
            ></UserListing>
          );
        })}
      {showPostList &&
        postList.map((val: Post) => {
          return (
            <UserListing
              key={val.id}
              id={val.id}
              name={val.title}
              email={val.body}
              userClicks={postClick}
            ></UserListing>
          );
        })}
    </>
  );
}

export default App;
