export interface Course {
  id: string;
  title: string;
  description: string;
  instructor: {
    name: string;
    role: string;
    bio: string;
    image: string;
  };
  level: string;
  duration: string;
  lectures: number;
  rating: number;
  reviews: number;
  students: number;
  price: number;
  discountPrice?: number;
  image: string;
  category: string;
  lastUpdated: string;
  language: string;
  features: string[];
  curriculum: {
    title: string;
    lectures: {
      title: string;
      duration: string;
      preview: boolean;
    }[];
  }[];
}

export const courses: Course[] = [
  {
    id: "1",
    title: "Complete Web Development Bootcamp",
    description: "Master web development with HTML, CSS, JavaScript, React, Node.js, and more. This comprehensive bootcamp takes you from beginner to professional with hands-on projects and real-world applications.",
    instructor: {
      name: "John Smith",
      role: "Senior Web Developer",
      bio: "John has over 10 years of experience in web development and has taught thousands of students worldwide. He specializes in full-stack development and modern web technologies.",
      image: "https://ui-avatars.com/api/?name=John+Smith&background=0D9488&color=fff",
    },
    level: "Beginner to Advanced",
    duration: "40 hours",
    lectures: 120,
    rating: 4.8,
    reviews: 1250,
    students: 15000,
    price: 199.99,
    discountPrice: 49.99,
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&auto=format&fit=crop&q=60",
    category: "Development",
    lastUpdated: "2024-03-15",
    language: "English",
    features: [
      "Lifetime access to course materials",
      "Mobile and desktop access",
      "Certificate of completion",
      "30-day money-back guarantee",
      "Access to instructor Q&A",
      "Downloadable resources",
    ],
    curriculum: [
      {
        title: "Introduction to Web Development",
        lectures: [
          { title: "Course Overview", duration: "5:00", preview: true },
          { title: "Setting Up Your Development Environment", duration: "15:00", preview: true },
          { title: "Understanding HTML Basics", duration: "20:00", preview: false },
          { title: "CSS Fundamentals", duration: "25:00", preview: false },
        ],
      },
      {
        title: "JavaScript Programming",
        lectures: [
          { title: "JavaScript Basics", duration: "30:00", preview: true },
          { title: "DOM Manipulation", duration: "35:00", preview: false },
          { title: "Event Handling", duration: "25:00", preview: false },
          { title: "Async Programming", duration: "40:00", preview: false },
        ],
      },
      {
        title: "React Development",
        lectures: [
          { title: "React Fundamentals", duration: "45:00", preview: true },
          { title: "Components and Props", duration: "30:00", preview: false },
          { title: "State Management", duration: "35:00", preview: false },
          { title: "React Hooks", duration: "40:00", preview: false },
        ],
      },
    ],
  },
  {
    id: "2",
    title: "Digital Marketing Fundamentals",
    description: "Learn the essential skills and strategies for successful digital marketing. From SEO to social media marketing, this course covers everything you need to know to grow your online presence.",
    instructor: {
      name: "Sarah Johnson",
      role: "Digital Marketing Expert",
      bio: "Sarah is a certified digital marketing professional with 8 years of experience in SEO, social media marketing, and content strategy. She has helped hundreds of businesses grow their online presence.",
      image: "https://ui-avatars.com/api/?name=Sarah+Johnson&background=0D9488&color=fff",
    },
    level: "Beginner",
    duration: "25 hours",
    lectures: 80,
    rating: 4.6,
    reviews: 850,
    students: 12000,
    price: 149.99,
    discountPrice: 39.99,
    image: "https://images.unsplash.com/photo-1557838923-2985c318be48?w=800&auto=format&fit=crop&q=60",
    category: "Marketing",
    lastUpdated: "2024-03-10",
    language: "English",
    features: [
      "Comprehensive digital marketing guide",
      "Practical case studies",
      "Industry best practices",
      "Marketing tools overview",
      "Analytics fundamentals",
      "Social media strategy",
    ],
    curriculum: [
      {
        title: "Introduction to Digital Marketing",
        lectures: [
          { title: "Course Overview", duration: "5:00", preview: true },
          { title: "Digital Marketing Landscape", duration: "15:00", preview: true },
          { title: "Marketing Strategy Basics", duration: "20:00", preview: false },
        ],
      },
      {
        title: "Search Engine Optimization",
        lectures: [
          { title: "SEO Fundamentals", duration: "30:00", preview: true },
          { title: "Keyword Research", duration: "25:00", preview: false },
          { title: "On-Page SEO", duration: "35:00", preview: false },
          { title: "Technical SEO", duration: "30:00", preview: false },
        ],
      },
      {
        title: "Social Media Marketing",
        lectures: [
          { title: "Social Media Strategy", duration: "25:00", preview: true },
          { title: "Content Creation", duration: "30:00", preview: false },
          { title: "Community Management", duration: "25:00", preview: false },
          { title: "Social Media Analytics", duration: "20:00", preview: false },
        ],
      },
    ],
  },
  {
    id: "3",
    title: "Data Science and Machine Learning",
    description: "Master the fundamentals of data science and machine learning. Learn to analyze data, build predictive models, and make data-driven decisions using Python and popular ML libraries.",
    instructor: {
      name: "Michael Brown",
      role: "Data Science Lead",
      bio: "Michael is a data science expert with a Ph.D. in Machine Learning and 12 years of industry experience. He has worked with major tech companies and has published several research papers.",
      image: "https://ui-avatars.com/api/?name=Michael+Brown&background=0D9488&color=fff",
    },
    level: "Intermediate",
    duration: "35 hours",
    lectures: 100,
    rating: 4.9,
    reviews: 950,
    students: 13000,
    price: 249.99,
    discountPrice: 69.99,
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=60",
    category: "Data Science",
    lastUpdated: "2024-03-12",
    language: "English",
    features: [
      "Python programming basics",
      "Data analysis techniques",
      "Machine learning algorithms",
      "Real-world projects",
      "Jupyter notebooks",
      "Statistical analysis",
    ],
    curriculum: [
      {
        title: "Python for Data Science",
        lectures: [
          { title: "Course Overview", duration: "5:00", preview: true },
          { title: "Python Basics", duration: "20:00", preview: true },
          { title: "Data Structures", duration: "25:00", preview: false },
          { title: "NumPy and Pandas", duration: "30:00", preview: false },
        ],
      },
      {
        title: "Data Analysis",
        lectures: [
          { title: "Data Cleaning", duration: "35:00", preview: true },
          { title: "Exploratory Data Analysis", duration: "30:00", preview: false },
          { title: "Data Visualization", duration: "25:00", preview: false },
          { title: "Statistical Analysis", duration: "35:00", preview: false },
        ],
      },
      {
        title: "Machine Learning",
        lectures: [
          { title: "ML Fundamentals", duration: "30:00", preview: true },
          { title: "Supervised Learning", duration: "40:00", preview: false },
          { title: "Unsupervised Learning", duration: "35:00", preview: false },
          { title: "Model Evaluation", duration: "30:00", preview: false },
        ],
      },
    ],
  },
];

export const categories = ["Development", "Marketing", "Data Science", "Business", "Design", "Personal Development"];

export const levels = ["Beginner", "Intermediate", "Advanced"];

export const priceRanges = [
  { value: "free", label: "Free" },
  { value: "under-50", label: "Under $50" },
  { value: "50-100", label: "$50 - $100" },
  { value: "over-100", label: "Over $100" },
];

export const durations = [
  { value: "0-2", label: "0-2 hours" },
  { value: "3-6", label: "3-6 hours" },
  { value: "7-16", label: "7-16 hours" },
  { value: "17-plus", label: "17+ hours" },
]; 