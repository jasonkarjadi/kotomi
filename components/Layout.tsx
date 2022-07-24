import { FC, ReactNode } from "react";
import MyNav from "./Nav";
import WideHrz from "./WideHrz";
import { borders, colors } from "theme";

interface MyLayoutProps {
  children?: ReactNode;
}

const MyLayout: FC<MyLayoutProps> = ({ children }) => {
  return (
    <div className="layoutcontainer contentlayout">
      <WideHrz />
      <div className="middlecenter">
        <MyNav>
          <div className="izumi">{children}</div>
        </MyNav>
      </div>
      <WideHrz>
        <small>Copyright &copy; 2022 Jason Karjadi. All rights reserved</small>
      </WideHrz>
      <style jsx>{`
        .layoutcontainer {
          min-height: 100vh;
          // min-height: -moz-available;
          // min-height: -webkit-fill-available;
          // min-height: fill-available;
        }
        .contentlayout {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }
        .middlecenter {
          height: 70vh;
          margin: 0 30px;
          display: flex;
          flex-direction: column;
        }
        .izumi {
          flex: 1;
          background: #ecc94b;
          border-left: ${borders.fence};
          border-right: ${borders.fence};
          // writing-mode: vertical-rl;
          // text-align: center;
          position: relative;
          overflow-x: auto;
        }
      `}</style>
      <style jsx global>{`
        * {
          box-sizing: border-box;
          color: #652b19;
        }
        html,
        body {
          margin: 0;
          padding: 0;
        }
        body {
          line-height: 1;
          background: #9ae6b4;
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
