import React from "react";
import Tree from "../../assets/tree.png";
import yelloe from "../../assets/yellow.png";
import leaf from "../../assets/leaf2.png";
import leaf1 from "../../assets/leaf.png";
import leaf2 from "../../assets/leaves.png";
import leaf3 from "../../assets/leaves3.png";
import sunflower from "../../assets/sunflower.png";
import "./Home.css";
import Collection from "../../Components/Collection";
import Projects from "../../Components/Projects";
const Home = () => {

  return (
    <div className="min-h-full" >
      <div className="relative main  min-h-screen w-screen flex flex-col justify-center items-center  mt-0">
        <div className="flex justify-center items-center ">
          <h1 className=" w-[70%] mb-20 text-center text-[5rem] z-[99] font-head">
            { `Welcome To Priti's Diary a.k.a  Portfolio`}
          </h1>
        </div>
        <div className="absolute left-[-11rem] xl:left-[-10rem] xl:top-[-14rem] top-[-14rem]">
          <img className="w-[20rem] " src={yelloe} />
        </div>
        <div className="first">
          <div>
            <img className="w-[3rem] z-0 h-[3rem]" src={leaf2} />
          </div>
        </div>
        <div className="set">
          <div>
            <img className="w-[3rem] z-0 h-[3rem]" src={leaf} />
          </div>
          <div>
            <img className="w-[3rem] z-0 h-[3rem]" src={leaf1} />
          </div>
          <div>
            <img className="w-[3rem] z-0 h-[3rem]" src={leaf2} />
          </div>
          <div>
            <img className="w-[3rem] z-0 h-[3rem]" src={leaf3} />
          </div>
          <div>
            <img className="w-[3rem] z-0 h-[3rem]" src={sunflower} />
          </div>
        </div>
      </div>
    <Collection />
    <Projects />
     
    </div>
  );
};

export default Home;
