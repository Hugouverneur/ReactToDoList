# ✔ ToDoList React • Groupe Hojatxona

## Présentation

Todo list en React avec des animations pour chaque element interactif.
Projet réalisé dans le cadre du cours de développement Front avancée.

## Fonctionnalités

Toutes les fonctions sont créées dans App.js. Celle-ci sont ensuite passée en props au composants comme (la valeur des states) ce qui permet d'y accéder.

### Ajout

**Interaction :**
    L'utilisateur peut ajouter une tâche en rentrant un nom dans le champ dédié et en cliquant sur le bouton ajouter.\
**Animation :**
    Pure CSS pour le bouton d'ajout, quand une tâche est ajouté l'animation est joué avec ```react-transition-group``` et ```framer-motion```.\
**Implémentation :**
    Une fonction createItem() dans App.js, deux state ```tasklist``` (contiendra la liste des tâches) et ```inProp``` (paramètre utilisé pour activer l'animation 
    de la librairie ```react-transition-group```).\
    ETAPE DE REALISATION => createItem() appelée via un onClick() sur le bouton de création, elle prend en paramètre le nom rentré dans le input => le state ```tasklist```
    est mis à jour via un setState() une fois l'ajout réalisé, le state ```inProp``` est set à true pour jouer l'animation d'ajout du nouveau composant ```TaskItem```.\
    Une boucle map est utilisé pour boucler sur le state "tasklist" qui est passé en props au composant TaskList pour qu'il affiche toute les tâches ajoutées.

### Modification

**Interaction :**
    L'utilisateur peut cliquer sur "Rename" pour faire apparaitre un champ et un bouton de validation permettant la modification du nom de la tâche.\
**Animation :**
    La librairie ```framer-motion``` est utilisée pour l'animation sur le nom de la tache et pour faire apparaitre le champ input et le bouton de validation avec un fondu
    Les boutons "Rename" et "Delete" sont des composants ajoutés grâce au framework Material UI. Le bouton de validation est lui fait en pur.\
**Implémentation :**
    Le bouton "Rename" va appeler une fonction ```setEditItem``` qui prend l'id de la tache en paramètre, quand cette fonction est appelée le state "isEditing" va être mis à 1 et "taskToEdit" va prendre l'id de la tache en valeur, ce qui permet d'afficher le composant ```EditItem``` sur le bon composant ```TaskItem```. Une fois que le composant est disponnible, si l'on valide l'action la fonction ```editItem``` va être appelé elle prendre en paramètre la valeur de l'input et l'id de l'élément. La fonction va faire
    une recherche dans le state ```tasklist``` via l'id fournit en paramètre pour aller modifier le nom de l'élément donné en paramètre. Une fois celà finis le state ```taskList``` va être mis à jour avec la nouvelle valeur et le state ```isEditing: 0``` va repasser à zéro pour masquer le composant ```EditItem```.
      
### Suppression

**Interaction :**
    L'utilisateur clique sur le bouton "Delete" et la tâche est supprimée.\
**Animation :**
    Le framework material UI est utilisé pour la fluidité du bouton "Delete", la librairie ```react-transition-group``` est utilisée pour l'animation de disparition.\
**Implémentation :**
    Le bouton "Delete" va appeler la fonction ```deleteItem``` en lui passant en paramètre l'id de la tache à supprimer. Une recherche avec findIndex sur le state ```tasklist``` va être effectuée pour trouver l'élément à supprimer, il est supprimé avec la fonction splice. Le state ```tasklist``` est ensuite remis à jour et le state ```inProp``` est remis à false car l'animation de suppression a finit d'être jouée.

### Test
Nous avons réalisé un test pour vérifier que notre composant principal App fonctionne correctement.
La librairie utilisé est React Testing Library, qui est présente par défaut avec React.

## Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
