import { PostItem } from "@src/types";
import { VFC } from "react";
import { ContentWrapper } from "./ContentWrapper";

interface StumpProps {
  isDone: boolean;
}

export const Stump: VFC<StumpProps> = ({ isDone }) => {
  const stump = isDone ? "済" : "takashima";
  return (
    <div className="blackbox">
      <p className="stump">{stump}</p>
    </div>
  );
};

interface MeterProps {
  items: PostItem[];
}

export const Meter: VFC<MeterProps> = ({ items }) => {
  const n = items.length;
  const stumps = [...Array(4)].map((_, i) => <Stump isDone={i < n} />);

  return (
    <section>
      <ContentWrapper>
        <div>This is Meter</div>
        <div className="kendo">{stumps}</div>
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
