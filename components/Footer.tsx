import { FC } from "react";

const MyFooter: FC = () => {
  return (
    <div className="bottomfooter">
      <small>Copyright &copy; 2022 Jason Karjadi. All rights reserved</small>
      <style jsx>{`
        .bottomfooter {
          height: 20px;
          background: #a0aec0;
          text-align: center;
          padding: 2px 0;
        }
      `}</style>
    </div>
  );
};

export default MyFooter;
