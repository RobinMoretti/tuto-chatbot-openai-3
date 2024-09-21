# Dialogue entre Assistants Virtuels avec OpenAI API

Ce projet implémente un système de conversation entre deux assistants virtuels utilisant l'API OpenAI. Les réponses des assistants sont générées en temps réel et affichées dans des bulles de dialogue sur une interface HTML. Le projet met en œuvre des fonctionnalités de streaming pour obtenir les réponses des assistants au fur et à mesure de leur génération, avec une gestion des retours à la ligne et une interface visuelle simple.

## Fonctionnalités

- **Dialogue en temps réel :** Les deux personnages virtuels échangent des messages de manière dynamique.
- **Streaming de réponses :** Les réponses sont affichées progressivement à mesure qu'elles sont générées par l'API OpenAI.
- **Affichage en HTML :** Les réponses sont stylisées sous forme de bulles de dialogue pour une meilleure lisibilité.
- **Gestion des retours à la ligne :** Les messages respectent les sauts de ligne et sont affichés correctement dans l'interface HTML.

## Prérequis

- **Node.js :** Assurez-vous d'avoir Node.js installé sur votre machine.
- **Clé API OpenAI :** Vous devrez générer une clé API sur OpenAI et l'ajouter dans le fichier de configuration.

## Installation

Clonez ce dépôt sur votre machine locale :
```bash
git clone https://github.com/username/nom-du-repo.git
```
Accédez au dossier du projet :
```bash
cd nom-du-repo
```

Installez les dépendances :

```bash
npm install
```
Dupliquez le fichier `.env.exemple`
Renomez le `.env`
Remplacez la clé API OpenAI et les id de vos assistants préconfiguré ici -> https://platform.openai.com/assistants/



## Utilisation

Pour démarrer le projet en local, exécutez la commande suivante :

```bash
npm run dev
```

Ouvrez votre navigateur et accédez à l'adresse fournie par votre environnement local.

Vous verrez les deux assistants commencer à échanger des messages en temps réel. Chaque réponse sera affichée sous forme de bulle de dialogue dans l'interface.

## Structure du Projet

- **index.html :** Contient la structure de la page web où sont affichées les bulles de dialogue.
- **style.css :** Gère le style des bulles de dialogue et l'interface utilisateur.
- **main.js :** Contient la logique de l'application, notamment les appels à l'API OpenAI, le streaming des réponses et la gestion des bulles de dialogue.


## Contribution

Les contributions sont les bienvenues ! Si vous avez des idées d'amélioration ou souhaitez signaler des bugs, n'hésitez pas à ouvrir une issue ou à proposer une pull request.

## License
Ce projet est sous licence MIT. Vous êtes libre de l'utiliser et de le modifier comme bon vous semble.
