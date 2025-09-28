// Global variables
let currentSection = 'home';
let currentCategory = null;
let currentEditingNote = null;
let notes = [];
let categoryNotes = {
  feminism: [],
  creative: [],
  philosophy: [],
  dreams: []
};
let loadingProgress = 0;
let loadingInterval;
let autoSaveTimeout = null;

// Blog posts data
const blogPosts = {
  'unattentive-dreamer': {
  id: 'unattentive-dreamer',
  title: 'The Beauty of Being Unattentive',
  category: 'Self-Reflection',
  date: 'September 28, 2025',
  readTime: '5 min read',
  heroEmoji: '🌙',
  content: `
    <p>All my life, I’ve been called inattentive, distracted, and sometimes even careless. People laugh at me, tease me, and question my seriousness. But behind those moments of wandering lies a heart full of dreams, a mind that explores possibilities, and an unwavering desire to achieve something meaningful, even in my own way.</p>
    
    <h3>The Curse of Distraction</h3>
    <p>There are days when my inattentiveness feels like a curse. In classrooms, conversations, or even simple tasks, my mind drifts. Others mistake it for carelessness, and their jokes sometimes sting. Yet, this wandering is not weakness—it’s my unique way of noticing life. Small details, fleeting moments, subtle beauty—these are things my mind can see because it wanders.</p>
    
    <div class="post-image">
      <div class="post-image-placeholder">🌀</div>
    </div>
    
    <h3>Finding Strength in Positivity</h3>
    <p>Being inattentive doesn’t define my limits—it challenges me to find focus in my own rhythm. I’ve learned to turn distraction into curiosity, and curiosity into creativity. Each wandering thought can spark a new idea, a fresh perspective, or a solution others might overlook. My mind’s detours are opportunities, not obstacles.</p>
    
    <div class="post-image">
      <div class="post-image-placeholder">💡</div>
    </div>
    
    <h3>Aspire, Despite</h3>
    <p>Yes, I am inattentive. Yes, I get lost in my thoughts. But I also aspire. I aspire to show that even a wandering mind can achieve clarity and purpose. Like seeds that take their time to grow, my efforts may bloom slowly, but they bloom beautifully when nurtured with patience and intention.</p>
    
    <div class="post-image">
      <div class="post-image-placeholder">⭐</div>
    </div>
    
    <h3>The Castle of My Mind</h3>
    <p>My mind is like a moving castle—messy, unpredictable, full of twists and turns—but it’s also magical. Hidden corridors hold creativity, rooms of reflection nurture ideas, and secret corners contain inspiration. Though it doesn’t move in a straight line, it carries me forward, and I’ve learned to embrace it as my own.</p>
    
    <p>I’ve realized that being inattentive isn’t being incapable. It’s seeing the world differently, and in that difference lies possibility. One day, I will show that even the most wandering heart can create something steady, meaningful, and beautiful.</p>
  `
},
  'castle-sky-dreams': {
    id: 'castle-sky-dreams',
    title: 'Castle in the Sky Dreams',
    category: 'Adventures',
    date: 'September 22, 2025',
    readTime: '6 min read',
    heroEmoji: '🏰',
    content: `
      <p>There's something about Castle in the Sky that makes me believe in the impossible. Perhaps it's the image of Laputa floating serenely among the clouds, or maybe it's Sheeta's courage as she faces the unknown. This film has always represented the intersection of dreams and determination in my mind.</p>
      
      <h3>The Weight of Dreams</h3>
      <p>When I first watched Pazu launch himself into the sky with his makeshift glider, I felt that familiar flutter in my chest – the same feeling I get when I'm on the edge of chasing a dream that seems too big, too impossible. Miyazaki understands that dreams aren't just whimsical fantasies; they're heavy with responsibility and risk.</p>
      
      <div class="post-image">
        <div class="post-image-placeholder">☁️</div>
      </div>
      
      <p>Sheeta carries the weight of her heritage, the burden of a floating castle and ancient technology. But she also carries hope – hope that the past can inform a better future, that power can be used for protection rather than destruction. In her, I see every dreamer who has ever felt overwhelmed by the magnitude of their aspirations.</p>
      
      <h3>Finding Your Wings</h3>
      <p>The flying sequences in Castle in the Sky aren't just visually stunning; they're metaphors for the leap of faith required to pursue our deepest desires. When Pazu and Sheeta soar through the clouds toward Laputa, they're not just traveling through space – they're crossing the threshold between the possible and impossible.</p>
      
      <div class="post-image">
        <div class="post-image-placeholder">🌤️</div>
      </div>
      
      <p>I've learned that sometimes you have to jump before you're ready, trust your wings before you're sure they'll carry you. The castle in the sky isn't just a destination; it's a state of mind where anything becomes possible if you're brave enough to reach for it.</p>
      
      <h3>The Price of Paradise</h3>
      <p>But Laputa also teaches us about the danger of isolation, of floating so high above the world that we lose touch with what makes us human. The most poignant moment comes when Sheeta and Pazu choose to destroy the castle rather than let it be used for harm, choosing connection to the earth and each other over the allure of ultimate power.</p>
      
      <p>Castle in the Sky reminds us that our greatest adventures aren't about escaping the world, but about finding our place in it – and sometimes, that means letting go of even our most beautiful dreams to protect what truly matters.</p>
    `
  },
  'spirited-away-magic': {
    id: 'spirited-away-magic',
    title: 'Spirited Away Magic',
    category: 'Transformation',
    date: 'September 20, 2025',
    readTime: '7 min read',
    heroEmoji: '🏮',
    content: `
      <p>Spirited Away taught me that sometimes you have to lose yourself to find who you really are. When ten-year-old Chihiro stumbles into the spirit world, she begins a journey that mirrors every transition we face in life – scary, transformative, and ultimately necessary for growth.</p>
      
      <h3>The Threshold Between Worlds</h3>
      <p>There's something profound about that moment when Chihiro's family crosses the tunnel into the spirit world. We've all experienced versions of this threshold – starting school, moving to a new city, beginning a relationship, facing loss. One moment you're in familiar territory, and the next, all the rules have changed.</p>
      
      <div class="post-image">
        <div class="post-image-placeholder">⛩️</div>
      </div>
      
      <p>What struck me most about Chihiro's transformation is how gradual it is. She doesn't suddenly become brave; she discovers her courage piece by piece, task by task. Working in the bathhouse, helping No-Face, saving Haku – each challenge reveals another layer of her strength.</p>
      
      <h3>The Power of Names</h3>
      <p>The theme of names and identity in Spirited Away resonates deeply with anyone who has ever felt lost or forgotten who they are. When Yubaba steals Chihiro's name, making her "Sen," she's stealing her sense of self. But names, I've learned, are more than labels – they're anchors to our authentic selves.</p>
      
      <div class="post-image">
        <div class="post-image-placeholder">🎭</div>
      </div>
      
      <p>I think about all the times I've felt like "Sen" – stripped of my identity by new environments, expectations, or circumstances. But like Chihiro, I've learned that our true names, our authentic selves, can never really be taken away. They might be buried, forgotten temporarily, but they're always there, waiting to be reclaimed.</p>
      
      <h3>The Bathhouse as Metaphor</h3>
      <p>The bathhouse itself is a masterpiece of worldbuilding and metaphor. It's a place where the most polluted, difficult spirits come to be cleansed. Working there, Chihiro learns that even the most frightening or disgusting customers – like the River Spirit covered in decades of human pollution – have something pure underneath.</p>
      
      <div class="post-image">
        <div class="post-image-placeholder">🛁</div>
      </div>
      
      <p>This lesson has stayed with me in every difficult relationship, every challenging situation: there's usually something worth saving underneath the surface mess. Sometimes the hardest work – like cleaning that River Spirit – yields the most beautiful results.</p>
      
      <h3>Going Home Changed</h3>
      <p>The most powerful aspect of Spirited Away is that Chihiro can't stay in the spirit world, but she also can't return to her old life unchanged. She's different now – braver, more compassionate, more aware of the magic that exists just beyond our everyday perception.</p>
      
      <p>That's the real magic of transformation: it's not about escaping your life, but about returning to it with new eyes, new strength, and new appreciation for both the ordinary and extraordinary moments that make up our days.</p>
    `
  },
  'howls-castle-romance': {
    id: 'howls-castle-romance',
    title: 'Howl\'s Moving Castle Romance',
    category: 'Love & Magic',
    date: 'September 18, 2025',
    readTime: '5 min read',
    heroEmoji: '💫',
    content: `
      <p>Howl's Moving Castle showed me that true beauty isn't about perfect appearances, but about the courage to be vulnerable, to love and be loved despite our flaws and fears. In Sophie's transformation from a resigned young woman to someone who claims her own power, I see every journey toward self-acceptance.</p>
      
      <h3>The Curse of Self-Doubt</h3>
      <p>When Sophie is cursed to become an old woman, it's both literal magic and perfect metaphor. How many of us carry invisible curses – self-doubt, limiting beliefs, the conviction that we're not worthy of love or adventure? Sophie's physical aging represents all the ways we diminish ourselves, make ourselves smaller, convince ourselves we're not the protagonists of our own stories.</p>
      
      <div class="post-image">
        <div class="post-image-placeholder">🪞</div>
      </div>
      
      <p>But here's what's beautiful about Sophie's curse: as she begins to believe in herself, to act with confidence and compassion, the curse begins to lift. Her appearance fluctuates with her self-perception, teaching us that how we see ourselves truly shapes how we move through the world.</p>
      
      <h3>Howl's Vanity and Vulnerability</h3>
      <p>Howl's character initially seems like a contradiction – a powerful wizard obsessed with his appearance, having dramatic breakdowns over hair color. But his vanity masks a deeper vulnerability, the fear that without his beautiful exterior, he's unlovable. His tantrum about his hair isn't really about vanity; it's about the terror of being seen and rejected for who he really is.</p>
      
      <div class="post-image">
        <div class="post-image-placeholder">💄</div>
      </div>
      
      <p>I've realized that Howl's obsession with beauty is his armor, just like Sophie's resignation was hers. We all have ways of protecting our hearts, even when those protections become prisons. The magic happens when we find someone who sees through our defenses to the person we're afraid to be.</p>
      
      <h3>Love as Transformation</h3>
      <p>What I love most about Sophie and Howl's relationship is that they don't complete each other – they inspire each other to become more themselves. Sophie doesn't fix Howl; she sees his worth beyond his fears. Howl doesn't rescue Sophie; he recognizes the strength she always had but never claimed.</p>
      
      <div class="post-image">
        <div class="post-image-placeholder">❤️</div>
      </div>
      
      <p>Their love story teaches us that the right person doesn't make us perfect, but makes us brave enough to be imperfect. They don't eliminate our flaws, but love us in a way that makes those flaws feel less like failures and more like facets of our humanity.</p>
      
      <h3>The Moving Castle of the Heart</h3>
      <p>The castle itself, with its chaotic rooms and impossible architecture, feels like a perfect metaphor for the human heart – complex, sometimes messy, full of hidden chambers and unexpected beauty. Like any real relationship, it requires constant tending, the willingness to navigate confusion, and the faith that love can make even the most unstable foundation feel like home.</p>
      
      <p>Howl's Moving Castle reminds us that real love isn't about finding someone perfect, but about finding someone whose imperfections dance beautifully with our own, creating something stronger and more magical than either person could be alone.</p>
    `
  },
  'mononoke-nature': {
    id: 'mononoke-nature',
    title: 'Princess Mononoke Nature',
    category: 'Nature & Balance',
    date: 'September 15, 2025',
    readTime: '6 min read',
    heroEmoji: '🦌',
    content: `
      <p>Princess Mononoke opened my eyes to the delicate balance between humanity and nature, showing me that environmental consciousness isn't just about preserving the planet – it's about preserving our own souls. In Ashitaka's journey between the human world and the forest, I see the struggle we all face to find harmony in an increasingly divided world.</p>
      
      <h3>The Curse and the Gift</h3>
      <p>Ashitaka's curse is also his gift – it gives him the strength to fight, but at a terrible cost. This duality reflects how I think about my own relationship with anger and passion about environmental issues. The rage I feel about climate change, deforestation, and species extinction can either consume me or fuel positive action.</p>
      
      <div class="post-image">
        <div class="post-image-placeholder">🌲</div>
      </div>
      
      <p>Like Ashitaka, I've learned that the most powerful response to environmental destruction isn't pure anger or pure peace, but the determination to see clearly and act with both compassion and strength. The curse teaches us that we cannot remain neutral in the face of injustice, but neither can we let hatred consume us.</p>
      
      <h3>San's Wild Heart</h3>
      <p>San, raised by wolves and devoted to the forest, represents something wild and pure that most of us have lost touch with. She fights with the ferocity of someone whose entire world is under threat. In her, I see every activist who has ever been called extreme for defending what they love.</p>
      
      <div class="post-image">
        <div class="post-image-placeholder">🐺</div>
      </div>
      
      <p>But San's journey also teaches us about the importance of connection beyond our immediate tribe. Her initial hatred of all humans begins to soften when she meets Ashitaka, not because she abandons her principles, but because she learns that healing requires building bridges, not just walls.</p>
      
      <h3>Lady Eboshi's Complexity</h3>
      <p>What makes Princess Mononoke so profound is that it refuses to create simple villains. Lady Eboshi destroys the forest, yes, but she also provides work and dignity for society's outcasts – former prostitutes, lepers, people with nowhere else to go. Her Iron Town represents progress and community, even as it threatens the natural world.</p>
      
      <div class="post-image">
        <div class="post-image-placeholder">🏭</div>
      </div>
      
      <p>Eboshi's character forces us to confront uncomfortable truths about environmental issues: they're not just about choosing between good and evil, but about navigating competing needs, finding ways to support human flourishing without destroying the systems that sustain all life.</p>
      
      <h3>The Forest Spirit's Wisdom</h3>
      <p>The Forest Spirit – both creator and destroyer, beautiful deer by day and night-walker of death – embodies nature's fundamental truth: life and death are inseparable, and both are necessary for renewal. When the Spirit's head is severed, its death brings devastation but also new growth.</p>
      
      <div class="post-image">
        <div class="post-image-placeholder">🌺</div>
      </div>
      
      <p>This cyclical understanding of destruction and renewal has changed how I think about environmental challenges. Sometimes things must die for new life to emerge. Sometimes the old ways must be released for better systems to grow. The key is learning to participate consciously in cycles of change rather than fighting them.</p>
      
      <h3>Living with Clear Eyes</h3>
      <p>The film's ending doesn't offer easy solutions – the forest is forever changed, Iron Town must be rebuilt, and the tension between human needs and environmental health remains. But Ashitaka and San choose to live with "eyes unclouded by hate," committed to seeing clearly and acting with love.</p>
      
      <p>Princess Mononoke teaches us that environmental consciousness isn't about returning to some pristine past, but about moving forward with wisdom, creating new relationships between human communities and the natural world based on respect, reciprocity, and the understanding that our fates are forever intertwined.</p>
    `
  }
};

// Category configurations
const categoryConfigs = {
  feminism: {
    title: 'Feminism & Empowerment',
    icon: '💜',
    storageKey: 'feminism-notes'
  },
  creative: {
    title: 'Creative Ideas',
    icon: '✨',
    storageKey: 'creative-notes'
  },
  philosophy: {
    title: 'Life Philosophy',
    icon: '🌸',
    storageKey: 'philosophy-notes'
  },
  dreams: {
    title: 'Dreams & Aspirations',
    icon: '🌟',
    storageKey: 'dreams-notes'
  }
};

// DOM Elements
const loadingScreen = document.getElementById('loading-screen');
const mainContent = document.getElementById('main-content');
const progressFill = document.getElementById('progress-fill');
const progressText = document.getElementById('progress-text');
const navLinks = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('.section');
const breadcrumbs = document.getElementById('breadcrumbs');
const noteModal = document.getElementById('note-modal');
const modalTitle = document.getElementById('modal-title');
const noteForm = document.getElementById('note-form');
const modalNoteTitle = document.getElementById('modal-note-title');
const modalNoteContent = document.getElementById('modal-note-content');

// Initialize application
document.addEventListener('DOMContentLoaded', function() {
    startLoading();
    initializeNavigation();
    initializeLoveForm();
    initializeNotesSystem();
    initializeBlogSystem();
    initializeCategoryNotes();
    loadNotesFromStorage();
    loadAllCategoryNotes();
    
    // Make functions global
    window.showBlogPost = showBlogPost;
    window.openNoteCategory = openNoteCategory;
    window.openNoteModal = openNoteModal;
    window.closeNoteModal = closeNoteModal;
    window.deleteCategoryNote = deleteCategoryNote;
    window.editCategoryNote = editCategoryNote;
});

// Loading Screen Functions
function startLoading() {
    loadingInterval = setInterval(() => {
        loadingProgress += Math.random() * 3 + 1;
        
        if (loadingProgress >= 100) {
            loadingProgress = 100;
            updateLoadingProgress();
            setTimeout(finishLoading, 500);
            clearInterval(loadingInterval);
        } else {
            updateLoadingProgress();
        }
    }, 100);
}

function updateLoadingProgress() {
    const percentage = Math.min(Math.round(loadingProgress), 100);
    progressFill.style.width = percentage + '%';
    progressText.textContent = percentage + '%';
    
    // Update cat happiness based on progress
    const catFace = document.querySelector('.cat-face');
    if (catFace) {
        const happiness = percentage / 100;
        catFace.style.transform = `scale(${0.8 + happiness * 0.4})`;
        
        // Change cat expression based on progress
        const leftEye = document.querySelector('.left-eye');
        const rightEye = document.querySelector('.right-eye');
        
        if (percentage > 80) {
            if (leftEye) leftEye.style.transform = 'scaleX(0.3)';
            if (rightEye) rightEye.style.transform = 'scaleX(0.3)';
        }
    }
}

function finishLoading() {
    loadingScreen.style.opacity = '0';
    setTimeout(() => {
        loadingScreen.style.display = 'none';
        mainContent.classList.remove('hidden');
        mainContent.style.opacity = '1';
    }, 500);
}

// Navigation Functions
function initializeNavigation() {
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetSection = this.getAttribute('href').substring(1);
            navigateToSection(targetSection);
        });
    });

    // Handle breadcrumb navigation
    document.addEventListener('click', function(e) {
        if (e.target.matches('a[href^="#"]')) {
            e.preventDefault();
            const target = e.target.getAttribute('href').substring(1);
            navigateToSection(target);
        }
    });
}

function navigateToSection(sectionName) {
    // Update active nav link
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === '#' + sectionName) {
            link.classList.add('active');
        }
    });

    // Update active section
    sections.forEach(section => {
        section.classList.remove('active', 'with-breadcrumbs');
        if (section.id === sectionName) {
            section.classList.add('active');
        }
    });

    currentSection = sectionName;
    
    // Handle breadcrumbs
    if (sectionName === 'blog-post') {
        breadcrumbs.classList.remove('hidden');
        document.getElementById(sectionName).classList.add('with-breadcrumbs');
    } else if (sectionName.endsWith('-notes')) {
        breadcrumbs.classList.remove('hidden');
        document.getElementById(sectionName).classList.add('with-breadcrumbs');
        updateCategoryBreadcrumbs(sectionName.replace('-notes', ''));
    } else {
        breadcrumbs.classList.add('hidden');
    }
    
    // Scroll to top of page
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function updateCategoryBreadcrumbs(category) {
    const spaceBreadcrumb = document.getElementById('space-breadcrumb');
    const categoryBreadcrumb = document.getElementById('category-breadcrumb');
    const categorySeparator = document.getElementById('category-separator');
    
    spaceBreadcrumb.classList.remove('hidden');
    categoryBreadcrumb.classList.remove('hidden');
    categorySeparator.classList.remove('hidden');
    
    categoryBreadcrumb.textContent = categoryConfigs[category].title;
}

// Category Notes Functions
function initializeCategoryNotes() {
    // Initialize search functionality for each category
    Object.keys(categoryConfigs).forEach(category => {
        const searchInput = document.getElementById(`${category}-search`);
        if (searchInput) {
            searchInput.addEventListener('input', function() {
                searchCategoryNotes(category, this.value);
            });
        }
    });

    // Initialize note modal functionality
    if (noteForm) {
        noteForm.addEventListener('submit', function(e) {
            e.preventDefault();
            saveCategoryNote();
        });
    }

    // Initialize word count and character count
    if (modalNoteContent) {
        modalNoteContent.addEventListener('input', updateWordCount);
    }
}

function openNoteCategory(category) {
    currentCategory = category;
    navigateToSection(`${category}-notes`);
    renderCategoryNotes(category);
}

function openNoteModal(category, noteId = null) {
    currentCategory = category;
    currentEditingNote = noteId;
    
    const config = categoryConfigs[category];
    const isEditing = noteId !== null;
    
    modalTitle.textContent = isEditing ? `Edit ${config.title} Note` : `Add New ${config.title} Note`;
    
    if (isEditing) {
        const note = categoryNotes[category].find(n => n.id === noteId);
        if (note) {
            modalNoteTitle.value = note.title;
            modalNoteContent.value = note.content;
        }
    } else {
        modalNoteTitle.value = '';
        modalNoteContent.value = '';
    }
    
    updateWordCount();
    noteModal.classList.remove('hidden');
    noteModal.classList.add('active');
    modalNoteTitle.focus();
}

function closeNoteModal() {
    noteModal.classList.remove('active');
    setTimeout(() => {
        noteModal.classList.add('hidden');
        currentEditingNote = null;
    }, 300);
    
    if (autoSaveTimeout) {
        clearTimeout(autoSaveTimeout);
    }
}

function saveCategoryNote() {
    const title = modalNoteTitle.value.trim();
    const content = modalNoteContent.value.trim();
    
    if (!title || !content) {
        showNoteMessage('Please fill in both title and content! 🐾', 'error');
        return;
    }
    
    const now = new Date().toLocaleString();
    
    if (currentEditingNote) {
        // Edit existing note
        const noteIndex = categoryNotes[currentCategory].findIndex(n => n.id === currentEditingNote);
        if (noteIndex !== -1) {
            categoryNotes[currentCategory][noteIndex] = {
                ...categoryNotes[currentCategory][noteIndex],
                title,
                content,
                updatedAt: now
            };
        }
    } else {
        // Add new note
        const newNote = {
            id: Date.now().toString(),
            title,
            content,
            createdAt: now,
            category: currentCategory
        };
        categoryNotes[currentCategory].unshift(newNote);
    }
    
    saveCategoryNotesToStorage(currentCategory);
    renderCategoryNotes(currentCategory);
    closeNoteModal();
    
    const actionText = currentEditingNote ? 'updated' : 'added';
    showNoteMessage(`Note ${actionText}! ✨`);
}

function deleteCategoryNote(category, noteId) {
    // Show custom confirmation dialog
    const confirmed = window.confirm('Are you sure you want to delete this note? This action cannot be undone. 🥺');
    
    if (confirmed) {
        try {
            // Remove the note from the array
            const originalLength = categoryNotes[category].length;
            categoryNotes[category] = categoryNotes[category].filter(note => note.id !== noteId);
            
            // Verify the note was actually removed
            if (categoryNotes[category].length < originalLength) {
                saveCategoryNotesToStorage(category);
                renderCategoryNotes(category);
                showNoteMessage('Note deleted successfully! 🗑️');
            } else {
                showNoteMessage('Failed to delete note. Please try again.', 'error');
            }
        } catch (error) {
            console.error('Error deleting note:', error);
            showNoteMessage('Error deleting note. Please try again.', 'error');
        }
    }
}

function editCategoryNote(category, noteId) {
    openNoteModal(category, noteId);
}

function searchCategoryNotes(category, searchTerm) {
    const notesGrid = document.getElementById(`${category}-notes-grid`);
    const allNotes = categoryNotes[category];
    
    let filteredNotes = allNotes;
    if (searchTerm.trim()) {
        const term = searchTerm.toLowerCase();
        filteredNotes = allNotes.filter(note => 
            note.title.toLowerCase().includes(term) || 
            note.content.toLowerCase().includes(term)
        );
    }
    
    renderFilteredCategoryNotes(category, filteredNotes);
}

function renderCategoryNotes(category) {
    renderFilteredCategoryNotes(category, categoryNotes[category]);
    updateCategoryStats(category);
}

function renderFilteredCategoryNotes(category, notes) {
    const notesGrid = document.getElementById(`${category}-notes-grid`);
    
    if (!notes || notes.length === 0) {
        const config = categoryConfigs[category];
        notesGrid.innerHTML = `
            <div class="empty-notes">
                <div class="empty-notes-icon">${config.icon}</div>
                <h3>No notes yet!</h3>
                <p>Start capturing your thoughts about ${config.title.toLowerCase()}...</p>
            </div>
        `;
        return;
    }

    notesGrid.innerHTML = notes.map(note => {
        const wordCount = countWords(note.content);
        return `
            <div class="category-note-item">
                <div class="category-note-header">
                    <h4 class="category-note-title">${escapeHtml(note.title)}</h4>
                    <div class="category-note-actions">
                        <button onclick="editCategoryNote('${category}', '${note.id}')" title="Edit Note" aria-label="Edit Note">✏️</button>
                        <button onclick="deleteCategoryNote('${category}', '${note.id}')" title="Delete Note" aria-label="Delete Note">🗑️</button>
                    </div>
                </div>
                <div class="category-note-content">${escapeHtml(note.content)}</div>
                <div class="category-note-meta">
                    <div class="category-note-date">
                        Created: ${note.createdAt}
                        ${note.updatedAt ? `<br>Updated: ${note.updatedAt}` : ''}
                    </div>
                    <div class="category-note-words">${wordCount} words</div>
                </div>
            </div>
        `;
    }).join('');
}

function updateCategoryStats(category) {
    const countElement = document.getElementById(`${category}-count`);
    if (countElement) {
        const count = categoryNotes[category].length;
        countElement.textContent = `${count} note${count !== 1 ? 's' : ''}`;
    }
}

function updateWordCount() {
    const content = modalNoteContent.value;
    const wordCount = countWords(content);
    const charCount = content.length;
    
    document.getElementById('word-count').textContent = `${wordCount} words`;
    document.getElementById('char-count').textContent = `${charCount} characters`;
    
    // Auto-save after 30 seconds of inactivity
    if (autoSaveTimeout) {
        clearTimeout(autoSaveTimeout);
    }
    
    if (content.trim() && modalNoteTitle.value.trim()) {
        autoSaveTimeout = setTimeout(() => {
            // Auto-save logic could go here
            console.log('Auto-saving...');
        }, 30000);
    }
}

function countWords(text) {
    return text.trim().split(/\s+/).filter(word => word.length > 0).length;
}

function saveCategoryNotesToStorage(category) {
    try {
        const config = categoryConfigs[category];
        const storageKey = config.storageKey;
        const data = JSON.stringify(categoryNotes[category]);
        localStorage.setItem(storageKey, data);
    } catch (error) {
        console.warn(`Could not save ${category} notes to localStorage:`, error);
    }
}

function loadCategoryNotesFromStorage(category) {
    try {
        const config = categoryConfigs[category];
        const storageKey = config.storageKey;
        const savedNotes = localStorage.getItem(storageKey);
        if (savedNotes) {
            categoryNotes[category] = JSON.parse(savedNotes);
        } else {
            categoryNotes[category] = [];
        }
    } catch (error) {
        console.warn(`Could not load ${category} notes from localStorage:`, error);
        categoryNotes[category] = [];
    }
}

function loadAllCategoryNotes() {
    Object.keys(categoryConfigs).forEach(category => {
        loadCategoryNotesFromStorage(category);
        updateCategoryStats(category);
    });
}

// Blog System Functions
function initializeBlogSystem() {
    // Initialize blog navigation
    const blogCards = document.querySelectorAll('.blog-card');
    blogCards.forEach(card => {
        card.addEventListener('click', function() {
            const postId = this.getAttribute('onclick').match(/'([^']+)'/)[1];
            showBlogPost(postId);
        });
    });
}

function showBlogPost(postId) {
    const post = blogPosts[postId];
    if (!post) return;

    const blogPostContent = document.getElementById('blog-post-content');
    const postBreadcrumb = document.getElementById('post-breadcrumb');
    const postSeparator = document.getElementById('post-separator');

    // Update breadcrumbs
    postBreadcrumb.textContent = post.title;
    postBreadcrumb.classList.remove('hidden');
    postSeparator.classList.remove('hidden');

    // Generate related posts (excluding current post)
    const relatedPosts = Object.values(blogPosts)
        .filter(p => p.id !== postId)
        .slice(0, 3);

    blogPostContent.innerHTML = `
        <div class="post-navigation">
            <a href="#blog" class="back-btn">← Back to Blog</a>
            <a href="#home" class="back-btn">🏠 Home</a>
        </div>

        <div class="post-hero">
            <div class="post-hero-image">
                <div class="post-hero-placeholder">${post.heroEmoji}</div>
            </div>
            <h1 class="post-title">${post.title}</h1>
            <div class="post-meta">
                <span>📅 ${post.date}</span>
                <span>⏱️ ${post.readTime}</span>
                <span>🏷️ ${post.category}</span>
            </div>
        </div>

        <div class="post-body">
            ${post.content}
        </div>

        <div class="related-posts">
            <h3>Related Posts 🌸</h3>
            <div class="related-posts-grid">
                ${relatedPosts.map(relatedPost => `
                    <div class="related-post-card" onclick="showBlogPost('${relatedPost.id}')">
                        <h4>${relatedPost.title}</h4>
                        <p>${relatedPost.category} • ${relatedPost.readTime}</p>
                    </div>
                `).join('')}
            </div>
        </div>
    `;

    navigateToSection('blog-post');
}

// Love Form Functions
function initializeLoveForm() {
    const loveForm = document.getElementById('love-form');
    const loveSlider = document.getElementById('love-slider');
    const loveValue = document.getElementById('love-value');
    const formSuccess = document.getElementById('form-success');

    // Update love percentage display
    if (loveSlider && loveValue) {
        loveSlider.addEventListener('input', function() {
            loveValue.textContent = this.value + '%';
            updateHeartAnimation(this.value);
        });
    }

    // Form submission
    if (loveForm) {
        loveForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const formData = {
                name: document.getElementById('sender-name').value,
                email: document.getElementById('sender-email').value,
                lovePercentage: document.getElementById('love-slider').value,
                message: document.getElementById('love-message').value
            };

            if (validateLoveForm(formData)) {
                submitLoveForm(formData);
            }
        });
    }
}

function updateHeartAnimation(value) {
    const hearts = document.querySelectorAll('.heart');
    hearts.forEach(heart => {
        const intensity = value / 100;
        heart.style.animationDuration = (4 - intensity * 2) + 's';
        heart.style.opacity = 0.4 + intensity * 0.6;
    });
}

function validateLoveForm(data) {
    const nameField = document.getElementById('sender-name');
    const emailField = document.getElementById('sender-email');
    
    let isValid = true;

    // Reset previous error styles
    nameField.style.borderColor = '';
    emailField.style.borderColor = '';

    // Name validation
    if (!data.name.trim()) {
        nameField.style.borderColor = '#ff4444';
        showFormError('Please enter your name! 🐱');
        isValid = false;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!data.email.trim() || !emailRegex.test(data.email)) {
        emailField.style.borderColor = '#ff4444';
        showFormError('Please enter a valid email address! 💜');
        isValid = false;
    }

    return isValid;
}

function submitLoveForm(data) {
    // Show loading state
    const submitButton = document.querySelector('#love-form button[type="submit"]');
    const originalText = submitButton.innerHTML;
    submitButton.innerHTML = 'Sending Love... 💕';
    submitButton.disabled = true;

    // Simulate API call
    setTimeout(() => {
        // Reset form
        document.getElementById('love-form').reset();
        document.getElementById('love-value').textContent = '50%';
        document.getElementById('love-slider').value = 50;
        
        // Show success message
        const formSuccess = document.getElementById('form-success');
        formSuccess.classList.remove('hidden');
        
        // Create confetti effect
        createConfetti();
        
        // Reset button
        submitButton.innerHTML = originalText;
        submitButton.disabled = false;
        
        // Hide success message after 5 seconds
        setTimeout(() => {
            formSuccess.classList.add('hidden');
        }, 5000);
        
        // Log the "email" data (in a real app, this would be sent to a server)
        console.log('Love form submitted:', data);
        showFormSuccess(`Thank you ${data.name}! Your ${data.lovePercentage}% love has been received! 💕`);
        
    }, 2000);
}

function showFormError(message) {
    // Create or update error message
    let errorDiv = document.querySelector('.form-error');
    if (!errorDiv) {
        errorDiv = document.createElement('div');
        errorDiv.className = 'form-error';
        errorDiv.style.cssText = `
            background: rgba(255, 68, 68, 0.1);
            border: 1px solid rgba(255, 68, 68, 0.3);
            color: #ff4444;
            padding: 1rem;
            border-radius: 8px;
            margin: 1rem 0;
            text-align: center;
        `;
        document.querySelector('.love-form-container').appendChild(errorDiv);
    }
    
    errorDiv.textContent = message;
    setTimeout(() => {
        if (errorDiv) errorDiv.remove();
    }, 3000);
}

function showFormSuccess(message) {
    const successDiv = document.createElement('div');
    successDiv.className = 'form-success-message';
    successDiv.style.cssText = `
        background: rgba(186, 85, 211, 0.1);
        border: 1px solid rgba(186, 85, 211, 0.3);
        color: #9370DB;
        padding: 1rem;
        border-radius: 8px;
        margin: 1rem 0;
        text-align: center;
        animation: fadeInOut 5s ease-in-out;
    `;
    successDiv.textContent = message;
    
    document.querySelector('.love-form-container').appendChild(successDiv);
    
    setTimeout(() => {
        if (successDiv) successDiv.remove();
    }, 5000);
}

function createConfetti() {
    const confettiContainer = document.createElement('div');
    confettiContainer.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
        z-index: 1000;
    `;
    document.body.appendChild(confettiContainer);

    const confettiPieces = ['💜', '💕', '💖', '✨', '🌸', '🐱', '🐾'];
    
    for (let i = 0; i < 30; i++) {
        const confetti = document.createElement('div');
        confetti.textContent = confettiPieces[Math.floor(Math.random() * confettiPieces.length)];
        confetti.style.cssText = `
            position: absolute;
            top: -50px;
            left: ${Math.random() * 100}%;
            font-size: ${Math.random() * 20 + 15}px;
            animation: confettiFall ${Math.random() * 3 + 2}s ease-out forwards;
        `;
        confettiContainer.appendChild(confetti);
    }

    // Add confetti animation CSS
    if (!document.querySelector('#confetti-style')) {
        const style = document.createElement('style');
        style.id = 'confetti-style';
        style.textContent = `
            @keyframes confettiFall {
                to {
                    transform: translateY(100vh) rotate(720deg);
                    opacity: 0;
                }
            }
            @keyframes fadeInOut {
                0% { opacity: 0; transform: translateY(-10px); }
                20% { opacity: 1; transform: translateY(0); }
                80% { opacity: 1; transform: translateY(0); }
                100% { opacity: 0; transform: translateY(-10px); }
            }
        `;
        document.head.appendChild(style);
    }

    setTimeout(() => {
        confettiContainer.remove();
    }, 5000);
}

// My World Notes System Functions (existing functionality)
function initializeNotesSystem() {
    const addNoteBtn = document.getElementById('add-note-btn');
    const noteTitle = document.getElementById('note-title');
    const noteContent = document.getElementById('note-content');

    if (addNoteBtn) {
        addNoteBtn.addEventListener('click', function() {
            const title = noteTitle.value.trim();
            const content = noteContent.value.trim();

            if (title && content) {
                addNote(title, content);
                noteTitle.value = '';
                noteContent.value = '';
            } else {
                showNoteError('Please fill in both title and content! 🐾');
            }
        });
    }

    // Add note on Enter key press (Ctrl+Enter for content textarea)
    if (noteTitle) {
        noteTitle.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                e.preventDefault();
                addNoteBtn.click();
            }
        });
    }

    if (noteContent) {
        noteContent.addEventListener('keypress', function(e) {
            if (e.key === 'Enter' && e.ctrlKey) {
                e.preventDefault();
                addNoteBtn.click();
            }
        });
    }
}

function addNote(title, content) {
    const note = {
        id: Date.now().toString(),
        title: title,
        content: content,
        createdAt: new Date().toLocaleString()
    };

    notes.unshift(note); // Add to beginning of array
    saveNotesToStorage();
    renderNotes();
    
    // Show success animation
    const addNoteBtn = document.getElementById('add-note-btn');
    const originalText = addNoteBtn.textContent;
    addNoteBtn.textContent = 'Added! 🎉';
    addNoteBtn.style.background = '#4CAF50';
    
    setTimeout(() => {
        addNoteBtn.textContent = originalText;
        addNoteBtn.style.background = '';
    }, 1500);
}

function deleteNote(noteId) {
    if (confirm('Are you sure you want to delete this note? 🥺')) {
        notes = notes.filter(note => note.id !== noteId);
        saveNotesToStorage();
        renderNotes();
        
        // Show delete animation
        showNoteMessage('Note deleted! 🗑️');
    }
}

function editNote(noteId) {
    const note = notes.find(n => n.id === noteId);
    if (!note) return;

    const noteElement = document.querySelector(`[data-note-id="${noteId}"]`);
    const noteTitle = noteElement.querySelector('.note-title');
    const noteContentEl = noteElement.querySelector('.note-content');
    const noteActions = noteElement.querySelector('.note-actions');

    // Replace with edit form
    const originalTitle = note.title;
    const originalContent = note.content;

    noteTitle.innerHTML = `<input type="text" value="${escapeHtml(originalTitle)}" class="edit-title-input" style="width: 100%; border: 1px solid #ddd; padding: 0.5rem; border-radius: 4px;">`;
    noteContentEl.innerHTML = `<textarea class="edit-content-input" style="width: 100%; border: 1px solid #ddd; padding: 0.5rem; border-radius: 4px; min-height: 80px;">${escapeHtml(originalContent)}</textarea>`;
    
    noteActions.innerHTML = `
        <button onclick="saveEditedNote('${noteId}')" title="Save">💾</button>
        <button onclick="cancelEditNote('${noteId}')" title="Cancel">❌</button>
    `;
}

function saveEditedNote(noteId) {
    const noteElement = document.querySelector(`[data-note-id="${noteId}"]`);
    const newTitle = noteElement.querySelector('.edit-title-input').value.trim();
    const newContent = noteElement.querySelector('.edit-content-input').value.trim();

    if (newTitle && newContent) {
        const note = notes.find(n => n.id === noteId);
        note.title = newTitle;
        note.content = newContent;
        note.updatedAt = new Date().toLocaleString();
        
        saveNotesToStorage();
        renderNotes();
        showNoteMessage('Note updated! ✨');
    } else {
        showNoteError('Please fill in both title and content! 🐾');
    }
}

function cancelEditNote(noteId) {
    renderNotes(); // Re-render to cancel edit
}

// Make functions global for onclick handlers
window.deleteNote = deleteNote;
window.editNote = editNote;
window.saveEditedNote = saveEditedNote;
window.cancelEditNote = cancelEditNote;

function renderNotes() {
    const notesGrid = document.getElementById('notes-grid');
    
    if (!notesGrid) return;
    
    if (notes.length === 0) {
        notesGrid.innerHTML = `
            <div class="no-notes" style="text-align: center; padding: 2rem; color: var(--color-text-secondary);">
                <div style="font-size: 3rem; margin-bottom: 1rem;">📝</div>
                <p>No notes yet! Start sharing your world... 🌸</p>
            </div>
        `;
        return;
    }

    notesGrid.innerHTML = notes.map(note => `
        <div class="note-item" data-note-id="${note.id}">
            <div class="note-header">
                <h4 class="note-title">${escapeHtml(note.title)}</h4>
                <div class="note-actions">
                    <button onclick="editNote('${note.id}')" title="Edit">✏️</button>
                    <button onclick="deleteNote('${note.id}')" title="Delete">🗑️</button>
                </div>
            </div>
            <div class="note-content">${escapeHtml(note.content)}</div>
            <div class="note-date">
                Created: ${note.createdAt}
                ${note.updatedAt ? `<br>Updated: ${note.updatedAt}` : ''}
            </div>
        </div>
    `).join('');
}

function saveNotesToStorage() {
    try {
        localStorage.setItem('personal-website-notes', JSON.stringify(notes));
    } catch (error) {
        console.warn('Could not save notes to localStorage:', error);
    }
}

function loadNotesFromStorage() {
    try {
        const savedNotes = localStorage.getItem('personal-website-notes');
        if (savedNotes) {
            notes = JSON.parse(savedNotes);
        }
    } catch (error) {
        console.warn('Could not load notes from localStorage:', error);
        notes = [];
    }
    renderNotes();
}

function showNoteError(message) {
    showNoteMessage(message, 'error');
}

function showNoteMessage(message, type = 'success') {
    const messageDiv = document.createElement('div');
    messageDiv.className = 'note-message';
    messageDiv.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: ${type === 'error' ? 'rgba(255, 68, 68, 0.1)' : 'rgba(186, 85, 211, 0.1)'};
        border: 1px solid ${type === 'error' ? 'rgba(255, 68, 68, 0.3)' : 'rgba(186, 85, 211, 0.3)'};
        color: ${type === 'error' ? '#ff4444' : '#9370DB'};
        padding: 1rem;
        border-radius: 8px;
        z-index: 1000;
        animation: slideInRight 0.3s ease-out;
    `;
    messageDiv.textContent = message;
    
    document.body.appendChild(messageDiv);
    
    // Add slide animation CSS if not exists
    if (!document.querySelector('#message-style')) {
        const style = document.createElement('style');
        style.id = 'message-style';
        style.textContent = `
            @keyframes slideInRight {
                from {
                    transform: translateX(100%);
                    opacity: 0;
                }
                to {
                    transform: translateX(0);
                    opacity: 1;
                }
            }
        `;
        document.head.appendChild(style);
    }
    
    setTimeout(() => {
        messageDiv.style.animation = 'slideInRight 0.3s ease-in reverse';
        setTimeout(() => {
            if (messageDiv) messageDiv.remove();
        }, 300);
    }, 3000);
}

// Utility Functions
function escapeHtml(unsafe) {
    return unsafe
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}

// Interactive cat cursor effects
document.addEventListener('mousemove', function(e) {
    // Create floating cat paw prints occasionally
    if (Math.random() < 0.02) { // 2% chance
        createFloatingPaw(e.clientX, e.clientY);
    }
});

function createFloatingPaw(x, y) {
    const paw = document.createElement('div');
    paw.textContent = '🐾';
    paw.style.cssText = `
        position: fixed;
        left: ${x}px;
        top: ${y}px;
        pointer-events: none;
        z-index: 1000;
        font-size: 1rem;
        animation: floatUpFade 2s ease-out forwards;
    `;
    
    document.body.appendChild(paw);
    
    // Add animation CSS if not exists
    if (!document.querySelector('#paw-style')) {
        const style = document.createElement('style');
        style.id = 'paw-style';
        style.textContent = `
            @keyframes floatUpFade {
                0% {
                    opacity: 0.7;
                    transform: translateY(0) rotate(0deg);
                }
                100% {
                    opacity: 0;
                    transform: translateY(-50px) rotate(180deg);
                }
            }
        `;
        document.head.appendChild(style);
    }
    
    setTimeout(() => {
        paw.remove();
    }, 2000);
}

// Add keyboard shortcuts
document.addEventListener('keydown', function(e) {
    // Alt + number keys for navigation
    if (e.altKey && !e.shiftKey && !e.ctrlKey) {
        switch(e.key) {
            case '1':
                e.preventDefault();
                navigateToSection('home');
                break;
            case '2':
                e.preventDefault();
                navigateToSection('blog');
                break;
            case '3':
                e.preventDefault();
                navigateToSection('my-space');
                break;
            case '4':
                e.preventDefault();
                navigateToSection('my-world');
                break;
            case '5':
                e.preventDefault();
                navigateToSection('gallery');
                break;
            case '6':
                e.preventDefault();
                navigateToSection('contact');
                break;
        }
    }
    
    // ESC key to close modal
    if (e.key === 'Escape') {
        closeNoteModal();
    }
});

// Add some random cat animations
setInterval(() => {
    if (currentSection === 'home') {
        const cats = document.querySelectorAll('.floating-cat');
        cats.forEach(cat => {
            if (Math.random() < 0.3) { // 30% chance
                const originalEmoji = cat.textContent;
                const happyCats = ['😸', '😻', '😽'];
                cat.textContent = happyCats[Math.floor(Math.random() * happyCats.length)];
                
                setTimeout(() => {
                    cat.textContent = originalEmoji;
                }, 1000);
            }
        });
    }
}, 5000);

// Initialize some sample notes if none exist
function initializeSampleNotes() {
    if (notes.length === 0) {
        const sampleNotes = [
            {
                id: '1',
                title: 'Welcome to My World! 🌸',
                content: 'This is my personal space where I share thoughts, ideas, and moments that matter to me. Feel free to explore and get to know me better!',
                createdAt: new Date().toLocaleString()
            },
            {
                id: '2',
                title: 'About This Website 💜',
                content: 'I created this website as my little corner of the internet. It\'s designed with love, cats, and lots of lavender colors because those things make me happy!',
                createdAt: new Date(Date.now() - 86400000).toLocaleString() // Yesterday
            }
        ];
        
        notes = sampleNotes;
        saveNotesToStorage();
        renderNotes();
    }
}

// Initialize sample category notes if none exist
function initializeSampleCategoryNotes() {
    // Add sample notes for each category if empty
    const sampleData = {
        feminism: [
            {
                id: 'fem-1',
                title: 'Breaking Glass Ceilings 💪',
                content: 'Today I read about women breaking barriers in tech and science. It reminds me that every small step forward matters, and that we all have a role to play in creating equal opportunities.',
                createdAt: new Date(Date.now() - 172800000).toLocaleString(), // 2 days ago
                category: 'feminism'
            }
        ],
        creative: [
            {
                id: 'cre-1',
                title: 'Digital Art Inspiration ✨',
                content: 'Discovered a new digital painting technique today using layer blending modes. The way colors interact when you experiment with overlay and soft light is magical!',
                createdAt: new Date(Date.now() - 86400000).toLocaleString(), // Yesterday
                category: 'creative'
            }
        ],
        philosophy: [
            {
                id: 'phi-1',
                title: 'On Finding Balance 🌸',
                content: 'Life is like a dance between holding on and letting go. Today I learned that sometimes the most profound wisdom comes from simply accepting what is, while still working toward what could be.',
                createdAt: new Date().toLocaleString(),
                category: 'philosophy'
            }
        ],
        dreams: [
            {
                id: 'dre-1',
                title: 'Travel Dreams 🌟',
                content: 'I dream of visiting Japan during cherry blossom season. Walking through Kyoto temples, experiencing the peaceful beauty of nature and traditional culture. One day...',
                createdAt: new Date(Date.now() - 259200000).toLocaleString(), // 3 days ago
                category: 'dreams'
            }
        ]
    };

    Object.keys(categoryConfigs).forEach(category => {
        if (categoryNotes[category].length === 0 && sampleData[category]) {
            categoryNotes[category] = sampleData[category];
            saveCategoryNotesToStorage(category);
        }
        updateCategoryStats(category);
    });
}

// Initialize sample notes after a short delay
setTimeout(() => {
    initializeSampleNotes();
    initializeSampleCategoryNotes();
}, 1000);