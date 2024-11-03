import LabeledInput from "../Elements/LabeledInput";
import Button from "../Elements/Button";
const FormForgotpw = () => {
  return (
    <form action="">
      {/* Teks Forgot Password? */}
      <h2 className="text-xl font-bold text-black mb-2 text-center">Forgot Password?</h2>

      {/* Deskripsi */}
      <p className="text-sm text-gray-600 text-center mb-4">
        Enter your email address to get the <br /> password reset link.
      </p>
      <div className="mb-6">
        <LabeledInput label="Email address" type="email" placeholder="hello@example.com" name="email" />
      </div>
      <Button variant="bg-primary w-full text-white" type="submit">
        {" "}
        Password Reset{" "}
      </Button>
    </form>
  );
};

export default FormForgotpw;
