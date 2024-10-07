import FormSignUp from "../component/Fragments/FormSignUp";
import Authlayout from "../component/Layouts/Authlayout";

const SignUpPage = () => {
  return (
    <Authlayout title="sign up">
      <FormSignUp />
    </Authlayout>
  );
};

export default SignUpPage;