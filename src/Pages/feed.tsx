import React, { useEffect, useState } from "react";
import { Photo } from "../models/photo";
import "./Feed.css";
import PhotoView from "../component/PhotoView";

function Feed() {
  // keep track of an array of type "photo" from model above
  const [photos, setPhotos] = useState<Photo[]>([]);
  // pull the ig-clone-backend photos from localhost:5001/photos
  useEffect(() => {
    fetch("http://localhost:5001/photos")
      .then((res) => res.json())
      .then((data: Photo[]) => {
        console.log(data)
        setPhotos(data);
      });
  }, []);

  return (
    <>
      <h1>the feed pics</h1>
      <p>
        {photos.map((photo: Photo) => {
            return <PhotoView key={photo._id} photo={photo} />
            // return <div><img src={photo.photoUrl}/></div>
        })}
      </p>
    </>
  );
}

export default Feed;
