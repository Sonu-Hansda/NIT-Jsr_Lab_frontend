"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import NewsCard from "@/components/HomeComponents/NewsComponents/NewsCard";
import { useNews } from "@/contexts/NewsContext";
import BreadCrumbs from "@/components/BreadCrumbs/BreadCrumbs";
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

const ITEMS_PER_PAGE = 5;

function NewsPage() {
  const [notices, setNotices] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);


  useEffect(() => {
    const getData = async () => {
      setLoading(true);

      try {
        const response = await fetch(
            `https://lab-backend-mxf7.onrender.com/api/notices?populate=Pdf&pagination[page]=${currentPage}&pagination[pageSize]=${ITEMS_PER_PAGE}`
        );

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const res = await response.json();
        const noticesData = res?.data || [];
        const totalPageCount = res?.meta?.pagination?.pageCount || 0;

        setNotices(noticesData);
        setTotalPages(totalPageCount);
      } catch (error) {
        console.error("Error fetching notices:", error);
        setNotices([]);
        setTotalPages(0);
      } finally {
        setLoading(false);
      }
    };

    getData();
  }, [currentPage]);


  const router = useRouter();
  const { setNews } = useNews();

  const handleCardClick = (newsItem) => {
    setNews(newsItem);
    router.push("/Updates/Details");
  };

  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };

  return (
    <div className='flex flex-col bg-white py-5 min-h-dvh text-slate-600 text-right items-center'>
      <div className='pt-6 text-left flex justify-start max-w-[1256px] w-full px-9'>
        <BreadCrumbs />
      </div>
      <div>
        <h1 className='text-5xl font-sans font-light relative right-6 text-sky-950'>NEWS</h1>
        <div className="py-6 text-left flex flex-col items-center max-w-[1256px] w-full px-4">
          {loading ? (
            <p>Loading...</p>
          ) : (
            notices.map((newsItem) => {
              const viewMoreLink = newsItem.attributes.Pdf?.data?.attributes?.url || "#";
              const galleryLink = newsItem.attributes.Pdf?.data?.attributes?.url || "#";
              return (
                <div key={newsItem.id} onClick={() => handleCardClick(newsItem)}>
                  <NewsCard
                    date={newsItem.attributes.publishedAt}
                    title={newsItem.attributes.Title}
                    description={newsItem.attributes.Description}
                    viewMoreLink={viewMoreLink}
                    galleryLink={galleryLink}
                  />
                </div>
              );
            })
          )}
        </div>
      </div>
      <div className="flex justify-center mb-10">
        <Stack spacing={2}>
          <Pagination
            count={totalPages}
            page={currentPage}
            onChange={handlePageChange}
            variant="outlined"
            color="primary"
          />
        </Stack>
      </div>
    </div>
  );
}

export default NewsPage;
