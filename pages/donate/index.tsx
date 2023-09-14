import { EntryCollection, EntrySkeletonType } from "contentful"
import { client } from "../../utils/contentful/client"
import { DonatePageProps } from "../../utils/interfaces"
import { GetServerSideProps } from "next"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { setContent, setEnv } from "../../redux/slices/contentSlice"
import { getNgoListDetails } from "../../lib/methods/getNgoDetails"

import { Box } from "@mui/material"
import TableStructure from "../../components/common/TableStructure"
import { NGO_DATA_KEYS } from "../../utils/constants"
import Link from "next/link"
import { RootType } from "../../redux/store"
import LoginPopup from "../../components/LoginPopup"

export const getServerSideProps: GetServerSideProps = async () => {
  const contentResponse: EntryCollection<EntrySkeletonType, undefined, string> =
    await client.getEntries({ content_type: "ngoNucleus" })

  const ngoData = await getNgoListDetails()

  return {
    props: {
      content: contentResponse.items[0].fields,
      environment: contentResponse.items[0].sys.environment.sys.id,
      ngoData: ngoData ?? null,
    },
  }
}

const DonatePage = ({ content, environment, ngoData }: DonatePageProps) => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(setContent(content))
    dispatch(setEnv(environment))
  }, [content, dispatch])

  const { currentNgoListItem, donateToSuccess } = useSelector(
    (state: RootType) => state.ngoSlice,
  )
  const { loginDialog } = useSelector((state: RootType) => state.authSlice)

  return (
    <Box
      sx={{
        margin: "2rem",
        maxWidth: {
          xs: "100vw",
          lg: "100vw",
        },
      }}
    >
      {loginDialog && <LoginPopup />}
      <Box
        component="h1"
        className="cormorant"
        sx={{
          textAlign: "center",
          fontSize: {
            xs: "30px",
            md: "40px",
            lg: "48px",
          },
        }}
      >
        Wish to be a helping hand?
      </Box>
      <Box
        sx={{
          margin: "6rem 0rem",
        }}
      >
        <Box sx={{ position: "relative" }}>
          {donateToSuccess && (
            <Box
              sx={{
                position: "absolute",
                top: "-60px",
                width: "100%",
                "& div": {
                  margin: "2px",
                },
                "& a": {
                  color: "#b9ad28",
                },
              }}
            >
              <Box>
                Thank you for choosing{" "}
                <Link href={currentNgoListItem?.website ?? "#!"}>
                  {currentNgoListItem?.title ?? "the NGO"}
                </Link>
              </Box>
              <Box>
                An email has been sent to you with the payment link &
                verification.
              </Box>
            </Box>
          )}
          <TableStructure data={ngoData} keys={NGO_DATA_KEYS} />
        </Box>
      </Box>
    </Box>
  )
}

export default DonatePage
