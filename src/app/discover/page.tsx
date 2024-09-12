"use client"
import Carousel from "../../components/carousels/CarouseDiscover";
import AllUsers from "../../components/AllUsers"
import Search from "../../components/searchs/search"

const handleSearch = () => {
    console.log("")
}
const Discover = () => {
    return(
        <div>
            <Search label="Buscar"  onSearch={handleSearch} />
            <h1>usuarios más recientes</h1>
            <Carousel />
            <h2>todos los usuarios</h2>
            <div>
            <AllUsers/>
            </div>
            
        </div>
    )
}

export default Discover;