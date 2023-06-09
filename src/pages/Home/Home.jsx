import { useState, useEffect } from "react";

import { Card } from "../../assets/components/Cards/Card";
import { Navbar } from "../../assets/components/Navbar/Navbar";
// import { news } from "../../Datas";
import { getAllPosts } from "../../services/postServices";
import { HomeBody } from "./HomeStyle";


export default function Home() {
  const [news, setNews] = useState([]);

  async function findAllPosts() {
    const response = await getAllPosts();
    setNews(response.data.results);
  }

  useEffect(() => {
    findAllPosts();
  }, []);

  return (
    <>
      <Navbar />
      <HomeBody>
        {news.map((item) => {
          return (
            <Card
              key={item.id}
              title={item.title}
              text={item.text}
              banner={item.banner}
              likes={item.likes.length}
              comments={item.comments.length}
            />
          );
        })}
      </HomeBody>
    </>
  );
}
