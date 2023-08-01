import { Box, Divider } from "@mui/material"
import Link from "next/link"
import { ContentfulVariable } from "../../../redux/stateInterfaces"
import {
  DevelopedByRole,
  DeveloperOrRefDetails,
} from "../../../utils/interfaces"
import CallMadeIcon from "@mui/icons-material/CallMade"
import { styles } from "./styles/referencesStyles"

interface ReferencesProps {
  content: ContentfulVariable
}

const References = ({ content }: ReferencesProps) => {
  return (
    <Box component="section" sx={styles.referencesWrapper}>
      <Box sx={styles.referencesExploreMoreSection}>
        <Box className="poppins" sx={styles.referencesMoreInfoTitle}>
          For more information
        </Box>
        <Link href="/more" target="_blank">
          Explore more <CallMadeIcon />
        </Link>
      </Box>
      <Box className="hell" sx={styles.developerReferencesWrapper}>
        {content?.developedByRoles?.map((item: DevelopedByRole) => {
          return (
            <Box key={item.id}>
              <Box className="cormorant" sx={styles.developerReferencesRole}>
                {item.role}
              </Box>
              <Divider sx={styles.developerRolesDivider} />
              {item?.dev.map((dev: DeveloperOrRefDetails) => {
                return (
                  <Box
                    className="poppins"
                    sx={styles.referencesDeveloperDetail}
                    key={dev.link}
                  >
                    <Link href={dev.link}>{dev.name}</Link>
                  </Box>
                )
              })}
            </Box>
          )
        })}
      </Box>
    </Box>
  )
}

export default References
