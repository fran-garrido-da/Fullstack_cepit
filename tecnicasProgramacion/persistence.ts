import fs from "node:fs/promises";
import * as rlSync from "readline-sync";

async function createFile(fileName: string, content: string): Promise<void> {
  try {
    await fs.writeFile(fileName, content, "utf-8");
    console.log("File created");
  } catch (error) {
    console.log("Failed");
  }
}
createFile("tareas.txt", "");

async function updateFile(fileName: string, content: string): Promise<void> {
  const formattedContent: string = `\n${content}`;
  try {
    await fs.appendFile(fileName, formattedContent, "utf-8");
    console.log("File updated");
  } catch (error) {
    console.log("Failed");
  }
}

async function readFile(fileName: string): Promise<string> {
  try {await fs.readFile(fileName, "utf-8")
    return  fs.readFile(fileName, "utf-8")
  } catch (error) {
    return "Failed";
  }
}
function selectMenu(): number {
  console.log(`\nMENU:
    \n[1]: Crear tarea
    \n[2]: Leer tareas
    \n[3]: Salir`);
  const respuesta: number = rlSync.questionInt(`Eleccion: `);
  return respuesta;
}
let input: number = selectMenu();
while (input !== 3) {
  switch (input) {
    case 1:
      let content = rlSync.question(`Ingrese tarea: `);
      updateFile("tareas.txt", content);
      break;
    case 2:
         console.log(readFile("tareas.txt"))
      break;
    case 3:
      break;
    default:
      input = selectMenu();
  }
  input = selectMenu();
}
