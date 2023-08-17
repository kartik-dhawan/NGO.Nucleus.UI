import { EntryCollection, EntrySkeletonType } from "contentful"
import { GetServerSideProps } from "next"
import { client } from "../../utils/contentful/client"
import { NgosPageProps } from "../../utils/interfaces"
import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { setContent } from "../../redux/slices/contentSlice"
import { getNgoCardDetails } from "../../lib/methods/getNgoDetails"
import { setNgoCardDataList } from "../../redux/slices/ngoSlice"
import { Box, Divider } from "@mui/material"
import Head from "next/head"
import CardList from "../../components/common/CardList"

export const getServerSideProps: GetServerSideProps = async () => {
  const contentResponse: EntryCollection<EntrySkeletonType, undefined, string> =
    await client.getEntries({ content_type: "ngoNucleus" })

  const ngoCardData = await getNgoCardDetails()

  return {
    props: {
      content: contentResponse.items[0].fields,
      ngoCardData,
    },
  }
}

const Ngos = ({ content, ngoCardData }: NgosPageProps) => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(setContent(content))
    dispatch(setNgoCardDataList(ngoCardData))
  }, [content, dispatch, ngoCardData])

  const { ngoPageTitle, ngoPageSubtitle } = content

  return (
    <Box sx={{ padding: "4rem 2rem 2rem", boxSizing: "border-box" }}>
      <Head>
        <title>NGOs</title>
        <meta name="description" content="A hub for all NGOs" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box
        component="h2"
        sx={{
          margin: 0,
          fontSize: "48px",
          textTransform: "uppercase",
          letterSpacing: "-2px",
        }}
        className="robotoCondensed"
      >
        {ngoPageTitle}
      </Box>
      <Box component="p" sx={{ margin: 0 }} className="robotoCondensed">
        {ngoPageSubtitle}
      </Box>
      <Divider sx={{ margin: "8px 0px", borderColor: "#ccc" }} />
      {ngoCardData.length !== 0 && <CardList dataList={ngoCardData} />}
    </Box>
  )
}

export default Ngos
