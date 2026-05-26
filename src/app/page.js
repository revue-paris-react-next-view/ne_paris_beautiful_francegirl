"use client";
import { useState, useEffect } from 'react';
import { scenarios } from './gameData'; // 上記のimageSets構造に対応させてください
import ChoiceButton from './components/ChoiceButton';

export default function ParisNovelGame() {
  const [currentId, setCurrentId] = useState(1);
  const currentScene = scenarios.find(s => s.id === currentId);

  // 1つのシーン内で、今「何番目の画像セット」を見ているか (0からスタート)
  const [setIndex, setSetIndex] = useState(0);

  // サブ画像の進行ステージ（0:未表示, 1:1枚目, 2:2枚目, 3:3枚目）
  const [subImageStage, setSubImageStage] = useState(0);

  // シーン（テキストや選択肢）自体が切り替わったら、すべての画像進行を最初のリセット
  useEffect(() => {
    setSetIndex(0);
    setSubImageStage(0);
  }, [currentId]);

  // 現時点の画像セット（データの安全性を考慮してフォールバック付き）
  // 従来の .image や .subImages 構造から新構造への移行をスムーズにする記述
  const activeSet = currentScene?.imageSets?.[setIndex] || {
    main: currentScene?.image || "",
    subs: currentScene?.subImages || []
  };

  // メイン画像エリア、またはサブ画像エリアの背景をクリックしたときの統合処理
  const handleContainerClick = () => {
    if (subImageStage < 3) {
      // ーー【ステップ1】サブ画像が3枚揃うまでは、クリックで1枚ずつ増やすーー
      setSubImageStage(subImageStage + 1);
    } else {
      // ーー【ステップ2】3枚揃った状態でさらにクリックされたら、次の画像セットへ！ーー
      const totalSets = currentScene?.imageSets?.length || 1;

      if (setIndex < totalSets - 1) {
        setSetIndex(setIndex + 1);   // 次の画像セットへ進む
      } else {
        setSetIndex(0);              // 最後のセットだったら最初の画像セットに戻る
      }
      setSubImageStage(0);           // サブ画像はまた非表示からスタート
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-2 bg-[#fcf6f8]">

      {/* 4分の1コンパクト外枠 */}
      <div
        key={`${currentId}-${setIndex}`} // セットが切り替わった時もふわっとシーンフェードをかける
        className="w-[200px] bg-white rounded-2xl overflow-hidden paris-border scene-fade"
      >

        {/* ① メインの代表画像エリア */}
        <div
          onClick={handleContainerClick}
          className="relative h-[110px] w-full bg-gray-50 overflow-hidden cursor-pointer group"
        >
          <img
            src={activeSet.main}
            alt="Main Scene"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />

          {/* 案内テキスト：状況に応じて文字が変わります */}
          <div className="absolute inset-0 bg-black/10 flex items-end justify-center pb-1.5 pointer-events-none">
            <span className="text-white text-[7px] tracking-wider bg-black/50 px-1.5 py-0.5 rounded-full backdrop-blur-[1px]">
              {subImageStage < 3 ? "Click to open photos" : "✨ Click Main to next theme"}
            </span>
          </div>
        </div>

        {/* ② クリックするたびに「1枚ずつ順次増えていく」サブ画像エリア */}
        {subImageStage > 0 && (
          <div
            onClick={handleContainerClick}
            className="p-1.5 bg-pink-50/40 border-b border-pink-100/60 cursor-pointer hover:bg-pink-100/20 transition-colors"
          >
            <div className="grid grid-cols-3 gap-1">

              {/* 1枚目のミニ画像 */}
              {subImageStage >= 1 && (
                <div key={`${currentId}-${setIndex}-s1`} className="aspect-square h-14 w-full rounded-lg overflow-hidden border border-white shadow-sm bg-gray-100 img-fade">
                  <img src={activeSet.subs[0]} alt="Sub 1" className="w-full h-full object-cover" />
                </div>
              )}

              {/* 2枚目のミニ画像 */}
              {subImageStage >= 2 && (
                <div key={`${currentId}-${setIndex}-s2`} className="aspect-square h-14 w-full rounded-lg overflow-hidden border border-white shadow-sm bg-gray-100 img-fade">
                  <img src={activeSet.subs[1]} alt="Sub 2" className="w-full h-full object-cover" />
                </div>
              )}

              {/* 3枚目のミニ画像 */}
              {subImageStage >= 3 && (
                <div key={`${currentId}-${setIndex}-s3`} className="aspect-square h-14 w-full rounded-lg overflow-hidden border border-white shadow-sm bg-gray-100 img-fade">
                  <img src={activeSet.subs[2]} alt="Sub 3" className="w-full h-full object-cover" />
                </div>
              )}

            </div>
          </div>
        )}

        {/* ③ テキスト＆通常の選択肢エリア */}
        <div className="p-3 text-center">
          <p className="text-[10px] leading-relaxed text-gray-700 mb-3 font-medium min-h-[3rem] flex items-center justify-center px-1">
            {currentScene.text}
          </p>

          <div className="flex flex-col gap-1.5">
            {currentScene.options.map((option, index) => (
              <ChoiceButton
                key={index}
                text={option.text}
                onClick={() => setCurrentId(option.nextId)}
              />
            ))}
          </div>
        </div>

      </div>
    </main>
  );
}
