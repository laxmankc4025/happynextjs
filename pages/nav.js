import Link from "next/link";

export default function Nav() {
  return (
    <div>
      <Link href="http://localhost:3000/sign-up">
        <a className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700">
          Sign up
        </a>
      </Link>
    </div>
  );
}
