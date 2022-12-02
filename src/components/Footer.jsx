import React from "react";
import {
  FaDribbbleSquare,
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagramSquare,
  FaTwitterSquare,
} from "react-icons/fa";
const Footer = () => {
  return (
    <div className="w-full py-16 px-4">
      <div className="max-w-[1240px] grid md:grid-cols-3 mx-auto text-white">
        <div className="md:col-span-1 mx-auto">
          <h1 className="w-full text-3xl font-bold text-[#00df9a]">REACT.</h1>
          <p className="py-6">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio,
            ipsum mollitia! Sit corporis animi, dolores illum sequi laborum
            fugiat qui culpa? Dignissimos ab nam, vero impedit magnam quibusdam
            ad iusto.
          </p>
          <div className="flex flex-row justify-between">
            <FaFacebookSquare size={30}></FaFacebookSquare>
            <FaInstagramSquare size={30} />
            <FaTwitterSquare size={30} />
            <FaGithubSquare size={30} />
            <FaDribbbleSquare size={30}/>
          </div>
        </div>
        <div className=" flex flex-row justify-start md:col-span-2 mx-auto gap-20 items-center py-6">
          <div >
            <h6 className="font-medium text-gray-400">Solutions</h6>
            <ul>
              <li className="py-2 text-sm">Analytics</li>
              <li className="py-2 text-sm">Marketing</li>
              <li className="py-2 text-sm">Commerce</li>
              <li className="py-2 text-sm">Insights</li>
            </ul>
          </div>
          <div>
            <h6 className="font-medium text-gray-400">Support</h6>
            <ul>
              <li className="py-2 text-sm">Pricing</li>
              <li className="py-2 text-sm">Documentation</li>
              <li className="py-2 text-sm">Guides</li>
              <li className="py-2 text-sm">API Status</li>
            </ul>
          </div>
          <div>
            <h6 className="font-medium text-gray-400">Company</h6>
            <ul>
              <li className="py-2 text-sm">About</li>
              <li className="py-2 text-sm">Blog</li>
              <li className="py-2 text-sm">Jobs</li>
              <li className="py-2 text-sm">Press</li>
              
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
