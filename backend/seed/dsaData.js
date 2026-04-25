// backend/seed/dsaData.js
module.exports = [
    {
        Topic: "Arrays",
        QA: [
            { question: "Find largest element in array", answer: "Traverse array once and track maximum value." },
            { question: "Reverse an array", answer: "Use two pointers: swap start and end until middle." },
            { question: "Find second largest element", answer: "Maintain largest and second largest while traversing." },
            { question: "Check if array is sorted", answer: "Compare every element with next element." },
            { question: "Remove duplicates from sorted array", answer: "Use two pointer technique." }
        ]
    },
    {
        Topic: "Strings",
        QA: [
            { question: "Reverse a string", answer: "Convert to char array and swap ends." },
            { question: "Check palindrome string", answer: "Compare characters from both ends." },
            { question: "Count vowels in string", answer: "Traverse string and count vowels." },
            { question: "Find first non repeating char", answer: "Use frequency map then traverse again." },
            { question: "Check anagram", answer: "Sort both strings or use frequency count." }
        ]
    },
    {
        Topic: "Linked List",
        QA: [
            { question: "Reverse linked list", answer: "Use prev curr next pointers iteratively." },
            { question: "Find middle of linked list", answer: "Use slow and fast pointers." },
            { question: "Detect cycle in linked list", answer: "Use Floyd slow-fast pointer method." },
            { question: "Remove nth node from end", answer: "Use two pointer gap method." },
            { question: "Merge two sorted linked lists", answer: "Use dummy node and compare nodes." }
        ]
    },
    {
        Topic: "Stack",
        QA: [
            { question: "Implement stack using array", answer: "Use push pop and top index." },
            { question: "Check balanced parentheses", answer: "Use stack to match brackets." },
            { question: "Reverse string using stack", answer: "Push chars then pop all." },
            { question: "Find next greater element", answer: "Use monotonic stack." },
            { question: "Min stack design", answer: "Use extra stack for minimums." }
        ]
    },
    {
        Topic: "Queue",
        QA: [
            { question: "Implement queue using array", answer: "Use front rear indexes." },
            { question: "Implement queue using stacks", answer: "Use two stacks." },
            { question: "Circular queue", answer: "Use modulo indexing." },
            { question: "Generate binary numbers from 1 to n", answer: "Use queue based BFS idea." },
            { question: "First non repeating character in stream", answer: "Use queue plus frequency map." }
        ]
    },
    {
        Topic: "Trees",
        QA: [
            { question: "Inorder traversal", answer: "Left Root Right recursively or stack." },
            { question: "Preorder traversal", answer: "Root Left Right." },
            { question: "Postorder traversal", answer: "Left Right Root." },
            { question: "Height of binary tree", answer: "1 + max(left,right)." },
            { question: "Count leaf nodes", answer: "Node with no children is leaf." }
        ]
    },
    {
        Topic: "Binary Search",
        QA: [
            { question: "Search element in sorted array", answer: "Use low high mid repeatedly." },
            { question: "Find first occurrence", answer: "Binary search and move left on match." },
            { question: "Find last occurrence", answer: "Binary search and move right on match." },
            { question: "Square root floor of number", answer: "Binary search on answer range." },
            { question: "Peak element", answer: "Compare mid with neighbor." }
        ]
    },
    {
        Topic: "Sorting",
        QA: [
            { question: "Bubble sort idea", answer: "Swap adjacent if wrong order repeatedly." },
            { question: "Selection sort idea", answer: "Pick minimum and place at front." },
            { question: "Insertion sort idea", answer: "Insert current into sorted left part." },
            { question: "Merge sort idea", answer: "Divide array then merge sorted halves." },
            { question: "Quick sort idea", answer: "Partition around pivot recursively." }
        ]
    },
    {
        Topic: "Recursion",
        QA: [
            { question: "Factorial of n", answer: "n * factorial(n-1), base case 0 or 1." },
            { question: "Print numbers 1 to n", answer: "Recursive call then print." },
            { question: "Fibonacci nth term", answer: "fib(n-1)+fib(n-2)." },
            { question: "Sum of digits", answer: "digit + recurse on n/10." },
            { question: "Power x^n", answer: "Use recursion or fast exponentiation." }
        ]
    },
    {
        Topic: "HashMap",
        QA: [
            { question: "Count frequency of array elements", answer: "Store counts in hashmap." },
            { question: "Two Sum problem", answer: "Store complement using hashmap." },
            { question: "First unique element", answer: "Use hashmap frequencies." },
            { question: "Group anagrams", answer: "Use sorted word as key." },
            { question: "Find duplicate elements", answer: "Track visited using hashmap/set." }
        ]
    }
];