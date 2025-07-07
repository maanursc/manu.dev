import React, { Fragment, FunctionComponent } from "react";
import { Avatar, Box, Divider, Stack, Typography } from "@mui/material";
import { stylesheet } from "../../styles/stylesheet";
import { Color } from "../../styles/colors";

import ProfilePic from "../../assets/profile.jpg";
import EmailIcon from "@mui/icons-material/Email";
import LocationPinIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";

import { useTranslation } from "react-i18next";

export const ProfileCard: FunctionComponent = () => {
  const { t } = useTranslation(["translation", "common"]);

  return (
    <Fragment>
      <Box
        sx={{
          textAlign: "center",
          gap: "24px",
          display: "flex",
          flex: 1,
          flexDirection: "column",
          height: "100%",
          width: "100%",
          alignItems: "center",
        }}
      >
        <Avatar
          src={ProfilePic}
          alt="Profile Picture"
          sx={{
            height: "300px",
            width: "300px",
          }}
        />
        <Typography
          sx={{
            fontSize: "24px",
            fontWeight: "bold",
            color: Color.White,
            letterSpacing: "0.25em",
            textTransform: "uppercase",
          }}
        >
          {t("profile_card.name")}
        </Typography>
        <Typography
          sx={{
            fontSize: "17px",
            textTransform: "uppercase",
            letterSpacing: "0.25em",
            color: Color.White,
          }}
        >
          {t("profile_card.title")}
        </Typography>
        <Stack
          direction="row"
          spacing={4}
          sx={{
            width: "90%",
            gap: "8px",
            justifyContent: "center",
            "@media (max-width: 600px)": {
              flexDirection: "column",
              alignItems: "center",
              spacing: 2,
            },
          }}
        >
          <Stack direction="row" spacing={1} sx={{ alignItems: "center" }}>
            <EmailIcon sx={{ fill: "#6428e9" }} />
            <Typography sx={{ color: Color.White }}>
              {t("profile_card.email")}
            </Typography>
          </Stack>

          <Stack direction="row" spacing={1} sx={{ alignItems: "center" }}>
            <LocationPinIcon sx={{ fill: "#6428e9" }} />
            <Typography sx={{ color: Color.White }}>
              {t("profile_card.location")}
            </Typography>
          </Stack>

          <Stack direction="row" spacing={1} sx={{ alignItems: "center" }}>
            <PhoneIcon sx={{ fill: "#6428e9" }} />
            <Typography sx={{ color: Color.White }}>
              {t("profile_card.phone")}
            </Typography>
          </Stack>
        </Stack>
        <Divider sx={ss.divider} />
      </Box>
    </Fragment>
  );
};

const ss = stylesheet({
  divider: { width: "90%", height: "2px", background: Color.DarkGray },
});
