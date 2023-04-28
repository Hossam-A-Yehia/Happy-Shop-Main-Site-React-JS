import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Pagination } from "swiper";
import CATY from "../../Api/categoryAPI.js"
import "./style.css";

function HomeCategory() {

  return (
    <div className="p-2" >
      <div className="d-flex justify-content-between align-items-center p-2 my-4 border">
        <div>التصنيفات</div>
        <Link to="/categories">
          <button className="btn btn-dark">المزيد</button>
        </Link>
      </div>
      <Swiper data-aos="fade-up"
        slidesPerView={10}
        spaceBetween={10}
        freeMode={true}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
        breakpoints={{
          640: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 6,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 10,
            spaceBetween: 50,
          },
        }}
      >
        <div className="d-flex align-items-center justify-content-between mb-3 flex-wrap">
          {CATY?.map((cat) => (
            <SwiperSlide key={cat.id}>
              <Link to={`/category/${cat.title}`} key={cat._id}>
                <img
                  src={cat.img}
                  alt={cat.title}
                  style={{ cursor: "pointer" }}
                />
              </Link>
            </SwiperSlide>
          ))}
        </div>
      </Swiper>
    </div>
  );
}

export default HomeCategory;
