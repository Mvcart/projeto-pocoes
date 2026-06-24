# 🧪 Poções e Soluções

Web Service para a loja de poções “Poções e Soluções”, desenvolvido para a cliente Innabelle Merigold.

Feito por: Marcos Cota, NUSP: 15511001

## Requisitos atendidos

- Cadastro, listagem e remoção de poções (nome, descrição, imagem, preço)
- Página administrativa com as três ações
- Página do comprador com:
  - descrição da loja
  - histórico (fundada em 1867) com fotos
  - rodapé com informações de contato
  - listagem de produtos (nome, imagem, descrição, preço, botão “Comprar” – sem funcionalidade)
- Consumo dos dados via JavaScript + AJAX
- Fonte Gill Sans e paleta de cores escuras

## Tecnologias

- **Node.js** + **Express** (v5)
- **Sequelize** (ORM) + **SQLite** (em memória)
- Frontend: HTML, CSS, JavaScript puro (módulos ES)

## Estrutura do projeto

```
.
├── config/
│   └── database.js
├── controllers/
│   └── potionController.js
├── models/
│   └── Potion.js
├── public/
│   ├── admin/
│   │   └── index.html
│   ├── client/
│   │   └── index.html
│   ├── css/
│   │   └── style.css
│   ├── images/
│   │   ├── arco_iris.png
│   │   ├── beleza.png
│   │   ├── blue_sky.png
│   │   ├── loja_antiga.png
│   │   ├── loja_atual.png
│   │   ├── perfume.png
│   │   ├── pinus.png
│   │   └── verdade.png
│   └── js/
│       ├── admin.js
│       └── client.js
├── routes/
│   └── potionRoutes.js
├── server.js
├── package.json
└── README.md
```

## Como executar

1. **Clone o repositório** e acesse a pasta.

2. **Instale as dependências**:

```
npm install
```

3. **Inicie o servidor**:

```
npm start
```

4. Acesse no navegador:

- Loja do comprador: `http://localhost:3000/client/`
- Painel administrativo: `http://localhost:3000/admin/`

O banco de dados é recriado em memória a cada inicialização, com as poções de exemplo já inseridas.

## Endpoints da API

| Método | Rota                | Descrição                    |
|--------|---------------------|------------------------------|
| GET    | `/api/potions`      | Lista todas as poções        |
| POST   | `/api/potions`      | Cria uma nova poção (JSON)   |
| DELETE | `/api/potions/:id`  | Remove uma poção pelo ID     |

Exemplo de corpo para `POST`:

```
{
  "name": "Poção Exemplo",
  "description": "Descrição da poção",
  "image": "/images/exemplo.png",
  "price": 150
}
```

## Observações

- Todas as imagens estão na pasta `public/images/` com extensão `.png` (conforme cadastro inicial).
- O botão “Comprar” exibe apenas um alerta – a funcionalidade de compra não foi implementada conforme solicitado.
- O servidor roda na porta `3000` por padrão.

---

© 1867 – Poções e Soluções – Beco da Última Saída
