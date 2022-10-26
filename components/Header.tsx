import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/router";
import { FC, useEffect, useState } from "react";
import { borders, colors, navbookvalues } from "../constants";
import NavBtn from "./NavBtn";

const MyHeader: FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { pathname } = useRouter();

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <div className="headerspace">
      <header className="bookshelf">
        <nav className="bookrow">
          {navbookvalues.map((val, id) => (
            <NavBtn key={id} href={val.link} bookicon={val.icon}>
              {val.label}
            </NavBtn>
          ))}
        </nav>
        <button
          className="pulldown"
          onClick={() => setIsOpen((isOpen) => !isOpen)}
        >
          <FontAwesomeIcon icon={isOpen ? faChevronUp : faChevronDown} />
        </button>
      </header>
      <div className="shader" />
      <style jsx>{`
        .headerspace {
          height: 5rem;
          position: relative;
        }
        .bookshelf {
          display: flex;
          flex-direction: column;
          width: 100%;
          position: absolute;
          top: ${isOpen ? "0" : "-17rem"};
          left: 0;
          z-index: 2;
          transition: top 0.4s ease-in;
        }
        .shader {
          position: absolute;
          top: 0;
          left: 0;
          z-index: ${isOpen ? "1" : "-1"};
          min-width: 100vw;
          min-height: 100vh;
          min-height: var(--doc-height);
          background: ${isOpen && "rgba(0, 0, 0, 0.8)"};
          transition: background 0.4s;
        }
        .bookrow {
          height: 20rem;
          background: #48bb78;
          display: flex;
        }
        .pulldown {
          height: 2rem;
          width: 100%;
          background: ${colors.lightgreen};
          border: ${borders.book};
          border-radius: 0 0 0.5rem 0.5rem;
        }
        .pulldown:hover {
          box-shadow: 0 -0.125rem 0.25rem #68d391 inset;
        }
      `}</style>
    </div>
  );
};

export default MyHeader;
