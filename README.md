# Blogging Website

A modern blogging platform built with **React** and powered by **Appwrite** as the backend-as-a-service (BaaS).  
This project allows users to create, read, update, and delete blog posts with secure authentication and real-time database updates.

## Features
- User authentication and account management (Appwrite Auth).
- Create, edit, and delete blog posts.
- Rich text editor for writing blogs.
- Store and fetch blog posts from Appwrite Database.
- Upload and manage images/files with Appwrite Storage.
- Responsive UI built with React.

## Tech Stack
- **Frontend:** React, HTML, CSS, JavaScript
- **Backend Services (BaaS):** Appwrite (Auth, Database, Storage)


## Installation & Setup
1. Clone the repository:
   ```bash
   git clone https://github.com/username/blogging-website.git
   cd blogging-website
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Configure Appwrite:
   - Set up a project in Appwrite console.
   - Enable Authentication, Database, and Storage services.
   - Add environment variables for Appwrite project ID, endpoint, and keys.

4. Start the development server:
   ```bash
   npm run dev
   ```

## Usage
- Sign up / log in with Appwrite authentication.
- Create and manage blog posts in the dashboard.
- View blogs in a clean, responsive interface.

## Future Improvements
- Add comment system for posts.
- Implement categories & tags.
- Add profile pages for authors.

