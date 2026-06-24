import Potion from "../models/Potion.js";

// Lista todas as poções
export const listPotions = async (req, res) => {
  try {
    const potions = await Potion.findAll();
    res.status(200).json(potions);
  } catch (error) {
    res.status(500).json({ error: "Erro ao listar poções" });
  }
};

// Cria uma nova poção
export const createPotion = async (req, res) => {
  try {
    const { name, description, image, price } = req.body;
    // Validação simples
    if (!name || !description || !image || price === undefined) {
      return res.status(400).json({ error: "Todos os campos são obrigatórios" });
    }
    const newPotion = await Potion.create({ name, description, image, price });
    res.status(201).json(newPotion);
  } catch (error) {
    res.status(500).json({ error: "Erro ao criar poção" });
  }
};

// Remove uma poção pelo ID
export const deletePotion = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Potion.destroy({ where: { id } });
    if (deleted) {
      res.status(200).json({ message: "Poção removida com sucesso" });
    } else {
      res.status(404).json({ error: "Poção não encontrada" });
    }
  } catch (error) {
    res.status(500).json({ error: "Erro ao remover poção" });
  }
};