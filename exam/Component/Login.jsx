import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  useEffect(() => {
    // data();
  }, []);

  let nav = useNavigate();

  let [user, setuser] = useState("");
  let [email, setemail] = useState("");
  let [pass, setpass] = useState("");
  let [cpass, setcpass] = useState("");
  let fdata = [];
  // console.log(user)
  // console.log(email)
  // console.log(pass)
  let set = {
    user: user,
    email: email,
    pass: pass,
    cpass: cpass,
  };
  let data = () => {
    fdata.push(set);
    JSON.parse(localStorage.getItem("data"));
    let data1 = localStorage.setItem("data", JSON.stringify(fdata));
    nav("/home")
  };
  // var user;
  // var email;
  // var pass;
  // var cpass;
  return (
    <div>
      <div className="box">
        <h2>login</h2>

        <form onSubmit={()=>data()}>
        <input
          type="email"
          placeholder="enter your Email"
          onChange={(e) => setemail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="create password"
          onChange={(e) => setpass(e.target.value)}
          required
        />
        <button >login</button>
        </form>
        {/* <h6>already have an account? <Link to='/login' className="white">login now</Link></h6> */}
      </div>
    </div>
  );
}

export default Login;
