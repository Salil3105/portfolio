"use client";

import { useEffect, useState } from "react";

/** Shows /public/avatar.png once it loads; otherwise the CSS "SC" orb. */
export default function Avatar() {
  const [img, setImg] = useState(false);
  useEffect(() => {
    const im = new window.Image();
    im.onload = () => setImg(true);
    im.src = "/avatar.png";
  }, []);

  return (
    <div className="avatar">
      {img ? (
        <img className="avatar-illus" src="/avatar.png" alt="3D avatar of Salil Chandwadkar" />
      ) : (
        <div className="mono-orb">SC</div>
      )}
      <span className="tag">{"// building, learning, shipping"}</span>
    </div>
  );
}
