# OlympicGamesStarter

This project was generated with https://github.com/angular/angular-cli[Angular CLI] version 14.1.3.

## Development server

Run `ng serve` for a dev server.Navigate to `http://localhost:4200/`.The application will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project.
The build artifacts will be stored in the `dist/` directory.

## Déploiement de l'application

La procédure est la suivante :

1) Cloner le dépôt github https://github.com/Asediab/Developpez-le-front-end-en-utilisant-Angular.git

2) S'assurer que Docker est installé

3) Exécuter la ligne de commande dans le dossier où se trouvent les fichiers téléchargés du point 1

4) Démarrer le système en utilisant les commandes :

5) Ouvrir un browser web à l'adresse http://localhost:8080

Lancement

- `docker build -t app-image`

puis

- `docker run -d -p 8080:80 app-image:latest`

Arrêt

- `docker stop app-image:latest`

## Description technique

- Angular 14
- NGX-CHARTS 20
