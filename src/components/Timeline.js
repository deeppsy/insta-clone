import { useContext } from "react";

import Skeleton from "react-loading-skeleton";
import usePhotos from "../hooks/use-photos";
import Post from "./posts";
import LoggedInUserContext from "../context/logged-in-user";

export default function Timeline() {
  const { user } = useContext(LoggedInUserContext);

  const { user: { following } = {} } = useContext(LoggedInUserContext);

  const { photos } = usePhotos(user);

  //we need to get the photos of logged in user's photos(hooks)
  // on loading the photos, use react skeleton
  // if we have photos, render them (create a post component)
  // if the user has no photos, tell them to create some
  return (
    <div className="container col-span-2">
      {following === undefined ? (
        <Skeleton
          count={2}
          width={640}
          height={500}
          className="mb-5 rounded-3xl"
        />
      ) : following.length === 0 ? (
        <p className="flex justify-center font-bold">
          Follow other people to see Photos
        </p>
      ) : photos ? (
        photos.map((content) => <Post key={content.docId} content={content} />)
      ) : null}
    </div>
  );
}
