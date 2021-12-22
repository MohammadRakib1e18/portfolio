import React from "react";
import Button from "@mui/material/Button";

const Contact = () => {
    return (
        <div>
            <h2 className="my-3">
                Contact <span className="text-danger">Me</span>
            </h2>
            <hr />
            <form
                action="https://formcarry.com/s/Sp9Is-7xbZc"
                method="POST"
                accept-charset="UTF-8"
            >
                <div className="mb-3 w-25 m-auto">
                    <input
                        type="text"
                        name="name"
                        className="form-control"
                        placeholder="Name"
                        required
                    />
                    <br />
                    <input
                        type="email"
                        name="email"
                        className="form-control"
                        placeholder="E-mial"
                        required
                    />
                    <input type="hidden" name="_gotcha" />
                    {/* <!-- use this to prevent spam --> */}
                </div>
                <br />

                <div className="mb-3 w-50 m-auto">
                    <textarea
                        type="text"
                        className="form-control"
                        name="Description"
                        placeholder="How can we help you?"
                        rows="3"
                        required
                    ></textarea>
                </div>
                <Button
                    sx={{ width: "10%", m: 1 }}
                    type="submit"
                    variant="contained"
                    color="secondary"
                >
                    Submit
                </Button>
            </form>
        </div>
    );
};

export default Contact;
