import React from "react";
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
      button2: "TRAVEL",
      button3: "BUSSINESS",
      button4: "TECHNOLOGY",
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

      <section className = "">
        <div className="container mx-auto w-8/12 pt-20">
          <div className="grid grid-cols-2 ">
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
          <div className="grid grid-cols-2 pt-10">
            <div className="col-span-1">
              {object.data.map((item, idx) => (
                <Howtoask
                  key={idx}
                  button2={item.button2}
                  date = {item.date}
                  title={item.title}
                  subtitle={item.subtitle}
                  author={item.author}
                />
              ))}
            </div>
            
          </div>
          <div className="grid grid-cols-2 pt-10">
            <div className="col-span-1">
              {object.data.map((item, idx) => (
                <Howtoask
                  key={idx}
                  button3={item.button3}
                  date = {item.date}
                  title={item.title}
                  subtitle={item.subtitle}
                  author={item.author}
                />
              ))}
            </div>
            
          </div>
          <div className="grid grid-cols-2 pt-10">
            <div className="col-span-1">
              {object.data.map((item, idx) => (
                <Howtoask
                  key={idx}
                  button4={item.button4}
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
