import FormButton from "@/components/Form-btn";
import FormInput from "@/components/form-input";
import SocialLogin from "@/components/social-login";
import { ChatBubbleOvalLeftEllipsisIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

export default function createAccount() {
  return (
    <div className="flex flex-col gap-10">
      <div className="flex flex-col *:font-medium text-2xl mt-10 gap-2">
        <span>Hello</span>
        <span>Fill in the form below to join!</span>
      </div>
      <form className="flex flex-col gap-1 *:font-medium">
        <FormInput
          required
          placeholder="Username"
          type="text"
          errors={["ERROR"]}
        />
        <FormInput
          required
          placeholder="Email"
          type="email"
          errors={["ERROR"]}
        />
        <FormInput
          required
          placeholder="Password"
          type="password"
          errors={["ERROR"]}
        />
        <FormInput
          required
          placeholder="Password Confirm"
          type="password"
          errors={["ERROR"]}
        />
        <FormButton loading={false} text="Create account" />
      </form>
      {/* <hr /> */}
      <div className="w-full h-px bg-neutral-500" />
      <SocialLogin linko="/github" description="Continue with Github" />
    </div>
  );
}
