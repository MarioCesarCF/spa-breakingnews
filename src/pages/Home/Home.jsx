import { Card } from "../../assets/components/Cards/Card";
import { Navbar } from "../../assets/components/Navbar/Navbar";
// import { news } from "../../Datas";
import { getAllPosts } from "../../services/postServices";
import { HomeBody } from "./HomeStyle";

export default function Home() {

  let news;

  async function findAllPosts() {
    const response = await getAllPosts();
    news = response.data.results;
  }

  findAllPosts();

  return (
    <>
      <Navbar />
      <HomeBody>
        {news.map((item, index) => {
          return <Card key={index} news={item} />;
        })}
      </HomeBody>
    </>
  );
}