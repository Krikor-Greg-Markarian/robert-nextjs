import Blacknavbar from "../components/Blacknavbar";
import Bluenavbar from "../components/Bluenavbar";
import Backgroundimage from "../components/Backgroundimage";
import Smallbox from "../components/Smallbox";
import Textleftpic from "../components/Textleftpic";
import { FaFacebook, FaInstagram, FaTwitter,FaMailBulk,FaMapMarker } from "react-icons/fa";

const object = {
  data: [
    {
      title:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas nemo repellendus, quasi tenetur ipsam debitis tempora, numquam saepe autem, veniam vero sint? Quaerat accusantium iure quibusdam veniam voluptatem modi quod.",
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

      <section className = "pt-8">
        {object.data.map((item, idx) => (
          <Textleftpic key={idx} title={item.title} />
        ))}
        
        <div  className = "container mx-auto border-2 p-4 ">
          <div>
      <p className = "font-bold inline border-r-2 pl-4 pr-4">2 COMMENTS </p>
      <p className = "font-bold inline ml-1 pl-4 pr-4 ">  TAGGED :</p> 
      <span className = "text-gray-500 inline">LIFESTYLE, FOOD, DRINK</span> 
      <div className = "float-right">
        <FaFacebook  className = "inline"/>
        <FaTwitter className = "inline ml-3"/>
        <FaMailBulk className = "inline ml-3"/>
        <FaInstagram className = "inline ml-3"/>
        <FaMapMarker className = "inline ml-3"/>
      </div>
      </div>
     
      </div>
      </section>
    </div>
  );
}
