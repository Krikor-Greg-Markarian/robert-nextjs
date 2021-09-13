import React from "react";
import Blacknavbar from "./Blacknavbar2";
import Bluenavbar from "./Bluenavbar";
import Backgroundimage from "./Backgroundimage";
import Howtoask from "./Howtoask";
import { FaFacebook, FaInstagram, FaTwitter, FaHeart } from "react-icons/fa";

const object = {
  data: [
    {
      button: "Travel",
      date: "07 JUNE 2016",
      title: "How to ask for a haircut you want when you're abroad",
      subtitle:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Exercitationem impedit libero maiores, itaque atque in sunt eaque consequatur nesciunt dolores hic, ratione excepturi reprehenderit tempora. Saepe nobis debitis incidunt? Maiores!",
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

      <section>
        <div className="col-span-1 container mx-auto pt-20 w-8/12 grid grid-cols-2">
          <div className="grid grid-cols-1">
            <div className="col-span-1">
              {object.data.map((item, idx) => (
                <Howtoask
                  key={idx}
                  button={item.button}
                  date={item.date}
                  title={item.title}
                  subtitle={item.subtitle}
                  author={item.author}
                />
              ))}
              {object.data.map((item, idx) => (
                <Howtoask
                  key={idx}
                  button={item.button}
                  date={item.date}
                  title={item.title}
                  subtitle={item.subtitle}
                  author={item.author}
                />
              ))}
              {object.data.map((item, idx) => (
                <Howtoask
                  key={idx}
                  button={item.button}
                  date={item.date}
                  title={item.title}
                  subtitle={item.subtitle}
                  author={item.author}
                />
              ))}
              {object.data.map((item, idx) => (
                <Howtoask
                  key={idx}
                  button={item.button}
                  date={item.date}
                  title={item.title}
                  subtitle={item.subtitle}
                  author={item.author}
                />
              ))}
            </div>
          </div>
          <div className="pl-24 w-80">
            <div className="container mx-auto bg-white p-3">
              <div className="flex justify-center items-center">
                <p className="text-gray-500">
                  ----{" "}
                  <span className="text-black font-bold text-sm">ABOUT ME</span>{" "}
                  ----
                </p>
              </div>
              <div className="flex justify-center items-center pt-4">
                <div className="boywitheyeglass"></div>
              </div>
              <p className="text-gray-500 text-center p-2 text-sm">
                A personal diary of wanderlust and an overflowing wardrobe. LIve
                with passion.
              </p>
              <p className="font-bold italic pt-1 text-center pb-6">
                Robert Smith
              </p>
            </div>

            <div className="pt-4 w-80">
              <div className="container mx-auto bg-white p-3">
                <div className="flex justify-center items-center">
                  <p className="text-gray-500">
                    ----{" "}
                    <span className="text-black font-bold text-sm">
                      NEWSLETTER
                    </span>{" "}
                    ----
                  </p>
                </div>
                <div className="flex justify-center items-center pt-4">
                  <input
                    type="text"
                    name=""
                    id=""
                    placeholder="Your Email Adress"
                    className="p-2 border-2"
                  />
                </div>

                <div className="pt-4"></div>
                <div className="flex justify-center items-center">
                  <button className="bg-gray-200 font-bold text-sm px-14 py-2">
                    SUBSCRIBE
                  </button>
                </div>
              </div>
              <div className="pt-4 w-80">
                <div className="container mx-auto bg-white p-3">
                  <div className="flex justify-center items-center">
                    <p className="text-gray-500">
                      ----{" "}
                      <span className="text-black font-bold text-sm">
                        INSTAGRAM
                      </span>{" "}
                      ----
                    </p>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <div className="instapics"></div>
                    <div className="instapics"></div>
                    <div className="instapics"></div>
                    <div className="instapics"></div>
                  </div>
                </div>
                <div className="pt-4 w-80">
                  <div className="container mx-auto bg-white p-3">
                    <div className="flex justify-center items-center">
                      <p className="text--500">
                        ----{" "}
                        <span className="text-black font-bold text-sm">
                          SUBSCRIBE &amp; FOLLOW
                        </span>{" "}
                        ----
                      </p>
                    </div>
                    <div className="flex justify-center items-center pt-4">
                      <div>
                        <FaFacebook className="inline" />
                        <FaTwitter className="inline ml-2" />
                        <FaHeart className="inline ml-2" />
                        <FaInstagram className="inline ml-2" />
                        <FaHeart className="inline ml-2" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-4 ">
              <div className="container mx-auto bg-white p-8 pt-4 w-80 h-auto">
                <div className="flex justify-center items-center">
                  <p className="text-gray-500">
                    ----{" "}
                    <span className="text-black font-bold text-sm">
                      LATEST POSTS
                    </span>{" "}
                    ----
                  </p>
                </div>

                <div className="">
                  <div class="flex pt-4">
                    <div class="flex-shrink w-28 h-16">
                      <div className="instapics"></div>
                    </div>
                    <div class="flex-shrink w-64 h-16">
                      <p className="text-sm">
                        Best Beaches in Sydney For The Easter Long Weekend
                      </p>
                      <p className="text-gray-500 text-sm pt-2">FASHION</p>
                    </div>
                  </div>
                </div>
                <div className="">
                  <div class="flex pt-4">
                    <div class="flex-shrink w-28 h-16">
                      <div className="instapics"></div>
                    </div>
                    <div class="flex-shrink w-64 h-16">
                      <p className="text-sm">
                        Best Beaches in Sydney For The Easter Long Weekend
                      </p>
                      <p className="text-gray-500 text-sm pt-2">FASHION</p>
                    </div>
                  </div>
                </div>
                <div className="">
                  <div class="flex pt-4">
                    <div class="flex-shrink w-28 h-16">
                      <div className="instapics"></div>
                    </div>
                    <div class="flex-shrink w-64 h-16">
                      <p className="text-sm">
                        Best Beaches in Sydney For The Easter Long Weekend
                      </p>
                      <p className="text-gray-500 text-sm pt-2">FASHION</p>
                    </div>
                  </div>
                </div>
                <div className="">
                  <div class="flex pt-4">
                    <div class="flex-shrink w-28 h-16">
                      <div className="instapics"></div>
                    </div>
                    <div class="flex-shrink w-64 h-16">
                      <p className="text-sm">
                        Best Beaches in Sydney For The Easter Long Weekend
                      </p>
                      <p className="text-gray-500 text-sm pt-2">FASHION</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-4 w-80 h-auto">
              <div className="container mx-auto bg-white p-3">
                <div className="flex justify-center items-center">
                  <p className="text-gray-500 pt-4 pb-4">
                    ----{" "}
                    <span className="text-black font-bold text-sm ">
                      CATEGORIES
                    </span>{" "}
                    ----
                  </p>
                </div>
                <div className="pb-8 pt-4">
                  <div className="flex justify-center items-center pt-2 pb-2 border-2 ">
                    <form action="">
                      <select name="" id="">
                        <option className=" " placeholder="se" value="">
                          SELECT CATEGORY
                        </option>
                        <option value="">B</option>
                        <option value="">C</option>
                        <option value="">D</option>
                      </select>
                    </form>
                  </div>
                </div>
              </div>
              
            </div>
            <div className="pt-4 w-80 h-auto">
              <div className="container mx-auto bg-white p-3">
                <div className="flex justify-center items-center">
                  <p className="text-gray-500 pt-4 pb-4">
                    ----{" "}
                    <span className="text-black font-bold text-sm ">
                      TWEETS
                    </span>{" "}
                    ----
                  </p>
                 
                </div>
                <div className = "flex justify-center items-center">
                <FaTwitter className = "text-blue-600"/>
                </div>
                
                <p className = "text-gray-500 text-sm text-center pt-4 pb-4">TWEETED ON 07:05 AM JUL 30</p>
                <p className = "text-center text-sm pt-4">Last night @ #CFDAAwards. it was an honor to present the @swarovski emerging talent awards. What a talent-</p>
                <div className = "flex justify-center items-center pt-4 pb-4">
                <p className = "inline text-blue-400">Reply</p>
                <p className = "inline text-blue-400 ml-2">Retweet</p>
                <p className = "inline text-blue-400 ml-2">Favorite</p>
                </div>
               
                
              </div>
              
            </div>
          </div>
          
        </div>
      </section>
    </div>
  );
}

export default Home;
