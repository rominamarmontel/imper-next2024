import SwiperComponent from '../components/SwiperComponent'
import dataSlider from '../data/slider-data.json'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <SwiperComponent data={dataSlider} />
    </main>
  )
}
