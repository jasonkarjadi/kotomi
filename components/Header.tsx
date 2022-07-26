import { IconProp } from "@fortawesome/fontawesome-svg-core";
import {
  faChevronDown,
  faChevronUp,
  faCubes,
  faScroll,
  faSeedling,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";
import { FC, useState } from "react";
import { borders, colors, shadows } from "theme";

const MyHeader: FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  interface NavBookProps {
    href: LinkProps["href"];
    icon: IconProp;
  }

  const NavBook: FC<NavBookProps> = ({ href, icon }) => {
    const { pathname } = useRouter();
    const clicked = href === pathname;

    return (
      <Link href={clicked ? "/" : href}>
        <button
          className={`navbook ${clicked && "clicked"}`}
          onClick={() => isOpen === true && setIsOpen(false)}
        >
          <FontAwesomeIcon icon={icon} className="fa-fw fa-2x" />
          <style jsx>{`
            .navbook {
              width: 12.5%;
              background: ${colors.lightgreen};
              border: ${borders.book};
              border-style: none solid;
            }
            .navbook:hover {
              box-shadow: ${shadows.book};
            }
            .navbook:active {
              background: ${colors.darkgreen};
              box-shadow: ${shadows.book};
            }
            .clicked {
              box-shadow: ${shadows.book};
            }
            .navbook.clicked:hover {
              box-shadow: none;
            }
          `}</style>
        </button>
      </Link>
    );
  };

  return (
    <div className="headerspace">
      <div className="bookshelf">
        <nav className="bookrow">
          <NavBook href="/edawakare" icon={faSeedling} />
          <NavBook href="/fuminomoto" icon={faCubes} />
          <NavBook href="/fuminori" icon={faScroll} />
        </nav>
        <button className="pulldown" onClick={() => setIsOpen(!isOpen)}>
          <FontAwesomeIcon icon={isOpen ? faChevronUp : faChevronDown} />
        </button>
      </div>
      <div className="shader" />
      <style jsx>{`
        .headerspace {
          height: 4.5rem;
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
        }
        .shader {
          display: ${isOpen === false && "none"};
          position: absolute;
          top: 0;
          left: 0;
          z-index: 1;
          width: 100vw;
          height: 100vh;
          background: rgba(0, 0, 0, 0.8);
        }
        .bookrow {
          height: 20rem;
          background: #48bb78;
          display: flex;
        }
        .pulldown {
          height: 1.5rem;
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
