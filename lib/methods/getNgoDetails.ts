import { DocumentData, collection, getDocs } from "firebase/firestore"
import { firestore } from "../../firebase/config"
import { FIREBASE_COLLECTIONS_LIST } from "../../utils/constants"
import { GenericCardItem, GenericDonateListItem } from "../../utils/interfaces"

export const getNgoDetails = async () => {
  const collection_ref = collection(firestore, FIREBASE_COLLECTIONS_LIST.NGOS)

  const res = await getDocs(collection_ref)

  const data: DocumentData[] = []

  res.forEach((doc) => {
    data.push(doc.data())
  })

  return data
}

export const getNgoCardDetails = async () => {
  const collection_ref = collection(firestore, FIREBASE_COLLECTIONS_LIST.NGOS)

  const res = await getDocs(collection_ref)

  const data: DocumentData[] = []

  res.forEach((doc) => {
    const resdata = doc.data()
    const ngo = { ...resdata }

    const dataItem: GenericCardItem = {
      id: ngo.id,
      title: ngo.name,
      url: ngo.website,
      desc: ngo.briefDescription,
      image: ngo.mainNGOImage,
    }

    data.push(dataItem)
  })

  return data
}

export const getNgoListDetails = async () => {
  const collection_ref = collection(firestore, FIREBASE_COLLECTIONS_LIST.NGOS)

  const res = await getDocs(collection_ref)

  const data: DocumentData[] = []

  res.forEach((doc) => {
    const resdata = doc.data()
    const ngo = { ...resdata }

    const dataItem: GenericDonateListItem = {
      ucid: ngo.id ?? 1,
      title: ngo?.name ?? "",
      fundCampaign: ngo?.fundCampaign ?? "",
      fundsCollected: ngo?.fundsCollected ?? "",
      fundGoals: ngo?.fundGoals ?? "",
      contactNumber: ngo?.contactNumber?.join(", ") ?? "",
      founder: ngo?.founder?.name ?? "",
      website: ngo?.website ?? "",
    }

    data.push(dataItem)
  })

  return data
}

export const getProgramsCardDetails = async () => {
  const collection_ref = collection(
    firestore,
    FIREBASE_COLLECTIONS_LIST.PROGRAMS,
  )

  const res = await getDocs(collection_ref)

  const data: DocumentData[] = []

  res.forEach((doc) => {
    const resdata = doc.data()
    const program = { ...resdata }

    const dataItem: GenericCardItem = {
      id: program.id,
      title: program.name,
      url: program.website,
      desc: program.description,
      image: program.image,
    }

    data.push(dataItem)
  })

  return data
}
