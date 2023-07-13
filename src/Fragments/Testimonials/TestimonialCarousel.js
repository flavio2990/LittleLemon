import TestimonialCard from './TestimonialCard';

export default function TestimonialCarousel() {
    return (
        <div >
            <section>
                <article className='testimonials'>
                    <h1>Testimonials</h1>
                </article>
                <div >
                    <section className="opinion-cards">
                        <div className="testimonials-cards">
                        <TestimonialCard
                            names="Mike Calell"
                            opinion="It is incredible!"
                            img={require("../../assets/testimonial/Micheal.avif")}
                            alt="personal pict"
                        />
                        </div>
                        <div className="testimonials-cards">
                        <TestimonialCard
                            names="Sara Michel"
                            opinion="Wow! is the best food."
                            img={require("../../assets/testimonial/saramichel.jpg")}
                            alt="personal pict"
                        />
                        </div>
                        <div className="testimonials-cards">
                        <TestimonialCard
                            names="Casey Lau"
                            opinion="Nothing better than that!!"
                            img={require("../../assets/testimonial/casey.webp")}
                            alt="personal pict"
                        />
                        </div>
                    </section>
                </div>
            </section>
        </div>
    );
}