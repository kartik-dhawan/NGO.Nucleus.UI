import { EntryCollection, EntrySkeletonType } from "contentful"
import { GetServerSideProps } from "next"
import { client } from "../../utils/contentful/client"
import { NgosPageProps } from "../../utils/interfaces"
import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { setContent } from "../../redux/slices/contentSlice"

export const getServerSideProps: GetServerSideProps = async () => {
  const contentResponse: EntryCollection<EntrySkeletonType, undefined, string> =
    await client.getEntries({ content_type: "ngoNucleus" })

  return {
    props: {
      content: contentResponse.items[0].fields,
    },
  }
}

const Ngos = ({ content }: NgosPageProps) => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(setContent(content))
  }, [content, dispatch])

  return (
    <>
      <pre>NGOs</pre>
    </>
  )
}

export default Ngos
