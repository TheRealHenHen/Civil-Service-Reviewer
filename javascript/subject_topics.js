const subjects = {
    math: {
        title: "Mathematics",
        topics: [
            {
                title: "Number Sequence",
                description: "Learn to identify patterns and solve sequence problems"
            },
            {
                title: "Basic Operations",
                description: "Master fundamental mathematical operations and their applications"
            },
            {
                title: "Word Problems",
                description: "Develop skills to solve real-world mathematical problems"
            }
        ]
    },
    english: {
        title: "English",
        topics: [
            {
                title: "Vocabulary",
                description: "Expand your English vocabulary and learn proper word usage in different contexts"
            },
            {
                title: "Grammar Correcting",
                description: "Master English grammar rules and common error correction"
            },
            {
                title: "Reading Comprehension",
                description: "Develop skills to analyze complex written passages effectively"
            },
            {
                title: "Word Analogy",
                description: "Learn to identify relationships between words and strengthen verbal reasoning"
            },
            {
                title: "Logical Reasoning",
                description: "Enhance critical thinking skills through drawing logical conclusions"
            }
        ]
    }
};

document.addEventListener('DOMContentLoaded', () => {
    // Get subject from URL parameters
    const urlParams = new URLSearchParams(window.location.search);
    const initialSubject = urlParams.get('subject') || 'english';  // default to english if no subject specified
    
    const changeSubjectBtn = document.getElementById('changeSubjectBtn');
    const subjectDropdown = document.getElementById('subjectDropdown');
    const titleElement = document.querySelector('.title');
    const topicsSection = document.querySelector('.topics');

    // Initialize with the subject from URL
    updateSubject(initialSubject);

    // Toggle dropdown
    changeSubjectBtn.addEventListener('click', () => {
        subjectDropdown.classList.toggle('show');
    });

    // Close dropdown when clicking outside
    window.addEventListener('click', (event) => {
        if (!event.target.matches('#changeSubjectBtn')) {
            if (subjectDropdown.classList.contains('show')) {
                subjectDropdown.classList.remove('show');
            }
        }
    });

    // Handle subject change
    subjectDropdown.addEventListener('click', (event) => {
        if (event.target.tagName === 'A') {
            const subject = event.target.dataset.subject;
            updateSubject(subject);
            subjectDropdown.classList.remove('show');
        }
    });

    function updateSubject(subject) {
        const subjectData = subjects[subject];
        const topicsSection = document.querySelector('.topics');
        
        // Fade out
        topicsSection.style.opacity = '0';
        
        // Update content after brief delay
        setTimeout(() => {
            // Update title
            titleElement.textContent = subjectData.title;

            // Update topics
            topicsSection.innerHTML = subjectData.topics.map(topic => `
                <div class="topic">
                    <a href="#" class="btn-main">${topic.title}</a>
                    <p>${topic.description}</p>
                </div>
            `).join('');
            
            // Fade in
            topicsSection.style.opacity = '1';
        }, 300);
    }

    // Add this when the page loads
    topicsSection.style.transition = 'opacity 0.3s ease-in-out';
});
