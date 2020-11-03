import React from "react";
import Link from "next/link";
import { Link as ScrollLink } from "react-scroll";

const NavLinks = () => {
  return (
    <ul className="main-nav__navigation-box">
      <li>
        <Link href="/">
          <a>Home</a>
        </Link>
      </li>
      <li>
        <ScrollLink
          activeClass="current"
          to="products"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          Products
        </ScrollLink>
      </li>
      <li>
        <ScrollLink
          activeClass="current"
          to="gallery"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          Gallery
        </ScrollLink>
      </li>
      <li>
        <ScrollLink
          activeClass="current"
          to="contact"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          Get In Touch
        </ScrollLink>
      </li>
    </ul>
  );
};

export default NavLinks;
