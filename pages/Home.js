import React from "react";
import Blacknavbar from "./Blacknavbar2";
import Bluenavbar from "./Bluenavbar";
import Backgroundimage from "./Backgroundimage";
import Howtoask from "./Howtoask";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaHeart,
  FaIoxhost,
} from "react-icons/fa";
import Footer from "./Footer";
import Smallboximgtext from "./Smallboximgtext";
import axios from "axios";

function Home(props) {
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
        <div className="container mx-auto pt-20 w-8/12 grid grid-cols-2">
          <div className="grid grid-cols-1 pb-2">
            <div className="col-span-1">
              <div className="pb-12">
                {props.posts_data.data.map((item, idx) => (
                  <Howtoask
                    key={idx}
                    button={item.button}
                    button2={item.button2}
                    button3={item.button3}
                    button4={item.button4}
                    date={item.date}
                    title={item.title}
                    subtitle={item.subtitle}
                    author={item.author}
                    // hikingimage3={item.hikingimage3}
                    // hikingimage4={item.hikingimage4}
                    // hikingimage5={item.hikingimage5}
                    // hikingimage6={item.hikingimage6}
                  />
                ))}
              </div>
            </div>
          </div>
          <div className="pl-24 ">
            <div className="w-80">
              <div className="container mx-auto bg-white p-2">
                <div className="flex justify-center items-center">
                  <p className="text-gray-500">
                    ----{" "}
                    <span className="text-black font-bold text-sm">
                      ABOUT ME
                    </span>{" "}
                    ----
                  </p>
                </div>
                <div className="flex justify-center items-center pt-4">
                  <div className="boywitheyeglass"></div>
                </div>
                <p className="text-gray-500 text-center p-2 text-sm">
                  A personal diary of wanderlust and an overflowing wardrobe.
                  LIve with passion.
                </p>
                <p className="font-bold italic pt-1 text-center pb-6">
                  Robert Smith
                </p>
              </div>
            </div>

            <div className="pt-12 w-80 ">
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
                    type="text2"
                    name=""
                    id=""
                    placeholder="Your Email Adress"
                    className="p-2 border-2 focus:outline-none"
                  />
                </div>

                <div className="pt-4"></div>
                <div className="flex justify-center items-center">
                  <button className="bg-gray-200 font-bold text-sm px-16 py-2">
                    SUBSCRIBE
                  </button>
                </div>
              </div>
              <div className="pt-12 w-80">
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

                  <div className="flex justify-center items-center">
                    <div className="grid grid-cols-2 gap-2 pt-6">
                      <div className="col-span-1">
                        <div className="instapics"></div>
                      </div>

                      <div className="col-span-1">
                        <div className="instapics"></div>
                      </div>

                      <div className="col-span-1">
                        <div className="instapics"></div>
                      </div>

                      <div className="col-span-1">
                        <div className="instapics"></div>
                      </div>
                      <div className="col-span-1">
                        <div className="instapics"></div>
                      </div>
                      <div className="col-span-1">
                        <div className="instapics"></div>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-center items-center">
                    <p className="text-blue-400 pt-4 pb-8">@theocean</p>
                  </div>
                </div>

                <div className="pt-12 w-80">
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
                        <FaIoxhost className="inline ml-2" />
                        <FaInstagram className="inline ml-2" />
                        <FaHeart className="inline ml-2" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-12 pr-56">
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

                {props.posts_data.data.map((item, idx) => (
                  <Smallboximgtext
                    key={idx}
                    text={item.text}
                    fashion={item.fashion}
                  />
                ))}
              </div>
            </div>

            <div className="pt-12 w-80 h-auto">
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
            <div className="pt-12 w-80 h-auto pb-20">
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
                <div className="flex justify-center items-center">
                  <FaTwitter className="text-blue-600" />
                </div>

                <p className="text-gray-500 text-sm text-center pt-4 pb-4">
                  TWEETED ON 07:05 AM JUL 30
                </p>
                <p className="text-center text-sm pt-4">
                  Last night @ #CFDAAwards. it was an honor to present the
                  @swarovski emerging talent awards. What a talent-
                </p>
                <div className="flex justify-center items-center pt-4 pb-4">
                  <p className="inline text-blue-400">Reply</p>
                  <p className="inline text-blue-400 ml-2">Retweet</p>
                  <p className="inline text-blue-400 ml-2">Favorite</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <section>
          <Footer />
        </section>
      </section>
    </div>
  );
}

export async function getServerSideProps(context) {
  const response = await axios.get("http://localhost:3000/api/posts");

  return {
    props: {
      posts_data: response.data,
      
    }, // will be passed to the page component as props
  };
}

export default Home;
