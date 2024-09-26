import React from "react";

import { useTheme } from "next-themes";
import { Button } from "../ui/button";
import { SunIcon } from "lucide-react";

function ThemeToggler() {
  return (
    <div>
      <Button>
        <SunIcon></SunIcon>
      </Button>
    </div>
  );
}

export default ThemeToggler;
