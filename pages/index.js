import Blacknavbar from "../components/Blacknavbar";
import Bluenavbar from "../components/Bluenavbar";
import Backgroundimage from "../components/Backgroundimage";
import Smallbox from "../components/Smallbox";
import Textleftpic from "../components/Textleftpic";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaMailBulk,
  FaMapMarker,
} from "react-icons/fa";
import Alexisran from "../components/Alexisran";
import Alexisran2 from "../components/Alexisran";
import Relatedposts from "../components/Relatedposts";

const object = {
  data: [
    {
      title:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas nemo repellendus, quasi tenetur ipsam debitis tempora, numquam saepe autem, veniam vero sint? Quaerat accusantium iure quibusdam veniam voluptatem modi quod.",

      name: "Alexis Ran",
      position:
        "Many desktop publishing and web page editors now use lorem ipsum as their default model text, andaw search to lorem ipsum will uncover many web sites stilin. Their infancy. Various versions have envolved over.",

      name2: "Alexis Ran",
      position2:
        "Proin gravida nibh vel velit auctor aliquet Aenean sollicitudin. Lorem quisma bibendum ctor, nisi. elitas consequat ipsum nec sagittis sem nibh id elit. Duis sed odios sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit. Nam nec tellus a odio ticidut.",
    },
  ],
};

export default function Home() {
  return (
    <div>
      <section>
        <Blacknavbar />
      </section>

      <section>
        <Bluenavbar />
      </section>

      <section className="">
        <Backgroundimage>
          <Smallbox />
        </Backgroundimage>
      </section>

      <section className="pt-8">
        {object.data.map((item, idx) => (
          <Textleftpic key={idx} title={item.title} />
        ))}

        <div className="container mx-auto border-2 p-4 ">
          <div>
            <p className="font-bold inline border-r-2 pl-4 pr-4">2 COMMENTS </p>
            <p className="font-bold inline ml-1 pl-4 pr-4 "> TAGGED :</p>
            <span className="text-gray-500 inline">LIFESTYLE, FOOD, DRINK</span>
            <div className="float-right">
              <FaFacebook className="inline" />
              <FaTwitter className="inline ml-3" />
              <FaMailBulk className="inline ml-3" />
              <FaInstagram className="inline ml-3" />
              <FaMapMarker className="inline ml-3" />
            </div>
          </div>
        </div>
      </section>

      <section>
        {object.data.map((item, idx) => (
          <Alexisran key={idx} name={item.name} position={item.position} />
        ))}
      </section>

      <section className="">
        <div className="pt-40 pb-20">
          <div className="container mx-auto">
            <div className="flex justify-center items-center">
              <p className="font-bold border-b-4 text-sm">RELATED POSTS</p>
            </div>
            <div className="grid grid-cols-2 gap-40">
              <div className="col-span-1">
                <Relatedposts />
              </div>
              <Relatedposts />
            </div>
            <div className="flex justify-center items-center pt-20">
              <p className="font-bold border-b-4 text-sm">COMMENTS</p>
            </div>

            <div>
              <div className="pt-20 border-b-2  container mx-auto pb-20">
                <div className="container mx-auto">
                  <div className="grid grid-cols-2 ">
                    <div className="col-span-1">
                      <div className="alexisran rounded-full"></div>
                    </div>

                    <div className=" ">
                      <div className="font-bold inline">
                        {" "}
                        Alexis Ran{" "}
                        <p className="text-gray-500 text-sm pl-4 inline">
                          March 15, 2016{" "}
                        </p>{" "}
                        <span className="text-gray-500 text-sm float-right">
                          REPLY
                        </span>{" "}
                      </div>
                      <div className="text-gray-500 pt-5 text-sm">
                        Proin gravida nibh vel velit auctor aliquet Aenean
                        sollicitudin. Lorem quisma bibendum ctor, nisi. elitas
                        consequat ipsum nec sagittis sem nibh id elit. Duis sed
                        odios sit amet nibh vulputate cursus a sit amet mauris.
                        Morbi accumsan ipsum velit. Nam nec tellus a odio
                        ticidut.
                      </div>
                    </div>

                    <div className="col-span-1 pt-12">
                      <div className="alexisran rounded-full"></div>
                    </div>
                    <div className=" ">
                      <div className="font-bold inline">
                        {" "}
                        Alexis Ran{" "}
                        <p className="text-gray-500 text-sm pl-4 inline">
                          March 15, 2016{" "}
                        </p>{" "}
                        <span className="text-gray-500 text-sm float-right">
                          REPLY
                        </span>{" "}
                      </div>
                      <div className="text-gray-500 pt-5 text-sm">
                        Proin gravida nibh vel velit auctor aliquet Aenean
                        sollicitudin. Lorem quisma bibendum ctor, nisi. elitas
                        consequat ipsum nec sagittis sem nibh id elit. Duis sed
                        odios sit amet nibh vulputate cursus a sit amet mauris.
                        Morbi accumsan ipsum velit. Nam nec tellus a odio
                        ticidut.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        {/* <div className="bg-blue-100">
          <div className="container mx-auto">
            <div className="grid grid-cols-2">
              <div className="col-span-1">
                <div className="">
                  <p className="text-gray-600 font-bold">CONTACT</p>
                  <p className="text-2xl text-gray-600 font-bold">
                    Very Much Delighted to Hear From You.
                  </p>
                </div>
                <div className="pt-4">
                  <p className="text-gray-600 font-bold text-2xl pt-6 pb-6">
                    Let's have some coffee at.
                  </p>
                  <div>
                    <p className="text-gray-500">Address: L-23</p>
                    <p className="text-gray-500">Nonnae, New City</p>
                    <p className="text-gray-500">USA</p>
                  </div>
                  <div className="pt-4">
                    <p className="text-gray-600">
                      Tel: <span className="text-gray-500">+97-786939393</span>{" "}
                    </p>
                    <p className="text-gray-600">
                      Fax: <span className="text-gray-500">-786939393</span>{" "}
                    </p>
                    <p className="text-gray-600">
                      Mail:{" "}
                      <span className="text-gray-500">
                        contact@yourwebsite.com
                      </span>{" "}
                    </p>
                  </div>
                  
                </div>
                
              </div>
             
            </div>
          </div>
        </div> */}

        <div className="bg-blue-100 ">
        <div className="container mx-auto">
                  <p className="text-gray-600 font-bold">CONTACT</p>
                  <p className="text-2xl text-gray-600 font-bold">
                    Very Much Delighted to Hear From You.
                  </p>
                </div>
                <div className = "grid grid-cols-2">
                  <div className = "col-span-1">
                    <div>
                    <p className="text-gray-600 font-bold text-2xl pt-6 pb-6">
                    Let's have some coffee at.
                  </p>
                    </div>
                  </div>
                </div>
        </div>
      </section>
    </div>
  );
}
