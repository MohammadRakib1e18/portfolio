import React from "react";
import './Skill.css';

const Skill = () => {
    return (
        <div>
            <h1 className="text-center text-secondary my-3 text-success">
                Skill-Set
            </h1>
            <hr className='w-50 m-auto mt-2 mb-3' />
            <div className="founders text-center">
                <div className="founder">
                    <img src='https://www.elegantthemes.com/blog/wp-content/uploads/2018/12/top11.png' alt="" />
                    <h4 className='text-danger'>Web Development</h4>
                </div>
                <div className="founder">
                    <img src='https://media.geeksforgeeks.org/wp-content/cdn-uploads/Competitive-Programming.jpg' alt="" />
                    <h4 className='text-danger'>Competitive Programming</h4>
                </div>
                <div className="founder">
                    <img src='https://miro.medium.com/max/640/0*PjHq4AuTbMjXz7Gq.jpg' alt="" />
                    <h4 className='text-danger'>Debugging</h4>
                </div>
            </div>
        </div>
    );
};

export default Skill;
