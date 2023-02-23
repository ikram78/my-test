import { FC } from "react";
import { User } from "../interfaces/userInterface";

const UserListing: FC<User> = ({ name, email, id, userClicks }) => {
  return (
    <div key={id} className="userList" onClick={(e) => userClicks(id)}>
      <span className="name">{name}</span>
      <span className="email">{email}</span>
    </div>
  );
};
export default UserListing;
