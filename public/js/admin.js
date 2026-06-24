// URL base da API
const API_BASE = '/api/potions';

// Referências aos elementos
const potionList = document.getElementById('potionList');
const form = document.getElementById('createPotionForm');

// Função para listar poções
async function loadPotions() {
  try {
    const response = await fetch(API_BASE);
    if (!response.ok) throw new Error('Erro ao carregar poções');
    const potions = await response.json();
    renderPotions(potions);
  } catch (error) {
    console.error(error);
    potionList.innerHTML = '<p>Erro ao carregar lista de poções.</p>';
  }
}

// Renderiza as poções na tabela/grade
function renderPotions(potions) {
  if (potions.length === 0) {
    potionList.innerHTML = '<p>Nenhuma poção cadastrada.</p>';
    return;
  }

  let html = '';
  potions.forEach(p => {
    html += `
      <div class="potion-card" data-id="${p.id}">
        <div class="image-wrapper">
          <img src="${p.image}" alt="${p.name}" loading="lazy">
        </div>
        <h3>${p.name}</h3>
        <p class="price">💰 ${p.price} moedas</p>
        <p class="description">${p.description}</p>
        <div class="actions">
          <button class="btn btn-danger delete-btn" data-id="${p.id}">Remover</button>
        </div>
      </div>
    `;
  });
  potionList.innerHTML = html;

  // Adiciona eventos de remoção
  document.querySelectorAll('.delete-btn').forEach(btn => {
    btn.addEventListener('click', async (e) => {
      const id = e.target.dataset.id;
      if (confirm('Tem certeza que deseja remover esta poção?')) {
        await deletePotion(id);
        loadPotions(); // recarrega a lista
      }
    });
  });
}

// Remove uma poção
async function deletePotion(id) {
  try {
    const response = await fetch(`${API_BASE}/${id}`, { method: 'DELETE' });
    if (!response.ok) throw new Error('Erro ao remover poção');
  } catch (error) {
    console.error(error);
    alert('Falha ao remover a poção.');
  }
}

// Submissão do formulário de criação
form.addEventListener('submit', async (e) => {
  e.preventDefault();

  const formData = new FormData(form);
  const potion = {
    name: formData.get('name'),
    description: formData.get('description'),
    image: formData.get('image'),
    price: parseFloat(formData.get('price')),
  };

  try {
    const response = await fetch(API_BASE, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(potion),
    });
    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.error || 'Erro ao criar poção');
    }
    form.reset();
    loadPotions(); // atualiza a lista
  } catch (error) {
    console.error(error);
    alert('Falha ao criar poção: ' + error.message);
  }
});

// Inicializa a página
loadPotions();