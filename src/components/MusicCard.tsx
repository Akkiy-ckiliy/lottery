import type { Music } from "./data";
import coverArt from "../../public/image.png";
import "../App.css";

type Props = {
  music: Music | undefined;
  emotion: string;
  isSpinning: boolean;
};
export const MusicCard = ({ music, emotion, isSpinning }: Props) => {
  return (
    <div className="music-player">
      <div>
        <p className="result">
          おすすめの１曲：{isSpinning ? "???" : music?.name}
        </p>
        <p>
          <a
            href={music?.url}
            target="_blank"
            rel="noreferrer"
            className="album-link"
            style={{ pointerEvents: isSpinning ? "none" : "auto" }}
          >
            <div className="image-wrapper">
              <img
                className={isSpinning ? "roulette-img" : ""}
                src={music?.img || coverArt}
                alt={music?.name}
              />
              <div className="play-overlay">
                <span className="play-icon">▶</span>
              </div>
            </div>
          </a>
        </p>
        <p className="result">今日の君は{emotion || "???"}度MAX!!</p>
      </div>
    </div>
  );
};
