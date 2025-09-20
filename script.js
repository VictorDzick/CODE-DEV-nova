document.addEventListener('DOMContentLoaded', function() {
            const track = document.querySelector('.carousel-track');
            const carouselContainer = document.querySelector('.carousel-container');
            const navContainer = document.querySelector('.carousel-nav');
            const prevBtn = document.querySelector('.carousel-control.prev');
            const nextBtn = document.querySelector('.carousel-control.next');
            
            // Dados dos cards com imagens
            const cardData = [
                {
                    imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
                    title: 'Sites personalizados',
                    content: 'Desenvolvemos sites totalmente personalizados com as melhores tecnologias do mercado para seu negócio.'
                },
                {
                    imageUrl: 'img/automacao ia.jpg',
                    title: 'Automações com IA',
                    content: 'Automações com inteligência artificial para tornar seus processos mais simples e eficazes.'
                },
                {
                    imageUrl: 'img/alta conversao.jpg',
                    title: 'Landing pages de alta conversão',
                    content: 'Landing pages que convertem visitantes em clientes com designs modernos e eficientes.'
                },
                {
                    imageUrl: 'https://images.unsplash.com/photo-1545235617-9465d2a55698?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
                    title: 'UI e UX Design',
                    content: 'Design focado em melhorar a experiência do usuário, tornando seu site mais agradável e eficiente.'
                },
            ];
            
            // Gerar cards
            cardData.forEach((data, index) => {
                const card = document.createElement('div');
                card.className = 'card';
                card.innerHTML = `
                    <img src="${data.imageUrl}" alt="${data.title}" class="card-image">
                    <h2>${data.title}</h2>
                    <p>${data.content}</p>
                `;
                track.appendChild(card);
                
                // Gerar pontos de navegação
                const dot = document.createElement('span');
                dot.className = 'nav-dot';
                if (index === 0) dot.classList.add('active');
                dot.setAttribute('data-index', index);
                navContainer.appendChild(dot);
            });
            
            const cards = document.querySelectorAll('.card');
            const dots = document.querySelectorAll('.nav-dot');
            
            // Clonar primeiros cards para criar efeito infinito
            for (let i = 0; i < 2; i++) {
                const clone = cards[i].cloneNode(true);
                track.appendChild(clone);
            }
            
            let cardWidth = cards[0].offsetWidth + 40;
            let currentIndex = 0;
            let autoSlideInterval;
            let isTransitioning = false;
            
            // Função para mover o carrossel
            function moveCarousel() {
                if (isTransitioning) return;
                
                isTransitioning = true;
                track.style.transition = 'transform 0.5s ease-in-out';
                track.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
                
                // Atualizar dots de navegação
                const actualIndex = currentIndex % cards.length;
                dots.forEach((dot, index) => {
                    dot.classList.toggle('active', index === actualIndex);
                });
                
                setTimeout(() => {
                    isTransitioning = false;
                    
                    // Se estiver no final dos cards clonados, voltar ao início sem transição
                    if (currentIndex >= cards.length) {
                        track.style.transition = 'none';
                        currentIndex = 0;
                        track.style.transform = `translateX(0)`;
                    }
                    
                    // Se estiver antes do início, ir para o final sem transição
                    if (currentIndex < 0) {
                        track.style.transition = 'none';
                        currentIndex = cards.length - 1;
                        track.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
                    }
                }, 500);
            }
            
            // Iniciar movimento automático
            function startAutoSlide() {
                autoSlideInterval = setInterval(() => {
                    currentIndex++;
                    moveCarousel();
                }, 4000);
            }
            
            // Parar movimento automático
            function stopAutoSlide() {
                clearInterval(autoSlideInterval);
            }
            
            // Event listeners para os dots de navegação
            dots.forEach(dot => {
                dot.addEventListener('click', function() {
                    currentIndex = parseInt(this.getAttribute('data-index'));
                    moveCarousel();
                    stopAutoSlide();
                    startAutoSlide();
                });
            });
            
            // Event listeners para os botões de navegação
            nextBtn.addEventListener('click', function() {
                currentIndex++;
                moveCarousel();
                stopAutoSlide();
                startAutoSlide();
            });
            
            prevBtn.addEventListener('click', function() {
                currentIndex--;
                moveCarousel();
                stopAutoSlide();
                startAutoSlide();
            });
            
            // Pausar auto slide quando o mouse estiver sobre o carrossel
            carouselContainer.addEventListener('mouseenter', stopAutoSlide);
            carouselContainer.addEventListener('mouseleave', startAutoSlide);
            
            // Iniciar o carrossel automático
            startAutoSlide();
            
            // Ajustar no redimensionamento da janela
            window.addEventListener('resize', function() {
                cardWidth = cards[0].offsetWidth + 40;
                moveCarousel();
            });
        });

// FIM DO SCRIPT DOS NOSSOS SERVIÇOS






// SCRIPT DAS PERGUNTAS DO FAQ

const items = document.querySelectorAll(".faq-item");

    items.forEach(item => {
      item.addEventListener("click", () => {
        item.classList.toggle("active");
      });
    });

// FIM DO SCRIPT DAS PERGUNTAS



// SCRIPT DO MENU EFEITO HAMBUGUER
    document.addEventListener('DOMContentLoaded', function() {
            const menuToggle = document.querySelector('.menu-toggle');
            const nav = document.querySelector('nav');
            
            menuToggle.addEventListener('click', function() {
                this.classList.toggle('active');
                nav.classList.toggle('active');
            });
            
            // Fechar o menu ao clicar em um link (opcional)
            const navLinks = document.querySelectorAll('nav a');
            navLinks.forEach(link => {
                link.addEventListener('click', function() {
                    menuToggle.classList.remove('active');
                    nav.classList.remove('active');
                });
            });
            
            // Fechar o menu ao redimensionar para desktop (opcional)
            window.addEventListener('resize', function() {
                if (window.innerWidth > 768) {
                    menuToggle.classList.remove('active');
                    nav.classList.remove('active');
                }
            });
        });

        // FIMM DO SCRIPT EFEITO HAMBUGUER