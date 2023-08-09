import { doc, updateDoc } from "firebase/firestore"
import { firestore } from "../../firebase/config"
import { FIREBASE_COLLECTIONS_LIST } from "../../utils/constants"

export const updateAContact = async (
  body: any,
  id: string | string[] | undefined,
) => {
  const docRef = doc(firestore, FIREBASE_COLLECTIONS_LIST.CONTACTS, `${id}`)
  return await updateDoc(docRef, body)
}
