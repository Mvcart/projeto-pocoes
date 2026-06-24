import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import sequelize from "./config/database.js";
import Potion from "./models/Potion.js";
import potionRoutes from "./routes/potionRoutes.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 3000;

// Middleware
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

// Rotas da API
app.use("/api", potionRoutes);

// Inicializa o banco e popula com dados iniciais
const seedDatabase = async () => {
  await sequelize.sync({ force: true }); // recria as tabelas

  // Poções iniciais (conforme o PDF)
  const initialPotions = [
    {
      name: "Blue Sky",
      description: "Essa poção provê um surto de inspiração por 24 horas. Foi utilizada por John Lennon quando escreveu Lucy in the Sky with Diamonds.",
      image: "/images/blue_sky.png",
      price: 300,
    },
    {
      name: "Perfume Misterioso",
      description: "Essa poção faz com que você fique cheirando lilás e groselha por 24 dias. Essência muito admirada pelos bruxos.",
      image: "/images/perfume.png",
      price: 200,
    },
    {
      name: "Pinus",
      description: "Essa poção faz com que você fique 10 cm mais alto! Observação: efeitos colaterais desconhecidos.",
      image: "/images/pinus.png",
      price: 3000,
    },
    {
      name: "Beleza Eterna",
      description: "Veneno que mata rápido.",
      image: "/images/beleza.png",
      price: 100,
    },
    {
      name: "Arco Íris",
      description: "Traz felicidade momentânea. Pode durar de 10 minutos a 2 dias.",
      image: "/images/arco_iris.png",
      price: 120,
    },
    {
      name: "Caldeirão das Verdades Secretas",
      description: "As pessoas lhe dirão apenas verdades por 1 hora. É necessário beber os 5L.",
      image: "/images/verdade.png",
      price: 150,
    },
  ];

  await Potion.bulkCreate(initialPotions);
  console.log("Banco de dados inicializado e populado!");
};

// Inicia o servidor após a sincronização do banco
app.listen(PORT, async () => {
  await seedDatabase();
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});