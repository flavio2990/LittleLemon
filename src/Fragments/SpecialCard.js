// import { Link } from 'react-router-dom';



export default function SpecialCard({ img, name, price, description, children }) {
    return (
      <article>
        <div>
          <img src={img} alt={name} />
        </div>
        <div className="special-content">
          <div className="special-details">
            <h2 className="special-name">{name}</h2>
            <span className="special-price">{price}</span>
          </div>
          <p>{description}</p>
          {/* <Link to="/order"> */}
          {/* <button className="Button-delivery Button-delivery-special">Order for Delivery</button> */}
          <a className="Button-delivery"
            href={require("../assets/footers/small_logo.png")}
            target='_blank'
            rel="noreferrer"
          >
            Order for Delivery
          </a>
          {/* </Link> */}
          {children}
        </div>
      </article>
  
    );
  }
  
  
  