import { useSelector } from "react-redux"
import { RootType } from "../../../../redux/store"
import { Box, Typography } from "@mui/material"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import Image from "next/image"
import { styles } from "./styles"

const HeroSection = () => {
  const { content } = useSelector((state: RootType) => state.contentSlice)

  return (
    <Box component="section" sx={styles.heroSectionWrapper}>
      {content.heroSectionImages &&
        content.heroSectionImages.map((item: any, index: number) => {
          return (
            <Box
              key={item.sys.id}
              sx={{
                ...styles.heroSectionItemWrapper,
                flexDirection:
                  index === 0
                    ? {
                        xs: "column-reverse",
                        md: "row",
                      }
                    : {
                        xs: "column-reverse",
                        md: "row-reverse",
                      },
              }}
            >
              <Box sx={styles.heroSectionTypographyWrapper}>
                <Typography
                  className="barlowCondensed"
                  sx={styles.heroSectionTypography}
                >
                  {index === 0 &&
                    documentToReactComponents(content?.heroLandingSectionBody)}
                  {index === 1 &&
                    documentToReactComponents(content?.heroQuoteSectionBody)}
                </Typography>
                <Box></Box>
              </Box>
              <Box sx={styles.heroSectionImages}>
                {content?.heroSectionImages && (
                  <Image
                    src={
                      "https:" +
                      content?.heroSectionImages[index].fields?.file.url
                    }
                    alt={content?.heroSectionImages[index].fields.description}
                    width={2787}
                    height={4180}
                  />
                )}
              </Box>
            </Box>
          )
        })}
    </Box>
  )
}

export default HeroSection
