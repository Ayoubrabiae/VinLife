import {Link} from "react-router-dom"

export default function About() {
  return(
      <section className="about">
        <div className="image"></div>
        <div className="container">
            <h2 className="title">
                Don’t squeeze in a sedan when
                you could relax in a van.
            </h2>
            <p className="description">
                <span>
                    Our mission is to enliven your road trip with the perfect travel van rental. Our vans are recertified before each trip to ensure your travel plans can go off without a hitch.
                    (Hitch costs extra 😉)
                </span>
                <span>
                    Our team is full of vanlife enthusiasts who know firsthand the magic of touring the world on 4 wheels.
                </span>
            </p>
            <div className="explore-about-area">
                <p>
                    Your destination is waiting.
                    Your van is ready.
                </p>
                <Link className="explore-btn" to="/explore">Explore our vans</Link>
            </div>
        </div>
      </section>
  )
}