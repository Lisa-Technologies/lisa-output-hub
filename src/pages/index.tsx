import { NextPage } from "next";
import Link from "next/link";

import posts from "@.contents/posts.json";
import { config } from "@site.config";
import { PostItem } from "@src/types";
import { ScrollableMembers } from "@src/components/ScrollableMembers";
import { PostList } from "@src/components/PostList";
import { PageSEO } from "@src/components/PageSEO";
import {
  ContentWrapper,
  UndoWrapForScroll,
} from "@src/components/ContentWrapper";
import { Meter } from "@src/components/Meter";

const Page: NextPage = () => {
  const filteredPosts = posts.filter((post) => {
    //今の時間データを取得
    const todayDate = new Date(Date.now());
    //YYYY-MMで今月の値を取得
    const thisMonth = todayDate.toISOString().substring(0, 8);
    //postのISOデータ先頭７文字を取得 publishedMonth
    const publishedMonth = post.isoDate.substring(0, 8);
    //thismonth === publishedMonthとなる記事データを取得
    return thisMonth === publishedMonth;
  });

  return (
    <>
      <PageSEO
        title={config.siteMeta.title}
        description={config.siteMeta.description}
        path="/"
        removeSiteNameFromTitle={true}
      />

      <section className="home-hero">
        <ContentWrapper>
          <h1 className="home-hero__title">{config.siteMeta.title}</h1>
          {!!config.siteMeta.description && (
            <p className="home-hero__description">
              {config.siteMeta.description}
            </p>
          )}
          <Link href="/rss/feed.xml">
            <a className="home-hero__feed-icon">
              <img
                src={"/icons/rss-fill.svg"}
                alt="rss"
                width={22}
                height={22}
              />
            </a>
          </Link>
        </ContentWrapper>
      </section>

      <section className="home-members">
        <ContentWrapper>
          <div className="home-section-title-container">
            <h2 className="home-section-title">Members</h2>
            <Link href="/members">
              <a className="home-section-link">See Details →</a>
            </Link>
          </div>

          <div className="home-members-container">
            <UndoWrapForScroll>
              <ScrollableMembers />
            </UndoWrapForScroll>
          </div>
        </ContentWrapper>
      </section>

      <Meter items={filteredPosts as PostItem[]} />

      <section className="home-posts">
        <ContentWrapper>
          <div className="home-section-title-container">
            <h2 className="home-section-title">Articles</h2>
          </div>

          <div className="home-posts-container">
            <PostList items={posts as PostItem[]} />
          </div>
        </ContentWrapper>
      </section>
    </>
  );
};

export default Page;
