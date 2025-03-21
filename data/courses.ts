export const courses = [
  {
    id: "1",
    title: "Web Development Fundamentals",
    description: "Learn the basics of web development with HTML, CSS, and JavaScript.",
    instructor: "John Doe",
    category: "Web Development",
    level: "Beginner",
    duration: 8,
    rating: 4.8,
    price: 49.99,
    discountPrice: 29.99,
    image: "/courses/web-dev.jpg",
    enrolled: 1200,
    lessons: [
      {
        title: "Introduction to HTML",
        duration: "45 mins",
        completed: false,
      },
      {
        title: "CSS Basics",
        duration: "60 mins",
        completed: false,
      },
      {
        title: "JavaScript Fundamentals",
        duration: "75 mins",
        completed: false,
      },
    ],
  },
  {
    id: "2",
    title: "Advanced React Patterns",
    description: "Master advanced React patterns and best practices for building scalable applications.",
    instructor: "Jane Smith",
    category: "Frontend",
    level: "Advanced",
    duration: 12,
    rating: 4.9,
    price: 79.99,
    discountPrice: 59.99,
    image: "/courses/react.jpg",
    enrolled: 800,
    lessons: [
      {
        title: "React Hooks Deep Dive",
        duration: "90 mins",
        completed: false,
      },
      {
        title: "State Management Patterns",
        duration: "75 mins",
        completed: false,
      },
      {
        title: "Performance Optimization",
        duration: "60 mins",
        completed: false,
      },
    ],
  },
  {
    id: "3",
    title: "Node.js Backend Development",
    description: "Build scalable backend services with Node.js and Express.",
    instructor: "Mike Johnson",
    category: "Backend",
    level: "Intermediate",
    duration: 10,
    rating: 4.7,
    price: 69.99,
    discountPrice: 49.99,
    image: "/courses/nodejs.jpg",
    enrolled: 950,
    lessons: [
      {
        title: "Node.js Basics",
        duration: "60 mins",
        completed: false,
      },
      {
        title: "Express.js Framework",
        duration: "75 mins",
        completed: false,
      },
      {
        title: "Database Integration",
        duration: "90 mins",
        completed: false,
      },
    ],
  },
] 