import { FC, ReactNode, useState } from "react";
import MyNav from "./Nav";
import WideHrz from "./WideHrz";

interface MyLayoutProps {
  children?: ReactNode;
}

const MyLayout: FC<MyLayoutProps> = ({ children }) => {
  const [izumi, setIzumi] = useState(0);

  return (
    <div className="layoutcontainer contentlayout">
      <WideHrz />
      <div className="middlecenter">
        <MyNav pagePair={{ page: izumi, setPage: setIzumi }} />
        <div className="izumi">{children}</div>
        <div
          style={{
            height: "35px",
            background: "#9c4221",
            borderRadius: "0 0 30px 30px",
          }}
        >
          About
        </div>
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
          background: #dd6b20;
          border-top: solid 2px #9c4221;
          border-bottom: solid 2px #9c4221;
          // writing-mode: vertical-rl;
          // text-align: center;
          position: relative;
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
      `}</style>
    </div>
  );
};

export default MyLayout;
