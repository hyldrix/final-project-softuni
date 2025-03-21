## SoftUni Final Project - Yoga Studio Web Application

## Project Overview
This project is a React-based web application for a yoga or fitness studio. It provides features such as user authentication, class management, and information display about the studio's services.

![Homepage]()

## Project Structure
```
└── client/
    └── src/
        ├── components/
        │   ├── footer/
        │   │   └── Footer.jsx
        │   ├── navbar/
        │   │   └── NavBar.jsx
        │   ├── home/
        │   │   ├── Home.jsx
        │   │   └── advantages/
        │   │       ├── Advantages.jsx
        │   │       └── Advantages.module.css
        │   ├── 404/
        │   │   └── 404.jsx
        │   ├── login/
        │   │   └── Login.jsx
        │   ├── register/
        │   │   └── Register.jsx
        │   ├── upcoming-classes/
        │   │   ├── UpcomingClasses.jsx
        │   │   └── ClassDetailsCard/
        │   │       └── ClassDetailsCard.jsx
        │   ├── create-classes/
        │   │   └── CreateClasses.jsx
        │   ├── edit-classes/
        │   │   └── EditClasses.jsx
        │   ├── manage-classes/
        │   │   └── ManageClasses.jsx
        │   └── my-classes/
        │       └── MyClasses.jsx
        ├── contexts/
        │   └── AuthContext.jsx
        ├── App.jsx
        └── App.css

```

## Main Application Component

The `App` component (in `App.jsx`) is the main component of the application. It sets up the routing and overall structure of the app.

### Routing
Uses `react-router-dom` for routing with the following routes:
- "/" - Home component
- "/login" - Login component
- "/register" - Register component
- "/classes" - UpcomingClasses component
- "/classes/:classId" - ClassDetailsCard component
- "/classes/create" - CreateClasses component
- "/classes/edit/:classId" - EditClasses component
- "/classes/admin/" - ManageClasses component
- "/myclasses" - MyClasses component
- "*" - NotFound component (404 page)

## Components

1. **NavBar**: Navigation bar component
2. **Footer**: Footer component
3. **Home**: Home page component
4. **Advantages**: Displays the advantages of choosing the studio's services
5. **Login**: User login functionality
6. **Register**: User registration functionality
7. **UpcomingClasses**: Displays a list of upcoming classes
8. **ClassDetailsCard**: Shows detailed information about a specific class
9. **CreateClasses**: For creating new classes
10. **EditClasses**: For editing existing classes
11. **ManageClasses**: For administrators to manage classes
12. **MyClasses**: Displays classes associated with the logged-in user
13. **NotFound**: 404 Not Found page component

## Context
**AuthContext**: React Context for managing authentication state across the application.

## Styling
The project uses CSS Modules for component-specific styling (e.g., Advantages.module.css) and a global App.css file for application-wide styles.  
This project also utilizes minor bootstrap components (i.e. Navbar, Modals etc.)

## Ideas for Future Development

1. Implement state management (e.g., Redux) if the application grows in complexity
2. Add TypeScript for improved type safety
3. Implement unit and integration tests
4. Add PropTypes or TypeScript interfaces for component props
5. Implement a design system or component library for consistency
6. Add internationalization for multiple language support
7. Ensure responsive design for all device sizes
8. Improve accessibility with ARIA attributes and keyboard navigation
9. Implement error boundaries for better error handling
10. Consider server-side rendering for improved performance and SEO


