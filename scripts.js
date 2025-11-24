// Variable global para el idioma actual
let currentLang = 'es';

// Datos de los proyectos con sus códigos completos
const projectsData = {
    space: {
        demoUrl: 'https://codepen.io/collection/space-animation',
        code: `<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>Space Animation</title>
    <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body {
            background: #000;
            overflow: hidden;
            font-family: Arial, sans-serif;
        }
        .space-container {
            width: 100vw;
            height: 100vh;
            position: relative;
        }
        .star {
            position: absolute;
            background: white;
            border-radius: 50%;
            animation: twinkle 2s infinite;
        }
        @keyframes twinkle {
            0%, 100% { opacity: 0.3; }
            50% { opacity: 1; }
        }
        .planet {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 200px;
            height: 200px;
            background: radial-gradient(circle at 30% 30%, #4a90e2, #1a5490);
            border-radius: 50%;
            box-shadow: 0 0 60px rgba(74, 144, 226, 0.5);
            animation: rotate 20s linear infinite;
        }
        @keyframes rotate {
            from { transform: translate(-50%, -50%) rotate(0deg); }
            to { transform: translate(-50%, -50%) rotate(360deg); }
        }
    </style>
</head>
<body>
    <div class="space-container">
        <div class="planet"></div>
    </div>
    <script>
        // Crear estrellas aleatorias
        for (let i = 0; i < 200; i++) {
            const star = document.createElement('div');
            star.className = 'star';
            star.style.width = Math.random() * 3 + 'px';
            star.style.height = star.style.width;
            star.style.left = Math.random() * 100 + '%';
            star.style.top = Math.random() * 100 + '%';
            star.style.animationDelay = Math.random() * 2 + 's';
            document.querySelector('.space-container').appendChild(star);
        }
    </script>
</body>
</html>`
    },
    ecommerce: {
        demoUrl: 'https://codepen.io/collection/ecommerce-demo',
        code: `<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>E-Commerce Store</title>
    <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body {
            font-family: Arial, sans-serif;
            background: #f5f5f5;
        }
        .header {
            background: #2c3e50;
            color: white;
            padding: 20px;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        .cart-icon {
            position: relative;
            cursor: pointer;
        }
        .cart-count {
            position: absolute;
            top: -10px;
            right: -10px;
            background: #e74c3c;
            color: white;
            border-radius: 50%;
            width: 20px;
            height: 20px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 12px;
        }
        .products-grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
            gap: 20px;
            padding: 40px;
            max-width: 1200px;
            margin: 0 auto;
        }
        .product-card {
            background: white;
            border-radius: 10px;
            padding: 20px;
            box-shadow: 0 2px 10px rgba(0,0,0,0.1);
            transition: transform 0.3s;
        }
        .product-card:hover {
            transform: translateY(-5px);
        }
        .product-image {
            width: 100%;
            height: 200px;
            background: linear-gradient(135deg, #667eea, #764ba2);
            border-radius: 8px;
            margin-bottom: 15px;
        }
        .product-price {
            font-size: 24px;
            font-weight: bold;
            color: #27ae60;
            margin: 10px 0;
        }
        .add-to-cart {
            width: 100%;
            padding: 10px;
            background: #3498db;
            color: white;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            transition: background 0.3s;
        }
        .add-to-cart:hover {
            background: #2980b9;
        }
    </style>
</head>
<body>
    <div class="header">
        <h1>Mi Tienda</h1>
        <div class="cart-icon">
            🛒 <span class="cart-count">0</span>
        </div>
    </div>
    <div class="products-grid">
        <div class="product-card">
            <div class="product-image"></div>
            <h3>Producto 1</h3>
            <p class="product-price">$99.99</p>
            <button class="add-to-cart">Añadir al carrito</button>
        </div>
        <div class="product-card">
            <div class="product-image"></div>
            <h3>Producto 2</h3>
            <p class="product-price">$149.99</p>
            <button class="add-to-cart">Añadir al carrito</button>
        </div>
        <div class="product-card">
            <div class="product-image"></div>
            <h3>Producto 3</h3>
            <p class="product-price">$79.99</p>
            <button class="add-to-cart">Añadir al carrito</button>
        </div>
    </div>
</body>
</html>`
    },
    dashboard: {
        demoUrl: 'https://codepen.io/collection/analytics-dashboard',
        code: `<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>Analytics Dashboard</title>
    <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body {
            font-family: Arial, sans-serif;
            background: #1a1a2e;
            color: white;
        }
        .dashboard {
            padding: 40px;
            max-width: 1400px;
            margin: 0 auto;
        }
        .dashboard h1 {
            margin-bottom: 30px;
        }
        .stats-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 20px;
            margin-bottom: 30px;
        }
        .stat-card {
            background: linear-gradient(135deg, #667eea, #764ba2);
            padding: 30px;
            border-radius: 15px;
            box-shadow: 0 10px 30px rgba(0,0,0,0.3);
        }
        .stat-value {
            font-size: 36px;
            font-weight: bold;
            margin: 10px 0;
        }
        .stat-label {
            font-size: 14px;
            opacity: 0.9;
        }
        .chart-container {
            background: #16213e;
            padding: 30px;
            border-radius: 15px;
            margin-top: 20px;
        }
        .chart-bars {
            display: flex;
            align-items: flex-end;
            gap: 15px;
            height: 200px;
            margin-top: 20px;
        }
        .bar {
            flex: 1;
            background: linear-gradient(to top, #667eea, #764ba2);
            border-radius: 5px 5px 0 0;
            animation: grow 1s ease-out;
        }
        @keyframes grow {
            from { height: 0; }
        }
    </style>
</head>
<body>
    <div class="dashboard">
        <h1>📊 Panel de Analíticas</h1>
        <div class="stats-grid">
            <div class="stat-card">
                <div class="stat-label">Usuarios Totales</div>
                <div class="stat-value">12,543</div>
            </div>
            <div class="stat-card">
                <div class="stat-label">Ingresos</div>
                <div class="stat-value">$45,230</div>
            </div>
            <div class="stat-card">
                <div class="stat-label">Conversión</div>
                <div class="stat-value">23.5%</div>
            </div>
        </div>
        <div class="chart-container">
            <h2>Ventas por mes</h2>
            <div class="chart-bars">
                <div class="bar" style="height: 60%;"></div>
                <div class="bar" style="height: 80%;"></div>
                <div class="bar" style="height: 45%;"></div>
                <div class="bar" style="height: 90%;"></div>
                <div class="bar" style="height: 70%;"></div>
                <div class="bar" style="height: 55%;"></div>
            </div>
        </div>
    </div>
</body>
</html>`
    },
    portfolio: {
        demoUrl: 'https://codepen.io/collection/portfolio-web',
        code: `<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>Portfolio Creativo</title>
    <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body {
            font-family: 'Georgia', serif;
            background: #f9f9f9;
            color: #333;
        }
        .hero {
            min-height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
            text-align: center;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
        }
        .hero h1 {
            font-size: 72px;
            margin-bottom: 20px;
            animation: fadeInUp 1s ease-out;
        }
        .hero p {
            font-size: 24px;
            opacity: 0.9;
            animation: fadeInUp 1s ease-out 0.2s backwards;
        }
        @keyframes fadeInUp {
            from {
                opacity: 0;
                transform: translateY(30px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
        .projects {
            padding: 80px 40px;
            max-width: 1200px;
            margin: 0 auto;
        }
        .projects h2 {
            font-size: 48px;
            text-align: center;
            margin-bottom: 60px;
        }
        .project-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 40px;
        }
        .project-item {
            background: white;
            border-radius: 10px;
            overflow: hidden;
            box-shadow: 0 5px 20px rgba(0,0,0,0.1);
            transition: transform 0.3s;
        }
        .project-item:hover {
            transform: translateY(-10px);
        }
        .project-image {
            width: 100%;
            height: 250px;
            background: linear-gradient(135deg, #667eea, #764ba2);
        }
        .project-content {
            padding: 30px;
        }
    </style>
</head>
<body>
    <div class="hero">
        <div>
            <h1>John Doe</h1>
            <p>Diseñador & Desarrollador Creativo</p>
        </div>
    </div>
    <div class="projects">
        <h2>Mis Proyectos</h2>
        <div class="project-grid">
            <div class="project-item">
                <div class="project-image"></div>
                <div class="project-content">
                    <h3>Proyecto 1</h3>
                    <p>Descripción del proyecto creativo</p>
                </div>
            </div>
            <div class="project-item">
                <div class="project-image"></div>
                <div class="project-content">
                    <h3>Proyecto 2</h3>
                    <p>Descripción del proyecto creativo</p>
                </div>
            </div>
        </div>
    </div>
</body>
</html>`
    },
    tasks: {
        demoUrl: 'https://codepen.io/collection/task-manager',
        code: `<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>Gestor de Tareas</title>
    <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body {
            font-family: Arial, sans-serif;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            min-height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 20px;
        }
        .app-container {
            background: white;
            border-radius: 20px;
            padding: 40px;
            max-width: 600px;
            width: 100%;
            box-shadow: 0 20px 60px rgba(0,0,0,0.3);
        }
        h1 {
            color: #667eea;
            margin-bottom: 30px;
            text-align: center;
        }
        .task-input {
            display: flex;
            gap: 10px;
            margin-bottom: 30px;
        }
        .task-input input {
            flex: 1;
            padding: 15px;
            border: 2px solid #e0e0e0;
            border-radius: 10px;
            font-size: 16px;
        }
        .task-input button {
            padding: 15px 30px;
            background: #667eea;
            color: white;
            border: none;
            border-radius: 10px;
            cursor: pointer;
            font-size: 16px;
            transition: background 0.3s;
        }
        .task-input button:hover {
            background: #5568d3;
        }
        .task-list {
            list-style: none;
        }
        .task-item {
            background: #f8f9fa;
            padding: 15px;
            margin-bottom: 10px;
            border-radius: 10px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            transition: all 0.3s;
        }
        .task-item:hover {
            background: #e9ecef;
            transform: translateX(5px);
        }
        .delete-btn {
            background: #e74c3c;
            color: white;
            border: none;
            padding: 8px 15px;
            border-radius: 5px;
            cursor: pointer;
        }
    </style>
</head>
<body>
    <div class="app-container">
        <h1>📝 Gestor de Tareas</h1>
        <div class="task-input">
            <input type="text" placeholder="Nueva tarea...">
            <button>Añadir</button>
        </div>
        <ul class="task-list">
            <li class="task-item">
                <span>Completar el proyecto</span>
                <button class="delete-btn">Eliminar</button>
            </li>
            <li class="task-item">
                <span>Revisar el código</span>
                <button class="delete-btn">Eliminar</button>
            </li>
            <li class="task-item">
                <span>Actualizar documentación</span>
                <button class="delete-btn">Eliminar</button>
            </li>
        </ul>
    </div>
</body>
</html>`
    }
};

// Animate Progress Bars on Load
window.addEventListener('load', () => {
    const progressBars = document.querySelectorAll('.progress');
    
    setTimeout(() => {
        progressBars.forEach(bar => {
            const progress = bar.getAttribute('data-progress');
            bar.style.width = progress + '%';
        });
    }, 300);
});

// Theme Color Selector
const themeButtons = document.querySelectorAll('.theme-btn');

themeButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        const newColor = btn.getAttribute('data-color');
        document.documentElement.style.setProperty('--primary-purple', newColor);
        
        // Efecto visual
        btn.style.transform = 'scale(1.3)';
        setTimeout(() => {
            btn.style.transform = 'scale(1)';
        }, 200);
    });
});

// Dark Mode Toggle - FUNCIONAL
document.getElementById('darkModeToggle').addEventListener('click', () => {
    const body = document.body;
    const modeIcon = document.getElementById('modeIcon');
    const modeText = document.getElementById('modeText');
    
    // Alternar clase light-mode
    body.classList.toggle('light-mode');
    
    // Cambiar iconos y texto según el modo
    if (body.classList.contains('light-mode')) {
        modeIcon.textContent = '☀️';
        if (currentLang === 'es') {
            modeText.textContent = 'Modo Claro';
        } else {
            modeText.textContent = 'Light Mode';
        }
    } else {
        modeIcon.textContent = '🌙';
        if (currentLang === 'es') {
            modeText.textContent = 'Modo Oscuro';
        } else {
            modeText.textContent = 'Dark Mode';
        }
    }
});

// Language Selector - FUNCIONAL
function changeLanguage(lang) {
    currentLang = lang;
    
    // Cambiar todos los elementos con la clase 'translate'
    document.querySelectorAll('.translate').forEach(element => {
        const translation = element.getAttribute('data-' + lang);
        if (translation) {
            element.textContent = translation;
        }
    });
    
    // Actualizar el texto del botón dark mode según el idioma
    const modeText = document.getElementById('modeText');
    const body = document.body;
    if (body.classList.contains('light-mode')) {
        modeText.textContent = lang === 'es' ? 'Modo Claro' : 'Light Mode';
    } else {
        modeText.textContent = lang === 'es' ? 'Modo Oscuro' : 'Dark Mode';
    }
}

// Event listeners para botones de idioma
document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        // Remover clase active de todos los botones
        document.querySelectorAll('.lang-btn').forEach(b => b.classList.remove('active'));
        // Añadir clase active al botón clickeado
        btn.classList.add('active');
        
        // Cambiar idioma
        const lang = btn.getAttribute('data-lang');
        changeLanguage(lang);
    });
});

// Botones Demo y Code para TODOS los proyectos
document.querySelectorAll('.project-card').forEach(card => {
    const projectId = card.getAttribute('data-project');
    const demoBtn = card.querySelector('.demo-btn');
    const codeBtn = card.querySelector('.code-btn');
    
    // Demo button
    demoBtn.addEventListener('click', () => {
        const projectData = projectsData[projectId];
        document.getElementById('demoFrame').src = projectData.demoUrl;
        document.getElementById('demoModal').classList.add('show');
    });
    
    // Code button
    codeBtn.addEventListener('click', () => {
        const projectData = projectsData[projectId];
        document.getElementById('codeContent').textContent = projectData.code;
        document.getElementById('codeModal').classList.add('show');
    });
});

// Función para cerrar modales
function closeModal(modalId) {
    document.getElementById(modalId).classList.remove('show');
    if (modalId === 'demoModal') {
        document.getElementById('demoFrame').src = '';
    }
}

// Cerrar modal al hacer click fuera
window.addEventListener('click', (e) => {
    if (e.target.classList.contains('modal')) {
        closeModal(e.target.id);
    }
});

// Cerrar modal con tecla ESC
window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeModal('demoModal');
        closeModal('codeModal');
    }
});

// Intersection Observer para animaciones de scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observar secciones para fade-in animation
document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('.skills-section, .projects-section, .hobbies-section, .experiences-section');
    
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(section);
    });
    
    // Animación de las tarjetas de proyecto
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, index * 100);
    });
});

// Efecto hover en skill items
const skillItems = document.querySelectorAll('.skill-item');

skillItems.forEach(item => {
    item.addEventListener('mouseenter', () => {
        const progressBar = item.querySelector('.progress');
        progressBar.style.transform = 'scaleY(1.3)';
        progressBar.style.transition = 'transform 0.3s ease';
    });
    
    item.addEventListener('mouseleave', () => {
        const progressBar = item.querySelector('.progress');
        progressBar.style.transform = 'scaleY(1)';
    });
});

// Experience cards animation
const experienceCards = document.querySelectorAll('.experience-card');

const experienceObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateX(0)';
            }, index * 100);
        }
    });
}, observerOptions);

experienceCards.forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateX(-30px)';
    card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    experienceObserver.observe(card);
});

// Profile card entrance animation
const profileCard = document.querySelector('.profile-card');

if (profileCard) {
    setTimeout(() => {
        profileCard.style.opacity = '1';
        profileCard.style.transform = 'scale(1)';
    }, 100);
    
    profileCard.style.opacity = '0';
    profileCard.style.transform = 'scale(0.95)';
    profileCard.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
}