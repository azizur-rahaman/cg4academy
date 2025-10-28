import { Institution, Course } from '@/src/shared/types/lms';

export const institutions: Institution[] = [
  {
    id: 'diu',
    name: 'Daffodil International University',
  },
  {
    id: 'nsu',
    name: 'North South University',
  },
  {
    id: 'buet',
    name: 'Bangladesh University of Engineering and Technology',
  },
  {
    id: 'du',
    name: 'University of Dhaka',
  },
];

export const courses: Course[] = [
  {
    id: 'spl',
    institutionId: 'diu',
    title: 'Structural Programming Language',
    description: 'Learn the fundamentals of structured programming with C language',
    topics: [
      {
        id: 'intro-to-c',
        title: 'Introduction to C Programming',
        order: 1,
        content: {
          understand: {
            title: 'Understand the Concept',
            content: `
              <h3>What is C Programming?</h3>
              <p>C is a general-purpose, procedural programming language developed by Dennis Ritchie in 1972. It's widely used for system programming, embedded systems, and application development.</p>
              
              <h3>Why Learn C?</h3>
              <ul>
                <li><strong>Foundation:</strong> C is the foundation for many modern languages like C++, Java, and Python</li>
                <li><strong>Performance:</strong> C provides low-level access to memory and high performance</li>
                <li><strong>Portability:</strong> C programs can run on various platforms with minimal changes</li>
                <li><strong>Control:</strong> Gives you direct control over hardware and memory</li>
              </ul>

              <h3>Basic Structure of a C Program</h3>
              <pre><code>#include &lt;stdio.h&gt;

int main() {
    printf("Hello, World!\\n");
    return 0;
}</code></pre>

              <h3>Key Components:</h3>
              <ul>
                <li><code>#include &lt;stdio.h&gt;</code> - Preprocessor directive to include standard input/output library</li>
                <li><code>int main()</code> - The main function where program execution begins</li>
                <li><code>printf()</code> - Function to print output to the console</li>
                <li><code>return 0;</code> - Returns 0 to indicate successful execution</li>
              </ul>
            `,
            resources: [
              {
                id: 'r1',
                title: 'C Programming Tutorial',
                type: 'article',
                content: 'Introduction to C programming basics',
              },
              {
                id: 'r2',
                title: 'History of C Language',
                type: 'reading',
                content: 'Learn about the evolution of C',
              },
            ],
          },
          practice: {
            title: 'Practice It',
            exercises: [
              {
                id: 'ex1',
                title: 'Hello World Program',
                description: 'Write a simple C program that prints "Hello, World!" to the console',
                difficulty: 'easy',
              },
              {
                id: 'ex2',
                title: 'Print Your Name',
                description: 'Modify the hello world program to print your name and student ID',
                difficulty: 'easy',
              },
              {
                id: 'ex3',
                title: 'Multiple Print Statements',
                description: 'Write a program that prints 5 different lines of text',
                difficulty: 'easy',
              },
            ],
          },
          master: {
            title: 'Master It',
            projects: [
              {
                id: 'p1',
                title: 'Personal Info Display',
                description: 'Create a program that displays your personal information in a formatted way',
                requirements: [
                  'Print your name, age, and institution',
                  'Use multiple printf statements',
                  'Format the output nicely with proper spacing',
                  'Add comments to explain your code',
                ],
              },
              {
                id: 'p2',
                title: 'Teach Someone',
                description: 'Explain the basic structure of a C program to a friend or write a blog post',
                requirements: [
                  'Explain what each line does',
                  'Describe why we need #include',
                  'Explain the role of main() function',
                  'Share your understanding in your own words',
                ],
              },
            ],
          },
        },
      },
      {
        id: 'variables-datatypes',
        title: 'Variables and Data Types',
        order: 2,
        content: {
          understand: {
            title: 'Understand the Concept',
            content: `
              <h3>Variables in C</h3>
              <p>A variable is a named storage location in memory that holds a value. Think of it as a container with a label.</p>

              <h3>Data Types</h3>
              <p>C provides several basic data types:</p>
              <ul>
                <li><code>int</code> - Integer numbers (e.g., 5, -10, 100)</li>
                <li><code>float</code> - Floating-point numbers (e.g., 3.14, -0.5)</li>
                <li><code>double</code> - Double precision floating-point</li>
                <li><code>char</code> - Single character (e.g., 'A', 'x', '5')</li>
              </ul>

              <h3>Variable Declaration and Initialization</h3>
              <pre><code>int age;           // Declaration
age = 20;          // Initialization

int marks = 95;    // Declaration + Initialization
float gpa = 3.75;
char grade = 'A';
</code></pre>

              <h3>Rules for Variable Names:</h3>
              <ul>
                <li>Must start with a letter or underscore</li>
                <li>Can contain letters, digits, and underscores</li>
                <li>Cannot use C keywords (int, float, etc.)</li>
                <li>Case sensitive (age and Age are different)</li>
              </ul>
            `,
            resources: [
              {
                id: 'r3',
                title: 'Understanding Data Types',
                type: 'article',
                content: 'Deep dive into C data types',
              },
            ],
          },
          practice: {
            title: 'Practice It',
            exercises: [
              {
                id: 'ex4',
                title: 'Variable Declaration',
                description: 'Declare variables of different data types and print their values',
                difficulty: 'easy',
              },
              {
                id: 'ex5',
                title: 'Simple Calculator',
                description: 'Create variables for two numbers and perform basic arithmetic operations',
                difficulty: 'medium',
              },
              {
                id: 'ex6',
                title: 'Type Conversion',
                description: 'Practice converting between different data types',
                difficulty: 'medium',
              },
            ],
          },
          master: {
            title: 'Master It',
            projects: [
              {
                id: 'p3',
                title: 'Student Grade Calculator',
                description: 'Build a program to calculate student grades and GPA',
                requirements: [
                  'Use int variables for marks',
                  'Use float for GPA calculation',
                  'Use char for grade assignment',
                  'Display all information in a formatted manner',
                ],
              },
            ],
          },
        },
      },
      {
        id: 'control-structures',
        title: 'Control Structures (if-else, loops)',
        order: 3,
        content: {
          understand: {
            title: 'Understand the Concept',
            content: `
              <h3>Control Structures</h3>
              <p>Control structures allow you to control the flow of program execution.</p>

              <h3>If-Else Statements</h3>
              <pre><code>if (condition) {
    // code if condition is true
} else {
    // code if condition is false
}</code></pre>

              <h3>Loops</h3>
              <ul>
                <li><strong>For Loop:</strong> Used when you know how many times to repeat</li>
                <li><strong>While Loop:</strong> Repeats while a condition is true</li>
                <li><strong>Do-While Loop:</strong> Executes at least once, then checks condition</li>
              </ul>
            `,
          },
          practice: {
            title: 'Practice It',
            exercises: [
              {
                id: 'ex7',
                title: 'Even or Odd',
                description: 'Write a program to check if a number is even or odd',
                difficulty: 'easy',
              },
              {
                id: 'ex8',
                title: 'Print Numbers 1 to 10',
                description: 'Use a for loop to print numbers from 1 to 10',
                difficulty: 'easy',
              },
            ],
          },
          master: {
            title: 'Master It',
            projects: [
              {
                id: 'p4',
                title: 'Number Guessing Game',
                description: 'Create an interactive number guessing game',
                requirements: [
                  'Use loops for multiple attempts',
                  'Use if-else for checking guesses',
                  'Give hints (too high/too low)',
                  'Count number of attempts',
                ],
              },
            ],
          },
        },
      },
    ],
  },
];

export const getCoursesByInstitution = (institutionId: string): Course[] => {
  return courses.filter(course => course.institutionId === institutionId);
};

export const getCourseById = (courseId: string): Course | undefined => {
  return courses.find(course => course.id === courseId);
};

export const getInstitutionById = (institutionId: string): Institution | undefined => {
  return institutions.find(inst => inst.id === institutionId);
};
