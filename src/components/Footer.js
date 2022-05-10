import React from "react";
import { MdEmail, MdNotes } from "react-icons/md";
import { AiFillGithub } from "react-icons/ai";
const Footer = () => {
  return (
    <footer>
      <ul className="address">
        <li>
          <a href="mailto:yoofh2006@gmail.com" target="_blank">
            <MdEmail />
            <span className="blind">이메일</span>
          </a>
        </li>
        <li>
          <a href="https://github.com/yooss2006" target="_blank">
            <AiFillGithub />
            <span className="blind">깃허브</span>
          </a>
        </li>
        <li>
          <a href="https://velog.io/@yooss2006" target="_blank">
            <MdNotes />
            <span className="blind">블로그</span>
          </a>
        </li>
      </ul>
      <p>hello welcome yooss world. 2022</p>
    </footer>
  );
};

export default Footer;
