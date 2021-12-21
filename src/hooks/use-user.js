import { useState, useEffect } from "react";
import { getUserbyUserId } from "../services/firebase";

export default function useUser(userId) {
  const [activeUser, setActiveUser] = useState({});

  useEffect(() => {
    async function getUserObjectByUserId(userId) {
      //   we need a function we can call (firebase services) that gets the user data based on the ID
      const [user] = await getUserbyUserId(userId);
      setActiveUser(user || {});
    }

    if (userId) {
      getUserObjectByUserId(userId);
    }
  }, [userId]);

  return { user: activeUser, setActiveUser };
}
