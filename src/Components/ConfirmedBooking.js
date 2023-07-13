import NavBar from "../Fragments/NavBar"
import Footer from "../Fragments/Footer"
export default function ConfirmedBooking() {
    return (
        <div>
            <NavBar />
            <h1 className='special-header'>
                You are confirmed a Reservation!!
            </h1>
            <div className="restaurant">
            <img src={require('../assets/ReservePage/restaurant.jpg')} alt="restaurantable" className="restaurantable" />
            <Footer/>
            </div>
        </div>
    )
}