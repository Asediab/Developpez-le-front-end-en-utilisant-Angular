# OlympicGamesStarter

Le but de cette application est de mettre à disposition des utilisateurs un dashboard permettant de visualiser les
informations des précédents Jeux olympiques (nombre de médailles par pays, etc.).

## Serveur de développement

Exécutez `ng serve` pour un serveur de développement.  
Accédez à `http://localhost:4200/`. L'application se rechargera automatiquement si vous modifiez l'un des fichiers
source.

## Déploiement de l'application

La procédure est la suivante :

1) Cloner le dépôt github https://github.com/Asediab/Developpez-le-front-end-en-utilisant-Angular.git
2) S'assurer que Docker est installé https://www.docker.com/
3) Exécuter la ligne de commande dans le dossier où se trouvent les fichiers téléchargés du point 1
4) Démarrer le système en utilisant les commandes :

Build
> docker build -t app-image

Run

> docker run -d -p 8080:80 app-image:latest

Arrêt

> docker stop app-image:latest

5) Ouvrir un browser web à l'adresse http://localhost:8080

Toutes les dépendances y compris la library `NGX-Charts` seront installées automatiquement pendant le processus de
construction du projet.

## Description technique

- Angular https://angular.io/
- NGX-CHARTS https://swimlane.github.io/ngx-charts/
