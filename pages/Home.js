import React from "react";
import Link from "next/link";
import Blacknavbar from "./Blacknavbar2";
import Bluenavbar from "./Bluenavbar";
import Backgroundimage from "./Backgroundimage";

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
        <div className = "grid grid-cols-2">
            <div className = "col-span-1">
                
            </div>
        </div>
    </section>





    </div>
  );
}

export default Home;
