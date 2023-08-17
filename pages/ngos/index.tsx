import { EntryCollection, EntrySkeletonType } from "contentful"
import { GetServerSideProps } from "next"
import { client } from "../../utils/contentful/client"
import { NgosPageProps } from "../../utils/interfaces"
import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { setContent } from "../../redux/slices/contentSlice"
import getNgoDetails from "../../lib/methods/getNgoDetails"
import { setNgosList } from "../../redux/slices/ngoSlice"
import { Box, Divider } from "@mui/material"
import Head from "next/head"

export const getServerSideProps: GetServerSideProps = async () => {
  const contentResponse: EntryCollection<EntrySkeletonType, undefined, string> =
    await client.getEntries({ content_type: "ngoNucleus" })

  const data = await getNgoDetails()

  return {
    props: {
      content: contentResponse.items[0].fields,
      ngoList: data,
    },
  }
}

const Ngos = ({ content, ngoList }: NgosPageProps) => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(setContent(content))
    dispatch(setNgosList(ngoList))
  }, [content, dispatch, ngoList])

  const { ngoPageTitle, ngoPageSubtitle } = content

  return (
    <Box sx={{ padding: "5rem 2rem 2rem", boxSizing: "border-box" }}>
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
      <Box
        component="p"
        sx={{
          margin: 0,
        }}
        className="robotoCondensed"
      >
        {ngoPageSubtitle}
      </Box>
      <Divider sx={{ margin: "8px 0px", borderColor: "#ccc" }} />
    </Box>
  )
}

export default Ngos
