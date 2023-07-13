import Star from '../../assets/Star.png'

export default function TestimonialCard({ names, opinion, img, alt }) {
    return (
        <article>
            <div className="testimonial-rating">
                <p >Rating:</p>
                <img src={Star} alt='star' />
            </div>
            <div className="testimonial-content">
                <div className="testimonial-card">
                    <div className="testimonial-details">
                        <img src={img} alt={alt} />
                        <h3 className="testimonial-name">{names}</h3>
                        <p className="testimonial-opinion">{opinion}</p>
                    </div>
                </div>
            </div>
        </article>
    );
}