import Head from "next/head"
import { useEffect } from "react"
import { getProgramsCardDetails } from "../../lib/methods/getNgoDetails"
import { client } from "../../utils/contentful/client"
import { EntryCollection, EntrySkeletonType } from "contentful"
import { GetServerSideProps } from "next"
import { ProgramsPageProps } from "../../utils/interfaces"
import { useDispatch } from "react-redux"
import { setContent } from "../../redux/slices/contentSlice"
import { setProgramsCardDataList } from "../../redux/slices/programSlice"

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

  return (
    <>
      <Head>
        <title>Programs</title>
        <meta name="description" content="A hub for all NGOs" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <>Programs</>
    </>
  )
}

export default ProgramsPage
