import { Row } from "react-bootstrap";
import BrandCard from "./BrandCard";
import brand1 from "../../Image/brands/brand1.png";
import brand2 from "../../Image/brands/brand2.png";
import brand3 from "../../Image/brands/brand3.png";
import SubTitle from "../../Utils/SubTitle";
const BrandFeatured = ({ title, btntitle }) => {
  return (
    <div className="my-3 p-2"data-aos="fade-up">
        <SubTitle title="اشهر الماركات" btntitle="المزيد" />
        <Row className="my-1 justify-content-between m-0">
          <BrandCard img={brand1} />
          <BrandCard img={brand2} />
          <BrandCard img={brand3} />
          <BrandCard img={brand2} />
          <BrandCard img={brand1} />
          <BrandCard img={brand3} />
        </Row>
    </div>
  );
};

export default BrandFeatured;
