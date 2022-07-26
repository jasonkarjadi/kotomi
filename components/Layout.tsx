import {
  faChevronDown,
  faChevronUp,
  faSeedling,
  faCubes,
  faScroll,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FC, ReactNode } from "react";
import { borders, colors } from "theme";
import NavBook from "./NavBook";

interface MyLayoutProps {
  children?: ReactNode;
}
const MyLayout: FC<MyLayoutProps> = ({ children }) => {
  return (
    <div className="divbody">
      <div className="header">
        <nav className="bookshelf">
          <NavBook href="/edawakare" icon={faSeedling} />
          <NavBook href="/fuminomoto" icon={faCubes} />
          <NavBook href="/fuminori" icon={faScroll} />
        </nav>
        <button className="pulldown">
          <FontAwesomeIcon icon={faChevronDown} />
        </button>
      </div>
      <div className="bigboard">{children}</div>
      <div className="footer">
        <a>About</a>
        <small>Copyright &copy; 2022 Jason Karjadi. All rights reserved</small>
      </div>
      <style jsx>{`
        .divbody {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
        }
        .header {
          display: flex;
          flex-direction: column;
        }
        .bookshelf {
          height: 3rem;
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
        .bigboard {
          position: relative;
          flex: 1;
          overflow-x: auto;
        }
        .footer {
          height: 1.5rem;
          background: ${colors.lightgreen};
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 0 0.5rem;
        }
      `}</style>
      <style jsx global>{`
        * {
          box-sizing: border-box;
        }
        html,
        body {
          margin: 0;
          padding: 0;
        }
        body {
          line-height: normal;
          background: #fbd38d;
        }
        ol,
        ul {
          list-style: none;
        }
        table {
          border-collapse: collapse;
          border-spacing: 0;
        }
        button {
          cursor: pointer;
        }
      `}</style>
    </div>
  );
};

export default MyLayout;
