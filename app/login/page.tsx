import FormButton from "@/components/Form-btn";
import FormInput from "@/components/form-input";
import SocialLogin from "@/components/social-login";

export default function LogIn() {
  return (
    <div className="flex flex-col gap-10">
      <div className="flex flex-col *:font-medium text-2xl mt-10 gap-2">
        <span>Hello</span>
        <span>Log in with email and password.</span>
      </div>
      <form className="flex flex-col gap-1 *:font-medium">
        <FormInput
          required
          placeholder="Email"
          type="email"
          errors={["ERROR"]}
        />
        <FormInput
          required
          placeholder="Password"
          type="Password"
          errors={["ERROR"]}
        />

        <FormButton loading={false} text="Login" />
      </form>
      {/* <hr /> */}
      <div className="w-full h-px bg-neutral-500" />
      <SocialLogin linko="/github" description="Continue with Github" />
    </div>
  );
}
