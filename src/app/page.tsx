"use client";

import { useState } from "react";

type Player = "X" | "O";
type CellValue = Player | null;

const WINNING_LINES = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

function calculateWinner(board: CellValue[]) {
  for (const [a, b, c] of WINNING_LINES) {
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      return { winner: board[a], line: [a, b, c] };
    }
  }
  return null;
}

function SoccerPitchBackground() {
  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none overflow-hidden bg-emerald-950"
    >
      {/* Mowed Grass Stripes */}
      <div
        className="absolute inset-0 opacity-45"
        style={{
          backgroundImage:
            "repeating-linear-gradient(to bottom, #065f46 0px, #065f46 48px, #047857 48px, #047857 96px)",
        }}
      />

      {/* Vignette for contrast around the board */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_25%,rgba(2,44,34,0.72)_100%)]" />

      {/* Top-Down Full Pitch Lines (SVG) */}
      <svg
        viewBox="0 0 680 1050"
        preserveAspectRatio="xMidYMid slice"
        className="w-full h-full opacity-35"
      >
        <g
          fill="none"
          stroke="#ecfdf5"
          strokeWidth="3.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          {/* Outer Touchlines & Goal Lines */}
          <rect x="40" y="45" width="600" height="960" />

          {/* Halfway Line */}
          <line x1="40" y1="525" x2="640" y2="525" />

          {/* Center Circle & Spot */}
          <circle cx="340" cy="525" r="91.5" />
          <circle cx="340" cy="525" r="4" fill="#ecfdf5" />

          {/* Top Goal Net */}
          <rect
            x="303"
            y="25"
            width="74"
            height="20"
            fill="rgba(236,253,245,0.12)"
          />
          {/* Top Penalty Area */}
          <rect x="138" y="45" width="404" height="165" />
          {/* Top Goal Area */}
          <rect x="248" y="45" width="184" height="55" />
          {/* Top Penalty Spot & Arc */}
          <circle cx="340" cy="155" r="3.5" fill="#ecfdf5" />
          <path d="M 267 210 A 91.5 91.5 0 0 0 413 210" />

          {/* Bottom Goal Net */}
          <rect
            x="303"
            y="1005"
            width="74"
            height="20"
            fill="rgba(236,253,245,0.12)"
          />
          {/* Bottom Penalty Area */}
          <rect x="138" y="840" width="404" height="165" />
          {/* Bottom Goal Area */}
          <rect x="248" y="950" width="184" height="55" />
          {/* Bottom Penalty Spot & Arc */}
          <circle cx="340" cy="895" r="3.5" fill="#ecfdf5" />
          <path d="M 267 840 A 91.5 91.5 0 0 1 413 840" />

          {/* Corner Arcs */}
          <path d="M 40 60 A 15 15 0 0 0 55 45" />
          <path d="M 625 45 A 15 15 0 0 0 640 60" />
          <path d="M 40 990 A 15 15 0 0 1 55 1005" />
          <path d="M 625 1005 A 15 15 0 0 1 640 990" />
        </g>
      </svg>
    </div>
  );
}

function SiuuuCelebration() {
  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none z-20 overflow-hidden"
    >
      {/* Top Stadium Banner */}
      <div className="absolute top-6 inset-x-0 flex justify-center animate-siuuu-banner">
        <div className="bg-amber-400 text-emerald-950 font-black italic tracking-wider text-2xl sm:text-4xl px-6 py-2 rounded-full shadow-[0_0_30px_rgba(251,191,36,0.65)] border-2 border-white">
          SIUUUUU! ⚽🔥
        </div>
      </div>

      {/* Bottom Touchline Runner + Jump Celebration */}
      <div className="absolute bottom-4 left-0 w-full flex items-end">
        <div className="animate-cr7-run flex flex-col items-center">
          <span className="mb-1 px-2 py-0.5 rounded bg-emerald-950/90 border border-amber-400/70 text-amber-300 font-black italic text-xs sm:text-sm tracking-widest shadow">
            CR7 • SIUUU!
          </span>

          {/* #7 Striker Celebration Silhouette SVG */}
          <svg
            viewBox="0 0 120 140"
            className="w-20 h-24 sm:w-28 sm:h-32 drop-shadow-[0_6px_12px_rgba(0,0,0,0.6)]"
          >
            {/* Head */}
            <circle cx="60" cy="22" r="11" fill="#fde68a" />
            {/* Hair */}
            <path
              d="M49 19 Q60 7 71 19 Q67 13 60 13 Q53 13 49 19 Z"
              fill="#1e293b"
            />
            {/* Jersey (#7 Red/Green kit) */}
            <path d="M44 36 L76 36 L72 78 L48 78 Z" fill="#dc2626" rx="4" />
            <text
              x="60"
              y="63"
              textAnchor="middle"
              fill="#fef08a"
              fontSize="20"
              fontWeight="900"
              fontFamily="sans-serif"
            >
              7
            </text>
            {/* Signature Outstretched Arms */}
            <path d="M45 40 L16 66 L23 72 L48 50 Z" fill="#dc2626" />
            <path d="M75 40 L104 66 L97 72 L72 50 Z" fill="#dc2626" />
            {/* Hands */}
            <circle cx="18" cy="70" r="4.5" fill="#fde68a" />
            <circle cx="102" cy="70" r="4.5" fill="#fde68a" />
            {/* Shorts */}
            <path
              d="M48 78 L72 78 L76 98 L62 98 L60 88 L58 98 L44 98 Z"
              fill="#065f46"
            />
            {/* Wide Stance Legs */}
            <path d="M46 98 L56 98 L46 130 L36 130 Z" fill="#fde68a" />
            <path d="M64 98 L74 98 L84 130 L74 130 Z" fill="#fde68a" />
            {/* Boots */}
            <ellipse cx="39" cy="132" rx="8" ry="4" fill="#facc15" />
            <ellipse cx="81" cy="132" rx="8" ry="4" fill="#facc15" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function KeeperCelebration() {
  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none z-20 overflow-hidden"
    >
      {/* Top Stadium Banner */}
      <div className="absolute top-6 inset-x-0 flex justify-center animate-siuuu-banner">
        <div className="bg-sky-400 text-slate-950 font-black italic tracking-wider text-2xl sm:text-4xl px-6 py-2 rounded-full shadow-[0_0_30px_rgba(56,189,248,0.65)] border-2 border-white">
          WHAT A SAVE! 🧤🧱
        </div>
      </div>

      {/* Bottom Touchline Diving Goalkeeper Save */}
      <div className="absolute bottom-4 left-0 w-full flex items-end">
        <div className="animate-keeper-dive flex flex-col items-center">
          <span className="mb-1 px-2.5 py-0.5 rounded bg-slate-950/90 border border-sky-400/70 text-sky-300 font-black italic text-xs sm:text-sm tracking-widest shadow">
            GK #1 • CLEAN SHEET!
          </span>

          {/* #1 Goalkeeper Full-Stretch Diving Save SVG */}
          <svg
            viewBox="0 0 180 110"
            className="w-32 h-20 sm:w-44 sm:h-28 drop-shadow-[0_6px_12px_rgba(0,0,0,0.65)]"
          >
            {/* Parried Soccer Ball + Impact Spark */}
            <circle
              cx="156"
              cy="28"
              r="11"
              fill="#ffffff"
              stroke="#0f172a"
              strokeWidth="2.5"
            />
            <polygon points="156,22 161,26 159,32 153,32 151,26" fill="#0f172a" />
            <line
              x1="141"
              y1="14"
              x2="147"
              y2="20"
              stroke="#fde047"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
            <line
              x1="138"
              y1="28"
              x2="143"
              y2="28"
              stroke="#fde047"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
            <line
              x1="142"
              y1="41"
              x2="147"
              y2="36"
              stroke="#fde047"
              strokeWidth="2.5"
              strokeLinecap="round"
            />

            {/* Outstretched Diving Arms (Neon Blue Keeper Kit) */}
            <path
              d="M96 42 L134 26 L138 35 L100 52 Z"
              fill="#0284c7"
            />
            <path
              d="M94 52 L128 44 L131 52 L96 60 Z"
              fill="#0369a1"
            />

            {/* Oversized Goalkeeper Gloves */}
            <rect
              x="130"
              y="21"
              width="15"
              height="12"
              rx="5"
              transform="rotate(-18 130 21)"
              fill="#facc15"
              stroke="#0f172a"
              strokeWidth="1.8"
            />
            <rect
              x="125"
              y="40"
              width="14"
              height="11"
              rx="5"
              transform="rotate(-12 125 40)"
              fill="#facc15"
              stroke="#0f172a"
              strokeWidth="1.8"
            />

            {/* Head */}
            <circle cx="98" cy="34" r="10" fill="#fde68a" />
            <path
              d="M89 31 Q98 21 107 31 Q102 26 98 26 Q93 26 89 31 Z"
              fill="#1e293b"
            />

            {/* Horizontal Diving Torso (#1) */}
            <path d="M56 46 L96 40 L98 66 L58 70 Z" fill="#0284c7" />
            <text
              x="77"
              y="60"
              textAnchor="middle"
              fill="#fef08a"
              fontSize="16"
              fontWeight="900"
              fontFamily="sans-serif"
            >
              1
            </text>

            {/* Shorts */}
            <path d="M36 52 L58 46 L60 70 L38 74 Z" fill="#0f172a" />

            {/* Trailing Diving Legs */}
            <path d="M12 56 L38 52 L39 61 L13 65 Z" fill="#fde68a" />
            <path d="M16 68 L39 62 L40 71 L17 77 Z" fill="#fde68a" />

            {/* Boots */}
            <ellipse
              cx="11"
              cy="60"
              rx="7"
              ry="4"
              transform="rotate(-12 11 60)"
              fill="#38bdf8"
            />
            <ellipse
              cx="15"
              cy="73"
              rx="7"
              ry="4"
              transform="rotate(-12 15 73)"
              fill="#38bdf8"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default function TicTacToePage() {
  const [board, setBoard] = useState<CellValue[]>(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState<boolean>(true);
  const [scores, setScores] = useState({ X: 0, O: 0, draws: 0 });

  const winResult = calculateWinner(board);
  const winner = winResult?.winner ?? null;
  const winningLine = winResult?.line ?? [];
  const isDraw = !winner && board.every((cell) => cell !== null);
  const currentPlayer: Player = isXNext ? "X" : "O";

  const renderMark = (player: CellValue) => {
    if (!player) return "";
    return player === "X" ? "⚽" : "🧤";
  };

  const getPlayerLabel = (player: Player) =>
    player === "X" ? "Striker (⚽)" : "Keeper (🧤)";

  const handleCellClick = (index: number) => {
    if (board[index] || winner || isDraw) return;

    const nextBoard = [...board];
    nextBoard[index] = currentPlayer;
    setBoard(nextBoard);

    const newWin = calculateWinner(nextBoard);
    if (newWin) {
      setScores((prev) => ({
        ...prev,
        [newWin.winner]: prev[newWin.winner] + 1,
      }));
    } else if (nextBoard.every((cell) => cell !== null)) {
      setScores((prev) => ({ ...prev, draws: prev.draws + 1 }));
    } else {
      setIsXNext(!isXNext);
    }
  };

  const startNewGame = () => {
    setBoard(Array(9).fill(null));
    setIsXNext(true);
  };

  const resetAll = () => {
    startNewGame();
    setScores({ X: 0, O: 0, draws: 0 });
  };

  let statusMessage = `Turn: ${getPlayerLabel(currentPlayer)}`;
  if (winner === "X") {
    statusMessage = "🥅 GOOOAL! SIUUU! Striker Wins!";
  } else if (winner === "O") {
    statusMessage = "🧱 CLEAN SHEET! Keeper Wins!";
  } else if (isDraw) {
    statusMessage = "⏱️ Full Time — It's a Draw!";
  }

  return (
    <main className="relative min-h-screen bg-emerald-950 text-slate-100 flex flex-col items-center justify-center p-4 sm:p-6 overflow-hidden">
      {/* Custom Keyframes for Both Celebrations */}
      <style>{`
        @keyframes cr7RunAndJump {
          0% {
            transform: translateX(-140px) translateY(0) scale(0.95);
          }
          35% {
            transform: translateX(35vw) translateY(-10px) scale(1);
          }
          50% {
            transform: translateX(48vw) translateY(-75px) scale(1.18) rotate(-6deg);
          }
          62% {
            transform: translateX(52vw) translateY(0px) scale(1.12) rotate(0deg);
          }
          82% {
            transform: translateX(52vw) translateY(0px) scale(1.12);
          }
          100% {
            transform: translateX(115vw) translateY(0px) scale(1);
          }
        }
        @keyframes keeperSaveDive {
          0% {
            transform: translateX(-160px) translateY(0px) rotate(0deg) scale(0.95);
          }
          30% {
            transform: translateX(30vw) translateY(-12px) rotate(-8deg) scale(1);
          }
          50% {
            transform: translateX(46vw) translateY(-68px) rotate(-14deg) scale(1.16);
          }
          68% {
            transform: translateX(54vw) translateY(-18px) rotate(4deg) scale(1.1);
          }
          84% {
            transform: translateX(56vw) translateY(0px) rotate(0deg) scale(1.08);
          }
          100% {
            transform: translateX(115vw) translateY(0px) rotate(0deg) scale(1);
          }
        }
        @keyframes siuuuBannerPop {
          0% {
            opacity: 0;
            transform: scale(0.5) translateY(-20px);
          }
          15% {
            opacity: 1;
            transform: scale(1.08) translateY(0);
          }
          25% {
            transform: scale(1);
          }
          85% {
            opacity: 1;
            transform: scale(1);
          }
          100% {
            opacity: 0;
            transform: scale(0.95) translateY(-10px);
          }
        }
        .animate-cr7-run {
          animation: cr7RunAndJump 4.2s cubic-bezier(0.22, 1, 0.36, 1) infinite;
        }
        .animate-keeper-dive {
          animation: keeperSaveDive 4.2s cubic-bezier(0.22, 1, 0.36, 1) infinite;
        }
        .animate-siuuu-banner {
          animation: siuuuBannerPop 4.2s ease-in-out infinite;
        }
      `}</style>

      <SoccerPitchBackground />

      {/* Trigger SIUUU when Striker (X) scores, or Diving Save when Keeper (O) wins */}
      {winner === "X" && <SiuuuCelebration />}
      {winner === "O" && <KeeperCelebration />}

      <div className="relative z-10 w-full max-w-md rounded-2xl shadow-2xl p-5 sm:p-6 space-y-5 border bg-emerald-950/80 backdrop-blur-md border-emerald-400/30">
        {/* Header */}
        <div className="flex items-center justify-between gap-2">
          <div>
            <h1 className="text-xl sm:text-2xl font-bold tracking-tight text-white">
              Pitch Tic-Tac-Toe
            </h1>
            <p className="text-xs text-emerald-300/85">
              SUpost Developer Challenge
            </p>
          </div>

          <span className="px-3 py-1 rounded-full text-xs font-semibold bg-emerald-900/90 text-emerald-200 border border-emerald-400/30">
            ⚽ vs 🧤
          </span>
        </div>

        {/* Scoreboard */}
        <div className="grid grid-cols-3 gap-3 text-center">
          <div className="rounded-xl p-3 border bg-emerald-900/55 border-emerald-400/25">
            <div className="text-xs text-slate-200 font-medium truncate">
              Striker ⚽
            </div>
            <div className="text-2xl font-bold text-emerald-300 mt-0.5">
              {scores.X}
            </div>
          </div>

          <div className="rounded-xl p-3 border bg-emerald-900/55 border-emerald-400/25">
            <div className="text-xs text-slate-200 font-medium">Draws</div>
            <div className="text-2xl font-bold text-white mt-0.5">
              {scores.draws}
            </div>
          </div>

          <div className="rounded-xl p-3 border bg-emerald-900/55 border-emerald-400/25">
            <div className="text-xs text-slate-200 font-medium truncate">
              Keeper 🧤
            </div>
            <div className="text-2xl font-bold text-amber-300 mt-0.5">
              {scores.O}
            </div>
          </div>
        </div>

        {/* Status Banner */}
        <div
          className={`text-center py-2.5 px-4 rounded-xl font-semibold text-sm sm:text-base transition-colors ${
            winner
              ? "bg-amber-400/25 text-amber-200 border border-amber-400/60 shadow-inner"
              : isDraw
              ? "bg-slate-700/60 text-slate-200 border border-slate-500/40"
              : "bg-emerald-900/70 text-emerald-100 border border-emerald-400/30"
          }`}
        >
          {statusMessage}
        </div>

        {/* 3x3 Locked Square Board */}
        <div className="grid grid-cols-3 grid-rows-3 gap-3 w-full">
          {board.map((cell, index) => {
            const isWinningCell = winningLine.includes(index);
            const isPlayable = !cell && !winner && !isDraw;

            return (
              <button
                key={index}
                onClick={() => handleCellClick(index)}
                disabled={!isPlayable}
                aria-label={`Square ${index + 1}`}
                className={`group relative aspect-square w-full h-full flex items-center justify-center rounded-xl text-4xl sm:text-5xl font-extrabold leading-none transition-all duration-150 select-none ${
                  isWinningCell
                    ? "bg-amber-400/25 border-2 border-amber-400 scale-[1.02] shadow-lg"
                    : "bg-emerald-900/65 border-2 border-emerald-300/35 hover:bg-emerald-800/85 hover:border-emerald-200/75"
                } ${isPlayable ? "cursor-pointer active:scale-95" : "cursor-default"}`}
              >
                {cell ? (
                  <span className="drop-shadow-sm">{renderMark(cell)}</span>
                ) : isPlayable ? (
                  <span className="opacity-0 group-hover:opacity-30 transition-opacity pointer-events-none">
                    {renderMark(currentPlayer)}
                  </span>
                ) : null}
              </button>
            );
          })}
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3 pt-1">
          <button
            onClick={startNewGame}
            className="flex-1 py-3 px-4 rounded-xl transition cursor-pointer shadow-md bg-emerald-500 hover:bg-emerald-400 active:bg-emerald-600 text-emerald-950 font-bold"
          >
            New Game
          </button>
          <button
            onClick={resetAll}
            className="font-medium py-3 px-4 rounded-xl border transition cursor-pointer text-sm bg-emerald-900/70 hover:bg-emerald-800 text-emerald-100 border-emerald-400/30"
          >
            Reset Scores
          </button>
        </div>
      </div>
    </main>
  );
}