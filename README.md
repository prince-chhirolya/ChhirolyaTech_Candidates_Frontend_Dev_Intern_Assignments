
# GitBook Clone

This is a simple clone of **GitBook** developed using **React**. The project is designed to showcase product documentation with a modern user interface, complete with a hero section, announcement banner, and fullscreen sections. It includes a responsive layout, sliders, interactive elements, and a sidebar navigation feature to simulate the GitBook experience. You can register for a webinar and view the documentation right from the homepage.

## Features

- **Responsive Layout:** The design is fully responsive, meaning it works well on devices ranging from mobile phones to desktops.
- **Interactive Hero Section:** Includes a GitHub sign-up button and a free trial start button for users to interact with.
- **Full-screen Sections:** Sections that showcase additional content and interactable features.
- **Announcement Banner:** A prominent notification bar at the top of the page highlighting important updates.
- **Slider Components:** Interactive sliders to display images and text content in a dynamic way.
- **Sidebar Navigation:** A floating sidebar on the right-hand side, providing quick and intuitive access to different sections of the documentation with active section highlighting and interactive icons.

## Technologies Used

- **React** for building the UI components.
- **Tailwind CSS** for utility-first styling.
- **Font Awesome** for icons.
- **React Slider** for image and content carousels.
- **CSS** for additional styling and responsive design.

## Installation

To run this project locally, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/YUSRIN20/gitbook-clone.git
   ```
2. Navigate to the project folder:
   ```bash
   cd gitbook-clone
   ```
3. Install the dependencies:
   ```bash
   npm install
   ```
4. Run the development server:
   ```bash
   npm start
   ```

Now, open your browser and go to `http://localhost:3000` to view the project.

## Deployment

This project is deployed on **Netlify** for easy access. You can check out the live demo here:

- **Netlify Demo URL:** [GitBook Clone Demo](https://git-book-clone.netlify.app/)

## GitBook Original URL

The original GitBook can be found here:

- **GitBook Official URL:** [GitBook](https://www.gitbook.com)

## Project Structure

```
├── src/
│   ├── Components/
│   │   ├── Navbar.js
│   │   ├── Hero.js
│   │   ├── AnnouncementBanner.js
│   │   ├── SidebarNav.js  # Sidebar navigation component
│   │   └── Footer.js
│   ├── FullScreenSections/
│   │   └── FullScreenSections.js
│   ├── App.js
│   ├── App.css
│   └── index.js
├── public/
│   └── index.html
├── package.json
└── README.md
```

## Contribution

Feel free to fork the repository, make improvements, and create pull requests.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.