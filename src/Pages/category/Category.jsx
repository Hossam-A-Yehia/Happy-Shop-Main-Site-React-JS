import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import CATY from "../../Api/categoryAPI.js"

function Category() {
 return (
    <Container>
      <h1 className="text-center mt-3 mb-3">التصنيفات</h1>
      <div className="d-flex align-items-center justify-content-between gap-4  flex-wrap">
        {CATY?.map((cat) => (
          <div key={cat._id} className=" mt-2">
            <Link to={`/category/${cat.title}`}>
              <img
                src={cat.img}
                alt={cat.title}
                style={{ width: "150px", cursor: "pointer" }}
              />
            </Link>
          </div>
        ))}
      </div>
    </Container>
  );
}

export default Category;
