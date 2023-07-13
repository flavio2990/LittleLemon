import SpecialCard from './SpecialCard';


export default function SpecialsCarousel() {
    return (
        <div>
            <section className='carousel-img'>
                <article className='special-header'>
                    <h1>This weeks specials</h1>
                    <a className="action-button" href={require('../assets/footers/menu.webp')} target="_blank" rel="noreferrer">Online Menu</a>
                </article>
                <section className="special-card-container">
                    <div className='card-container'>
                        <SpecialCard
                            img={require("../assets/Carousel/Salad.jpg")}
                            description="Refreshing salad, made with tomato, lettuce, feta cheese, and olives. Dressed with salt, hot pepper, and olive oil."
                            name='Greek salad'
                            price='$12.99'
                        />
                    </div>
                    <div className='card-container'>
                        <SpecialCard
                            img={require("../assets/Carousel/bruschetta.jpeg")}
                            description="Toasted bread, topped with tomato, prosciutto, and cheese. Seasoned with
                        salt and olive oil."
                            name='Bruschetta'
                            price='$16.99'
                        />
                    </div>
                    <div className='card-container'>
                        <SpecialCard
                            img={require("../assets/Carousel/LemonDessert.jpg")}
                            description="Fresh baked lemon bread coated in salt and sugar. Powdered in citrus
                        and lemon zest."
                            name='LemonDessert'
                            price='$8.50'
                        />
                    </div>
                </section>
            </section>
        </div>
    );
}