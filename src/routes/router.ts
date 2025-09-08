import { Router } from "express";
import sequelize from "../db";

const router = Router();

router.get("/", (req, res) => res.json({ message: "checking github action ecs" }));

router.get("/users", async (req, res) => {
  try {
    const users = await sequelize.models.User.findAll();
    res.json(users);
  } catch (error) {
    console.error("Error fetching users:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.post("/users", async (req, res) => {
  try {
    const user = await sequelize.models.User.create(req.body);
    res.status(201).json(user);
  } catch (error) {
    console.error("Error creating user:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.get("/health", (req, res) => {
  res.status(200).json({ message: "Everything is good here 👀" });
});

export default router;
