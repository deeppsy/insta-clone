import React from "react";
import Skeleton from "react-loading-skeleton";
import usePhotos from "../hooks/use-photos";
import Post from "./posts";

export default function Timeline() {
  const { photos } = usePhotos();

  //we need to get the photos of logged in user's photos(hooks)
  // on loading the photos, use react skeleton
  // if we have photos, render them (create a post component)
  // if the user has no photos, tell them to create some
  return (
    <div className="container col-span-2">
      {!photos ? (
        <>
          <Skeleton
            count={4}
            width={640}
            height={500}
            className="mb-5 rounded-3xl"
          />
        </>
      ) : photos && photos.length > 0 ? (
        photos.map((content) => <Post key={content.docId} content={content} />)
      ) : (
        <p className="text-center text-2xl">Follow people to see photos</p>
      )}
    </div>
  );
}
