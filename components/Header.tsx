import { IconProp } from "@fortawesome/fontawesome-svg-core";
import {
  faChevronDown,
  faChevronUp,
  faCubes,
  faScroll,
  faSeedling,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { LinkProps } from "next/link";
import { FC, ReactNode, useState } from "react";
import { borders, colors } from "theme";
import NavBtn from "./NavBtn";

const MyHeader: FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  interface NavBookProps {
    href: LinkProps["href"];
    icon: IconProp;
    children?: ReactNode;
  }

  const NavBook: FC<NavBookProps> = ({ href, icon, children }) => {
    const NavBookIcon: FC = () => {
      return <FontAwesomeIcon icon={icon} className="fa-fw fa-2x" />;
    };

    return (
      <NavBtn
        href={href}
        btnProps={{
          onClick: () => isOpen === true && setIsOpen(false),
          style: {
            width: "12.5%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "0.75rem",
          },
        }}
      >
        <NavBookIcon />
        <span style={{ writingMode: "vertical-rl" }}>{children}</span>
        <NavBookIcon />
      </NavBtn>
    );
  };

  return (
    <div className="headerspace">
      <div className="bookshelf">
        <nav className="bookrow">
          <NavBook href="/edawakare" icon={faSeedling}>
            枝分かれ　大和言葉の関係図
          </NavBook>
          <NavBook href="/fuminomoto" icon={faCubes}>
            文の素　語彙の品詞分類
          </NavBook>
          <NavBook href="/fuminori" icon={faScroll}>
            文法　言葉と詞の橋
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
          transition: top 0.4s ease-in;
        }
        .shader {
          position: absolute;
          top: 0;
          left: 0;
          z-index: ${isOpen ? "1" : "-1"};
          width: 100vw;
          height: 100vh;
          background: ${isOpen && "rgba(0, 0, 0, 0.8)"};
          transition: background 0.4s;
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
