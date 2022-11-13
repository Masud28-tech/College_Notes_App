const data = [
    //CSE
    {
        id: 1,
        branch: "Computer Science",
        semester: "1st",
        subject: "Applied Mathematics - 1",
        topics: [
            'DSA',
            'Arrays',
            'Sortings',
            'Searching algorithms',
        ],
        teacher: "Maths teacher",
    },
    {
        id: 2,
        branch: "Computer Science",
        semester: "1st",
        subject: "Engineering Physics",
        topics: [],
        teacher: "Physics teacher",
    },
    {
        id: 3,
        branch: "Computer Science",
        semester: "1st",
        subject: 'Engineering Chemistry',
        teacher: 'Chemistry teacher',
        topics: []
    },
    {
        id: 4,
        branch: "Computer Science",
        semester: "1st",
        subject: 'Basic Electrical Engineering',
        teacher: 'Electrical Teacher',
        topics: [

        ]
    },
    {
        id: 5,
        branch: "Computer Science",
        semester: "1st",
        subject: 'Basic Civil Engineering',
        teacher: 'Civil Teacher',
        topics: [

        ]
    },
    {
        id: 6,
        branch: "Computer Science",
        semester: "1st",
        subject: 'Engineering Graphics - 1',
        teacher: 'Graphic Teacher',
        topics: [

        ]
    },
    {
        id: 7,
        branch: "Computer Science",
        semester: "2nd",
        subject: 'Applied mathematics - 2',
        teacher: 'Maths teacher',
        topics: [

        ]
    },
    {
        id: 8,
        branch: "Computer Science",
        semester: "2nd",
        subject: 'Advanced Physics',
        teacher: 'Physics teacher',
        topics: [

        ]
    },
    {
        id: 9,
        branch: "Computer Science",
        semester: "2nd",
        subject: 'Material Chemistry',
        teacher: 'Chemistry teacher',
        topics: [

        ]
    },
    {
        id: 10,
        branch: "Computer Science",
        semester: "2nd",
        subject: 'Engineering Mechanics',
        teacher: 'Civil Teacher',
        topics: [

        ]
    },
    {
        id: 11,
        branch: "Computer Science",
        semester: "2nd",
        subject: 'Advance electrical Engineering',
        teacher: 'Electrical Teacher',
        topics: [

        ]
    },
    {
        id: 12,
        branch: "Computer Science",
        semester: "3rd",
        subject: "Aplied Mathematics - 3",
        teacher: 'Maths teacher',
        topics: [
            'LAPLACE TRANSFORM',
            'FOURIER SERIES & FOURIER TRANSFORM',
            'Z-TRANSFORM',
            'FUNCTIONS OF COMPLEX VARIABLE',
            'MATRICES',
            'THEORY OF PROBABILITY',
        ],
    },
    {
        id: 13,
        branch: "Computer Science",
        semester: "3rd",
        subject: "Digital Circuits & Fundamentals of Microprocessor",
        teacher: 'CS teacher - 1',
        topics: [
            'Motivation for digital systems',
            'Design procedure',
            'Storage elements, Flip-flops and latches',
            'Applications of Flip Flops',
            'Programmable logic Device',
            'Programming of 8085 and interrupt structure',
        ],
    },
    {
        id: 14,
        branch: "Computer Science",
        semester: "3rd",
        subject: "Ethics in IT",
        teacher: 'English Teacher',
        topics: [

        ],
    },
    {
        id: 15,
        branch: "Computer Science",
        semester: "3rd",
        subject: "Computer Architecture & Organization",
        teacher: 'CS teacher - 2',
        topics: [
            'BASIC STRUCTURE OF COMPUTERS',
            'ARITHMETIC',
            'THE MEMORY SYSTEM',
            'INPUT/OUTPUT ORGANIZATION',
            'RISC philosophy, pipelining, basic concepts in pipelining',
            'Introduction to multiprocessors',
        ],
    },
    {
        id: 16,
        branch: "Computer Science",
        semester: "3rd",
        subject: "Advanced C Programming and Logic Design",
        teacher: 'CS teacher - 3',
        topics: [

        ],
    },
    {
        id: 17,
        branch: "Computer Science",
        semester: "4th",
        subject: "DISCRETE MATHEMATICS AND GRAPH THEORY",
        teacher: 'Maths teacher',
        topics: [
            'Mathematical Logic and Set Theory',
            'Relations and Functions',
            'Group Theory',
            'Rings, Lattices & Boolean Algebra',
            'Graph Theory',
            'Combinatorics',
        ],
    },
    {
        id: 18,
        branch: "Computer Science",
        semester: "4th",
        subject: "Data Structures & Program Design",
        teacher: 'CS teacher - 2',
        topics: [

        ],
    },
    {
        id: 19,
        branch: "Computer Science",
        semester: "4th",
        subject: "Operating Systems ",
        teacher: 'CS teacher - 5',
        topics: [
            'Introduction',
            'File systems',
            'Scheduling',
            'Memory management',
            'Process cooperation and synchronization',
            'Deadlocks & Protection',
        ],
    },
    {
        id: 20,
        branch: "Computer Science",
        semester: "4th",
        subject: "Theoretical Foundations of Computer Sciences ",
        teacher: 'CS teacher - 4',
        topics: [
            'Mathematical preliminaries',
            'Finite Automaton, regular languages',
            'Regular expression, identities',
        ],
    },
    {
        id: 21,
        branch: "Computer Science",
        semester: "4th",
        subject: "SYSTEM PROGRAMMING ",
        teacher: 'CS teacher - 1',
        topics: [
            'IBM 360/370 & Assembler',
            'Macroprocessor',
            'Linker and Loader',
            'Common Object files format & System Utilities',
            'Unix Device Drivers',
            'Compiler',
        ],
    },
    {
        id: 22,
        branch: "Computer Science",
        semester: "5th",
        subject: "Data Communication",
        teacher: 'CS teacher - 5',
        topics: [
            '',
            '',
            '',
            '',
            '',
            '',
        ],
    },
    {
        id: 23,
        branch: "Computer Science",
        semester: "5th",
        subject: "Object Oriented Programming",
        teacher: 'CS teacher - 3',
        topics: [
            '',
            '',
            '',
            '',
            '',
            '',
        ],
    },
    {
        id: 24,
        branch: "Computer Science",
        semester: "5th",
        subject: "Database Management System",
        teacher: 'CS teacher - 4',
        topics: [
            '',
            '',
            '',
            '',
            '',
            '',
        ],
    },
    {
        id: 25,
        branch: "Computer Science",
        semester: "5th",
        subject: "Computer Graphics",
        teacher: 'CS teacher - 2',
        topics: [
            '',
            '',
            '',
            '',
            '',
            '',
        ],
    },
    {
        id: 26,
        branch: "Computer Science",
        semester: "5th",
        subject: "Design & Analysis of Algorithms",
        teacher: 'CS teacher - 1',
        topics: [
            '',
            '',
            '',
            '',
            '',
            '',
        ],
    },
    {
        id: 27,
        branch: "Computer Science",
        semester: "6th",
        subject: "Artificial Intelligence",
        teacher: 'CS teacher - 3',
        topics: [
            '',
            '',
            '',
            '',
            '',
            '',
        ],
    },
    {
        id: 28,
        branch: "Computer Science",
        semester: "6th",
        subject: "Design Patterns",
        teacher: 'CS teacher - 1',
        topics: [
            '',
            '',
            '',
            '',
            '',
            '',
        ],
    },
    {
        id: 29,
        branch: "Computer Science",
        semester: "6th",
        subject: "Software Engineering & Project Management",
        teacher: 'CS teacher - 2',
        topics: [
            '',
            '',
            '',
            '',
            '',
            '',
        ],
    },
    {
        id: 30,
        branch: "Computer Science",
        semester: "6th",
        subject: "Computer Networks",
        teacher: 'CS teacher - 4',
        topics: [
            '',
            '',
            '',
            '',
            '',
            '',
        ],
    },
    {
        id: 31,
        branch: "Computer Science",
        semester: "6th",
        subject: "Functional English",
        teacher: 'CS teacher - 5',
        topics: [
            '',
            '',
            '',
            '',
            '',
            '',
        ],
    },
    {
        id: 32,
        branch: "Computer Science",
        semester: "7th",
        subject: "Data Warehousing & Mining",
        teacher: 'CS teacher - 2',
        topics: [
            '',
            '',
            '',
            '',
            '',
            '',
        ],
    },
    {
        id: 33,
        branch: "Computer Science",
        semester: "7th",
        subject: "Language Processor",
        teacher: 'CS teacher - 3',
        topics: [
            '',
            '',
            '',
            '',
            '',
            '',
        ],
    },
    {
        id: 34,
        branch: "Computer Science",
        semester: "7th",
        subject: " TCP & IP ",
        teacher: 'CS teacher - 5',
        topics: [
            '',
            '',
            '',
            '',
            '',
            '',
        ],
    },
    {
        id: 35,
        branch: "Computer Science",
        semester: "7th",
        subject: "Big Data Analytics and Business Intelligence",
        teacher: 'CS teacher - 4',
        topics: [
            '',
            '',
            '',
            '',
            '',
            '',
        ],
    },
    {
        id: 36,
        branch: "Computer Science",
        semester: "7th",
        subject: "Mobile Computing",
        teacher: 'CS teacher - 1',
        topics: [
            '',
            '',
            '',
            '',
            '',
            '',
        ],
    },

    {
        id: 37,
        branch: "Computer Science",
        semester: "7th",
        subject: "Real Time Operating System",
        teacher: 'CS teacher - 6',
        topics: [
            '',
            '',
            '',
            '',
            '',
            '',
        ],
    },
    {
        id: 38,
        branch: "Computer Science",
        semester: "8th",
        subject: "Distributed Operating system",
        teacher: 'CS teacher - 6',
        topics: [
            '',
            '',
            '',
            '',
            '',
            '',
        ],
    },
    {
        id: 39,
        branch: "Computer Science",
        semester: "8th",
        subject: "Information & Cyber Security",
        teacher: 'CS teacher - 4',
        topics: [
            '',
            '',
            '',
            '',
            '',
            '',
        ],
    },
    {
        id: 40,
        branch: "Computer Science",
        semester: "8th",
        subject: "ELECTIVE-III",
        teacher: 'CS teacher - 5',
        topics: [
            '',
            '',
            '',
            '',
            '',
            '',
        ],
    },
    {
        id: 41,
        branch: "Computer Science",
        semester: "8th",
        subject: "ELECTIVE-IV",
        teacher: 'CS teacher - 7',
        topics: [
            '',
            '',
            '',
            '',
            '',
            '',
        ],
    },

    //MECH

    //ETC

    //EE

    //AI


];


export default data;