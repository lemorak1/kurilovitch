import React from "react";

interface ScrollingPageProps {
  children: React.ReactNode;
  backgroundColor?: string;
  fontColor?: string;
}

const ScrollingPage: React.FC<ScrollingPageProps> = ({
  children,
  backgroundColor = "#ffffff",
  fontColor = "#333333",
}) => {
  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center"
      style={{ backgroundColor, color: fontColor }}
    >
      {children}
    </div>
  );
};

export default ScrollingPage;
