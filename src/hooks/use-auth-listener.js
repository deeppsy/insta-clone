import { useState, useEffect, useContext } from "react";

import FirebaseContext from "../context/firebase";

export default function UseAuthListener() {
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("authUser"))
  );
  const { firebase } = useContext(FirebaseContext);

  useEffect(() => {
    const listener = firebase.auth().onAuthStateChanged((authUser) => {
      if (authUser) {
        //   we have a user and we can store the user in Local Storage

        localStorage.setItem("authUser", JSON.stringify(authUser));
        setUser(authUser);
      } else {
        //   we dn't have an authed user, therefore, clear local storage
        localStorage.removeItem("authUser");
        setUser(null);
      }
    });

    return () => listener();
  }, [firebase]);
  return { user };
}
