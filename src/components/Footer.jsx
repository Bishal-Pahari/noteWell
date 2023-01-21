import React from "react";

const date = new Date();
let currentDate = date.getFullYear();

export default function Footer() {
  return (
    <footer>
      <p>Copyright © {currentDate}. All rights reserved.</p>
    </footer>
  );
}
