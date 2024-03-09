import SimplexApp from "./simplex-app";

function main() {
  const inputTable = document.querySelector(".inputTable");
  if(!inputTable) throw new Error("No input table");
  const app = new SimplexApp(5, inputTable as HTMLElement);
  setTimeout(() => app.numberOfVariables = 6, 2000);
}

main();