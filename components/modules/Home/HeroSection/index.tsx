import { useSelector } from "react-redux"
import { RootType } from "../../../../redux/store"
import { Box, Typography } from "@mui/material"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import Image from "next/image"

const HeroSection = () => {
  const { content } = useSelector((state: RootType) => state.contentSlice)

  return (
    <Box
      component="section"
      sx={{ display: "flex", flexDirection: "column", gap: "10rem" }}
    >
      {content.heroSectionImages &&
        content.heroSectionImages.map((item: any, index: number) => {
          return (
            <Box
              key={item.sys.id}
              sx={{
                display: "flex",
                gap: "5rem",
                flexDirection: index === 0 ? "row" : "row-reverse",
                position: "relative",
              }}
            >
              <Box
                sx={{
                  flex: 4,
                  padding: "24px 32px",
                  boxSizing: "border-box",
                }}
              >
                <Typography
                  className="barlowCondensed"
                  sx={{
                    position: "sticky",
                    top: "78px",
                    // left: 0,
                    "& > h1": {
                      margin: "4px 0px",
                      fontSize: "32px",
                    },
                    "& p": {
                      fontSize: "18px",
                    },
                  }}
                >
                  {index === 0 &&
                    documentToReactComponents(content?.heroLandingSectionBody)}
                  {index === 1 &&
                    documentToReactComponents(content?.heroQuoteSectionBody)}
                </Typography>
                <Box></Box>
              </Box>
              <Box
                sx={{
                  flex: 5,
                  "& > img": {
                    width: "100%",
                    height: "100%",
                  },
                }}
              >
                {content?.heroSectionImages && (
                  <Image
                    src={
                      "https:" +
                      content?.heroSectionImages[index].fields?.file.url
                    }
                    alt={content?.heroSectionImages[index].fields.description}
                    width={2787}
                    height={4180}
                  ></Image>
                )}
              </Box>
            </Box>
          )
        })}
    </Box>
  )
}

export default HeroSection
