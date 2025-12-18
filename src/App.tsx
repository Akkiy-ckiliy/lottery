import { useRef, useState } from "react";
import "./App.css";
import { allList, emotions, type Music } from "./components/data";
import { ActionArea } from "./components/ActionAre";
import { MusicCard } from "./components/MusicCard";







function App() {
  const [resulted, setResulted] = useState<Music | undefined>(undefined);
  const [emotion, setEmotion] = useState("");
  const [selectedGenre, setSelectedGenre] = useState<string>("");
  const [isSpinning, setIsSpinning] = useState(false);

  const results = selectedGenre
    ? allList.filter((song) => song.genre === selectedGenre)
    : allList;

  const handleGenreSelect = (value: string) => {
    // ボタンの value を受け取り、対応するジャンル名にマッピング
    const map: Record<string, string> = {
      Kpop: "K-POP",
      Jpop: "J-POP",
      Pop: "Pop",
      Rock: "Rock",
    };
    const genre = map[value];
    if (!genre) return;

    setSelectedGenre((prev) => (prev === genre ? "" : genre));
  };

  const intervalRef = useRef<number | null>(null);

  const toggleLottery = () => {
    if (isSpinning) {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
      if(results.length > 0){
      const randomR = Math.floor(Math.random() * results.length);
      const randomE = Math.floor(Math.random() * emotions.length);
      setResulted(results[randomR]);
      setEmotion(emotions[randomE]);
      }
      setIsSpinning(false);
    } else {
      setIsSpinning(true);
      setEmotion("");
      const intervalId = setInterval(() => {
        const randomIndex = Math.floor(Math.random() * results.length);
        setResulted(results[randomIndex]);
      }, 50);

      intervalRef.current = Number(intervalId);
    }
  };

  return (
    <div className="app-container">
      <h1>楽曲くじ引き</h1>
      <h2>今日にぴったりな音楽は何だろう～？</h2>
      <ActionArea isSpinning={isSpinning} onToggleLottery={toggleLottery} onGenreSelect={handleGenreSelect} selectedGenre={selectedGenre} />
      <h3>{selectedGenre ? `ジャンル: ${selectedGenre}(選択中) `: "ジャンル絞り込み"}</h3>
      <MusicCard music={resulted} emotion={emotion} isSpinning={isSpinning} />
      </div>
  );
}

export default App;
