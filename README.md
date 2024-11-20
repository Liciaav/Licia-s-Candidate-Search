# Licia's Candidate Search
A React-based web application to search and save GitHub user profiles. This project demonstrates modern web development practices, leveraging React, React Router, and GitHub's REST API.

## Features
    - GitHub User Search: Search for GitHub users by username.
    - Random User Loading: Fetch random GitHub users for exploration.
    - Saved Candidates: Save and view profiles of favorite GitHub users using local storage.
    - Error Handling: Custom error page for non-existent routes or network issues.

## Technologies Used
Frontend:
    - React with TypeScript
    - React Router for navigation
    - Vite for fast development and build
    - Tailwind CSS (optional, if styling is included)
API:
    - GitHub REST API

## Getting Started
Prerequisites
    - Node.js: Install Node.js (version 16+ recommended).
    - GitHub Personal Access Token: Create a token for accessing GitHub API (optional for higher rate limits).

## Installation
    1 - Clone the Repository:
        - git clone https://github.com/Liciaav/github-candidate-search.git
        - cd github-candidate-search
    2 - Install Dependencies:
        - npm install
    3 - Configure Environment Variables: Create a .env file in the root directory and add your GitHub token:        
        - VITE_GITHUB_TOKEN=your_personal_access_token
    4- Start the Development Server:
        - npm run dev

## Scripts
    - npm run dev: Start the development server.
    - npm run build: Build the application for production.
    - npm run preview: Preview the production build locally.

## How It Works
    1 - GitHub API Interaction
        - The application interacts with the GitHub API to fetch user data.
        - Endpoints used:
            - GET /users?since={start}: Fetch random users.
            - GET /users/{username}: Search for a user by username.
        - API requests are authenticated using a Personal Access Token for higher rate limits.
    2 - Local Storage for Saved Candidates
        - Saved profiles are stored in the browser's local storage.
        - Profiles persist across sessions until manually cleared.

## Key Components
    1 - CandidateSearch.tsx
        - Handles user search and random user fetching.
        - Renders UserCard components for displaying user profiles.
    2 - SavedCandidates.tsx
        - Displays profiles saved by the user.
        - Uses localStorage to persist saved data.
    3 - API.tsx
        - Contains reusable functions for making API calls:
            - searchGithub: Fetches random users.
            - searchGithubUser: Searches for a specific user by username.

## Usage
    1 - Search for Users
        - Enter a GitHub username in the search bar and click Search User.
        - View the details of the user fetched from GitHub.
    2 - Explore Random Users
        - Click Load Random Users to fetch a random set of GitHub users.
    3 - Save Candidates
        - Click Save User on a user's card to save them.
        - View saved profiles by clicking Saved Candidates.

## Error Handling
    - Custom ErrorPage.tsx handles invalid routes and errors during API calls.
    - Displays a user-friendly message and allows navigation back to the home page.

## Future Improvements
    - Add user profile details like repositories and followers.
    - Enable profile removal from the saved candidates list.
    - Implement backend storage for saved profiles.

## License
This project is licensed under the MIT License.

## Contributing
Contributions are welcome! Please follow these steps:
    1 - Fork the repository.
    2 - Create a new branch: git checkout -b feature/your-feature.
    3 - Commit your changes: git commit -m 'Add your feature'.
    4 - Push the branch: git push origin feature/your-feature.
    5 - Open a pull request.

## Acknowledgements
    - GitHub REST API documentation: GitHub API Docs.
    - React and TypeScript community for robust tooling.
Feel free to reach out for support or suggestions! 🚀

