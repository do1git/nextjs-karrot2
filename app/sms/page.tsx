import FormButton from "@/components/Form-btn";
import FormInput from "@/components/form-input";
import SocialLogin from "@/components/social-login";

export default function SMSLogIn() {
  return (
    <div className="flex flex-col gap-10">
      <div className="flex flex-col *:font-medium text-2xl mt-10 gap-2">
        <span>SMS Login</span>
        <span>Verify your phone number.</span>
      </div>
      <form className="flex flex-col gap-1 *:font-medium">
        <FormInput
          required
          placeholder="Phone number"
          type="number"
          errors={["ERROR"]}
        />
        <FormInput
          required
          placeholder="Verification number"
          type="number"
          errors={["ERROR"]}
        />

        <FormButton loading={false} text="Login" />
      </form>
      {/* <hr /> */}
    </div>
  );
}
