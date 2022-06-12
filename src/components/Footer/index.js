import React from "react";

export default function Footer() {
    return <div className="container footer-container">
        <footer className="py-3 my-4 border-top border-dark">
            <p className="text-center text-muted">© {new Date().getFullYear()} Hiberus, Inc</p>
        </footer>
    </div>
}