import { collection, getDocs, DocumentData } from "firebase/firestore"
import { firestore } from "../../firebase/config"
import { FIREBASE_COLLECTIONS_LIST } from "../../utils/constants"

const getContactDetails = async () => {
  const collectionRef = collection(
    firestore,
    FIREBASE_COLLECTIONS_LIST.CONTACTS,
  )

  const resp = await getDocs(collectionRef)

  const data: DocumentData[] = []
  resp.forEach((doc) => {
    data.push(doc.data())
  })

  return data
}

export default getContactDetails
