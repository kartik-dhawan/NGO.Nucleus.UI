import { EntryCollection, EntrySkeletonType } from "contentful"
import { GetStaticProps } from "next"
import { client } from "../../utils/contentful/client"
import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { setContent, setEnv } from "../../redux/slices/contentSlice"
import { AdminPageProps } from "../../utils/interfaces"
import AdminLayout from "../../components/AdminLayout"

export const getStaticProps: GetStaticProps = async () => {
  const response: EntryCollection<EntrySkeletonType, undefined, string> =
    await client.getEntries({ content_type: "ngoNucleus" })

  return {
    props: {
      content: response.items[0].fields,
      environment: response.items[0].sys.environment.sys.id,
    },
    revalidate: parseInt(
      process.env.NEXT_PUBLIC_NEXT_REVALIDATION_TIME ?? "3600",
    ),
  }
}

const Contacts = ({ content, environment }: AdminPageProps) => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(setContent(content))
    dispatch(setEnv(environment))
  }, [content, dispatch, environment])

  return <AdminLayout>Contacts</AdminLayout>
}

export default Contacts
