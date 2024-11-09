import { useState } from "react";
import "../Styles/LandingPage.css";
export default function LandingPage() {
  const [collapsed, isCollapsed] = useState(false);

  return (
    <div className="min-w-screen min-h-screen flex justify-center items-center">
      <div
        className={collapsed ? "wrapper" : "wrapper hover"}
        onClick={() => {
          isCollapsed(!collapsed);
        }}
      >
        <div className="left">
          <div className="trigger">D</div>
          <div className="data">Data</div>
        </div>
        <div className="right">
          <div className="trigger">S3</div>
          <div className="hidden1">Science</div>
          <div className="hidden2">Student Society</div>
        </div>
      </div>
    </div>
  );
}
