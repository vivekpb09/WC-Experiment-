🕵️‍♂️ GitHunter --- Find Any GitHub User Instantly

A sleek and responsive React app that lets you search and view detailed
GitHub user profiles --- with beautiful UI, dark mode, and smooth
animations.

✨ Features

✅ Instant GitHub Search -- Enter any username and fetch profile data in
real-time. 🌙 Dark/Light Mode -- Toggle themes with persistent user
preference. ⚡ Loading & Error Handling -- Smooth feedback for every
state (loading, not found, API limits). 📊 Detailed Profiles -- View
bio, company, location, blog, repo count, followers, and more. 💚
Responsive & Polished UI -- Built with React and react-feather icons for
modern visuals.

🧩 Tech Stack Technology Description React.js Frontend framework
react-feather Lightweight SVG icons TailwindCSS / Custom CSS Styling and
layout GitHub REST API User data source 🚀 Getting Started 1️⃣ Clone the
repo git clone https://github.com/yourusername/githunter.git cd
githunter

2️⃣ Install dependencies

Using npm:

npm install

Or yarn:

yarn install

3️⃣ Run the app npm start

Then open: 👉 http://localhost:3000

🧠 Usage

Enter a GitHub username in the search bar.

Hit Enter or click the "Search" button.

View a detailed profile card with repositories, followers, and links.

Toggle Dark Mode 🌙 anytime --- your preference is remembered.

⚙️ Project Structure src/ ├── App.js \# Main app logic ├── App.css \#
Custom styles and Tailwind overrides ├── components/ \# Optional:
reusable UI components └── index.js \# Entry point

🧰 API Reference

GitHunter uses the GitHub REST API:
https://api.github.com/users/{username}

Example:

GET https://api.github.com/users/octocat

Error Handling:

404 → User not found

403 → API rate limit exceeded

Network → Connection issues

💡 Future Improvements

Repository list with top 5 pinned repos

Toast notifications for success/error states

Profile caching for faster repeated searches

Better mobile layout for cards

👨‍💻 Author

GitHunter is crafted with 💚 by Your Sandip Dusadh . 

Feel free to fork, improve,
and share!
