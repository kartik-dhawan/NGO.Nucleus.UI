import { DocumentData, collection, getDocs } from "firebase/firestore"
import { firestore } from "../../firebase/config"
import { FIREBASE_COLLECTIONS_LIST } from "../../utils/constants"

const getNgoDetails = async () => {
  const collection_ref = collection(firestore, FIREBASE_COLLECTIONS_LIST.NGOS)

  const res = await getDocs(collection_ref)

  const data: DocumentData[] = []

  res.forEach((doc) => {
    data.push(doc.data())
  })

  return data
}

export default getNgoDetails
