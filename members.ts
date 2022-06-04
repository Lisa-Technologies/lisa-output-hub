import { Member } from "@src/types";

export const members: Member[] = [
  {
    id: "corporate",
    name: "Lisa Technologies",
    role: "Official",
    bio: "フードデリバリーを最適化する「フードデリバリーマネージャー（FDM）」を開発しています。資金調達完了に伴い組織拡大中！",
    avatarSrc: "/avatars/lisa_tech.png",
    sources: ["https://zenn.dev/lisatech/feed"],
    websiteUrl: "https://lisatech.jp/",
  },
  {
    id: "shintaronakagawa",
    name: "Shintaro Nakagawa",
    role: "Lead Engineer",
    bio: "学生時代よりソフトウェア開発・マーケティング業務に携わる。工学部卒（卒論AR実装)、農林水産省認定の６次産業での立ち上げ、D2Cブランドの立ち上げ、EC系SaaSの自社開発、フリーランスを経て、 Lisa Technologies(株)にジョイン",
    avatarSrc: "/avatars/shintaro_nakagawa.jpg",
    sources: [
      "https://zenn.dev/sintaro/feed",
      "https://note.com/_sintaro0221_/rss",
    ],
    twitterUsername: "sintaro0221",
    githubUsername: "sintaro",
  },
  {
    id: "akarikusumoto",
    name: "Akari Kusumoto",
    role: "Backend dev",
    bio: "FDMのバックエンドを担当しています",
    avatarSrc: "/avatars/akari_kusumoto.jpg",
    sources: ["https://zenn.dev/akusu/feed"],
    twitterUsername: "",
    githubUsername: "AkariKusumoto",
    websiteUrl: "",
  },
  {
    id: "yutakamiyazaki",
    name: "Yutaka Miyazaki",
    role: "Frontend dev",
    bio: "フロントエンドエンジニア2年目の業務委託。前職はクラウドERPのカスタマイズ開発をしていました。",
    avatarSrc: "/avatars/yutaka_miyazaki.svg",
    sources: ["https://yutaaaaa.dev/rss/feed.xml"],
    twitterUsername: "yutaaaaa___",
    githubUsername: "Yuta07",
    websiteUrl: "https://yutaaaaa.dev/",
  },
];
