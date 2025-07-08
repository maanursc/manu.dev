import React, { FunctionComponent, useEffect, useState } from "react";
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Divider,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
} from "@mui/material";

import { useTranslation } from "react-i18next";
import { useLanguageContext } from "../../providers/CustomProvider";
import { ProfileCard } from "../../components/ProfileCard/ProfileCard";
import { Footer } from "../../components/Footer/Footer";
import { Header } from "../../components/Header/Header";
import { DescriptionCard } from "../../components/DescriptionCard/DescriptionCard";
import { Color } from "../../styles/colors";

export const LandingPage: FunctionComponent = () => {
  const { t } = useTranslation(["translation", "common"]);
  const { showLanguageModal, setShowLanguageModal, setLanguage } =
    useLanguageContext();
  const [selectedLanguage, setSelectedLanguage] = useState("en");
  const [openLanguageDialog, setOpenLanguageDialog] = useState(false);

  const handleCloseLanguageDialog = () => {
    setOpenLanguageDialog(false);
    setShowLanguageModal(false);
    setLanguage(selectedLanguage);
  };

  const handleLanguageOptionsChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setSelectedLanguage(event.target.value);
  };

  useEffect(() => {
    setOpenLanguageDialog(showLanguageModal);
  }, [showLanguageModal]);

  return (
    <Box
      sx={{
        minHeight: "100vh",
        width: "100%",
        backgroundColor: "#0e1629",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Header />
      <Box
        sx={{
          flex: 1,
          display: "grid",
          gridTemplateRows: "auto auto",
          gap: "0px",
          padding: "16px",
          "@media (max-width: 768px)": {
            padding: "12px",
            gap: "8px",
          },
          "@media (max-width: 480px)": {
            padding: "8px",
          },
        }}
      >
        <ProfileCard />
        <DescriptionCard />
      </Box>
      <Footer />

      <Dialog
        open={openLanguageDialog}
        onClose={handleCloseLanguageDialog}
        data-testid="landingPage_languageDialog"
        sx={{
          "& .MuiDialog-paper": {
            backgroundColor: "#0e1629",
            color: "white",
            borderRadius: "8px",
            width: "400px",
            "@media (max-width: 480px)": {
              width: "90%",
              margin: "16px",
            },
          },
        }}
      >
        <DialogTitle>{t("landing_page.language_dialog.title")}</DialogTitle>
        <DialogContent>
          <FormControl>
            <RadioGroup
              onChange={handleLanguageOptionsChange}
              value={selectedLanguage}
              sx={{ display: "flex", flexDirection: "column", color: "white" }}
            >
              <FormControlLabel
                value="en"
                control={<Radio />}
                label={t("landing_page.language_dialog.lang_options.en")}
              />
              <FormControlLabel
                value="pt_BR"
                control={<Radio />}
                label={t("landing_page.language_dialog.lang_options.pt_br")}
              />
              <FormControlLabel
                value="fr"
                control={<Radio />}
                label={t("landing_page.language_dialog.lang_options.fr")}
              />
            </RadioGroup>
          </FormControl>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={handleCloseLanguageDialog}
            data-testid="landingPage_languageDialog_button"
            sx={{
              color: "white",
              "&:hover": {
                backgroundColor: "#115293",
              },
            }}
          >
            {t("landing_page.language_dialog.button")}
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};
