
─ IMAGE SOURCES (Unsplash / Pexels CDN) ───
const IMG = {
    hero: 'https://images.unsplash.com/photo-1569288052389-dac9b0ac9eac?w=1400&q=80',
    heroSide: 'imagem_2026-02-10_093555363.png',
    eggs1: 'https://images.unsplash.com/photo-1582722872445-44dc5f7e3c8f?w=800&q=80',
    eggs2: 'https://images.unsplash.com/photo-1498654077810-12c21d4d6dc3?w=800&q=80',
    eggs3: 'https://images.unsplash.com/photo-1587486913049-53fc88980cfc?w=800&q=80',
    eggsFarm: 'https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?w=800&q=80',
    eggsCarton: 'https://images.unsplash.com/photo-1569288052389-dac9b0ac9eac?w=800&q=80',
    eggsOrganic: 'https://images.unsplash.com/photo-1598965675045-45c5e72c7d05?w=800&q=80',
    farm1: 'https://images.unsplash.com/photo-1500595046743-cd271d694d30?w=800&q=80',
    farm2: 'https://images.unsplash.com/photo-1516467508483-a7212febe31a?w=800&q=80',
    chickens: 'https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?w=800&q=80',
    recOmelete: 'https://images.unsplash.com/photo-1525351484163-7529414344d8?w=800&q=80',
    recBolo: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=800&q=80',
    recQuiche: 'https://images.unsplash.com/photo-1635321593217-40050ad13c74?w=800&q=80',
    recPancake: 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=800&q=80',
    recPudim: 'https://images.unsplash.com/photo-1624353365286-3f8d62daad51?w=800&q=80',
    recFrittata: 'https://images.unsplash.com/photo-1623428187969-5da2dcea5ebf?w=800&q=80',
};
─ RECIPES DATA ───
const recipes = [
    {
        id: 'omelete-especial',
        title: 'Omelete Especial Vitta',
        category: 'Café da Manhã',
        time: '15 min',
        difficulty: 'Fácil',
        image: IMG.recOmelete,
        desc: 'Uma omelete perfeita e fofa, feita com ovos frescos Granja Vitta, queijo e ervas finas.',
        ingredients: [
            '3 ovos frescos Granja Vitta',
            '2 colheres de leite',
            '50g de queijo mussarela ralado',
            'Sal e pimenta a gosto',
            'Cebolinha picada',
            'Tomate cereja cortado ao meio',
            '1 colher de manteiga',
            'Ervas finas a gosto'
        ],
        steps: [
            'Quebre os 3 ovos frescos Granja Vitta em uma tigela. Adicione o leite, sal e pimenta.',
            'Bata os ovos com um garfo até ficar uma mistura homogênea e levemente aerada.',
            'Aqueça uma frigideira antiaderente em fogo médio e adicione a manteiga.',
            'Quando a manteiga derreter e espumar, despeje a mistura de ovos na frigideira.',
            'Mexa suavemente com uma espátula nos primeiros 30 segundos, depois deixe cozinhar.',
            'Quando a superfície estiver quase firme, adicione o queijo, cebolinha e tomates.',
            'Dobre a omelete ao meio com cuidado e deixe mais 30 segundos.',
            'Sirva imediatamente, decorando com ervas finas por cima.'
        ]
    },
    {
        id: 'bolo-de-cenoura',
        title: 'Bolo de Cenoura com Cobertura',
        category: 'Sobremesas',
        time: '50 min',
        difficulty: 'Médio',
        image: IMG.recBolo,
        desc: 'O clássico bolo de cenoura brasileiro com cobertura de chocolate, feito com ovos Vitta.',
        ingredients: [
            '4 ovos frescos Granja Vitta',
            '3 cenouras médias',
            '1 xícara de óleo',
            '2 xícaras de açúcar',
            '2 e ½ xícaras de farinha de trigo',
            '1 colher de fermento em pó',
            '200g de chocolate meio amargo',
            '1 colher de manteiga',
            '1 lata de creme de leite'
        ],
        steps: [
            'Pré-aqueça o forno a 180°C. Unte uma forma com manteiga e farinha.',
            'Bata no liquidificador as cenouras, os ovos Granja Vitta e o óleo até ficar liso.',
            'Transfira para uma tigela, adicione o açúcar e a farinha peneirada. Misture bem.',
            'Acrescente o fermento e mexa delicadamente com uma espátula.',
            'Despeje a massa na forma e leve ao forno por 35-40 minutos.',
            'Para a cobertura, derreta o chocolate com a manteiga em banho-maria.',
            'Adicione o creme de leite e mexa até ficar liso e brilhante.',
            'Espere o bolo esfriar, desenforme e cubra com a cobertura de chocolate.'
        ]
    },
    {
        id: 'quiche-lorraine',
        title: 'Quiche Lorraine Clássica',
        category: 'Almoço',
        time: '60 min',
        difficulty: 'Médio',
        image: IMG.recQuiche,
        desc: 'Quiche cremosa e dourada com bacon e queijo gruyère, usando ovos fresquíssimos.',
        ingredients: [
            '4 ovos frescos Granja Vitta',
            '200ml de creme de leite fresco',
            '150g de bacon em cubos',
            '100g de queijo gruyère ralado',
            '1 massa de torta pronta',
            'Noz-moscada a gosto',
            'Sal e pimenta do reino',
            'Cebolinha para decorar'
        ],
        steps: [
            'Pré-aqueça o forno a 190°C. Forre uma forma de quiche com a massa.',
            'Fure o fundo da massa com um garfo e asse por 10 minutos (pré-assar).',
            'Frite o bacon até ficar crocante. Escorra em papel toalha.',
            'Bata os ovos Granja Vitta com o creme de leite, sal, pimenta e noz-moscada.',
            'Distribua o bacon e metade do queijo sobre a massa pré-assada.',
            'Despeje a mistura de ovos por cima e finalize com o restante do queijo.',
            'Asse por 30-35 minutos até dourar e a superfície ficar firme.',
            'Deixe descansar 10 minutos antes de cortar. Decore com cebolinha.'
        ]
    },
    {
        id: 'panquecas-americanas',
        title: 'Panquecas Americanas Fofas',
        category: 'Café da Manhã',
        time: '25 min',
        difficulty: 'Fácil',
        image: IMG.recPancake,
        desc: 'Panquecas incrivelmente fofas e douradas para começar o dia com energia.',
        ingredients: [
            '2 ovos frescos Granja Vitta',
            '1 e ½ xícara de farinha de trigo',
            '1 xícara de leite',
            '2 colheres de açúcar',
            '1 colher de fermento em pó',
            '2 colheres de manteiga derretida',
            'Pitada de sal',
            'Maple syrup e frutas para servir'
        ],
        steps: [
            'Separe as claras das gemas dos ovos Granja Vitta.',
            'Misture as gemas, leite e manteiga derretida em uma tigela.',
            'Em outra tigela, peneire farinha, açúcar, fermento e sal.',
            'Combine os ingredientes secos com os líquidos, mexendo apenas até incorporar.',
            'Bata as claras em neve e incorpore delicadamente à massa.',
            'Aqueça uma frigideira em fogo baixo e unte com um pouco de manteiga.',
            'Despeje conchas de massa e cozinhe até bolhas se formarem. Vire e doure o outro lado.',
            'Sirva empilhadas com maple syrup, frutas frescas e manteiga.'
        ]
    },
    {
        id: 'pudim-de-leite',
        title: 'Pudim de Leite Condensado',
        category: 'Sobremesas',
        time: '80 min',
        difficulty: 'Fácil',
        image: IMG.recPudim,
        desc: 'O pudim perfeito que derrete na boca, com calda caramelada e textura aveludada.',
        ingredients: [
            '3 ovos inteiros frescos Granja Vitta',
            '1 lata de leite condensado',
            '1 lata de leite (use a lata como medida)',
            '1 xícara de açúcar para a calda',
            '3 colheres de água para a calda'
        ],
        steps: [
            'Prepare a calda: coloque o açúcar e a água em uma forma de pudim no fogo.',
            'Mexa até o açúcar derreter e ficar com cor de caramelo dourado.',
            'Espalhe a calda por toda a forma, incluindo as laterais. Reserve.',
            'No liquidificador, bata os ovos Granja Vitta, o leite condensado e o leite por 3 minutos.',
            'Despeje a mistura na forma caramelizada.',
            'Cubra com papel alumínio e coloque em banho-maria no forno a 180°C.',
            'Asse por 60 minutos. Verifique com um palito — deve sair limpo.',
            'Espere esfriar completamente, leve à geladeira por 4 horas e desenforme.'
        ]
    },
    {
        id: 'frittata-legumes',
        title: 'Frittata de Legumes',
        category: 'Almoço',
        time: '35 min',
        difficulty: 'Fácil',
        image: IMG.recFrittata,
        desc: 'Frittata colorida e nutritiva, perfeita para um almoço leve e saudável.',
        ingredients: [
            '6 ovos frescos Granja Vitta',
            '1 abobrinha média fatiada',
            '1 pimentão vermelho em cubos',
            '½ cebola roxa fatiada',
            '100g de queijo feta esfarelado',
            'Azeite de oliva extra virgem',
            'Sal, pimenta e orégano',
            'Folhas de manjericão fresco'
        ],
        steps: [
            'Pré-aqueça o forno a 180°C.',
            'Refogue a cebola roxa em azeite até ficar translúcida.',
            'Adicione a abobrinha e o pimentão. Cozinhe por 5 minutos.',
            'Bata os 6 ovos Granja Vitta com sal, pimenta e orégano.',
            'Despeje os ovos batidos sobre os legumes na frigideira (que vá ao forno).',
            'Espalhe o queijo feta esfarelado por cima.',
            'Cozinhe em fogo baixo por 3 minutos, depois leve ao forno por 15 minutos.',
            'Retire quando estiver dourada e firme. Decore com manjericão fresco.'
        ]
    }
];
─ PAGE TEMPLATES ───
function homePage() {
    return `
    <div class="page-transition">
        <!-- HERO -->
        <section class="hero">
            <div class="hero-bg">
                <img src="${IMG.hero}" alt="Ovos frescos" loading="eager">
            </div>
            <div class="hero-overlay"></div>
            <div class="hero-particles" id="particles"></div>
            <div class="hero-content">
                <div class="hero-text">
                    <div class="hero-badge">Desde o campo à sua mesa</div>
                    <h1 class="hero-title">
                        Qualidade que<br>
                        você <span class="highlight">sente</span><br>
                        em cada ovo
                    </h1>
                    <p class="hero-slogan">OVO É VIDA</p>
                    <p class="hero-desc">
                        Na Granja Vitta, cada ovo é produzido com cuidado, amor e respeito.
                        Levamos nutrição e sabor à mesa da sua família todos os dias.
                    </p>
                    <div class="hero-buttons">
                        <a href="/produtos" data-link class="btn btn-primary">
                            Nossos Produtos
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                        </a>
                        <a href="/quem-somos" data-link class="btn btn-outline">Conheça a Vitta</a>
                    </div>
                </div>
                <div class="hero-visual">
                    <div class="hero-logo-showcase">
                        <div class="hero-logo-ring"></div>
                        <div class="hero-logo-ring"></div>
                        <div class="hero-logo-ring"></div>
                        <img src="vitta logo new.png" alt="Granja Vitta - Ovo é Vida" class="hero-logo-giant">
                    </div>
                    <div class="hero-floating-card card-1">
                        <div class="floating-number">100%</div>
                        <div class="floating-label">Natural & Fresco</div>
                    </div>
                    <div class="hero-floating-card card-2">
                        <div class="floating-number">+1M</div>
                        <div class="floating-label">Ovos por Mês</div>
                    </div>
                </div>
            </div>
        </section>
        <!-- STATS -->
        <section class="stats-band">
            <div class="stats-grid">
                <div class="stat-item reveal">
                    <div class="stat-number" data-count="15">0</div>
                    <div class="stat-label">Anos de Tradição</div>
                </div>
                <div class="stat-item reveal reveal-delay-1">
                    <div class="stat-number" data-count="1000000">0</div>
                    <div class="stat-label">Ovos / Mês</div>
                </div>
                <div class="stat-item reveal reveal-delay-2">
                    <div class="stat-number" data-count="500">0</div>
                    <div class="stat-label">Pontos de Venda</div>
                </div>
                <div class="stat-item reveal reveal-delay-3">
                    <div class="stat-number" data-count="100">0</div>
                    <div class="stat-label">% Qualidade</div>
                </div>
            </div>
        </section>
        <!-- PRODUCTS PREVIEW -->
        <section class="section" style="background: var(--bg-secondary);">
            <div class="section-container">
                <div class="section-header reveal">
                    <span class="section-tag">Nossos Produtos</span>
                    <h2 class="section-title">Do ninho, direto pra <span class="accent">sua mesa</span></h2>
                    <p class="section-subtitle">Seleção premium de ovos frescos, produzidos com todo cuidado e qualidade que sua família merece.</p>
                </div>
                <div class="products-grid">
                    ${productCard('Ovos Brancos Vitta', 'Ovos brancos selecionados, ideais para o dia a dia. Frescos, nutritivos e com sabor incomparável.', IMG.eggs1, 'Mais Vendido', ['Fresco', 'Nutritivo'])}
                    ${productCard('Ovos Vermelhos Vitta', 'Ovos vermelhos de galinhas alimentadas com ração balanceada. Cor vibrante e gema cremosa.', IMG.eggs2, 'Premium', ['Gema Firme', 'Saboroso'])}
                    ${productCard('Ovos Caipira Vitta', 'Ovos de galinhas criadas soltas, com alimentação natural. O sabor autêntico do campo.', IMG.eggs3, 'Caipira', ['Livre', 'Orgânico'])}
                </div>
                <div style="text-align: center; margin-top: 50px;" class="reveal">
                    <a href="/produtos" data-link class="btn btn-outline">Ver Todos os Produtos →</a>
                </div>
            </div>
        </section>
        <!-- ABOUT PREVIEW -->
        <section class="section">
            <div class="section-container">
                <div class="about-grid">
                    <div class="about-images reveal">
                        <img src="${IMG.farm1}" alt="Granja Vitta" class="about-img-main">
                        <img src="${IMG.chickens}" alt="Galinhas" class="about-img-accent">
                    </div>
                    <div class="about-text">
                        <span class="section-tag reveal">Quem Somos</span>
                        <h2 class="reveal">Uma história de <span class="accent">dedicação</span> e qualidade</h2>
                        <p class="reveal">A Granja Vitta nasceu do amor pela produção de alimentos de qualidade. Somos parte do <strong>Grupo Detrox</strong> e trabalhamos todos os dias para levar ovos frescos e nutritivos à mesa das famílias brasileiras.</p>
                        <p class="reveal">Nossa missão é simples mas poderosa: <em>Ovo é Vida</em>. Acreditamos que um bom ovo faz diferença na nutrição, na saúde e no sabor de cada refeição.</p>
                        <div class="about-values reveal">
                            <div class="value-item">
                                <div class="value-icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--crimson-light)" stroke-width="2"><ellipse cx="12" cy="14" rx="7" ry="9"/><path d="M12 5c0-2 1-3 2-3" opacity=".5"/></svg></div>
                                <div>
                                    <div class="value-title">Frescor Garantido</div>
                                    <div class="value-desc">Do ninho à embalagem em tempo recorde</div>
                                </div>
                            </div>
                            <div class="value-item">
                                <div class="value-icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--crimson-light)" stroke-width="2"><path d="M17 8C8 10 5.9 16.17 3.82 21.34l1.89.66L7.5 17"/><path d="M17 8c-4 0-8.5 2-11 6"/><path d="M17 8c2-1 4-3 4-6-3 0-5 2-6 4"/></svg></div>
                                <div>
                                    <div class="value-title">Sustentabilidade</div>
                                    <div class="value-desc">Compromisso com o meio ambiente</div>
                                </div>
                            </div>
                            <div class="value-item">
                                <div class="value-icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--crimson-light)" stroke-width="2"><path d="M22 11.08V12a10 10 0 11-5.93-9.14"/><path d="M22 4L12 14.01l-3-3"/></svg></div>
                                <div>
                                    <div class="value-title">Qualidade Total</div>
                                    <div class="value-desc">Controle rigoroso em cada etapa</div>
                                </div>
                            </div>
                            <div class="value-item">
                                <div class="value-icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--crimson-light)" stroke-width="2"><path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/></svg></div>
                                <div>
                                    <div class="value-title">Bem-estar Animal</div>
                                    <div class="value-desc">Galinhas saudáveis e bem cuidadas</div>
                                </div>
                            </div>
                        </div>
                        <div style="margin-top: 32px;" class="reveal">
                            <a href="/quem-somos" data-link class="btn btn-primary">Conheça Nossa História →</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- RECIPES PREVIEW -->
        <section class="section" style="background: var(--bg-secondary);">
            <div class="section-container">
                <div class="section-header reveal">
                    <span class="section-tag">Receitas</span>
                    <h2 class="section-title">Inspirações para <span class="accent">sua cozinha</span></h2>
                    <p class="section-subtitle">Receitas deliciosas e fáceis de fazer com ovos frescos Granja Vitta. Do café da manhã à sobremesa.</p>
                </div>
                <div class="recipes-grid">
                    ${recipes.slice(0, 3).map(r => recipeCard(r)).join('')}
                </div>
                <div style="text-align: center; margin-top: 50px;" class="reveal">
                    <a href="/receitas" data-link class="btn btn-outline">Ver Todas as Receitas →</a>
                </div>
            </div>
        </section>
        <!-- CTA BANNER -->
        <section class="cta-banner">
            <div class="section-container">
                <div class="cta-content reveal">
                    <span class="section-tag">Ovo é Vida</span>
                    <h2>Quer levar <span class="accent">Granja Vitta</span> para seu negócio?</h2>
                    <p>Somos parceiros de supermercados, restaurantes e estabelecimentos em toda a região. Entre em contato e descubra como podemos atender você.</p>
                    <a href="/contato" data-link class="btn btn-primary">Fale Conosco →</a>
                </div>
            </div>
        </section>
    </div>`;
}
function produtosPage() {
    return `
    <div class="page-transition">
        <section class="section" style="padding-top: 160px;">
            <div class="section-container">
                <div class="section-header reveal">
                    <span class="section-tag">Produtos</span>
                    <h2 class="section-title">Nossos <span class="accent">Produtos</span></h2>
                    <p class="section-subtitle">Cada ovo Granja Vitta é sinônimo de frescor, sabor e nutrição. Conheça nossas linhas de produtos.</p>
                </div>
                <div class="products-grid">
                    ${productCard('Ovos Brancos — 12 unidades', 'Ovos brancos tipo grande, selecionados um a um. Ideais para o consumo diário, com gema cremosa e casca resistente. A escolha perfeita para toda receita.', IMG.eggs1, 'Mais Vendido', ['Fresco', 'Nutritivo'])}
                    ${productCard('Ovos Brancos — 30 unidades', 'Embalagem econômica perfeita para famílias grandes ou uso profissional. Mesma qualidade Vitta em maior quantidade.', IMG.eggsCarton, 'Econômico', ['Quantidade', 'Economia'])}
                    ${productCard('Ovos Vermelhos — 12 unidades', 'Ovos vermelhos de galinhas alimentadas com ração premium. Gema mais firme e sabor mais intenso. Perfeitos para receitas especiais.', IMG.eggs2, 'Premium', ['Gema Firme', 'Saboroso'])}
                    ${productCard('Ovos Vermelhos — 30 unidades', 'Grande quantidade de ovos vermelhos premium para quem não abre mão da qualidade no dia a dia.', IMG.eggs3, 'Família', ['Premium', 'Rendimento'])}
                    ${productCard('Ovos Caipira Vitta', 'Ovos de galinhas criadas soltas, com alimentação natural e sem aditivos. O verdadeiro sabor do campo na sua mesa.', IMG.eggsOrganic, 'Caipira', ['Livre', 'Natural'])}
                    ${productCard('Ovos Jumbo Vitta', 'Ovos extra grandes, selecionados especialmente. Ideais para confeitaria profissional e receitas que pedem ovos maiores.', IMG.eggsFarm, 'Jumbo', ['Extra Grande', 'Profissional'])}
                </div>
            </div>
        </section>
        <!-- QUALITY SECTION -->
        <section class="section" style="background: var(--bg-secondary);">
            <div class="section-container">
                <div class="about-grid">
                    <div class="about-text">
                        <span class="section-tag reveal">Qualidade</span>
                        <h2 class="reveal">Por que escolher <span class="accent">Granja Vitta</span>?</h2>
                        <p class="reveal">Nosso processo de produção é controlado do início ao fim. Desde a alimentação das galinhas até a embalagem final, cada etapa é monitorada para garantir que você receba o melhor ovo possível.</p>
                        <p class="reveal">Investimos em tecnologia, bem-estar animal e sustentabilidade porque acreditamos que um ovo de qualidade começa com respeito — respeito pelas aves, pelo meio ambiente e por você.</p>
                        <div class="about-values reveal">
                            <div class="value-item">
                                <div class="value-icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--crimson-light)" stroke-width="2"><circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/><path d="M11 8v6M8 11h6"/></svg></div>
                                <div>
                                    <div class="value-title">Controle de Qualidade</div>
                                    <div class="value-desc">Análises diárias em laboratório próprio</div>
                                </div>
                            </div>
                            <div class="value-item">
                                <div class="value-icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--crimson-light)" stroke-width="2"><path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z"/><path d="M3.27 6.96L12 12.01l8.73-5.05M12 22.08V12"/></svg></div>
                                <div>
                                    <div class="value-title">Embalagem Segura</div>
                                    <div class="value-desc">Proteção máxima até sua casa</div>
                                </div>
                            </div>
                            <div class="value-item">
                                <div class="value-icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--crimson-light)" stroke-width="2"><rect x="1" y="3" width="15" height="13" rx="1"/><path d="M16 8h4l3 3v5h-7V8z"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg></div>
                                <div>
                                    <div class="value-title">Logística Eficiente</div>
                                    <div class="value-desc">Entrega rápida e refrigerada</div>
                                </div>
                            </div>
                            <div class="value-item">
                                <div class="value-icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--crimson-light)" stroke-width="2"><circle cx="12" cy="8" r="7"/><path d="M8.21 13.89L7 23l5-3 5 3-1.21-9.12"/></svg></div>
                                <div>
                                    <div class="value-title">Certificações</div>
                                    <div class="value-desc">Selo de qualidade e procedência</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="about-images reveal">
                        <img src="${IMG.farm2}" alt="Qualidade Granja Vitta" class="about-img-main">
                    </div>
                </div>
            </div>
        </section>
        <section class="cta-banner">
            <div class="section-container">
                <div class="cta-content reveal">
                    <span class="section-tag">Ovo é Vida</span>
                    <h2>Quer revender <span class="accent">Granja Vitta</span>?</h2>
                    <p>Seja nosso parceiro e leve a qualidade Vitta para seus clientes. Condições especiais para atacado e varejo.</p>
                    <a href="/contato" data-link class="btn btn-primary">Solicitar Orçamento →</a>
                </div>
            </div>
        </section>
    </div>`;
}
function receitasPage() {
    return `
    <div class="page-transition">
        <section class="section" style="padding-top: 160px;">
            <div class="section-container">
                <div class="section-header reveal">
                    <span class="section-tag">Receitas</span>
                    <h2 class="section-title">Receitas com <span class="accent">Ovos Vitta</span></h2>
                    <p class="section-subtitle">Descubra receitas deliciosas para todas as ocasiões. Café da manhã, almoço e sobremesas — tudo com ovos frescos Granja Vitta.</p>
                </div>
                <div class="recipes-grid">
                    ${recipes.map(r => recipeCard(r)).join('')}
                </div>
            </div>
        </section>
        <section class="cta-banner">
            <div class="section-container">
                <div class="cta-content reveal">
                    <span class="section-tag">Dica Vitta</span>
                    <h2>O segredo está no <span class="accent">ovo fresco</span></h2>
                    <p>Toda grande receita começa com ingredientes de qualidade. Com Granja Vitta, você garante frescor e sabor em cada prato. Ovo é Vida!</p>
                    <a href="/produtos" data-link class="btn btn-primary">Conheça Nossos Ovos →</a>
                </div>
            </div>
        </section>
    </div>`;
}
function receitaDetailPage(slug) {
    const recipe = recipes.find(r => r.id === slug);
    if (!recipe) return notFoundPage();
    return `
    <div class="page-transition recipe-detail">
        <div class="section-container">
            <div class="recipe-detail-hero">
                <img src="${recipe.image}" alt="${recipe.title}">
                <div class="overlay"></div>
                <div class="detail-hero-content">
                    <span class="section-tag">${recipe.category}</span>
                    <h1 style="font-size: clamp(2rem, 4vw, 3rem); margin-bottom: 16px;">${recipe.title}</h1>
                    <div style="display: flex; gap: 20px; flex-wrap: wrap;">
                        <span class="recipe-time" style="position: static;"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg> ${recipe.time}</span>
                        <span class="recipe-difficulty" style="position: static;">${recipe.difficulty}</span>
                    </div>
                </div>
            </div>
            <div class="recipe-detail-grid">
                <div class="recipe-instructions">
                    <h3>Modo de Preparo</h3>
                    <ol>
                        ${recipe.steps.map(s => `<li>${s}</li>`).join('')}
                    </ol>
                    <div style="margin-top: 40px; padding: 24px; background: rgba(139,26,43,0.1); border-radius: var(--radius-sm); border: 1px solid rgba(139,26,43,0.2);">
                        <p style="font-size: 0.9rem; color: var(--text-secondary);">
                            <strong style="color: var(--crimson-light);"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--crimson-light)" stroke-width="2" style="display:inline;vertical-align:middle;margin-right:4px"><path d="M9 18h6M10 22h4M12 2a7 7 0 00-4 12.73V17h8v-2.27A7 7 0 0012 2z"/></svg>Dica Vitta:</strong> Use sempre ovos frescos Granja Vitta para o melhor resultado. Ovos em temperatura ambiente incorporam melhor nas receitas!
                        </p>
                    </div>
                </div>
                <div class="recipe-sidebar">
                    <div class="recipe-ingredients">
                        <h3>Ingredientes</h3>
                        <ul>
                            ${recipe.ingredients.map(i => `<li>${i}</li>`).join('')}
                        </ul>
                    </div>
                    <div style="margin-top: 24px; text-align: center;">
                        <a href="/receitas" data-link class="btn btn-outline" style="width: 100%; justify-content: center;">← Voltar às Receitas</a>
                    </div>
                </div>
            </div>
        </div>
    </div>`;
}
function quemSomosPage() {
    return `
    <div class="page-transition">
        <!-- HERO QUEM SOMOS -->
        <section class="section" style="padding-top: 160px; background: var(--bg-secondary);">
            <div class="section-container">
                <div class="about-grid">
                    <div class="about-text">
                        <span class="section-tag reveal">Quem Somos</span>
                        <h2 class="reveal" style="font-size: 2.8rem;">Granja Vitta<br><span class="accent">Ovo é Vida</span></h2>
                        <p class="reveal">A <strong>Granja Vitta</strong> é uma empresa do <strong>Grupo Detrox</strong>, referência na produção de ovos de alta qualidade. Nascemos com a missão de levar nutrição, frescor e sabor à mesa das famílias brasileiras.</p>
                        <p class="reveal">Nosso compromisso vai além da produção: investimos constantemente em tecnologia, bem-estar animal, sustentabilidade e capacitação de nossos colaboradores. Cada ovo que chega à sua casa carrega nosso DNA de excelência.</p>
                        <p class="reveal">O slogan <em>"Ovo é Vida"</em> traduz nossa filosofia: o ovo é um dos alimentos mais completos da natureza, fonte de proteínas, vitaminas e minerais essenciais. Levamos essa vida e energia para milhares de lares todos os dias.</p>
                    </div>
                    <div class="about-images reveal">
                        <img src="${IMG.farm1}" alt="Granja Vitta - Nossa história" class="about-img-main">
                        <img src="${IMG.farm2}" alt="Instalações Granja Vitta" class="about-img-accent">
                    </div>
                </div>
            </div>
        </section>
        <!-- STATS BAND -->
        <section class="stats-band">
            <div class="stats-grid">
                <div class="stat-item reveal">
                    <div class="stat-number" data-count="15">0</div>
                    <div class="stat-label">Anos de Mercado</div>
                </div>
                <div class="stat-item reveal reveal-delay-1">
                    <div class="stat-number" data-count="200">0</div>
                    <div class="stat-label">Colaboradores</div>
                </div>
                <div class="stat-item reveal reveal-delay-2">
                    <div class="stat-number" data-count="500">0</div>
                    <div class="stat-label">Pontos de Venda</div>
                </div>
                <div class="stat-item reveal reveal-delay-3">
                    <div class="stat-number" data-count="1000000">0</div>
                    <div class="stat-label">Ovos / Mês</div>
                </div>
            </div>
        </section>
        <!-- MISSÃO VISÃO VALORES -->
        <section class="section">
            <div class="section-container">
                <div class="section-header reveal">
                    <span class="section-tag">Nossos Pilares</span>
                    <h2 class="section-title">Missão, Visão e <span class="accent">Valores</span></h2>
                </div>
                <div class="products-grid" style="grid-template-columns: repeat(3, 1fr);">
                    <div class="product-card reveal" style="text-align: center;">
                        <div class="product-card-body" style="padding: 40px;">
                            <div style="margin-bottom: 20px;"><svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="var(--crimson-light)" stroke-width="1.5"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg></div>
                            <h3 class="product-card-title">Missão</h3>
                            <p class="product-card-desc">Produzir e fornecer ovos de alta qualidade, com frescor e sabor garantidos, contribuindo para a nutrição e bem-estar das famílias brasileiras.</p>
                        </div>
                    </div>
                    <div class="product-card reveal reveal-delay-1" style="text-align: center;">
                        <div class="product-card-body" style="padding: 40px;">
                            <div style="margin-bottom: 20px;"><svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="var(--crimson-light)" stroke-width="1.5"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg></div>
                            <h3 class="product-card-title">Visão</h3>
                            <p class="product-card-desc">Ser reconhecida como a marca de ovos mais confiável e inovadora do mercado, expandindo nossa presença e mantendo a excelência.</p>
                        </div>
                    </div>
                    <div class="product-card reveal reveal-delay-2" style="text-align: center;">
                        <div class="product-card-body" style="padding: 40px;">
                            <div style="margin-bottom: 20px;"><svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="var(--crimson-light)" stroke-width="1.5"><path d="M12 2L2 7l10 15 10-15-10-5z"/><path d="M2 7h20"/><path d="M6.5 7L12 22l5.5-15"/></svg></div>
                            <h3 class="product-card-title">Valores</h3>
                            <p class="product-card-desc">Qualidade, transparência, sustentabilidade, inovação, respeito pelo bem-estar animal e compromisso com nossos clientes e colaboradores.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- TIMELINE -->
        <section class="section" style="background: var(--bg-secondary);">
            <div class="section-container">
                <div class="section-header reveal">
                    <span class="section-tag">Nossa Trajetória</span>
                    <h2 class="section-title">Uma história de <span class="accent">crescimento</span></h2>
                </div>
                <div class="timeline">
                    <div class="timeline-item reveal">
                        <div class="timeline-content">
                            <div class="timeline-year">Fundação</div>
                            <h4 style="margin-bottom: 8px;">O Início de Tudo</h4>
                            <p class="timeline-text">A Granja Vitta nasceu com o sonho de produzir ovos de qualidade superior. Iniciamos com uma pequena produção e muito amor pelo que fazemos.</p>
                        </div>
                        <div class="timeline-dot"></div>
                    </div>
                    <div class="timeline-item reveal">
                        <div class="timeline-content">
                            <div class="timeline-year">Crescimento</div>
                            <h4 style="margin-bottom: 8px;">Expansão e Modernização</h4>
                            <p class="timeline-text">Investimos em tecnologia de ponta, ampliamos nossas instalações e nos tornamos referência regional em produção de ovos.</p>
                        </div>
                        <div class="timeline-dot"></div>
                    </div>
                    <div class="timeline-item reveal">
                        <div class="timeline-content">
                            <div class="timeline-year">Grupo Detrox</div>
                            <h4 style="margin-bottom: 8px;">Força e Solidez</h4>
                            <p class="timeline-text">Passamos a integrar o Grupo Detrox, fortalecendo nossa estrutura e ampliando nossa capacidade de atender o mercado com ainda mais qualidade.</p>
                        </div>
                        <div class="timeline-dot"></div>
                    </div>
                    <div class="timeline-item reveal">
                        <div class="timeline-content">
                            <div class="timeline-year">Hoje</div>
                            <h4 style="margin-bottom: 8px;">Ovo é Vida</h4>
                            <p class="timeline-text">Atendemos centenas de pontos de venda, produzimos milhões de ovos por mês e mantemos nosso compromisso com a qualidade e com você.</p>
                        </div>
                        <div class="timeline-dot"></div>
                    </div>
                </div>
            </div>
        </section>
        <!-- CTA -->
        <section class="cta-banner">
            <div class="section-container">
                <div class="cta-content reveal">
                    <span class="section-tag">Ovo é Vida</span>
                    <h2>Faça parte da <span class="accent">família Vitta</span></h2>
                    <p>Quer ser nosso parceiro ou tem alguma dúvida? Estamos prontos para atender você com a mesma dedicação que colocamos em cada ovo.</p>
                    <a href="/contato" data-link class="btn btn-primary">Entre em Contato →</a>
                </div>
            </div>
        </section>
    </div>`;
}
function contatoPage() {
    return `
    <div class="page-transition">
        <section class="section" style="padding-top: 160px;">
            <div class="section-container">
                <div class="section-header reveal">
                    <span class="section-tag">Contato</span>
                    <h2 class="section-title">Fale <span class="accent">Conosco</span></h2>
                    <p class="section-subtitle">Estamos prontos para atender você. Envie sua mensagem, dúvida ou solicitação de orçamento.</p>
                </div>
                <div class="contact-grid">
                    <div class="contact-info">
                        <h2 class="reveal">Vamos <span class="accent">conversar</span>?</h2>
                        <p class="reveal">Seja para revender nossos produtos, tirar dúvidas ou enviar uma sugestão, estamos aqui para você. A Granja Vitta valoriza cada contato.</p>
                        <div class="contact-items">
                            <div class="contact-item reveal">
                                <div class="contact-item-icon"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--crimson-light)" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg></div>
                                <div class="contact-item-text">
                                    <h4>Endereço</h4>
                                    <p>Região Metropolitana - Brasil</p>
                                </div>
                            </div>
                            <div class="contact-item reveal reveal-delay-1">
                                <div class="contact-item-icon"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--crimson-light)" stroke-width="2"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg></div>
                                <div class="contact-item-text">
                                    <h4>Telefone</h4>
                                    <p>(00) 0000-0000</p>
                                </div>
                            </div>
                            <div class="contact-item reveal reveal-delay-2">
                                <div class="contact-item-icon"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--crimson-light)" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><path d="M22 6l-10 7L2 6"/></svg></div>
                                <div class="contact-item-text">
                                    <h4>E-mail</h4>
                                    <p>contato@granjavitta.com.br</p>
                                </div>
                            </div>
                            <div class="contact-item reveal reveal-delay-3">
                                <div class="contact-item-icon"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--crimson-light)" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg></div>
                                <div class="contact-item-text">
                                    <h4>Horário</h4>
                                    <p>Seg a Sex: 08h às 18h | Sáb: 08h às 12h</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="contact-form reveal">
                        <form id="contactForm" onsubmit="handleContactSubmit(event)">
                            <div class="form-row">
                                <div class="form-group">
                                    <label>Nome</label>
                                    <input type="text" placeholder="Seu nome completo" required>
                                </div>
                                <div class="form-group">
                                    <label>Telefone</label>
                                    <input type="tel" placeholder="(00) 00000-0000">
                                </div>
                            </div>
                            <div class="form-group">
                                <label>E-mail</label>
                                <input type="email" placeholder="seu@email.com" required>
                            </div>
                            <div class="form-group">
                                <label>Assunto</label>
                                <select required>
                                    <option value="">Selecione...</option>
                                    <option value="orcamento">Solicitar Orçamento</option>
                                    <option value="revenda">Quero Revender</option>
                                    <option value="duvida">Dúvida</option>
                                    <option value="sugestao">Sugestão</option>
                                    <option value="outro">Outro</option>
                                </select>
                            </div>
                            <div class="form-group">
                                <label>Mensagem</label>
                                <textarea placeholder="Escreva sua mensagem..." required></textarea>
                            </div>
                            <button type="submit" class="btn btn-primary" style="width: 100%; justify-content: center;">Enviar Mensagem →</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    </div>`;
}
function notFoundPage() {
    return `
    <div class="page-transition">
        <section class="section" style="padding-top: 200px; min-height: 70vh; display: flex; align-items: center;">
            <div class="section-container" style="text-align: center;">
                <div style="font-size: 8rem; font-family: 'Playfair Display', serif; font-weight: 900; background: var(--gradient-crimson); -webkit-background-clip: text; -webkit-text-fill-color: transparent;"">404</div>
                <h2 style="margin-bottom: 16px;">Página não encontrada</h2>
                <p style="color: var(--text-secondary); margin-bottom: 40px;">Ops! Parece que esse ovo rolou para longe demais.</p>
                <a href="/" data-link class="btn btn-primary">Voltar ao Início →</a>
            </div>
        </section>
    </div>`;
}
─ CARD HELPERS ───
function productCard(title, desc, img, badge, features) {
    return `
    <div class="product-card reveal">
        <div class="product-card-image">
            <img src="${img}" alt="${title}" loading="lazy">
            <span class="product-card-badge">${badge}</span>
        </div>
        <div class="product-card-body">
            <h3 class="product-card-title">${title}</h3>
            <p class="product-card-desc">${desc}</p>
            <div class="product-card-footer">
                <div class="product-features">
                    ${features.map(f => `<span class="product-feature">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 13l4 4L19 7"/></svg>
                        ${f}
                    </span>`).join('')}
                </div>
            </div>
        </div>
    </div>`;
}
function recipeCard(recipe) {
    return `
    <a href="/receitas/${recipe.id}" data-link class="recipe-card reveal">
        <div class="recipe-card-image">
            <img src="${recipe.image}" alt="${recipe.title}" loading="lazy">
            <span class="recipe-time"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg> ${recipe.time}</span>
            <span class="recipe-difficulty">${recipe.difficulty}</span>
        </div>
        <div class="recipe-card-body">
            <span class="recipe-category">${recipe.category}</span>
            <h3 class="recipe-card-title">${recipe.title}</h3>
            <p class="recipe-card-desc">${recipe.desc}</p>
        </div>
    </a>`;
}
const routes = [
    { path: '/', handler: homePage },
    { path: '/produtos', handler: produtosPage },
    { path: '/receitas', handler: receitasPage },
    { path: '/quem-somos', handler: quemSomosPage },
    { path: '/contato', handler: contatoPage },
];
function resolveRoute(path) {
    // Clean path
    path = path.replace(/\/+$/, '') || '/';
    // Check static routes
    const staticRoute = routes.find(r => r.path === path);
    if (staticRoute) return staticRoute.handler();
    // Check dynamic route for recipe detail
    const recipeMatch = path.match(/^\/receitas\/(.+)$/);
    if (recipeMatch) return receitaDetailPage(recipeMatch[1]);
    return notFoundPage();
}
function navigateTo(url) {
    history.pushState(null, null, url);
    renderPage();
}
function renderPage() {
    const app = document.getElementById('app');
    const path = window.location.pathname;
    app.innerHTML = resolveRoute(path);
    // Update active nav link
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
        const href = link.getAttribute('href');
        if (href === path || (path.startsWith(href) && href !== '/')) {
            link.classList.add('active');
        } else if (path === '/' && href === '/') {
            link.classList.add('active');
        }
    });
    // Close mobile menu
    document.getElementById('navMenu').classList.remove('open');
    document.getElementById('navToggle').classList.remove('active');
    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'instant' });
    // Update page title
    const titles = {
        '/': 'Granja Vitta | Ovo é Vida',
        '/produtos': 'Produtos | Granja Vitta',
        '/receitas': 'Receitas | Granja Vitta',
        '/quem-somos': 'Quem Somos | Granja Vitta',
        '/contato': 'Contato | Granja Vitta'
    };
    document.title = titles[path] || 'Granja Vitta | Ovo é Vida';
    // Reinitialize page features
    setTimeout(() => {
        initRevealAnimations();
        initCounters();
        createParticles();
    }, 100);
}
─ EVENT LISTENERS ───
document.addEventListener('DOMContentLoaded', () => {
    try {
        // Render initial page
        renderPage();
    } catch (e) {
        console.error('Error rendering page:', e);
        // Remove loader even if there's an error
        document.getElementById('loader').classList.add('hidden');
    }
    // Remove loader after delay
    setTimeout(() => {
        document.getElementById('loader').classList.add('hidden');
    }, 1500);
    // Handle all link clicks
    document.addEventListener('click', (e) => {
        const link = e.target.closest('[data-link]');
        if (link) {
            e.preventDefault();
            navigateTo(link.getAttribute('href'));
        }
    });
    // Handle browser back/forward
    window.addEventListener('popstate', renderPage);
    // Navbar scroll effect
    window.addEventListener('scroll', () => {
        const navbar = document.getElementById('navbar');
        navbar.classList.toggle('scrolled', window.scrollY > 50);
        // Back to top button
        const backBtn = document.querySelector('.back-to-top');
        if (backBtn) backBtn.classList.toggle('visible', window.scrollY > 600);
    });
    // Mobile nav toggle
    document.getElementById('navToggle').addEventListener('click', () => {
        document.getElementById('navMenu').classList.toggle('open');
        document.getElementById('navToggle').classList.toggle('active');
    });
    // Add back to top button
    const backBtn = document.createElement('button');
    backBtn.className = 'back-to-top';
    backBtn.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 19V5M5 12l7-7 7 7"/></svg>';
    backBtn.onclick = () => window.scrollTo({ top: 0, behavior: 'smooth' });
    document.body.appendChild(backBtn);
});
─ SCROLL REVEAL ───
function initRevealAnimations() {
    const reveals = document.querySelectorAll('.reveal:not(.visible)');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
    reveals.forEach(el => observer.observe(el));
}
─ COUNTER ANIMATION ───
function initCounters() {
    const counters = document.querySelectorAll('[data-count]');
    counters.forEach(counter => {
        if (counter.dataset.animated) return;
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    counter.dataset.animated = 'true';
                    const target = parseInt(counter.getAttribute('data-count'));
                    animateCounter(counter, target);
                    observer.unobserve(counter);
                }
            });
        }, { threshold: 0.5 });
        observer.observe(counter);
    });
}
function animateCounter(el, target) {
    const duration = 2000;
    const start = performance.now();
    function update(currentTime) {
        const elapsed = currentTime - start;
        const progress = Math.min(elapsed / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3); // ease out cubic
        const current = Math.floor(eased * target);
        if (target >= 1000000) {
            el.textContent = (current / 1000000).toFixed(1) + 'M+';
        } else if (target >= 1000) {
            el.textContent = Math.floor(current / 1000) + 'K+';
        } else {
            el.textContent = current + (target === 100 ? '%' : '+');
        }
        if (progress < 1) {
            requestAnimationFrame(update);
        }
    }
    requestAnimationFrame(update);
}
─ PARTICLES ───
function createParticles() {
    const container = document.getElementById('particles');
    if (!container) return;
    container.innerHTML = '';
    for (let i = 0; i < 30; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.animationDuration = (10 + Math.random() * 20) + 's';
        particle.style.animationDelay = (-Math.random() * 20) + 's';
        particle.style.width = (2 + Math.random() * 4) + 'px';
        particle.style.height = particle.style.width;
        container.appendChild(particle);
    }
}
─ CONTACT FORM HANDLER ───
function handleContactSubmit(e) {
    e.preventDefault();
    const btn = e.target.querySelector('button[type="submit"]');
    const originalText = btn.innerHTML;
    btn.innerHTML = '✓ Mensagem Enviada!';
    btn.style.background = 'linear-gradient(135deg, #2D7D46 0%, #45B369 100%)';
    setTimeout(() => {
        btn.innerHTML = originalText;
        btn.style.background = '';
        e.target.reset();
    }, 3000);
}
