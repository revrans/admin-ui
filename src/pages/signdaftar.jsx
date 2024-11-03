import FormSignUp from "../component/Fragments/FormSignUp";
import Authlayout from "../component/Layouts/AuthLayout";

const SignUpPage = () => {
  return (
    <Authlayout type="sign up">
      <FormSignUp />
    </Authlayout>
  );
};

export default SignUpPage;
