import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { colors } from "../../variables";

export default function Header() {
  return (
    <header
      style={{
        background: `linear-gradient(90deg, ${colors.primary} 0%, ${colors.secondary} 100%)`,
        position: "fixed",
        width: "100%",
      }}
    >
      <div className="container">
        <div
          className="header-items"
          style={{
            display: "flex",
            height: "90px",
            alignItems: "center",
            color: colors.white,
            justifyContent: "space-between",
          }}
        >
          <div>
            <FontAwesomeIcon
              icon={["far", "user-circle"]}
              style={{ fontSize: "50px" }}
            />
          </div>
          <div style={{ marginLeft: "10px" }}>
            <p
              style={{
                fontFamily: "Open Sans",
                fontSize: "23px",
                fontWeight: "bold",
              }}
            >
              Maria
            </p>
            <p
              style={{
                fontFamily: "Comic Sans MS",
              }}
            >
              ag 0000 c/c 1234567-8
            </p>
          </div>
          <div style={{ textAlign: "right", marginLeft: "auto" }}>
            <p
              style={{
                fontSize: "23px",
              }}
            >
              100 pts
            </p>
            <p>iniciante</p>
          </div>
        </div>
      </div>
    </header>
  );
}
