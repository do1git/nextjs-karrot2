import { ChatBubbleOvalLeftEllipsisIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

interface ButtonProps {
  linko: string;
  description: string;
}

export default function SocialLogin({ linko, description }: ButtonProps) {
  return (
    <div>
      <Link href={linko} className="primary-btn">
        <ChatBubbleOvalLeftEllipsisIcon className="h-5 w-5 mr-2" />
        {description}
      </Link>
    </div>
  );
}
