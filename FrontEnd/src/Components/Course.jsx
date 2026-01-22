// import React from 'react'
import list from "../../public/list.json"
import Cards from "../Components/Cards"
import {Link} from "react-router-dom"
function Course() {

    return (
        <>
            <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
                <div className=" justify-center text-center">
                    <h1 className="text-2xl md:text-4xl">
                        We're delighted to have you{" "}
                        <span className="text-pink-500">Here! :)</span>
                    </h1>
                    <p className="mt-12">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis dolores quam itaque quos deleniti
                        sed hic nostrum veniam, adipisci nulla molestiae! Tempore at obcaecati omnis quasi! Aperiam,
                        nihil dolorum eligendi iure facere ipsam nostrum quae laudantium quidem praesentium saepe
                        facilis?</p>
                    <Link to="/">
                    <button className="mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300 cursor-pointer">Back</button>
                    </Link>
                </div>
                   
                <div className=" mt-6 grid grid-cols-1 md:grid-cols-3">
                    {
                       list.map((item)=>(
                        <Cards key={item.id} item={item}/>
                       ))
                    }
                </div>
            </div>
        </>
    )
}

export default Course