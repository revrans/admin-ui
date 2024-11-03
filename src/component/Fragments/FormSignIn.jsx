import CheckBox from "../Elements/CheckBox"
import LabeledInput from "../Elements/LabeledInput"
import Button from "../Elements/Button"
const FormSignIn = () => {
    return (
            <form action="">
              <div className="mb-6">
                <LabeledInput 
                  label="Email address"
                  type="email"
                  placeholder="hello@example.com"
                  name="email"
                />
              </div>
              <div className="mb-6">
                <LabeledInput 
                  label="Password"
                  type="password"
                  placeholder="*************"
                  name="password"
                />
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
                <CheckBox /> Keep me Sign in
              </div>
              <Button variant="bg-primary w-full text-white" type="submit"> Login </Button>
            </form>
  )
}

export default FormSignIn
