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
import { FC, ReactNode, useState } from "react";
import { borders, colors, shadows } from "theme";

const MyHeader: FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  interface NavBookProps {
    href: LinkProps["href"];
    icon: IconProp;
    children: ReactNode;
  }

  const NavBook: FC<NavBookProps> = ({ href, icon, children }) => {
    const { pathname } = useRouter();
    const clicked = href === pathname;

    const NavBookIcon: FC = () => {
      return <FontAwesomeIcon icon={icon} className="fa-fw fa-2x" />;
    };

    return (
      <Link href={clicked ? "/" : href}>
        <button
          className={`navbook ${clicked && "clicked"}`}
          onClick={() => isOpen === true && setIsOpen(false)}
        >
          <NavBookIcon />
          <span>{children}</span>
          <NavBookIcon />
          <style jsx>{`
            .navbook {
              width: 12.5%;
              background: ${colors.lightgreen};
              border: ${borders.book};
              border-style: none solid;
              display: flex;
              flex-direction: column;
              justify-content: space-between;
              align-items: center;
              padding: 0.75rem;
            }
            .navbook span {
              writing-mode: vertical-rl;
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
          <NavBook href="/edawakare" icon={faSeedling}>
            枝分かれ
          </NavBook>
          <NavBook href="/fuminomoto" icon={faCubes}>
            文の素
          </NavBook>
          <NavBook href="/fuminori" icon={faScroll}>
            文法
          </NavBook>
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
