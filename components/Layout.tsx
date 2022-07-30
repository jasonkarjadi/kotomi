import { FC, ReactNode } from "react";
import { colors } from "theme";
import MyHeader from "./Header";
import NavBtn from "./NavBtn";

interface MyLayoutProps {
  children?: ReactNode;
}
const MyLayout: FC<MyLayoutProps> = ({ children }) => {
  return (
    <div className="divbody">
      <MyHeader />
      <div className="bigboard">{children}</div>
      <div className="footer">
        <NavBtn href="/about">About</NavBtn>
        <small style={{ margin: "0 0.5rem" }}>
          Copyright &copy; 2022 Jason Karjadi. All rights reserved
        </small>
      </div>
      <style jsx>{`
        .divbody {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
        }
        .bigboard {
          position: relative;
          flex: 1;
          overflow-x: auto;
          padding: 0 0.5rem;
        }
        .footer {
          height: 1.5rem;
          background: ${colors.lightgreen};
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
      `}</style>
      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Zen+Antique");
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
