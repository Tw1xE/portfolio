// // react
// import { FC, ReactNode } from "react";

// interface ButtonProps {
//   children: ReactNode;
//   secondary?: boolean;
//   icon?: string;
//   onClick?: () => void;
// }

// const Button: FC<ButtonProps> = ({ children, secondary, icon, onClick }) => {
//   return (
//     <button
//       onClick={onClick}
//       className={`${secondary ? "bg-secondary" : "bg-accent"} ${
//         secondary ? "hover:bg-hoverSecondary" : "hover:bg-hoverPrimary"
//       } transition-all ease-linear duration-300 py-2.5 px-8 rounded-full text-white text-base sm:text-lg text-bold relative w-full sm:w-fit`}
//     >
//       {icon ? (
//         <div className="flex items-center gap-2.5 justify-center">
//           <p className="[text-shadow:_0_4px_4px_rgb(0_0_0_/_50%)]">
//             {children}
//           </p>
//           <img src={icon} alt="" />
//         </div>
//       ) : (
//         <p className="[text-shadow:_0_4px_4px_rgb(0_0_0_/_50%)]">{children}</p>
//       )}
//     </button>
//   );
// };

// export default Button;
import React, { FC, ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  secondary?: boolean;
  icon?: string;
  onClick?: () => void;
  downloadLink?: string; // Add a new prop for the download link
}

const Button: FC<ButtonProps> = ({
  children,
  secondary,
  icon,
  onClick,
  downloadLink,
}) => {
  const handleClick = () => {
    if (onClick) {
      onClick();
    } else if (downloadLink) {
      downloadFile();
    }
  };

  const downloadFile = () => {
    const link = document.createElement("a");
    link.href = downloadLink || "";
    link.download = "CV.pdf"; // Set the desired file name
    link.click();
  };

  return (
    <button
      onClick={handleClick}
      className={`${secondary ? "bg-secondary" : "bg-accent"} ${
        secondary ? "hover:bg-hoverSecondary" : "hover:bg-hoverPrimary"
      } transition-all ease-linear duration-300 py-2.5 px-8 rounded-full text-white text-base sm:text-lg font-bold relative w-full sm:w-fit`}
    >
      {icon ? (
        <div className="flex items-center gap-2.5 justify-center">
          <p className="[text-shadow:_0_4px_4px_rgb(0_0_0_/_50%)]">
            {children}
          </p>
          <img src={icon} alt="" />
        </div>
      ) : (
        <p className="[text-shadow:_0_4px_4px_rgb(0_0_0_/_50%)]">{children}</p>
      )}
    </button>
  );
};

export default Button;
