import { useState, useEffect, useContext } from "react";
import UserContext from "../context/user";
import { getUserbyUserId } from "../services/firebase";

export default function useUser() {
  const [activeUser, setActiveUser] = useState({});
  const { user } = useContext(UserContext);

  useEffect(() => {
    async function getUserObjectByUserId() {
      //   we need a function we can call (firebase services) that gets the user data based on the ID
      const [response] = await getUserbyUserId(user.uid);
      setActiveUser(response);
    }

    if (user?.uid) {
      getUserObjectByUserId();
    }
  }, [user]);

  return { user: activeUser };
}
