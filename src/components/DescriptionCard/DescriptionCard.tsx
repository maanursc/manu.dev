import React, { Fragment, FunctionComponent } from "react";
import { Box, CardContent, Divider, Typography, Chip } from "@mui/material";
import { Color } from "../../styles/colors";
import { useTranslation } from "react-i18next";

export const DescriptionCard: FunctionComponent = () => {
  const { t } = useTranslation(["translation", "common"]);
  const aboutMeDescriptionArray = t("description_card.about_me_description", {
    returnObjects: true,
  }) as string[];
  const aboutMeDescription = aboutMeDescriptionArray.join("\n\n");
  const educationDescriptionArray = t(
    "description_card.education_description",
    {
      returnObjects: true,
    }
  ) as string[];

  const experienceDescriptionArray = t(
    "description_card.experience_description",
    {
      returnObjects: true,
    }
  ) as string[];

  // Skills arrays
  const programmingLanguages = t(
    "description_card.programming_languages_list",
    {
      returnObjects: true,
    }
  ) as string[];

  const frontendTechnologies = t(
    "description_card.frontend_technologies_list",
    {
      returnObjects: true,
    }
  ) as string[];

  const backendTechnologies = t("description_card.backend_technologies_list", {
    returnObjects: true,
  }) as string[];

  const databases = t("description_card.databases_list", {
    returnObjects: true,
  }) as string[];

  const cloudAws = t("description_card.cloud_aws_list", {
    returnObjects: true,
  }) as string[];

  const developmentTools = t("description_card.development_tools_list", {
    returnObjects: true,
  }) as string[];

  const testingFrameworks = t("description_card.testing_frameworks_list", {
    returnObjects: true,
  }) as string[];

  const operatingSystems = t("description_card.operating_systems_list", {
    returnObjects: true,
  }) as string[];

  const methodologies = t("description_card.methodologies_list", {
    returnObjects: true,
  }) as string[];

  // Shared styles for better mobile responsiveness
  const skillSectionStyles = {
    marginBottom: "16px",
    "@media (max-width: 480px)": {
      marginBottom: "12px",
    },
  };

  const skillTitleStyles = {
    color: "white",
    marginBottom: "8px",
    fontWeight: "bold",
    "@media (max-width: 480px)": {
      fontSize: "0.85rem",
      marginBottom: "6px",
    },
  };

  const skillChipBaseStyles = {
    color: "white",
    fontSize: "12px",
    "@media (max-width: 480px)": {
      fontSize: "10px",
      height: "24px",
    },
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        width: "90%",
        height: "auto",
        padding: "24px",
        gap: "24px",
        alignItems: "stretch",
        justifySelf: "center",
        "@media (max-width: 900px)": {
          flexDirection: "column",
          height: "auto",
          gap: "16px",
          padding: "16px",
          width: "95%",
        },
        "@media (max-width: 480px)": {
          padding: "12px",
          gap: "12px",
          width: "98%",
        },
      }}
    >
      <Box
        sx={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          padding: "16px",
          backgroundColor: "rgba(255, 255, 255, 0.05)",
          borderRadius: "8px",
          "@media (max-width: 480px)": {
            padding: "12px",
          },
        }}
      >
        <CardContent>
          <Typography
            variant="h6"
            sx={{
              color: "white",
              "@media (max-width: 480px)": {
                fontSize: "1.15rem",
              },
            }}
          >
            {t("description_card.about_me")}
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: "white",
              marginTop: "8px",
              "@media (max-width: 480px)": {
                fontSize: "0.9rem",
                lineHeight: "1.4",
              },
            }}
          >
            {aboutMeDescription}
          </Typography>
        </CardContent>

        <CardContent>
          <Typography
            variant="h6"
            sx={{
              color: "white",
              "@media (max-width: 480px)": {
                fontSize: "1.15rem",
              },
            }}
          >
            {t("description_card.education")}
          </Typography>
          <Box sx={{ marginTop: "8px" }}>
            {educationDescriptionArray.map((item, index) => (
              <Box
                key={index}
                sx={{
                  display: "flex",
                  alignItems: "flex-start",
                  marginBottom: "8px",
                  "@media (max-width: 480px)": {
                    marginBottom: "6px",
                  },
                }}
              >
                <Typography
                  sx={{
                    color: "#6428e9",
                    marginRight: "8px",
                    lineHeight: "1.5",
                    fontSize: "16px",
                    "@media (max-width: 480px)": {
                      fontSize: "14px",
                      marginRight: "6px",
                    },
                  }}
                >
                  •
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    color: "white",
                    lineHeight: "1.5",
                    flex: 1,
                    "@media (max-width: 480px)": {
                      fontSize: "0.9rem",
                      lineHeight: "1.4",
                    },
                  }}
                >
                  {item}
                </Typography>
              </Box>
            ))}
          </Box>
        </CardContent>

        <CardContent>
          <Typography
            variant="h6"
            sx={{
              color: "white",
              "@media (max-width: 480px)": {
                fontSize: "1.15rem",
              },
            }}
          >
            {t("description_card.experience")}
          </Typography>
          <Box sx={{ marginTop: "8px" }}>
            {experienceDescriptionArray.map((item, index) => (
              <Box
                key={index}
                sx={{
                  display: "flex",
                  alignItems: "flex-start",
                  marginBottom: "8px",
                  "@media (max-width: 480px)": {
                    marginBottom: "6px",
                  },
                }}
              >
                <Typography
                  sx={{
                    color: "#6428e9",
                    marginRight: "8px",
                    lineHeight: "1.5",
                    fontSize: "16px",
                    "@media (max-width: 480px)": {
                      fontSize: "14px",
                      marginRight: "6px",
                    },
                  }}
                >
                  •
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    color: "white",
                    lineHeight: "1.5",
                    flex: 1,
                    "@media (max-width: 480px)": {
                      fontSize: "0.9rem",
                      lineHeight: "1.4",
                    },
                  }}
                >
                  {item}
                </Typography>
              </Box>
            ))}
          </Box>
        </CardContent>
      </Box>

      <Divider
        orientation="vertical"
        sx={{
          width: "2px",
          background: Color.DarkGray,
          "@media (max-width: 900px)": {
            display: "none",
          },
        }}
      />

      <Box
        sx={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          padding: "16px",
          backgroundColor: "rgba(255, 255, 255, 0.05)",
          borderRadius: "8px",
          gap: "16px",
          "@media (max-width: 480px)": {
            padding: "12px",
            gap: "12px",
          },
        }}
      >
        <CardContent>
          <Typography
            variant="h6"
            sx={{
              color: "white",
              marginBottom: "16px",
              "@media (max-width: 480px)": {
                fontSize: "1.15rem",
                marginBottom: "12px",
              },
            }}
          >
            {t("description_card.skills")}
          </Typography>

          {/* Programming Languages */}
          <Box
            sx={{
              ...skillSectionStyles,
              marginBottom: "16px",
              "@media (max-width: 480px)": {
                marginBottom: "12px",
              },
            }}
          >
            <Typography
              variant="subtitle2"
              sx={{
                ...skillTitleStyles,
                marginBottom: "8px",
                fontWeight: "bold",
                "@media (max-width: 480px)": {
                  fontSize: "0.85rem",
                  marginBottom: "6px",
                },
              }}
            >
              {t("description_card.programming_languages")}
            </Typography>
            <Box sx={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
              {programmingLanguages.map((skill, index) => (
                <Chip
                  key={index}
                  label={skill}
                  sx={{
                    backgroundColor: "#6428e9",
                    color: "white",
                    fontSize: "12px",
                    "&:hover": {
                      backgroundColor: "#5020d9",
                    },
                    "@media (max-width: 480px)": {
                      fontSize: "10px",
                      height: "24px",
                    },
                  }}
                />
              ))}
            </Box>
          </Box>

          {/* Frontend Technologies */}
          <Box sx={skillSectionStyles}>
            <Typography variant="subtitle2" sx={skillTitleStyles}>
              {t("description_card.frontend_technologies")}
            </Typography>
            <Box sx={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
              {frontendTechnologies.map((skill, index) => (
                <Chip
                  key={index}
                  label={skill}
                  sx={{
                    ...skillChipBaseStyles,
                    backgroundColor: "#2196f3",
                    "&:hover": {
                      backgroundColor: "#1976d2",
                    },
                  }}
                />
              ))}
            </Box>
          </Box>

          {/* Backend Technologies */}
          <Box sx={skillSectionStyles}>
            <Typography variant="subtitle2" sx={skillTitleStyles}>
              {t("description_card.backend_technologies")}
            </Typography>
            <Box sx={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
              {backendTechnologies.map((skill, index) => (
                <Chip
                  key={index}
                  label={skill}
                  sx={{
                    ...skillChipBaseStyles,
                    backgroundColor: "#4caf50",
                    "&:hover": {
                      backgroundColor: "#388e3c",
                    },
                  }}
                />
              ))}
            </Box>
          </Box>

          {/* Databases */}
          <Box sx={skillSectionStyles}>
            <Typography variant="subtitle2" sx={skillTitleStyles}>
              {t("description_card.databases")}
            </Typography>
            <Box sx={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
              {databases.map((skill, index) => (
                <Chip
                  key={index}
                  label={skill}
                  sx={{
                    ...skillChipBaseStyles,
                    backgroundColor: "#ff9800",
                    "&:hover": {
                      backgroundColor: "#f57c00",
                    },
                  }}
                />
              ))}
            </Box>
          </Box>

          {/* Cloud & AWS */}
          <Box sx={skillSectionStyles}>
            <Typography variant="subtitle2" sx={skillTitleStyles}>
              {t("description_card.cloud_aws")}
            </Typography>
            <Box sx={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
              {cloudAws.map((skill, index) => (
                <Chip
                  key={index}
                  label={skill}
                  sx={{
                    ...skillChipBaseStyles,
                    backgroundColor: "#ff5722",
                    "&:hover": {
                      backgroundColor: "#d84315",
                    },
                  }}
                />
              ))}
            </Box>
          </Box>

          {/* Development Tools */}
          <Box sx={skillSectionStyles}>
            <Typography variant="subtitle2" sx={skillTitleStyles}>
              {t("description_card.development_tools")}
            </Typography>
            <Box sx={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
              {developmentTools.map((skill, index) => (
                <Chip
                  key={index}
                  label={skill}
                  sx={{
                    ...skillChipBaseStyles,
                    backgroundColor: "#9c27b0",
                    "&:hover": {
                      backgroundColor: "#7b1fa2",
                    },
                  }}
                />
              ))}
            </Box>
          </Box>

          {/* Testing Frameworks */}
          <Box sx={skillSectionStyles}>
            <Typography variant="subtitle2" sx={skillTitleStyles}>
              {t("description_card.testing_frameworks")}
            </Typography>
            <Box sx={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
              {testingFrameworks.map((skill, index) => (
                <Chip
                  key={index}
                  label={skill}
                  sx={{
                    ...skillChipBaseStyles,
                    backgroundColor: "#795548",
                    "&:hover": {
                      backgroundColor: "#5d4037",
                    },
                  }}
                />
              ))}
            </Box>
          </Box>

          {/* Operating Systems */}
          <Box sx={skillSectionStyles}>
            <Typography variant="subtitle2" sx={skillTitleStyles}>
              {t("description_card.operating_systems")}
            </Typography>
            <Box sx={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
              {operatingSystems.map((skill, index) => (
                <Chip
                  key={index}
                  label={skill}
                  sx={{
                    ...skillChipBaseStyles,
                    backgroundColor: "#607d8b",
                    "&:hover": {
                      backgroundColor: "#455a64",
                    },
                  }}
                />
              ))}
            </Box>
          </Box>

          {/* Methodologies */}
          <Box sx={skillSectionStyles}>
            <Typography variant="subtitle2" sx={skillTitleStyles}>
              {t("description_card.methodologies")}
            </Typography>
            <Box sx={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
              {methodologies.map((skill, index) => (
                <Chip
                  key={index}
                  label={skill}
                  sx={{
                    ...skillChipBaseStyles,
                    backgroundColor: "#009688",
                    "&:hover": {
                      backgroundColor: "#00695c",
                    },
                  }}
                />
              ))}
            </Box>
          </Box>
        </CardContent>
      </Box>
    </Box>
  );
};
