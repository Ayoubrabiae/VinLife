import React from "react"
import { Link, useLocation, useLoaderData } from "react-router-dom"


export function loader({ params }) {
    return getVan(params.id)
}

export default function VanDetail() {
    const location = useLocation()
    const van = useLoaderData()

    const search = location.state?.search || "";
    const type = location.state?.type || "all";

    return (
        <div className="van-detail-container container">
            <Link
                to={`..${search}`}
                relative="path"
                className="back-button"
            >&larr; <span>Back to {type} vans</span></Link>

            <div className="van-detail">
                <div className="image">
                    <img src={van.imageUrl} />
                    <i className={`van-type ${van.type} selected`}>
                        {van.type}
                    </i>
                </div>
                <div className="info">
                    <h2>{van.name}</h2>
                    <p className="van-price"><span>${van.price}</span>/day</p>
                    <p>{van.description}</p>
                    <button className="link-button"
                        onClick={() => hostingVan(auth.currentUser.uid, van.id)}
                    >Rent this van</button>
                </div>
            </div>

        </div>
    )
}