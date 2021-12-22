import React from "react";
import "./Banner.css";
import developer from "./../../../../Images/developer.png";

const Banner = () => {
    return (
        <div className="banner-container container-fluid">
            <div className="bannerImg">
                <img src={developer} alt="" />
            </div>
            <div className="w-40 banner-descrition text-center">
                <div>
                    <a
                        rel="noreferrer"
                        href="https://www.facebook.com/rakib.molla.9634340/"
                        target="_blank"
                    >
                        <i class="fab fa-facebook-square"></i>
                    </a>
                    <a
                        rel="noreferrer"
                        href="https://github.com/MohammadRakib1e18?tab=repositories"
                        target="_blank"
                    >
                        <i class="fab fa-github-square"></i>
                    </a>
                    <a
                        rel="noreferrer"
                        href="https://www.linkedin.com/in/md-rakib-50986a21b/"
                        target="_blank"
                    >
                        <i class="fab fa-linkedin"></i>
                    </a>
                </div>
                <div className="title mt-3">
                    <h2 className="text-italic">
                        Hello, I'm{" "}
                        <span className="text-danger">Mohammad Rakib</span>
                    </h2>
                </div>
                <div>
                    <a
                        rel="noreferrer"
                        href="https://drive.google.com/file/d/1MkN5Vb5se9gJ3qPLg9pPTaWHxeEu80v_/view?usp=sharing"
                        target="_blank"
                    >
                        <button
                            className="btn text-decoration-none w-25 m-auto mt-5"
                            type="button"
                        >
                            Resume
                        </button>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Banner;
