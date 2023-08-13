import { doc, getDoc } from "firebase/firestore"
import { firestore } from "../../firebase/config"
import { FIREBASE_COLLECTIONS_LIST } from "../../utils/constants"

export const getContactByFirestoreId = async (
  id: string | string[] | undefined,
) => {
  const docRef = doc(firestore, FIREBASE_COLLECTIONS_LIST.CONTACTS, `${id}`)

  try {
    const contact = await getDoc(docRef)
    return contact.data()
  } catch (error) {
    return {}
  }
}
