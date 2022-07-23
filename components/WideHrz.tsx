import { FC, ReactNode } from "react";

interface WideHrzProps {
  children?: ReactNode;
}

const WideHrz: FC<WideHrzProps> = ({ children }) => {
  return (
    <div className="widehrz">
      {children}
      <style jsx>{`
        .widehrz {
          height: 20px;
          background: #a0aec0;
          text-align: center;
          padding: 2px 0;
        }
      `}</style>
    </div>
  );
};

export default WideHrz;
