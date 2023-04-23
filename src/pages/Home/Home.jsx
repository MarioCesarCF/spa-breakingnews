import { Card } from "../../assets/components/Cards/Card";
import { Navbar } from "../../assets/components/Navbar/Navbar";
import { news } from "../../Datas";
import { HomeBody } from "./HomeStyle";

export default function Home() {
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