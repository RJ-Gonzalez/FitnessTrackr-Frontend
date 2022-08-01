import React, { useState } from "react";
import { createUser } from "../api";
import { Link, useNavigate } from "react-router-dom";



export default function Register(){
    let navigate = useNavigate();
    const [newUsername, setnewUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confimPassword, setConfirmPassword] = useState("");
  
    async function handleSubmit(event) {
      event.preventDefault();
  
      const token = await createUser(newUsername, password);
      localStorage.setItem("token", token);
      navigate("/Login");
    }
    return (
          <section className="text-center text-lg-start">
            <div className="container py-4">
              <div className="row g-0 align-items-center">
                <div className="col-lg-6 mb-5 mb-lg-0">
                  <div className="card cascading-right">
                    <div className="card-body p-5 shadow-5 text-center">
                      <h2 className="fw-bold mb-5">REGISTER</h2>
                      <form onSubmit={handleSubmit} id="loginPage">
                        <div className="form-outline mb-4">
                          <label
                            className="form-label"
                            htmlFor="form3Example3"
                          ></label>
                          <input
                            id="form3Example3"
                            className="form-control"
                            placeholder="Choose Your New Username"
                            type="text"
                            minLength="6"
                            required
                            onChange={(event) => setnewUsername(event.target.value)}
                          ></input>
                        </div>
                        <div className="form-outline mb-4">
                          <label
                            className="form-label"
                            htmlFor="form3Example4"
                          ></label>
                          <input
                            id="form3Example4"
                            className="form-control"
                            placeholder="Choose Your New Password"
                            type="password"
                            required
                            minLength="6"
                            onChange={(event) => setPassword(event.target.value)}
                          ></input>
                        </div>
                        <div className="form-outline mb-4">
                          <label
                            className="form-label"
                            htmlFor="form3Example4"
                          ></label>
                          <input
                            id="form3Example4"
                            className="form-control"
                            placeholder="Confirm Password"
                            type="password"
                            minLength="6"
                            required
                            onChange={(event) =>
                              setConfirmPassword(event.target.value)
                            }
                          ></input>
                        </div>
    
                        <button
                          className="btn btn-primary btn-block mb-4"
                          type="submit"
                        >
                          Create Account
                        </button>
                        <div className="form-outline mb-4">
                          <Link to="/Posts">
                            <button className="btn btn-secondary">
                              View As Guest
                            </button>
                          </Link>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
                <div className="col-lg-5 mb-5 mb-lg-0">
                  <img
                    src="https://static.boredpanda.com/blog/wp-content/uploads/2017/04/Mountain-Lilac-4-s-58e94fe9e501a__880.jpg"
                    className="w-100 rounded-4 shadow-4"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </section>
      );
    }
