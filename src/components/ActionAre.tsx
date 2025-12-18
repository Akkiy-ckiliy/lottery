import "../App.css";

type Props = {
  isSpinning: boolean;
  onToggleLottery: () => void;
  onGenreSelect: (genreKey: string) => void;
  selectedGenre: string;
};

export const ActionArea = ({
  isSpinning,
  onToggleLottery,
  onGenreSelect,
  selectedGenre,
}: Props) => {
  const getBtnClass = (targetGenre: string) => {
    return selectedGenre === targetGenre ? "genre-btn active" : "genre-btn";
  };

  return (
    <div className="action-container">
      <button
        className="music-button"
        onClick={onToggleLottery}
        aria-label={isSpinning ? "ストップ" : "くじ引きスタート"}
      >
        <span className="note" aria-hidden="true">
          ♪
        </span>
        <span className="btn-text">
          {isSpinning ? "ストップ！" : "くじ引きstart"}
        </span>
      </button>
      <h3>ジャンル絞り込み(同じジャンルを2回押すと解除)</h3>
      <div className="genre-grid">
        <button
          className={getBtnClass("K-POP")}
          onClick={() => onGenreSelect("Kpop")}
        >
          K-POP
        </button>
        <button
          className={getBtnClass("J-POP")}
          onClick={() => onGenreSelect("Jpop")}
        >
          J-POP
        </button>
        <button
          className={getBtnClass("Pop")}
          onClick={() => onGenreSelect("Pop")}
        >
          POPs
        </button>
        <button
          className={getBtnClass("Rock")}
          onClick={() => onGenreSelect("Rock")}
        >
          Rock
        </button>
      </div>
    </div>
  );
};
