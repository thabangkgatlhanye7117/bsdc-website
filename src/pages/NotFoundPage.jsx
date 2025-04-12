import { Link } from "react-router-dom";
//The not found page renders when the browser can not find page
const NotFoundPage = () => {
    return(

      <section >
        <p>404 PAGE NOT FOUND</p>
        <Link to={'/'}>
        <button>Go Back Home</button>
        </Link>
      </section>
    )


}
export default NotFoundPage