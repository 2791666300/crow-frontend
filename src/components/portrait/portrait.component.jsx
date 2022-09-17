import { useSelector } from "react-redux";
import { selectorCurrentUser } from "../../store/user/user.selector";

import { PortraitPhoto, Photocontainer } from "./portrait.styles";
export const Portrait = (photo) => {
  const currentUser = useSelector(selectorCurrentUser);

  return (
    <Photocontainer>
      <PortraitPhoto
        src={`/portrait-img/${currentUser.photo}`}
        alt="portrait"
      />
    </Photocontainer>
  );
};
