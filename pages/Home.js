import React from "react";
import Link from "next/link";
import Blacknavbar from "./Blacknavbar2";
import Bluenavbar from "./Bluenavbar";
import Backgroundimage from "./Backgroundimage";
import Howtoask from "./Howtoask";


const object = {
  data: [
    {
      button: "Travel",
      date: "07 JUNE 2016",
      title: "How to ask for a haircut you want when you're abroad",
      subtitle: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Exercitationem impedit libero maiores, itaque atque in sunt eaque consequatur nesciunt dolores hic, ratione excepturi reprehenderit tempora. Saepe nobis debitis incidunt? Maiores!",
      author: "Post by Author",
    },
  ],
};

function Home() {
  return (
    <div>
      <section>
        <Blacknavbar />
      </section>

      <section>
        <Bluenavbar />
      </section>

      <section>
        <Backgroundimage />
      </section>

      <section>
        <div className="container mx-auto ">
          <div className="grid grid-cols-2">
            <div className="col-span-1">
              {object.data.map((item, idx) => (
                <Howtoask
                  key={idx}
                  button={item.button}
                  date = {item.date}
                  title={item.title}
                  subtitle={item.subtitle}
                  author={item.author}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
