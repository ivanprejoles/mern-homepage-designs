
"use client";

import { Footer } from "flowbite-react";

const MainFooter = () => {
  return (
    <Footer container>
      <Footer.Copyright href="" by="Ivan's Homepage" year={2024} />
      <Footer.LinkGroup>
        <Footer.Link href="https://myportfolio-ten-lac-65.vercel.app/" target="_blank">About Me</Footer.Link>
        <Footer.Link href="https://github.com/ivanprejoles" target="_blank">Github</Footer.Link>
        <Footer.Link href="https://www.linkedin.com/in/ivan-patrick-prejoles" target="_blank">LinkedIn</Footer.Link>
      </Footer.LinkGroup>
    </Footer>
  );
}

export default MainFooter