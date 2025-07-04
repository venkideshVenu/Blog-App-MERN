# BlogApp 📝

A modern, full-stack blog application built with React and Node.js. This application allows users to create, read, update, and delete blog posts with user authentication and a responsive, modern UI.

## 🚀 Features

- **User Authentication**: Secure signup, signin, and profile management with JWT tokens
- **Blog Management**: Create, read, update, and delete blog posts
- **Responsive Design**: Modern, mobile-first design with custom CSS
- **User Profiles**: View and manage user information
- **Protected Routes**: Authentication-based route protection
- **Real-time Updates**: Dynamic content loading and state management
- **Input Validation**: Comprehensive client and server-side validation using Zod
- **Secure Password Handling**: Bcrypt encryption for password security

## 🛠️ Tech Stack

### Frontend

- **React 19** - Modern React with hooks and context API
- **React Router DOM** - Client-side routing and navigation
- **Axios** - HTTP client for API communication
- **Vite** - Fast build tool and development server
- **ESLint** - Code linting and formatting
- **CSS3** - Custom styling with modern CSS features

### Backend

- **Node.js** - JavaScript runtime environment
- **Express.js** - Web application framework
- **MongoDB** - NoSQL database with Mongoose ODM
- **JWT** - JSON Web Tokens for authentication
- **Bcrypt** - Password hashing and security
- **Zod** - Schema validation and type safety
- **CORS** - Cross-origin resource sharing
- **dotenvx** - Enhanced environment variable management

## 📁 Project Structure

```
BlogApp/
├── backend/                    # Backend API server
│   ├── config/
│   │   └── database.js        # MongoDB connection configuration
│   ├── middleware/
│   │   └── auth.js           # JWT authentication middleware
│   ├── models/
│   │   ├── Blog.js           # Blog data model
│   │   └── User.js           # User data model
│   ├── utils/
│   │   └── validators.js     # Zod validation schemas
│   ├── index.js              # Main server file with API routes
│   └── package.json          # Backend dependencies
│
├── frontend/                   # React frontend application
│   ├── public/
│   │   └── vite.svg
│   ├── src/
│   │   ├── components/        # Reusable React components
│   │   │   ├── BlogCard.jsx
│   │   │   ├── CreateBlog.jsx
│   │   │   ├── Footer.jsx
│   │   │   ├── NavBar.jsx
│   │   │   └── Profile.jsx
│   │   ├── constants/
│   │   │   └── apiEndPoints.js # API endpoint configurations
│   │   ├── context/           # React Context providers
│   │   │   ├── AuthContext.jsx
│   │   │   └── BlogContext.jsx
│   │   ├── layouts/           # Layout components
│   │   │   ├── AppLayout.jsx
│   │   │   └── AuthLayout.jsx
│   │   ├── pages/             # Page components
│   │   │   ├── BlogDetail.jsx
│   │   │   ├── Blogs.jsx
│   │   │   ├── ErrorPage.jsx
│   │   │   ├── Home.jsx
│   │   │   ├── LandingPage.jsx
│   │   │   ├── SignIn.jsx
│   │   │   └── SignUp.jsx
│   │   ├── styles/            # CSS styling files
│   │   │   ├── components/    # Component-specific styles
│   │   │   ├── pages/         # Page-specific styles
│   │   │   └── global.css     # Global styles
│   │   ├── App.jsx           # Main App component
│   │   ├── App.css           # App-specific styles
│   │   ├── index.css         # Global CSS reset
│   │   └── main.jsx          # React DOM entry point
│   ├── index.html            # HTML template
│   ├── package.json          # Frontend dependencies
│   └── vite.config.js        # Vite configuration
│
└── README.md                  # Project documentation
```

## ⚙️ Installation & Setup

### Prerequisites

- Node.js (v16 or higher)
- MongoDB (local or cloud instance)
- npm or yarn package manager

### 1. Clone the Repository

```bash
git clone <repository-url>
cd BlogApp
```

### 2. Backend Setup

```bash
cd backend
npm install
```

Create a `.env` file in the backend directory:

```env
PORT=3000
MONGODB_URI=mongodb://localhost:27017/blogapp
JWT_SECRET=your-super-secret-jwt-key
NODE_ENV=development
```

### 3. Frontend Setup

```bash
cd ../frontend
npm install
```

### 4. Database Setup

Make sure MongoDB is running on your system. The application will automatically create the necessary collections when you start using it.

## 🚀 Running the Application

### Development Mode

**Terminal 1 - Backend Server:**

```bash
cd backend
npm run dev
```

The backend server will start on `http://localhost:3000`

**Terminal 2 - Frontend Development Server:**

```bash
cd frontend
npm run dev
```

The frontend will start on `http://localhost:5173`

### Production Mode

**Backend:**

```bash
cd backend
npm run start:production
```

**Frontend:**

```bash
cd frontend
npm run build
npm run preview
```

## 📡 API Endpoints

### Authentication

- `POST /signup` - Register a new user
- `POST /signin` - User login
- `GET /profile` - Get user profile (protected)

### Blog Management

- `GET /blogs/all` - Get all blogs (protected)
- `GET /blogs` - Get user's blogs (protected)
- `GET /blog/:id` - Get specific blog by ID (protected)
- `POST /createBlog` - Create a new blog (protected)
- `PUT /editBlog/:id` - Update a blog (protected)
- `DELETE /deleteBlog/:id` - Delete a blog (protected)

### Request Headers

For protected routes, include the JWT token:

```
headers: {
  token: "your-jwt-token"
}
```

## 🔧 Configuration

### Environment Variables

**Backend (.env):**

- `PORT` - Server port (default: 3000)
- `MONGODB_URI` - MongoDB connection string
- `JWT_SECRET` - Secret key for JWT tokens
- `NODE_ENV` - Environment mode (development/production)

**Frontend:**

- API base URL is configured in `src/constants/apiEndPoints.js`
- Default: `http://localhost:3000`

## 🎨 Styling

The application uses a modern, component-based CSS architecture:

- **Global Styles**: `src/styles/global.css` and `src/index.css`
- **Component Styles**: Individual CSS files in `src/styles/components/`
- **Page Styles**: Individual CSS files in `src/styles/pages/`
- **Responsive Design**: Mobile-first approach with CSS Grid and Flexbox
- **Modern Features**: CSS custom properties, smooth animations, and accessibility focus

## 🔐 Security Features

- **Password Encryption**: Bcrypt hashing with salt rounds
- **JWT Authentication**: Secure token-based authentication
- **Input Validation**: Server-side validation with Zod schemas
- **CORS Protection**: Configured cross-origin resource sharing
- **Protected Routes**: Authentication middleware for sensitive endpoints

## 🧪 Available Scripts

### Backend

- `npm run dev` - Start development server with nodemon
- `npm start` - Start production server
- `npm run start:production` - Start with production environment
- `npm run encrypt` - Encrypt environment variables
- `npm run decrypt` - Decrypt environment variables

### Frontend

- `npm run dev` - Start Vite development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Development Guidelines

- Follow the existing code structure and naming conventions
- Ensure all new features have proper validation
- Maintain responsive design principles
- Test authentication flows thoroughly
- Keep component styles modular and reusable

## 📝 License

This project is licensed under the ISC License - see the `package.json` files for details.

## 🐛 Known Issues & TODOs

- [ ] Implement blog categories/tags
- [ ] Add image upload functionality
- [ ] Implement comment system
- [ ] Add search and filtering features
- [ ] Implement user role management
- [ ] Add automated testing suite
- [ ] Implement email verification
- [ ] Add social media sharing

## 📞 Support

If you encounter any issues or have questions:

1. Check the existing issues in the repository
2. Create a new issue with detailed information
3. Provide steps to reproduce any bugs
4. Include environment details (OS, Node version, etc.)

---

Built with ❤️ using React and Node.js
