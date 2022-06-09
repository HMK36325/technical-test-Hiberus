import React from "react";

export default function Footer() {
    return <div class="container footer-container">
        <footer class="py-3 my-4 border-top">
            <p class="text-center text-muted">© {new Date().getFullYear()} Hiberus, Inc</p>
        </footer>
    </div>
}