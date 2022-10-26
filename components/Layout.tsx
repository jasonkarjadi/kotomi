import { FC, ReactNode, useEffect } from "react";
import { colors } from "../constants";
import MyHeader from "./Header";
import NavBtn from "./NavBtn";

interface MyLayoutProps {
  children?: ReactNode;
}
const MyLayout: FC<MyLayoutProps> = ({ children }) => {
  useEffect(() => {
    const setResize = () => {
      document.documentElement.style.setProperty(
        "--doc-height",
        `${innerHeight}px`
      );
    };
    setResize();
    addEventListener("resize", setResize);
    return () => {
      removeEventListener("resize", setResize);
    };
  }, []);

  return (
    <div className="thediv">
      <MyHeader />
      <div className="childrenbox">{children}</div>
      <footer className="bottomfooter">
        <nav>
          <NavBtn href="/about">About</NavBtn>
          <NavBtn href="/glossary">Glossary</NavBtn>
        </nav>
        <small>&copy; 2022 Jason Karjadi. All rights reserved</small>
      </footer>
      <style jsx>{`
        .thediv {
          min-height: 100vh;
          min-height: var(--doc-height);
          display: flex;
          flex-direction: column;
        }
        .childrenbox {
          position: relative;
          flex: 1;
          overflow: auto;
          padding: 0 0.5rem;
        }
        .bottomfooter {
          height: 2rem;
          background: ${colors.lightgreen};
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-right: 0.5rem;
        }
      `}</style>
      <style jsx global>{`
        :root {
          --doc-height: 100%;
        }
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
