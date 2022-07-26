import { FC, ReactNode } from "react";
import { colors } from "theme";
import MyHeader from "./Header";

interface MyLayoutProps {
  children?: ReactNode;
}
const MyLayout: FC<MyLayoutProps> = ({ children }) => {
  return (
    <div className="divbody">
      <MyHeader />
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
