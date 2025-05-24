import { useEffect, useReducer, useRef, useState } from "react";
import { Button } from "../Elements/Button/Index";
import { InputForm } from "../Elements/Input/Index";
import { loginService } from "../../services/api";

export const FormLogin = () => {
  const [message, setMessage] = useState("");


  const handleLogin = (e) => {
    e.preventDefault(); // e.preventDefault() digunakan agar browser tidak terefresh / tidak terender ulang

    const dataLogin = {
      username: e.target.username.value,
      password: e.target.password.value,
    };

    loginService(dataLogin, (status, res) => {
      if (status) {
        localStorage.setItem('token', res);
        return window.location.href = "/product"
      } else {
        setMessage(res.response.data);
      }
    });
  };

  // useRef
  const usernameRef = useRef(null);
  useEffect(() => {
    usernameRef.current.focus();
  }, []);

  return (
    <>
    <form action="" className=" text-start" onSubmit={handleLogin}>
      <InputForm
        label="Username"
        name="username"
        type="text"
        placeholder="username"
        ref={usernameRef}
      ></InputForm>
      <InputForm
        label="Password"
        name="password"
        type="password"
        placeholder="your password"
      ></InputForm>
      <Button variant="bg-blue-600" type={"submit"}>
        Login
      </Button>
    </form>
      {message && <p className="text-center text-red-600 font-normal">{message}</p>}
          </>
  );
};
