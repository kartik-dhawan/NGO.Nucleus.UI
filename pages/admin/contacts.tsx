import { EntryCollection, EntrySkeletonType } from "contentful"
import { GetServerSideProps } from "next"
import { client } from "../../utils/contentful/client"
import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { setContent, setEnv } from "../../redux/slices/contentSlice"
import { AdminPageProps, ContactFormData } from "../../utils/interfaces"
import AdminLayout from "../../components/AdminLayout"
import Head from "next/head"
import { getAllContacts } from "../../lib/methods/getAllContacts"
import { addContactDetails } from "../../redux/slices/contacts"
import ContactsList from "../../components/modules/ContactsList"

export const getServerSideProps: GetServerSideProps = async () => {
  const contentResponse: EntryCollection<EntrySkeletonType, undefined, string> =
    await client.getEntries({ content_type: "ngoNucleus" })

  const contactResponse: ContactFormData[] = await getAllContacts()

  return {
    props: {
      content: contentResponse.items[0].fields,
      environment: contentResponse.items[0].sys.environment.sys.id,
      contacts: contactResponse,
    },
  }
}

const Contacts = ({ content, environment, contacts }: AdminPageProps) => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(setContent(content))
    dispatch(setEnv(environment))
    contacts && dispatch(addContactDetails(contacts)) // eslint-disable-line
  }, [content, dispatch, environment, contacts])

  return (
    <>
      <Head>
        <title>Contacts | NGO Nucleus</title>
        <meta name="description" content="A hub for all NGOs" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AdminLayout>
        <ContactsList />
      </AdminLayout>
    </>
  )
}

export default Contacts
