import FormSignIn from "../component/Fragments/FormSignin";
import Authlayout from "../component/Layouts/Authlayout";

const SignInPage = () => {
  return (
    <Authlayout title="sign in">
      <FormSignIn />
    </Authlayout>
  );
};

export default SignInPage;
