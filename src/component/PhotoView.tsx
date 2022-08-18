import React from "react";
import { Photo } from "../models/photo";

interface PhotoViewProp {
  photo: Photo;

}

function PhotoView({ photo }: PhotoViewProp) {
  return (
    <>
      <div><img src={photo.photoUrl}/></div>
    </>
  );
}

export default PhotoView;
