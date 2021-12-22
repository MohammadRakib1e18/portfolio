import React from "react";
import Footer from "../../Footer/Footer";
import Projects from "../../Porjects/Projects";
import Skill from "../../Skill/Skill";
import Banner from "../Banner/Banner";
import "./Home.css";

const Home = () => {
    return (
        <div>
            <Banner />
            <Skill />
            <hr />
            <h1 className="mt-5 text-secondary">
                My <span className="text-danger">Web Development</span> Projects
            </h1>
            <Projects />
            <hr />
            <Footer />
        </div>
    );
};

export default Home;
