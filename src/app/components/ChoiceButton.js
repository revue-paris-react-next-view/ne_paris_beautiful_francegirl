"use client";

export default function ChoiceButton({ text, onClick }) {
  return (
    <button
      onClick={onClick}
      className="relative group overflow-hidden py-3 px-6 bg-gradient-to-r from-rose-300 via-pink-400 to-rose-400 text-white font-semibold rounded-full shadow-md transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 text-sm tracking-wider w-full"
    >
      {/* ホバー時に光が左から右へ流れるスパイス演出 */}
      <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:animate-shine" />

      {/* ボタンのテキスト */}
      <span className="relative z-10">{text}</span>
    </button>
  );
}
