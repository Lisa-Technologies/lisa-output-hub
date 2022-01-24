import { PostItem } from "@src/types";
import { VFC } from "react";
import { ContentWrapper } from "./ContentWrapper";

interface StumpProps {
  isDone: boolean;
}

export const Stump: VFC<StumpProps> = ({ isDone }) => {
  const stump = isDone ? "🎉" : "-";

  return (
    <div className="stump__container">
      <p className="stump__item">{stump}</p>
    </div>
  );
};

interface MeterProps {
  items: PostItem[];
}

export const Meter: VFC<MeterProps> = ({ items }) => {
  const n = items.length;
  const stumps = (num = 0) =>
    [...Array(4)].map((_, i) => <Stump isDone={i + num * 4 < n} />);

  const emoji = (n: number) => {
    return n <= 4 ? ["😅", "😃", "😏", "😘", "🤩"][n] : "🎉";
  };

  return (
    <section>
      <ContentWrapper>
        <div className="home-section-title-container">
          <h2 className="home-section-title">Blog Meter</h2>
        </div>
        <div className="meter__container">
          <h2>
            今月の達成率：
            <span>{n}/4</span>
            <span>{emoji(n)}</span>
          </h2>
          <div className="meter__stumps">{stumps()}</div>
          {n > 4 && <div className="meter__stumps">{stumps(1)}</div>}
          {n > 8 && <div className="meter__stumps">{stumps(2)}</div>}
        </div>
      </ContentWrapper>
    </section>
  );
};

//記事が出るたびにスタンプラリーカードの空欄が埋まっていく

// isDone: booleanを受け取るStumpコンポーネントを用意する
// Stumpコンポーネントは、isDoneの値によって返す見た目を変える
// isDoneがtrueならば、黒枠の正方形（divタグ）の中に赤字で明朝体の“済”（pタグ）のが描かれたものを返す
// isDoneがfalseならば、黒枠の正方形の中に空文字を入れて返す

// Meterコンポーネントの中で、Stumpコンポーネントを4つ横並びに並べる（mapメソッド、cssのflexプロパティを使用）
// Meterのprops.itemsの配列の長さがnであるとき、左からn番目以下のStumpコンポーネントのisDoneの値にはtrueを渡す。それ以外はfalseを渡す。
