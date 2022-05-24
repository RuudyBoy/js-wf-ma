
import { Link } from "react-router-dom";

function BookItem({ id, title, published }) {
	return (
		<Link to={`detail/${id}`}>
			<h5>{title}</h5>
			<p>{published}</p>
		</Link>
	);
}



export default BookItem;