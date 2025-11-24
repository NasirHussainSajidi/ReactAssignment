import React from 'react'

const navebare = () => {
  return (
    <div>
    <nav className="navbar" role="navigation" aria-label="Main">
        <div className="navbar-left">
            <a href="/" className="logo" aria-label="Homepage">ShopMate</a>

            <div className="categories" aria-haspopup="true">
                <button type="button" className="cat-btn" aria-expanded="false">Categories ▾</button>
                <ul className="cat-list" role="menu" aria-hidden="true">
                    <li role="none"><a role="menuitem" href="/category/men">Men</a></li>
                    <li role="none"><a role="menuitem" href="/category/women">Women</a></li>
                    <li role="none"><a role="menuitem" href="/category/electronics">Electronics</a></li>
                    <li role="none"><a role="menuitem" href="/category/home">Home</a></li>
                </ul>
            </div>
        </div>

        <div className="navbar-center">
            <form
                className="search-form"
                role="search"
                onSubmit={(e) => {
                    e.preventDefault();
                    const q = e.target.elements.q?.value?.trim();
                    if (q) window.location.href = `/search?q=${encodeURIComponent(q)}`;
                }}
            >
                <input
                    name="q"
                    type="search"
                    placeholder="Search products, brands..."
                    aria-label="Search products"
                    className="search-input"
                />
                <button type="submit" className="search-btn" aria-label="Search">Search</button>
            </form>
        </div>

        <div className="navbar-right">
            <a href="/deals" className="nav-link">Deals</a>
            <a href="/signin" className="nav-link">Sign In</a>

            <a href="/cart" className="cart-link" aria-label="View cart">
                <span className="cart-icon" aria-hidden="true">🛒</span>
                <span className="cart-count" aria-live="polite">0</span>
            </a>
        </div>
    </nav>
    </div>
  )
}

export default navebare
