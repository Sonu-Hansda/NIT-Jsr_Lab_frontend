"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import NewsCard from "@/components/HomeComponents/NewsComponents/NewsCard";
import { useNews } from "@/contexts/NewsContext";
import ViewMore from "../ViewMoreComponent/ViewMoreComponent";
import Link from "next/link";

function NewsSection() {
  const [newsData, setNewsData] = useState([]);
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const { setNews } = useNews();

  const handleCardClick = (newsItem) => {
    setNews(newsItem);
    router.push("/News/Details");
  };

  useEffect(() => {
    const getData = async () => {
      setLoading(true);

      try {
        const response = await fetch(
            `https://refreshing-benefit-91aab22e0f.strapiapp.com/api/notices`
        );
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const res = await response.json();
        const fetchedNewsData = res?.data || [];
        setNewsData(fetchedNewsData);
      } catch (error) {
        console.error("Error fetching news data:", error);
        setNewsData([]);
      } finally {
        setLoading(false);
      }
    };

    getData();
  }, []);

  return (
      <div className="flex flex-col py-5 text-black min-h-dvh text-right items-end">
        <h1 className="text-6xl font-sans text-sky-950 font-light relative my-10 right-3">
          UPDATES
        </h1>
        <div className="py-6 text-left flex flex-col items-center">
          {loading ? (
              <p>Loading...</p>
          ) : newsData.length > 0 ? (
              newsData.slice(-5).map((newsItem, index) => (
                  <div key={index} onClick={() => handleCardClick(newsItem)}>
                    <NewsCard
                        date={newsItem.attributes?.publishedAt || "Unknown Date"}
                        title={newsItem.attributes?.Title || "No Title"}
                        description={newsItem.attributes?.Description || "No Description"}
                        viewMoreLink={
                            newsItem.attributes?.Pdf?.data?.attributes?.url || "#"
                        }
                        galleryLink={
                            newsItem.attributes?.Pdf?.data?.attributes?.url || "#"
                        }
                    />
                  </div>
              ))
          ) : (
              <p>No updates available at the moment.</p>
          )}
        </div>
        <div className="relative right-3 mb-32">
          <Link href={"/Updates"}>
            <ViewMore width={200} colour="black" hovering={"no"} />
          </Link>
        </div>
      </div>
  );
}

export default NewsSection;
