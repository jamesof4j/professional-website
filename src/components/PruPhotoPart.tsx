import React, { useState } from "react";
import Masonry from "react-masonry-css";
import { imageFiles, videoFiles } from "./prunellaMediaList";

interface MediaItem {
  src: string;
  type: "image" | "video";
}

const mediaItems: MediaItem[] = [
  ...imageFiles.map((filename) => ({
    src: `/prunella-img/${filename}`,
    type: "image" as const,
  })),
  ...videoFiles.map((filename) => ({
    src: `/prunella-img/${filename}`,
    type: "video" as const,
  })),
];

const PruPhotoPart: React.FC = () => {
  const [enlarged, setEnlarged] = useState<MediaItem | null>(null);

  return (
    <div>
      <Masonry
        breakpointCols={{ default: 8, 1920: 5, 1100: 2, 700: 1 }}
        className="masonry-grid"
        columnClassName="masonry-column"
      >
        {mediaItems.map((item, idx) =>
          item.type === "image" ? (
            <img
              src={item.src}
              alt={`media-${idx}`}
              className="masonry-item"
              key={idx}
              onClick={() => setEnlarged(item)}
              style={{ cursor: "pointer" }}
            />
          ) : (
            <div
              className="video-thumb-wrapper masonry-item"
              key={idx}
              onClick={() => setEnlarged(item)}
              style={{ cursor: "pointer", position: "relative" }}
            >
              <video
                src={item.src}
                style={{
                  width: "100%",
                  borderRadius: "8px",
                  objectFit: "cover",
                  display: "block",
                }}
                // No controls here!
                tabIndex={-1}
                aria-label={`video-${idx}`}
              />
              {/* Optional: Play icon overlay */}
              <span
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  fontSize: "3rem",
                  color: "rgba(255,255,255,0.8)",
                  pointerEvents: "none",
                  textShadow: "0 0 8px #000",
                }}
              >
                ▶
              </span>
            </div>
          )
        )}
      </Masonry>
      {enlarged && (
        <div className="enlarge-modal" onClick={() => setEnlarged(null)}>
          <div className="enlarge-content" onClick={(e) => e.stopPropagation()}>
            {enlarged.type === "image" ? (
              <img
                src={enlarged.src}
                alt="enlarged"
                style={{
                  maxWidth: "90vw",
                  maxHeight: "90vh",
                }}
              />
            ) : (
              <video
                src={enlarged.src}
                controls
                autoPlay
                style={{
                  maxWidth: "90vw",
                  maxHeight: "90vh",
                }}
              />
            )}
            <button className="close-btn" onClick={() => setEnlarged(null)}>
              Close
            </button>
          </div>
        </div>
      )}
      <style>
        {`
          .masonry-grid {
            column-count: 8;
            column-gap: 16px;
            background-color: #333;
            padding:16px;
          }
          .masonry-grid img, .masonry-grid video {
            width: 100%;
            border-radius: 8px;
            object-fit: cover;
            display: block;
            margin-bottom: 16px;
          }
          .enlarge-modal {
            position: fixed;
            top: 0; left: 0; right: 0; bottom: 0;
            background: rgba(0,0,0,0.85);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 9999;
          }
          .enlarge-content {
            position: relative;
            background: #222;
            padding: 24px;
            border-radius: 12px;
            box-shadow: 0 0 32px #000;
            display: flex;
            flex-direction: column;
            align-items: center;
          }
          .close-btn {
            margin-top: 16px;
            padding: 8px 24px;
            background: #444;
            color: #fff;
            border: none;
            border-radius: 6px;
            cursor: pointer;
            font-size: 1rem;
          }
        `}
      </style>
    </div>
  );
};

export default PruPhotoPart;
