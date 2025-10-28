body {
  margin: 0;
  font-family: 'Poppins', sans-serif;
  background: linear-gradient(to right, #eef2f3, #8e9eab);
  color: #333;
}

/* Header */
header {
  background: linear-gradient(90deg, #0072ff, #00c6ff);
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  padding: 15px 30px;
  box-shadow: 0 3px 8px rgba(0, 0, 0, 0.2);
}

.header-title {
  font-size: 1.8rem;
  font-weight: bold;
}

.search-form {
  display: flex;
  gap: 10px;
}

.search-form input {
  padding: 8px 12px;
  border-radius: 5px;
  border: none;
  width: 200px;
  outline: none;
}

.search-form button {
  background-color: #ff7e5f;
  color: white;
  border: none;
  padding: 8px 15px;
  border-radius: 5px;
  cursor: pointer;
  transition: 0.3s;
}

.search-form button:hover {
  background-color: #ff5722;
}

.contact-link {
  background: #ff7e5f;
  color: white;
  text-decoration: none;
  padding: 8px 15px;
  border-radius: 5px;
  transition: 0.3s;
}

.contact-link:hover {
  background: #ff5722;
}

/* Hero Section */
.hero-section {
  position: relative;
  width: 100%;
  height: 70vh;
  overflow: hidden;
}

.hero-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: brightness(70%);
}

.hero-text-overlay {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  text-align: center;
  background: rgba(0, 0, 0, 0.5);
  padding: 25px;
  border-radius: 10px;
}

.hero-text-overlay h2 {
  font-size: 2.2rem;
  margin-bottom: 10px;
}

.hero-text-overlay p {
  font-size: 1.1rem;
}

/* Book Section */
.section-heading {
  text-align: center;
  background: linear-gradient(90deg, #0072ff, #00c6ff);
  color: white;
  padding: 10px 0;
  margin: 40px auto 20px;
  border-radius: 8px;
  width: 50%;
}

.products-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 25px;
  padding: 30px;
  background: linear-gradient(to right, #e0f7fa, #e1bee7);
}

.product-card {
  background: white;
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  text-align: center;
  transition: 0.3s ease;
}

.product-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
}

.product-card img {
  width: 100%;
  height: 260px;
  object-fit: cover;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}

.product-card h2 {
  font-size: 1.3rem;
  color: #333;
  margin: 15px 0 5px;
}

.product-card .price {
  color: #ff5722;
  font-weight: bold;
  margin-bottom: 10px;
}

.product-card button {
  background-color: #0072ff;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  margin-bottom: 15px;
  transition: 0.3s;
}

.product-card button:hover {
  background-color: #0056b3;
}

/* Footer */
.footer {
  background-color: #333;
  color: #ddd;
  text-align: center;
  padding: 15px 0;
  margin-top: 40px;
  font-size: 0.9rem;
}

@media (max-width: 768px) {
  .header-title {
    font-size: 1.5rem;
  }

  .search-form input {
    width: 140px;
  }

  .hero-text-overlay h2 {
    font-size: 1.8rem;
  }

  .hero-text-overlay p {
    font-size: 1rem;
  }

  .section-heading {
    width: 80%;
    font-size: 1.2rem;
  }
}
