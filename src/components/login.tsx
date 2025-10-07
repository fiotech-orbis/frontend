import { signIn } from "@/auth";
import { auth } from "@/auth";
import UserDropdown from "./user-dropdown";

interface LoginProps {
  className?: string;
}

export default async function Login({ className }: LoginProps) {
  const session = await auth();

  if (session?.user) {
    return <UserDropdown user={session.user} className={className} />;
  }

  return (
    <form
      action={async () => {
        "use server";
        await signIn("keycloak");
      }}
    >
      <button className={className} type="submit">
        Login
      </button>
    </form>
  );
}
