import { logoutAction } from "@/lib/actions";

export function Logout() {
  return (
    <form action={logoutAction}>
      <button
        type="submit"
        className="block w-full text-left px-4 py-2 text-sm text-white/80 hover:bg-white/10 transition-colors"
      >
        Sign out
      </button>
    </form>
  );
}
