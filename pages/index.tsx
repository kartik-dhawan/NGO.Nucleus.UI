import Head from "next/head"
import { GetStaticProps } from "next"
import { client } from "../utils/contentful/client"
import { EntryCollection, EntrySkeletonType } from "contentful"
import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { setContent } from "../redux/slices/contentSlice"

export const getStaticProps: GetStaticProps = async () => {
  const response: EntryCollection<EntrySkeletonType, undefined, string> =
    await client.getEntries({ content_type: "ngoNucleus" })

  return {
    props: {
      content: response.items[0].fields,
    },
    revalidate: parseInt(process.env.NEXT_REVALIDATION_TIME ?? "3600"),
  }
}

export default function Home({ content }: any) {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(setContent(content))
  }, [content])

  return (
    <div>
      <Head>
        <title>NGO Nucleus</title>
        <meta name="description" content="A hub for all NGOs" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>NGO NUCLEUS</main>
    </div>
  )
}
