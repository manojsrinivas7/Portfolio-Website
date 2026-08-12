import { useState } from "react";
import { MdArrowOutward } from "react-icons/md";

interface Props {
  image: string;
  alt?: string;
  video?: string;
  link?: string;
}

const WorkImage = (props: Props) => {
  const [isVideo, setIsVideo] = useState(false);
  const [video, setVideo] = useState("");
  const handleMouseEnter = async () => {
    if (props.video) {
      setIsVideo(true);
      const response = await fetch(`src/assets/${props.video}`);
      const blob = await response.blob();
      const blobUrl = URL.createObjectURL(blob);
      setVideo(blobUrl);
    }
  };

  return (
    <div className="work-image">
      <a
        className="work-image-in"
        href={props.link}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={() => setIsVideo(false)}
        target="_blank"
        data-cursor={"disable"}
      >
        {props.link && (
          <div className="work-link">
            <MdArrowOutward />
          </div>
        )}
        <div style={{
          width: "100%", 
          height: "250px", 
          background: "linear-gradient(135deg, #1e1e1e 0%, #0b080c 100%)", 
          display: "flex", 
          justifyContent: "center", 
          alignItems: "center", 
          borderRadius: "20px", 
          border: "1px solid #363636"
        }}>
          <h3 style={{ color: "#aa42ff", fontSize: "20px", fontWeight: "normal", letterSpacing: "2px", textTransform: "uppercase" }}>
            📂 View Project Files
          </h3>
        </div>
        {isVideo && <video src={video} autoPlay muted playsInline loop></video>}
      </a>
    </div>
  );
};

export default WorkImage;
