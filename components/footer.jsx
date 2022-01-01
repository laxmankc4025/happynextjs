import Link from "next/link";

export default function Footer() {
  return (
    <div>
      <footer className="bg-gray-200 text-center lg:text-left 6 ">
        <div
          className="text-gray-700 text-center p-4"
          //   style="background-color: rgba(0, 0, 0, 0.2);"
        >
          © 2022 Copyright:
          <Link href="http://localhost:3000/">
            <a className="text-gray-800" href="https://laxnax.netlify.app/">
              Localhost
            </a>
          </Link>
          
        </div>
      </footer>
    </div>
  );
}
