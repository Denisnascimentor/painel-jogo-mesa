const gameData = {
    characters: [
        { id: 'pirata', name: 'Pirata', icon: '', color: 'bg-gray-700',
            concept: 'Combatente focado em dano e ganho material, com alto risco e alta recompensa.',
            passive: { name: 'Cobiça por Tesouros', desc: 'Sempre que um baú é encontrado, tem prioridade para pegar um item. Não pode ler pergaminhos sem a ajuda do Elfo.' },
            active1: { name: 'Golpe de Sabre', desc: 'Um ataque corpo a corpo padrão. Causa 1x de dano.' },
            active2: { name: 'Pilhagem', desc: 'Ao derrotar um inimigo, tem 50% de chance de roubar um item extra ou moedas.' },
            weakness: { name: 'Defesa Frágil', desc: 'Recebe 1.5x de dano de ataques de monstros "pesados" ou chefes.' },
            stats: { 'Dano': 5, 'Suporte': 1, 'Controle': 1, 'Sobrevivência': 2 }
        },
        { id: 'bruxa', name: 'Bruxa', icon: '', color: 'bg-purple-700',
            concept: 'Suporte e controle do campo de batalha, com a perigosa mecânica da maldição.',
            passive: { name: 'Marca da Maldição', desc: 'Começa o jogo com 1 ponto de "Corrupção". É mais suscetível aos sussurros do Dragão.' },
            active1: { name: 'Preparar Poção', desc: 'Usa ingredientes (coletados pelo Fauno) para criar poções de cura, veneno ou proteção.' },
            active2: { name: 'Elo Amaldiçoado', desc: 'Vincula um inimigo a outro por 2 turnos. 50% do dano que um recebe é transferido para o outro.' },
            weakness: { name: 'Vulnerabilidade Sagrada', desc: 'Recebe 1.5x de dano de fontes Sagradas.' },
            stats: { 'Dano': 2, 'Suporte': 4, 'Controle': 5, 'Sobrevivência': 3 }
        },
        { id: 'duende', name: 'Duende', icon: '', color: 'bg-orange-700',
            concept: 'O artesão do grupo, capaz de melhorar equipamentos, mas psicologicamente vulnerável.',
            passive: { name: 'Mestre Ferreiro', desc: 'Armas criadas por ele ignoram resistências de outros Duendes.' },
            active1: { name: 'Fortificar Equipamento', desc: 'Concede +1 de defesa a um aliado por uma batalha.' },
            active2: { name: 'Golpe de Martelo', desc: 'Ataque corpo a corpo com 25% de chance de atordoar o inimigo por 1 turno.' },
            weakness: { name: 'Crise de Inferioridade', desc: 'Rola com desvantagem em testes de carisma. Mais propenso a falhar em testes de vontade.' },
            stats: { 'Dano': 3, 'Suporte': 3, 'Controle': 2, 'Sobrevivência': 4 }
        },
        { id: 'sereia', name: 'Sereia', icon: '', color: 'bg-blue-700',
            concept: 'Manipuladora social e de campo de batalha, poderosa na água, mas vulnerável em terra.',
            passive: { name: 'Anfíbia', desc: 'Move-se sem penalidades na água. Em terra, sua velocidade é reduzida pela metade.' },
            active1: { name: 'Canto da Sereia', desc: 'Tenta hipnotizar inimigos em uma área, fazendo-os perder o próximo turno. Recarga de 3 turnos.' },
            active2: { name: 'Jato d\'Água', desc: 'Ataque à distância que causa 0.5x de dano, mas empurra o alvo 1 casa para trás.' },
            weakness: { name: 'Vulnerabilidade a Fogo', desc: 'Recebe 1.5x de dano de ataques de Fogo.' },
            stats: { 'Dano': 1, 'Suporte': 2, 'Controle': 4, 'Sobrevivência': 2 }
        },
        { id: 'elfo', name: 'Elfo', icon: '', color: 'bg-green-700',
            concept: 'O pilar de integridade e sabedoria do grupo. Guerreiro e erudito.',
            passive: { name: 'Mente Virtuosa', desc: 'Imune a efeitos de hipnose e controle mental de fontes normais.' },
            active1: { name: 'Ativar Runa', desc: 'Inscreve uma runa em uma arma aliada, dando a ela um bônus por uma batalha (+1 de dano ou dano elemental).' },
            active2: { name: 'Tiro Preciso', desc: 'Ataque à distância com arco que ignora parte da defesa do inimigo.' },
            weakness: { name: 'Orgulho Ancestral', desc: 'Pode recusar ajuda ou itens de raças que considera "inferiores".' },
            stats: { 'Dano': 4, 'Suporte': 2, 'Controle': 3, 'Sobrevivência': 3 }
        },
        { id: 'ser-pequeno', name: 'Ser Pequeno', icon: '', color: 'bg-yellow-700',
            concept: 'O batedor furtivo e astuto, excelente em evitar conflitos e explorar.',
            passive: { name: 'Pés Leves', desc: 'Maior chance de não ser percebido e pode evitar batalhas aleatórias.' },
            active1: { name: 'Camuflagem', desc: 'Fica invisível aos inimigos até seu próximo ataque, se estiver perto de cobertura.' },
            active2: { name: 'Arremesso de Pedra', desc: 'Força o inimigo a focar nele no próximo turno, sem causar dano.' },
            weakness: { name: 'Força Limitada', desc: 'Causa 0.75x de dano com armas pesadas e falha em testes de força.' },
            stats: { 'Dano': 1, 'Suporte': 3, 'Controle': 3, 'Sobrevivência': 4 }
        },
        { id: 'fauno', name: 'Fauno', icon: '', color: 'bg-lime-700',
            concept: 'O coração do grupo. Suporte focado em cura e recursos.',
            passive: { name: 'Harmonia com a Natureza', desc: 'Pode coletar ingredientes para a Bruxa em florestas. É menos visado por bestas.' },
            active1: { name: 'Canção da Floresta', desc: 'Cura uma pequena quantidade de vida de todos os aliados próximos.' },
            active2: { name: 'Raízes Prendedoras', desc: 'Imobiliza um inimigo terrestre por 1 turno.' },
            weakness: { name: 'Pacifista', desc: 'Causa apenas 0.5x de dano em qualquer ataque e não pode usar armas letais.' },
            stats: { 'Dano': 1, 'Suporte': 5, 'Controle': 2, 'Sobrevivência': 3 }
        },
        { id: 'fenix', name: 'Fênix', icon: '', color: 'bg-red-700',
            concept: 'O "seguro de vida" do grupo, com a mecânica única de sacrifício e renascimento.',
            passive: { name: 'Imunidade ao Fogo', desc: 'Não recebe dano de fontes de fogo.' },
            active1: { name: 'Toque Flamejante', desc: 'Ataque corpo a corpo que causa dano de fogo.' },
            active2: { name: 'Renascimento', desc: 'Ao morrer, pode reviver com metade da vida (1ª vez). Na 2ª morte, deve reviver outro herói e sair do jogo.' },
            weakness: { name: 'Vulnerabilidade à Água/Gelo', desc: 'Recebe 1.5x de dano de ataques de Água ou Gelo.' },
            stats: { 'Dano': 3, 'Suporte': 4, 'Controle': 1, 'Sobrevivência': 5 }
        }
    ],
    mechanics: [
        { type: 'Dano Normal', multiplier: '1x', example: 'Ataque padrão sem modificadores.' },
        { type: 'Fraqueza', multiplier: '1.5x', example: 'Sereia recebendo dano de Fogo.' },
        { type: 'Resistência', multiplier: '0.5x', example: 'Fauno causando dano.' },
        { type: 'Imunidade', multiplier: '0x', example: 'Fênix recebendo dano de Fogo.' },
        { type: 'Modificador de Arma', multiplier: '+/-', example: 'Hobbit com arma pesada (0.75x).' }
    ]
};

document.addEventListener('DOMContentLoaded', () => {
    const navButtons = document.querySelectorAll('.nav-button');
    const contentSections = document.querySelectorAll('.content-section');
    const characterGrid = document.querySelector('#characters .grid');
    const characterSheetContainer = document.getElementById('character-sheet');
    const mechanicsTableBody = document.getElementById('mechanics-table-body');
    let characterChart = null;

    function showSection(sectionId) {
        contentSections.forEach(section => {
            section.classList.add('hidden');
        });
        document.getElementById(sectionId).classList.remove('hidden');

        navButtons.forEach(button => {
            if (button.dataset.section === sectionId) {
                button.classList.remove('bg-stone-500', 'hover:bg-stone-600');
                button.classList.add('bg-amber-800', 'hover:bg-amber-900');
            } else {
                button.classList.remove('bg-amber-800', 'hover:bg-amber-900');
                button.classList.add('bg-stone-500', 'hover:bg-stone-600');
            }
        });

        characterSheetContainer.classList.add('hidden');
        document.querySelectorAll('.character-button').forEach(btn => btn.classList.remove('ring-4', 'ring-amber-500'));
    }

    function createRadarChart(character) {
        const ctx = document.getElementById('character-chart-canvas').getContext('2d');
        const labels = Object.keys(character.stats);
        const data = Object.values(character.stats);

        if (characterChart) {
            characterChart.destroy();
        }

        characterChart = new Chart(ctx, {
            type: 'radar',
            data: {
                labels: labels,
                datasets: [{
                    label: character.name,
                    data: data,
                    fill: true,
                    backgroundColor: 'rgba(217, 119, 6, 0.2)',
                    borderColor: 'rgb(217, 119, 6)',
                    pointBackgroundColor: 'rgb(217, 119, 6)',
                    pointBorderColor: '#fff',
                    pointHoverBackgroundColor: '#fff',
                    pointHoverBorderColor: 'rgb(217, 119, 6)'
                }]
            },
            options: {
                maintainAspectRatio: false,
                elements: {
                    line: {
                        borderWidth: 3
                    }
                },
                scales: {
                    r: {
                        angleLines: {
                            color: 'rgba(0, 0, 0, 0.1)'
                        },
                        grid: {
                            color: 'rgba(0, 0, 0, 0.1)'
                        },
                        pointLabels: {
                            font: {
                                size: 12,
                                weight: 'bold'
                            },
                            color: '#44403c'
                        },
                        ticks: {
                            backdropColor: 'transparent',
                            color: '#78716c',
                            stepSize: 1,
                            beginAtZero: true,
                            max: 5
                        }
                    }
                },
                plugins: {
                    legend: {
                        display: false
                    }
                }
            }
        });
    }

    function showCharacter(characterId) {
        const character = gameData.characters.find(c => c.id === characterId);
        if (!character) return;

        document.querySelectorAll('.character-button').forEach(btn => {
            btn.classList.remove('ring-4', 'ring-amber-500');
            if(btn.dataset.char === characterId) {
                btn.classList.add('ring-4', 'ring-amber-500');
            }
        });

        characterSheetContainer.innerHTML = `
            <div class="bg-white p-6 rounded-lg shadow-lg grid md:grid-cols-2 gap-8 items-center">
                <div class="space-y-4">
                    <h3 class="text-4xl font-bold text-amber-900">${character.name} ${character.icon}</h3>
                    <p class="text-stone-600 italic">"${character.concept}"</p>
                    <div class="space-y-3 text-sm">
                        <div><strong class="text-stone-800 block">Habilidade Passiva: ${character.passive.name}</strong><span class="text-stone-600">${character.passive.desc}</span></div>
                        <div><strong class="text-stone-800 block">Habilidade Ativa 1: ${character.active1.name}</strong><span class="text-stone-600">${character.active1.desc}</span></div>
                        <div><strong class="text-stone-800 block">Habilidade Ativa 2: ${character.active2.name}</strong><span class="text-stone-600">${character.active2.desc}</span></div>
                        <div class="bg-red-100 border-l-4 border-red-500 text-red-700 p-3 rounded-r-lg"><strong class="block">Fraqueza: ${character.weakness.name}</strong><span>${character.weakness.desc}</span></div>
                    </div>
                </div>
                <div class="chart-container">
                    <canvas id="character-chart-canvas"></canvas>
                </div>
            </div>
        `;
        characterSheetContainer.classList.remove('hidden');
        createRadarChart(character);
    }

    navButtons.forEach(button => {
        button.addEventListener('click', () => {
            showSection(button.dataset.section);
        });
    });

    gameData.characters.forEach(character => {
        const button = document.createElement('button');
        button.className = `character-button ${character.color} text-white p-4 rounded-lg shadow-md flex flex-col items-center justify-center transition-transform hover:scale-105`;
        button.dataset.char = character.id;
        button.innerHTML = `
            <span class="text-4xl">${character.icon}</span>
            <span class="font-bold mt-2 text-sm">${character.name}</span>
        `;
        button.addEventListener('click', () => showCharacter(character.id));
        characterGrid.appendChild(button);
    });

    gameData.mechanics.forEach(mechanic => {
        const row = document.createElement('tr');
        row.className = 'border-b border-stone-200 even:bg-stone-50';
        row.innerHTML = `
            <td class="py-3 px-4">${mechanic.type}</td>
            <td class="py-3 px-4">${mechanic.multiplier}</td>
            <td class="py-3 px-4">${mechanic.example}</td>
        `;
        mechanicsTableBody.appendChild(row);
    });

    showSection('overview');
});