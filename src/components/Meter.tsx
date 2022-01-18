import { VFC } from "react";
import { ContentWrapper } from "./ContentWrapper";

interface MeterProps {}

export const Meter: VFC<MeterProps> = () => {
  return (
    <section>
      <ContentWrapper>
        <div>This is Meter</div>
      </ContentWrapper>
    </section>
  );
};
