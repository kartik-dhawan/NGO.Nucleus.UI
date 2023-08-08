import { collection, getDocs, query, orderBy } from "firebase/firestore"
import { firestore } from "../../firebase/config"
import { FIREBASE_COLLECTIONS_LIST } from "../../utils/constants"

const getContactDetails = async () => {
  const collectionRef = collection(
    firestore,
    FIREBASE_COLLECTIONS_LIST.CONTACTS,
  )

  const q = query(collectionRef, orderBy("name", "asc"))

  const res = await getDocs(q)

  const data: any = []

  res.forEach((doc) => {
    data.push(doc.data())
  })

  return data
}

export default getContactDetails
