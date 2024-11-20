import "swiper/css";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import styles from './Swiper.module.css'

const data: string[] = ["Slide 1", "Slide 2", "Slide 3", "Slide 4"];

function App() {
  return (
    <>
      <Swiper
        className={styles.swiperContainer} // スワイパーコンテナにクラスを適用
        spaceBetween={50}
        centeredSlides={true}
        slidesPerView={3}
        loop={true}
        autoplay={{
            delay: 1000, 
            disableOnInteraction: false, // ユーザー操作後も自動スライドを続ける
          }}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        modules={[Autoplay]}
      >
        {data.map((d, index) => (
          <SwiperSlide key={index} className={styles.swiperSlide}> {/* スライドにクラスを適用 */}
            <div style={{ background: "grey", height: "150px", display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              {d}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}

export default App;