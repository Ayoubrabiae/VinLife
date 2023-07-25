import {Link} from "react-router-dom"

export default function Home() {
  return(
      <section className="home">
        <div className="container">
            <h2 className="title">You got the travel plans, we got the travel vans.</h2>
            <p className="home-description">
                Add adventure to your life by joining the
                #vanlife movement. Rent the perfect van
                to make your perfect road trip.
            </p>
            <button><Link className="van-btn" to="/vans">Find your van</Link></button>
        </div>
      </section>
  )
}