import Head from "next/head"
import { useEffect } from "react"
import { getProgramsCardDetails } from "../../lib/methods/getNgoDetails"
import { client } from "../../utils/contentful/client"
import { EntryCollection, EntrySkeletonType } from "contentful"
import { GetServerSideProps } from "next"
import { ProgramsPageProps } from "../../utils/interfaces"
import { useDispatch, useSelector } from "react-redux"
import { setContent } from "../../redux/slices/contentSlice"
import { setProgramsCardDataList } from "../../redux/slices/programSlice"
import CardList from "../../components/common/CardList"
import { Box, Divider } from "@mui/material"
import { RootType } from "../../redux/store"
import LoginPopup from "../../components/LoginPopup"

export const getServerSideProps: GetServerSideProps = async () => {
  const contentResponse: EntryCollection<EntrySkeletonType, undefined, string> =
    await client.getEntries({ content_type: "ngoNucleus" })

  const programsCardData = await getProgramsCardDetails()

  return {
    props: {
      content: contentResponse.items[0].fields,
      programsCardData,
    },
  }
}

const ProgramsPage = ({ content, programsCardData }: ProgramsPageProps) => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(setContent(content))
    dispatch(setProgramsCardDataList(programsCardData))
  }, [content, dispatch, programsCardData])

  const { loginDialog } = useSelector((state: RootType) => state.authSlice)

  return (
    <>
      <Head>
        <title>Programs</title>
        <meta name="description" content="A hub for all NGOs" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box sx={{ padding: "4rem 2rem 2rem", boxSizing: "border-box" }}>
        {loginDialog && <LoginPopup />}

        <Box
          component="h2"
          sx={{
            margin: "2px",
            fontSize: "48px",
            textTransform: "uppercase",
            letterSpacing: "-2px",
          }}
          className="robotoCondensed"
        >
          Programs to follow
        </Box>
        <Box component="p" sx={{ margin: 0 }} className="robotoCondensed">
          Upcoming programs to become a part of a better society.
        </Box>
        <Divider sx={{ margin: "8px 0px", borderColor: "#ccc" }} />

        {programsCardData.length !== 0 && (
          <CardList dataList={programsCardData} />
        )}
      </Box>
    </>
  )
}

export default ProgramsPage
