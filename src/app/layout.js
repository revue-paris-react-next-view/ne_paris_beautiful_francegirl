import "./globals.css";

// ブラウザのタブや検索エンジンに表示されるメタデータの設定
export const metadata = {
  title: "Parisienne Romance - ne_paris_beautiful_francegirl",
  description: "魅力的なパリジェンヌたちと巡る、華やかで美しいパリのノベルゲーム",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ja">
      <head>
        {/* パリのエレガントな雰囲気を出すため、Google Fontsから美しいセリフ体（Cormorant Garamond）を読み込みます */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;1,400&family=Noto+Serif+JP:wght@400;600&display=swap" rel="stylesheet" />
      </head>
      <body className="antialiased">
        {/* page.jsの中身がここ（children）に埋め込まれて表示されます */}
        {children}
      </body>
    </html>
  );
}
