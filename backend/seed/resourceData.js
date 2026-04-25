// backend/seed/resourceData.js
module.exports = [
  {
    category: "coding",
    items: [
      { id: 1, name: "LeetCode", desc: "Best for data structures and algorithm practice with massive problem set.", link: "https://leetcode.com", icon: "🚀" },
      { id: 2, name: "GeeksforGeeks", desc: "A computer science portal with deep dive into theory and coding.", link: "https://geeksforgeeks.org", icon: "📚" },
      { id: 3, name: "HackerRank", desc: "Great for basic to intermediate coding and domain-specific challenges.", link: "https://hackerrank.com", icon: "🎯" },
      { id: 4, name: "CodeChef", desc: "Focuses on competitive programming with regular monthly contests.", link: "https://codechef.com", icon: "👨‍🍳" },
      { id: 5, name: "Codeforces", desc: "Top platform for competitive programming and global ranking.", link: "https://codeforces.com", icon: "🏆" }
    ]
  },
  {
    category: "aptitude",
    items: [
      { id: 1, name: "Percentage Formulas", desc: "Master basic percentage, increase/decrease and conversion tricks.", link: "#", icon: "📊" },
      { id: 2, name: "Profit & Loss", desc: "Shortcut methods for CP, SP, and marked price calculations.", link: "#", icon: "📈" },
      { id: 3, name: "Time and Work", desc: "Efficiency based problems and chain rule shortcuts.", link: "#", icon: "⏱️" },
      { id: 4, name: "Probability", desc: "Basics of coins, cards, and dice with common patterns.", link: "#", icon: "🎲" },
      { id: 5, name: "Quantitative Practice", desc: "Daily practice sets for all major quantitative topics.", link: "#", icon: "📝" }
    ]
  },
  {
    category: "interview",
    items: [
      { id: 1, name: "Resume Tips", desc: "Learn how to build an ATS-friendly resume that stands out.", icon: "📄" },
      { id: 2, name: "HR Questions", desc: "Top 50 HR questions with behavioral answering techniques.", icon: "🤝" },
      { id: 3, name: "Tell Me About Yourself", desc: "Perfect your pitch using the Present-Past-Future model.", icon: "👤" },
      { id: 4, name: "Group Discussion", desc: "Do's and don'ts of GD with common topics and lead-ins.", icon: "📢" },
      { id: 5, name: "Communication Skills", desc: "Body language and vocal variety tips for interviews.", icon: "🗣️" }
    ]
  },
  {
    category: "companies",
    items: [
      { id: 1, name: "TCS", rounds: ["Aptitude", "Coding", "TR + HR"], icon: "🏢" },
      { id: 2, name: "Infosys", rounds: ["Aptitude + Logic", "Pseudocode", "Technical"], icon: "🏢" },
      { id: 3, name: "Wipro", rounds: ["Aptitude", "Coding (Wipro NLTH)", "Business Round"], icon: "🏢" },
      { id: 4, name: "Accenture", rounds: ["Cognitive & Technical", "Coding", "Communication"], icon: "🏢" },
      { id: 5, name: "Amazon", rounds: ["Online Assessment", "Technical Rounds (DSA)", "Bar Raiser"], icon: "🏢" }
    ]
  },
  {
    category: "daily",
    items: [
      { type: "coding", title: "Find the Missing Number", link: "/dsa", background: "linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)" },
      { type: "aptitude", title: "Time & Work Puzzle #42", link: "/aptitude", background: "linear-gradient(135deg, #10b981 0%, #059669 100%)" }
    ]
  },
  {
    category: "roadmaps",
    items: [
      { title: "DSA Roadmap", steps: ["Arrays", "Strings", "Linked List", "Trees", "Graph", "DP"], color: "#3b82f6" },
      { title: "Aptitude Roadmap", steps: ["Percentage", "Ratio", "Profit/Loss", "SI/CI", "Probability"], color: "#10b981" }
    ]
  }
];
