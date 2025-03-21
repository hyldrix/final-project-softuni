## SoftUni Final Project - Yoga Studio Web Application
   
# Live Preview
The live preview is available at: https://final-project-softuni-fbqg.vercel.app

## Project Overview
This project is a React-based web application for a yoga or fitness studio. It provides features such as user authentication, class management, and information display about the studio's services. Project utilizes HTML, CSS, JavaScript and React. This project also utilises bootstrap (components and styling)

The following repository has been prepared as a part of preparation for the project defense at SoftUni (https://softuni.bg/) where I have been a participant of JavaScript/React educational path. 

<img src="https://github.com/hyldrix/final-project-softuni/blob/main/preview-1.png?raw=true" style="width:75%; height:auto;"/>

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
## Steps for installation and local development preview

1. Clone the repository from the address: 
   ```
   https://github.com/hyldrix/final-project-softuni.git
   ```
2. In terminal go to server folder with the following command:
    ```
    cd server
    ```
3. Run locally provided practice server with following command: 
   ```
   node server.js
   ```
4. In separate terminal go to client folder with the following command:
   ```
   cd client
   ```
5. Install all dependencies with: 
    ```
    npm install
    ```
6. To run project in development mode use: 
    ```
    npm run dev
    ```
7. Finally open the application with localhost link and port provided to you in terminal 

# Available views
## Public view
1. Home page - entry point for the user. The landing page provides basic information about Yoga Studio and invites user to join the yoga community. 
2. Upcomming classes - page on which user can check what are the upcoming classes in "YogaOm". Data is displaed in asceding order by date.



3. Class Detail Card - provides more informarion about classes (such us time, date, price, cllas type). 
<img src=" https://github.com/hyldrix/final-project-softuni/blob/main/preview-5.png?raw=true" style="width:75%; height:auto;"/>

   - Guest user will see encouragement to create an account. 
   - Logged user will have an opportunity to sign in for the class
   - If the user is logged in, the user will see information that he is already signed up for the class

  
4. Login page - A page where the user can login
   <img src="https://github.com/hyldrix/final-project-softuni/blob/main/preview-6.png?raw=true" style="width:75%; height:auto;"/>

5. Register page - A page where the user can register

   <img src="https://github.com/hyldrix/final-project-softuni/blob/main/preview-7.png?raw=true" style="width:75%; height:auto;"/>

* Modals: Each Delete operation is confirmed with modal
    <img src="https://github.com/hyldrix/final-project-softuni/blob/main/preview-13.png?raw=true" style="width:75%; height:auto;"/>


##  Private view
### Admin View
   <img src="https://github.com/hyldrix/final-project-softuni/blob/main/preview-2.png?raw=true" style="width:75%; height:auto;"/>



   Only for the account with following details 
   | Username  |  Password |
|---|---|
|  admin@abv.bg | admin   |

1. Create classes Edit classes pages - the part of application which allows administration to add/edit classes 

   <img src="https://github.com/hyldrix/final-project-softuni/blob/main/preview-8.png?raw=true" style="width:50%; height:auto;"/>
2. Owner panel on Class details page - for CRUD operations on records 
   

   <img src="https://github.com/hyldrix/final-project-softuni/blob/main/preview-9.png?raw=true" style="width:50%; height:auto;"/>

   


   
2. Manage classes page (a.k.a Admin Panel) - the part of application which allows administration to manage users signed for the classes. Conviniently a searchbar to filter the list of participants has been implemented 
   

   <img src="https://github.com/hyldrix/final-project-softuni/blob/main/preview-10.png?raw=true" style="width:50%; height:auto;"/>

### End user-view 

   <img src="https://github.com/hyldrix/final-project-softuni/blob/main/preview-4.png?raw=true" style="width:75%; height:auto;"/>


   Only for the ccounts with following details 
   | Username  |  Password |
|---|---|
|  peter@abv.bg | 123456   |
|  george@abv.bg | 123456   |



1. My classes - end user panel where user can manage upcoming classes.  

   <img src="https://github.com/hyldrix/final-project-softuni/blob/main/preview-11.png?raw=true" style="width:75%; height:auto;"/>

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
14. **RouteGuard**: Ensures that only authenticated users can access certain parts of the application, such as the admin panel or user-specific pages.

## Hooks
- useState - for state management
- useEffect - for managing side effects 
- useForm - for managing react forms
- useReducer - for state transformation
 
### Custom hooks
- useLogin - to manage auth context and login for the user 
- useRegister - to manage registration for the user 
- useLogout - to manage logout on local and server level
- usePersistedState - to work with authData stored in localStorage
- useGetAllClasses, useGetClassById, useGetMyClasses - fetching and storing data 
- useCreateClass, useEditClass - CRUD operations on classes 

## Context
**AuthContext**: React Context for managing authentication state across the application.

## Styling
The project uses CSS Modules for component-specific styling (e.g., Advantages.module.css) and a global App.css file for application-wide styles.  
This project also utilizes minor bootstrap components (i.e. Navbar, Modals etc.)

## Ideas for Future Development

1. Implement state management (e.g., Redux) if the application grows in complexity
2. Implementation of functionality for admin to be able to remove class - now only owner of class can do that 
3. Add TypeScript for improved type safety
4. Implement unit and integration tests
5. Add PropTypes or TypeScript interfaces for component props
6. Implement a design system or component library for consistency
7. Add internationalization for multiple language support
8. Ensure responsive design for all device sizes
9. Improve accessibility with ARIA attributes and keyboard navigation
10. Implement error boundaries for better error handling
11. Consider server-side rendering for improved performance and SEO
12. Optimization for mobile devices - currently application is best visible on wide-screen non-mobile devices



