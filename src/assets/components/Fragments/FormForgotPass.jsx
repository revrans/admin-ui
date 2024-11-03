
import LabeledInput from "../Elements/LabeledInput";
import Button from "../Elements/Button"
import { Link } from "react-router-dom"; 
import Logo from "../Elements/Logo"   

const FormForgotPass = () => {
  return (
    <form action="">
        <div className="flex justify-center min-h-screen items-center bg-special-mainBg">
        {/* container start */}
        <div className="w-full max-w-sm">
            {/* logo start */}
            <Logo/>
            <span className="text-2xl text-center font-bold block mt-8 mb-2">Forgot Password?</span>
            <span className="text-gray-500 text-center block mb-8">Enter your email address to get the password reset link.</span>
              <div className="mb-6">
                <LabeledInput 
                  label="Email address"
                  type="email"
                  placeholder="hello@example.com"
                  name="email"
                />
              </div>
        <Button variant="bg-primary w-full text-white" type="submit"> Password Reset </Button>
        <Link to="/login" className="text-center block font-bold text-gray-500 mt-2">Back to login</Link>
        </div>
        </div>
    </form>
  )
}

export default FormForgotPass