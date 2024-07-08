import MainSlider from "@/components/MainSlider"
import SevenIcons from "@/components/SevenIcons"
import IncrediblleOffers from "@/components/IncrediblleOffers"
import { Context } from "@/contextApi/Context"
import * as fetchRepo from '@/repositories/fetchRepository'

export default function Home(props) {
  return (
    <>
    <Context.Provider value={{mainSliderImages: props.mainSliderImages}}>
      <MainSlider />
      <SevenIcons icons={props.sevenIconsData} />
      <IncrediblleOffers products={props.incrediblleOffersData} />
    </Context.Provider>
    </>
  )
}

export async function getServerSideProps() {
  const mainSliderResponse = await fetchRepo.GET('public/mainSlider')
  const mainSliderImages = await mainSliderResponse.json()
  const sevenIconsResponse = await fetchRepo.GET('SevenIcons')
  const sevenIconsData = await sevenIconsResponse.json()
  const incrediblleOffersResponse = await fetchRepo.GET('products/incredibleOffers')
  const incrediblleOffersData = await incrediblleOffersResponse.json()
  return {
    props: {
      mainSliderImages,
      sevenIconsData,
      incrediblleOffersData
    }
  }
}