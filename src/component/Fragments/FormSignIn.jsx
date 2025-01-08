import CheckBox from "../Elements/CheckBox";
import LabeledInput from "../Elements/LabeledInput";
import Button from "../Elements/Button";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useContext } from "react";
import CustomizedSnackbars from "../Elements/SnackBar";
import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/authContext";
import { NotifContext } from "../../context/notifContext";
import { useState } from "react";

const FormSignIn = () => {
  // const [msg, setMsg] = useState("");
  // const [open, setOpen] = useState(true);
  // const { setIsLoggedIn, setName } = useContext(AuthContext);

  const { msg, setMsg, setOpen, setIsLoading } = useContext(NotifContext);
  const { setIsLoggedIn, setName } = useContext(AuthContext);

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    mode: "onChange",
  });

  const onErrors = (errors) => console.log(errors);

  const onFormSubmit = async (data) => {
    setIsLoading(true);
    try {
      const response = await axios.post(
        "https://jwt-auth-eight-neon.vercel.app/login",
        {
          email: data.email,
          password: data.password,
        }
      );

      setIsLoading(false);
      setOpen(true);
      setMsg({ severity: "success", desc: "Login Success" });

      const decoded = jwtDecode(response.data.refreshToken);
      console.log(decoded);

      //console.log(response);
      setOpen(true);
      setMsg({ severity: "success", desc: "Login Success" });

      localStorage.setItem("refreshToken", response.data.refreshToken);

      setIsLoggedIn(true);
      setName(decoded.name);

      navigate("/");
    } catch (error) {
      setIsLoading(false);

      if (error.response) {
        setOpen(true);
        setMsg({ severity: "error", desc: error.response.data.msg });
      }
    }
  };

  return (
    <form onSubmit={handleSubmit(onFormSubmit, onErrors)}>
      <div className="mb-6">
        <LabeledInput
          label="Email address"
          type="email"
          placeholder="hello@example.com"
          name="email"
          register={{
            ...register("email", {
              required: "Email address is required",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Invalid email address format",
              },
            }),
          }}
        />
        {errors?.email && (
          <div className="text-center text-red-500">{errors.email.message}</div>
        )}
      </div>
      <div className="mb-6">
        <LabeledInput
          label="Password"
          type="password"
          placeholder="*************"
          name="password"
          register={{
            ...register("password", { required: "Password is required" }),
          }}
        />
        {errors?.password && (
          <div className="text-center text-red-500">{errors.password.message}</div>
        )}
      </div>
      {/* <div className="mb-6">
                <label htmlFor="password" className="block text-sm mb-2">
                  Password
                </label>
                <input
                  type="password"
                  className="py-3 ps-4 text-sm border rounded-md w-full bg-special-mainBg border-gray-03 text-gray-01 focus:border-black focus:outline-none focus:ring-0"
                  placeholder="************"
                  name="password"
                  id="password"
                />
              </div> */}
      <div className="mb-3">
        <CheckBox label="Keep me Signed in" name="status" />
      </div>
      <Button
        variant={`${!isValid ? "bg-gray-05" : "bg-primary zoom-in"}
        w-full text-white`}
        type="submit"
        disabled={!isValid ? "disabled" : ""}>
        Login
      </Button>
      {msg && (
        <CustomizedSnackbars
          severity={msg.severity}
          message={msg.desc}
          open={open}
          setOpen={setOpen}
        />
      )}
    </form>    
  )
}

export default FormSignIn