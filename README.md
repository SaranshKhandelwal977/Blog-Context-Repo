# Frontend Blogs Project with React

Welcome to the repository for the Frontend Blogs project, built using React. This project provides a platform for reading and exploring various blog articles related to front-end development. The project offers multiple functionalities to enhance the user experience, including navigation through different pages, exploring individual blog articles, and filtering articles based on categories and tags.

## Table of Contents

- [Project Overview](#project-overview)
- [Installation](#installation)
- [Usage](#usage)
- [Functionalities](#functionalities)
- [API Usage](#api-usage)
- [Live Demo](#live-demo)
- [Contributing](#contributing)

## Project Overview

The Frontend Blogs project is designed to offer a user-friendly interface for reading and navigating through a collection of blog articles. The main components of the project are:

1. **Blog Pages**: There are a total of 6 blog content pages. Users can navigate between pages using the "Next" and "Previous" buttons.

2. **Individual Blog Route**: Clicking on a blog heading opens a new route for that specific blog. Users can read the complete blog content and view related blogs on this route.

3. **Category Route**: Clicking on a category opens a new route displaying all blogs related to that category.

4. **Tag Route**: Clicking on a tag opens a new route displaying all blogs related to that tag.

## Installation

To run this project locally, follow these steps:

1. Clone the repository:

```bash
git clone https://github.com/SaranshKhandelwal977/Blog-Context-Repo.git
```

2. Navigate to the project directory:

```bash
cd Blog-Context-Repo
```

3. Install the required dependencies:

```bash
npm install
```

## Usage

1. Start the development server:

```bash
npm start
```

2. Open your browser and go to `http://localhost:3000` to access the application.

3. Navigate through the blog pages using the "Next" and "Previous" buttons.

4. Click on a blog heading to open a new route for that blog article.

5. Click on a category to view all blogs related to that category.

6. Click on a tag to view all blogs related to that tag.

## Functionalities

The project offers the following functionalities:

1. **Pagination**: Users can navigate between different blog pages using the "Next" and "Previous" buttons.

2. **Individual Blog View**: Clicking on a blog heading opens a new route with the content of that specific blog. Users can also view related blogs on this route.

3. **Category Filtering**: Clicking on a category allows users to view all blogs related to that category.

4. **Tag Filtering**: Clicking on a tag allows users to view all blogs related to that tag.

## Live Demo

Check out the live demo of the project at https://blogscontext.netlify.app/.

## API Usage

The project fetches blog data from an external API(https://codehelp-apis.vercel.app/api/get-blogs) to populate the content and provide filtering options based on categories and tags.

## Contributing

Contributions are welcome! If you find any issues or want to add new features, feel free to submit a pull request.

1. Fork the repository.
2. Create a new branch for your feature: `git checkout -b feature-name`.
3. Commit your changes: `git commit -m "Add feature-name"`.
4. Push to the branch: `git push origin feature-name`.
5. Submit a pull request.
