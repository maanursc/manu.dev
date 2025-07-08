import React from "react";
import { FunctionComponent } from "react";
import { Box, IconButton } from "@mui/material";

import LanguageIcon from "@mui/icons-material/Language";

import { useLanguageContext } from "../../providers/CustomProvider";
import { useTranslation } from "react-i18next";

export interface headerProps {
  selectedButton: string;
  setSelectedButton: (newValue: string) => void;
}

export const Header: FunctionComponent = () => {
  const { setShowLanguageModal } = useLanguageContext();
  const { t } = useTranslation(["translation", "common"]);
  const handleClick = () => {
    setShowLanguageModal((prev) => !prev);
  };

  return (
    <Box
      sx={{
        position: "fixed",
        top: 16,
        right: 16,
        zIndex: 1000,
        "@media (max-width: 480px)": {
          top: 12,
          right: 12,
        },
      }}
    >
      <IconButton
        onClick={handleClick}
        aria-label={t("header.buttons.language")}
        sx={{
          "@media (max-width: 480px)": {
            padding: "6px",
          },
        }}
      >
        <LanguageIcon
          sx={{
            fill: "#6428e9",
            "@media (max-width: 480px)": {
              fontSize: "20px",
            },
          }}
        />
      </IconButton>
    </Box>
  );
};
