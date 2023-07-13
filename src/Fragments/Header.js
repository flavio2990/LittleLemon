import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <div className="header">
            <article className="call-to-action">
                <section className="hero-text">
                    <h1 >Little Lemon</h1>
                    <h2 >Chicago</h2>
                    <p >
                        We are a family owned <br />Mediterranean restaurant,<br /> located on Maldove Street <br />Chicago, Illinois.<br /> We focus on
                        traditional recipes served <br />with a modern twist.
                    </p>
                    <Link className="action-button" to="/booking">
                        Reserve a table
                    </Link>
                </section>
                <img src={require('../assets/restauranfood.jpg')} alt="restauranfood" className="restauranfood" />
            </article>
        </div>
    );
}