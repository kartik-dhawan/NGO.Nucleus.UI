import { useSelector } from "react-redux"
import { RootType } from "../../../../redux/store"
import { Box } from "@mui/material"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import Image from "next/image"
import { styles } from "./styles"
import PrimaryButton from "../../../common/Buttons/PrimaryButton"
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt"
import LoginPopup from "../../../LoginPopup"

const HeroSection = () => {
  const { content } = useSelector((state: RootType) => state.contentSlice)
  const { loginDialog } = useSelector((state: RootType) => state.authSlice)

  return (
    <Box component="section" sx={styles.heroSectionWrapper}>
      {loginDialog && <LoginPopup />}
      {content.heroSectionImages?.map(
        (item: any, index: number) /*eslint-disable-line */ => {
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
                <Box
                  className="barlowCondensed"
                  sx={styles.heroSectionTypography}
                >
                  {index === 0 &&
                    documentToReactComponents(content?.heroLandingSectionBody)}
                  {index === 1 &&
                    documentToReactComponents(content?.heroQuoteSectionBody)}
                  <PrimaryButton icon={<ArrowRightAltIcon />}>
                    {content.heroLandingSectionButtonText[index]}
                  </PrimaryButton>
                </Box>
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
                    priority
                  />
                )}
              </Box>
            </Box>
          )
        },
      )}
    </Box>
  )
}

export default HeroSection
