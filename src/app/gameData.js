
export const scenarios = [
  {
    id: 1,
    text: "シャンゼリゼ通りの朝。Avenue des Champs-Élysées",
    imageSets: [
      {
        main: "/images/IMG_7934.JPG", // 1周目メイン
        subs: ["/images/IMG_7908.JPG", "/images/IMG_7930.JPG", "/images/IMG_7925.JPG"]
      },
      {
        main: "/images/IMG_7930.JPG", // 2周目メイン
        subs: ["/images/IMG_7934.JPG", "/images/IMG_7908.JPG", "/images/IMG_7925.JPG"]
      },
      {
        main: "/images/IMG_7908.JPG", // 3周目メイン
        subs: ["/images/IMG_7925.JPG", "/images/IMG_7934.JPG", "/images/IMG_7930.JPG"]
      },
      {
        main: "/images/IMG_7925.JPG", // 4周目メイン
        subs: ["/images/IMG_7930.JPG", "/images/IMG_7908.JPG", "/images/IMG_7934.JPG"]
      }
    ],
    options: [
      { text: "綺麗パリジェンヌに声をかける", nextId: 2 }
    ]
  },
  {
    id: 2,
    text: "「 Bonjour! ボンジュール！」",
    imageSets: [
      {
        main: "/images/IMG_7938.JPG", // 1周目メイン
        subs: ["/images/IMG_7939.JPG", "/images/IMG_7950.JPG", "/images/IMG_7958.JPG"]
      },
      {
        main: "/images/IMG_7939.JPG", // 2周目メイン
        subs: ["/images/IMG_7938.JPG", "/images/IMG_7950.JPG", "/images/IMG_7958.JPG"]
      },
      {
        main: "/images/IMG_7950.JPG", // 3周目メイン
        subs: ["/images/IMG_7958.JPG", "/images/IMG_7938.JPG", "/images/IMG_7939.JPG"]
      },
      {
        main: "/images/IMG_7958.JPG", // 4周目メイン
        subs: ["/images/IMG_7939.JPG", "/images/IMG_7950.JPG", "/images/IMG_7938.JPG"]
      }
    ],
    options: [
      { text: "モダンなアート。オルセー美術館へ", nextId: 3 }
    ]
  },
  {
    id: 3,
    text: "魅惑的な景色。",
    imageSets: [
      {
        main: "/images/IMG_8233.JPG", // 1周目メイン
        subs: ["/images/IMG_7983.JPG", "/images/IMG_8082.JPG", "/images/IMG_8115.JPG"]
      },
      {
        main: "/images/IMG_8082.JPG", // 2周目メイン
        subs: ["/images/IMG_8233.JPG", "/images/IMG_7983.JPG", "/images/IMG_8115.JPG"]
      },
      {
        main: "/images/IMG_7983.JPG", // 3周目メイン
        subs: ["/images/IMG_8115.JPG", "/images/IMG_8233.JPG", "/images/IMG_8082.JPG"]
      },
      {
        main: "/images/IMG_8115.JPG", // 4周目メイン
        subs: ["/images/IMG_8082.JPG", "/images/IMG_7983.JPG", "/images/IMG_8233.JPG"]
      }
    ],
    options: [
      { text: "モンマルトルの丘へ", nextId: 4 }
    ]
  },
  {
    id: 4,
    text: " Paris_Elegance　パリの歴史をエレガントに語ってくれた。",
    imageSets: [
      {
        main: "/images/IMG_8116.JPG", // 1周目メイン
        subs: ["/images/IMG_8117.JPG", "/images/IMG_8133.JPG", "/images/IMG_8139.JPG"]
      },
      {
        main: "/images/IMG_8117.JPG", // 2周目メイン
        subs: ["/images/IMG_8116.JPG", "/images/IMG_8133.JPG", "/images/IMG_8139.JPG"]
      },
      {
        main: "/images/IMG_8133.JPG", // 3周目メイン
        subs: ["/images/IMG_8139.JPG", "/images/IMG_8116.JPG", "/images/IMG_8117.JPG"]
      },
      {
        main: "/images/IMG_8139.JPG", // 4周目メイン
        subs: ["/images/IMG_8117.JPG", "/images/IMG_8133.JPG", "/images/IMG_8116.JPG"]
      }
    ],
    options: [
      { text: "セーヌ川", nextId: 5 }
    ]
  },
  {
    id: 5,
    text: " Musée d'Orsay オルセー美術館。",
    imageSets: [
      {
        main: "/images/IMG_8230.JPG", // 1周目メイン
        subs: ["/images/IMG_8146.JPG", "/images/IMG_8147.JPG", "/images/IMG_8148.JPG"]
      },
      {
        main: "/images/IMG_8146.JPG", // 2周目メイン
        subs: ["/images/IMG_8230.JPG", "/images/IMG_8147.JPG", "/images/IMG_8148.JPG"]
      },
      {
        main: "/images/IMG_8147.JPG", // 3周目メイン
        subs: ["/images/IMG_8148.JPG", "/images/IMG_8230.JPG", "/images/IMG_8146.JPG"]
      },
      {
        main: "/images/IMG_8148.JPG", // 4周目メイン
        subs: ["/images/IMG_8146.JPG", "/images/IMG_8147.JPG", "/images/IMG_8230.JPG"]
      }
    ],
    options: [
      { text: "芸術の余韻に浸りながらモンマルトルへ", nextId: 6 }
    ]
  },
  {
    id: 6,
    text: " Basilique du Sacré-Cœur des Montmartre モンマルトルの丘。サクレ・クール寺院。",
    imageSets: [
      {
        main: "/images/IMG_8151.JPG", // 1周目メイン
        subs: ["/images/IMG_8154.JPG", "/images/IMG_8055.JPG", "/images/IMG_8056.JPG"]
      },
      {
        main: "/images/IMG_8055.JPG", // 2周目メイン
        subs: ["/images/IMG_8151.JPG", "/images/IMG_8154.JPG", "/images/IMG_8056.JPG"]
      },
      {
        main: "/images/IMG_8154.JPG", // 3周目メイン
        subs: ["/images/IMG_8056.JPG", "/images/IMG_8151.JPG", "/images/IMG_8055.JPG"]
      },
      {
        main: "/images/IMG_8056.JPG", // 4周目メイン
        subs: ["/images/IMG_8055.JPG", "/images/IMG_8154.JPG", "/images/IMG_8151.JPG"]
      }
    ],
    options: [
      { text: "パリの景色に、旅の終盤へ", nextId: 7 }
    ]
  },
  {
    id: 7,
    text: " Place Vendôme ヴァンドーム広場のラグジュアリーなブティック街。【Ending】",
    imageSets: [
      {
        main: "/images/IMG_8065.JPG", // 1周目メイン
        subs: ["/images/IMG_8078.JPG", "/images/IMG_8068.JPG", "/images/IMG_8070.JPG"]
      },
      {
        main: "/images/IMG_8068.JPG", // 2周目メイン
        subs: ["/images/IMG_8065.JPG", "/images/IMG_8078.JPG", "/images/IMG_8070.JPG"]
      },
      {
        main: "/images/IMG_8078.JPG", // 3周目メイン
        subs: ["/images/IMG_8070.JPG", "/images/IMG_8065.JPG", "/images/IMG_8068.JPG"]
      },
      {
        main: "/images/IMG_8070.JPG", // 4周目メイン
        subs: ["/images/IMG_8068.JPG", "/images/IMG_8078.JPG", "/images/IMG_8065.JPG"]
      }
    ],
    options: [
      { text: "もう一度、最初のカフェへ戻る", nextId: 1 }
    ]
  }
];
