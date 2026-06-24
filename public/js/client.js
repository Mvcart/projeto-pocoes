const API_BASE = '/api/potions';
const productList = document.getElementById('productList');

async function loadPotions() {
  try {
    const response = await fetch(API_BASE);
    if (!response.ok) throw new Error('Erro ao carregar produtos');
    const potions = await response.json();
    renderProducts(potions);
  } catch (error) {
    console.error(error);
    productList.innerHTML = '<p>Desculpe, não foi possível carregar os produtos no momento.</p>';
  }
}

function renderProducts(potions) {
  if (potions.length === 0) {
    productList.innerHTML = '<p>Nenhuma poção disponível no momento.</p>';
    return;
  }

  let html = '';
  potions.forEach(p => {
    html += `
      <div class="potion-card">
        <div class="image-wrapper">
          <img src="${p.image}" alt="${p.name}" loading="lazy">
        </div>
        <h3>${p.name}</h3>
        <p class="price">💰 ${p.price} moedas</p>
        <p class="description">${p.description}</p>
        <div class="actions">
          <button class="btn buy-btn" data-id="${p.id}">Comprar</button>
        </div>
      </div>
    `;
  });
  productList.innerHTML = html;

  // Evento para o botão "Comprar" (apenas exibe um alerta)
  document.querySelectorAll('.buy-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const id = e.target.dataset.id;
      alert(`Poção ${id} adicionada ao carrinho (funcionalidade em desenvolvimento).`);
    });
  });
}

loadPotions();