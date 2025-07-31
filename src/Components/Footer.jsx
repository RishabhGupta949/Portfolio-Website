import { Typography } from "@material-tailwind/react";
import { Link } from "wouter";

const currentYear = new Date().getFullYear();

export function SimpleFooter() {
  return (
    <footer className="flex w-full flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 border-t border-blue-gray-50 py-6 text-center md:justify-between px-12">
      <Typography color="blue-gray" className="font-normal">
        &copy; {currentYear} Rishabh Gupta
      </Typography>
      <ul className="flex flex-wrap items-center gap-y-2 gap-x-8">
        <li>
          <Link href="/about">
          <Typography
            color="blue-gray"
            className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
          >
            About Us
          </Typography>
          </Link>
        </li>
        <li>
          <Link href="/">
          <Typography
            color="blue-gray"
            className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
          >
            Overview
          </Typography>
          </Link>
        </li>
        <li>
          <Link href="/notfound"></Link>
          <Typography
            color="blue-gray"
            className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
          >
            Resume
          </Typography>
        </li>
        <li>
          <Link href="/contact">
          <Typography
            color="blue-gray"
            className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
          >
            Contact Us
          </Typography>
          </Link>
        </li>
      </ul>
    </footer>
  );
}