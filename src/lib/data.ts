import type { ImagePlaceholder } from '@/lib/placeholder-images';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const getImage = (id: string): ImagePlaceholder => {
    const img = PlaceHolderImages.find(p => p.id === id);
    if (!img) {
        // Fallback or error
        return {
            id: 'fallback',
            description: 'Fallback image',
            imageUrl: 'https://picsum.photos/seed/fallback/600/400',
            imageHint: 'abstract',
        };
    }
    return img;
};

export const profile = {
    name: "Gateremark",
    role: "Full-stack Developer & UI/UX Designer",
    bio: "I'm a passionate creator, building beautiful and functional web experiences. I thrive at the intersection of design and technology, turning complex problems into elegant solutions.",
    profilePicture: getImage('profilePicture'),
};

export const projects = [
    {
        title: "Project Alpha",
        description: "A comprehensive web platform for project management, designed with collaboration in mind.",
        image: getImage('project-1'),
        tags: ["React", "Node.js", "GraphQL", "UI/UX"],
        link: "#",
    },
    {
        title: "E-commerce Hub",
        description: "A scalable e-commerce solution with a focus on user experience and performance.",
        image: getImage('project-2'),
        tags: ["Next.js", "TypeScript", "PostgreSQL"],
        link: "#",
    },
    {
        title: "Creative Portfolio",
        description: "A dynamic portfolio website for a photographer, featuring a custom CMS and animations.",
        image: getImage('project-3'),
        tags: ["GSAP", "Three.js", "Headless CMS"],
        link: "#",
    },
    {
        title: "Mobile Finance App",
        description: "An intuitive mobile app for personal finance tracking and budgeting.",
        image: getImage('project-4'),
        tags: ["React Native", "Firebase", "Figma"],
        link: "#",
    },
];

export const blogPosts = [
    {
        title: "The Art of Clean Code",
        excerpt: "Exploring the principles of writing readable, maintainable, and robust code...",
        date: "October 20, 2023",
        link: "#",
    },
    {
        title: "UI vs. UX: A Deep Dive",
        excerpt: "Demystifying the roles of UI and UX design and how they collaborate to create great products...",
        date: "September 5, 2023",
        link: "#",
    },
    {
        title: "Getting Started with Next.js",
        excerpt: "A beginner-friendly guide to setting up your first project with the latest features of Next.js...",
        date: "August 12, 2023",
        link: "#",
    },
];
