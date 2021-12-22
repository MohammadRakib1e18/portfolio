import React from "react";
import ss1 from "./../../../Images/ss1.png";
import ss2 from "./../../../Images/ss2.png";
import ss3 from "./../../../Images/ss3.png";
import "./Projects.css";

const Projects = () => {
    return (
        <div className='project-container'>
            <div className="project">
                <a
                    rel="noreferrer"
                    href="https://modern-car-shop.netlify.app/"
                    target="_blank"
                >
                    {" "}
                    <img src={ss2} alt="" />
                </a>
                <div className="my-auto ms-5">
                    <h2 className="text-warning">Modern Car Shop</h2>
                    <h4 className="text-secondary">
                        I've designed an amazing type of website that belongs to
                        some amazing Cars!
                    </h4>
                    <h5 style={{ color: "CadetBlue" }}>Some Key Features:</h5>
                    <ul className="text-start" style={{ color: "Azure" }}>
                        <li>Get introduced with so many fency cars.</li>
                        <li>
                            Easy to purchase cars and get details information of
                            the cars.
                        </li>
                        <li>User friendly site.</li>
                        <li>Easy to login and manage your orders.</li>
                        <li>You can give review and see other's reviews.</li>
                        <li>
                            Besides, user or visitor has access to provide
                            rating on each rating.
                        </li>
                        <li>
                            Moreover, the website is full responsive. So,
                            whatever device you use, doesn't matter. You have
                            full control over all the functionalities.
                        </li>
                    </ul>
                    <a
                        rel="noreferrer"
                        href="https://modern-car-shop.netlify.app/"
                        target="_blank"
                    >
                        <button
                            className="btn text-decoration-none bg-primary w-25 m-auto mt-5"
                            type="button"
                        >
                            Live Site
                        </button>
                    </a>
                </div>
            </div>
            <div className="project">
                <a
                    rel="noreferrer"
                    href="https://quick-food-server.netlify.app/"
                    target="_blank"
                >
                    {" "}
                    <img src={ss1} alt="" />
                </a>
                <div className="my-auto ms-5">
                    <h2 className="text-warning">Quick Food Server</h2>
                    <h4 className="text-secondary">
                        This is a food delivery type of website. Just visit the
                        website and order to get your favourite food as soon as
                        possible!
                    </h4>
                    <h5 style={{ color: "CadetBlue" }}>Some Key Features:</h5>
                    <ul className="text-start" style={{ color: "Azure" }}>
                        <li>Get introduced with so many fency cars.</li>
                        <li>Easy way to get favourite foods.</li>
                        <li>User friendly site.</li>
                        <li>Get information about foods.</li>
                        <li>Determined to complete the delivery quickly .</li>
                        <li>Besides, Different types of foods to choose.</li>
                    </ul>
                    <a
                        rel="noreferrer"
                        href="https://quick-food-server.netlify.app/"
                        target="_blank"
                    >
                        <button
                            className="btn text-decoration-none bg-primary w-25 m-auto mt-5"
                            type="button"
                        >
                            Live Site
                        </button>
                    </a>
                </div>
            </div>
            <div className="project">
                <a
                    rel="noreferrer"
                    href="https://simple-stop-watch.netlify.app/"
                    target="_blank"
                >
                    <img src={ss3} alt="" />
                </a>
                <div className="my-auto ms-5">
                    <h2 className="text-warning">Stop Watch</h2>
                    <h4 className="text-secondary">
                        A simple stop watch that helps to track any duration
                        like coding-duration or others.
                    </h4>
                    <h5 style={{ color: "CadetBlue" }}>Some Key Features:</h5>
                    <ul className="text-start" style={{ color: "Azure" }}>
                        <li>Easy to use.</li>
                        <li>
                            Featured with 3 basic but most important things.
                        </li>
                        <li>Responsive stop watch.</li>
                    </ul>
                    <a
                        rel="noreferrer"
                        href="https://simple-stop-watch.netlify.app/"
                        target="_blank"
                    >
                        <button
                            className="btn text-decoration-none bg-primary w-25 m-auto mt-5"
                            type="button"
                        >
                            Live Site
                        </button>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Projects;
