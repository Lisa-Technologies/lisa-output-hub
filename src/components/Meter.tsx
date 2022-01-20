import { PostItem } from "@src/types";
import { VFC } from "react";
import { ContentWrapper } from "./ContentWrapper";

interface MeterProps {
  items: PostItem[];
}

export const Meter: VFC<MeterProps> = ({ items }) => {
  return (
    <section>
      <ContentWrapper>
        <div>This is Meter</div>
        <ul>
          {items.map((item) => (
            <li>{item.title}</li>
          ))}
        </ul>
      </ContentWrapper>
    </section>
  );
};
