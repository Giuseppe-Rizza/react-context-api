# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript and enable type-aware lint rules. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.


ESERCIZIO

Sfruttiamo le Context API per rendere disponibile la lista dei post in tutta la nostra app:
- Partiamo col definire la lista dei post all’interno di App.jsx
- Se non lo abbiamo già fatto in precedenza, creiamo un componente PostsPage.jsx che conterrà al suo interno un titolo e un componente PostsList.jsx che mostra la lista di tutti i nostri post
- Creiamo un file per definire il nostro Context ed esportiamolo
- Importiamo il Provider in App.jsx e wrappiamoci la nostra applicazione
- Facciamo in modo che il componente PostsList.jsx ****recuperi i post consumando il Context e crei dunque una card per ciascuno di essi.

La struttura dell’App deve essere [in allegato trovate anche schemino] -> App.jsx > PostsPage.jsx > PostsList.jsx > PostCard.jsx

BONUS

Includere diverse sezioni con relative rotte (quindi oltre alla pagina di listato post, anche qualche pagina basica, tipo About, Contacts ), quindi gestione completa in App di rotte e context