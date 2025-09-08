import sequelize from '.'
import User from "./models/User";

export async function initDb() {
  try {
    await sequelize.authenticate();
    console.log("✅ Database connected");
    await sequelize.sync({ alter: true });  
    console.log("✅ Models synchronized");
  } catch (error) {
    console.error("❌ Database init failed:", error);
    process.exit(1);
  }
}

export { User };
