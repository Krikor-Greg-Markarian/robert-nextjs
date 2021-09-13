import React from "react";
import { FaFacebook, FaTwitter, FaMailBulk, FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <div>
      <div className="bg-blue-100 ">
        <div className="pt-8 pl-20 pr-20">
          <div className="container mx-auto">
            <p className="text-gray-600 font-bold">CONTACT</p>
            <p className="text-3xl text-gray-600 font-bold">
              Very Much Delighted to <br /> Hear From You.
            </p>
          </div>

          <div className="grid grid-cols-3 container mx-auto">
            <div className="col-span-1">
              <div>
                <p className="text-gray-600 font-bold text-2xl pt-6 pb-6">
                  Let's have some <br /> coffee at.
                </p>

                <div>
                  <p className="text-gray-500 font-bold inline">Address:</p>
                  <span className="inline text-gray-500">L-23 END Plaza</span>
                  <p className="text-gray-500">Nonnae, New City</p>
                  <p className="text-gray-500">USA</p>
                </div>

                <div className="pt-4">
                  <p className="text-gray-600 font-bold">
                    Tel: <span className="text-gray-500 ">+97-786939393</span>{" "}
                  </p>
                  <p className="text-gray-600 font-bold">
                    Fax: <span className="text-gray-500">-786939393</span>{" "}
                  </p>
                  <p className="text-gray-600 font-bold">
                    Mail:{" "}
                    <span className="text-gray-500">
                      contact@yourwebsite.com
                    </span>{" "}
                  </p>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 pl-20">
              <div className="col-span-2">
                <div className="pt-8">
                  <label className="text-gray-500" htmlFor="">
                    Firstname
                  </label>
                  <div></div>
                  <input
                    className="p-2 focus:outline-none bg-blue-100"
                    placeholder="please enter your Firstname"
                    type="text"
                    name=""
                    id=""
                  />
                </div>
                <div className="pt-8">
                  <label className="text-gray-500" htmlFor="">
                    Email
                  </label>
                  <div></div>
                  <input
                    className="p-2 focus:outline-none bg-blue-100"
                    placeholder="please enter your Email"
                    type="text"
                    name=""
                    id=""
                  />
                </div>
                <div className="pt-8">
                  <label className="text-gray-500" htmlFor="">
                    Message
                  </label>
                  <div></div>

                  <textarea
                    name=""
                    id=""
                    cols="60"
                    rows="2"
                    placeholder="Message for me"
                    className="bg-blue-100 "
                  ></textarea>
                </div>

                <div className="pt-6 pb-6">
                  <button className="bg-blue-400 p-2 text-white ">
                    SEND MESSAGE
                  </button>
                </div>
                <p className="text-gray-500 pt-2 pb-2">Required</p>
              </div>
            </div>
            <div className="pt-8 pl-20">
              <label className="text-gray-500" htmlFor="">
                Lastname
              </label>
              <div></div>
              <input
                className="p-2 focus:outline-none bg-blue-100"
                placeholder="please enter your Lastname"
                type="text"
                name=""
                id=""
              />
              <div className="pt-8">
                <label className="text-gray-500" htmlFor="">
                  Phone
                </label>
                <div></div>
                <input
                  className="p-2 focus:outline-none bg-blue-100"
                  placeholder="please enter your Phone"
                  type="text"
                  name=""
                  id=""
                />
              </div>
            </div>
          </div>

          <div className="container mx-auto">
            <div className="grid grid-cols-2">
              <div>
                <p className="text-gray-500">
                  {" "}
                  &copy; 2017 Robert Smith All Right Reserved{" "}
                </p>
              </div>
              <div className="flex justify-end items-center pb-12">
                <FaTwitter className="inline" />
                <FaFacebook className="inline ml-2" />
                <FaLinkedin className="inline ml-2" />
                <FaMailBulk className="inline ml-2" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
