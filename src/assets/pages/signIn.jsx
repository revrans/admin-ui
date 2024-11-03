import FormSignIn from "../components/Fragments/FormSignIn";
import AuthLayout from "../components/Layouts/Authlayout";

const SignInPage = () => {
  return (
    <Authlayout type="sign in">
      <FormSignIn/>
    </Authlayout>
  );
};

export default SignInPage;