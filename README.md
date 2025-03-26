# Liksi Kata for Mob Meetup

[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vitest](https://img.shields.io/badge/Vitest-ACD268?logo=vitest&logoColor=white)](https://vitest.dev/)
[![Stryker](https://img.shields.io/badge/Stryker-f1c40f?logo=stryker&logoColor=white)](https://stryker-mutator.io/)
[![Prettier](https://img.shields.io/badge/Prettier-c596c7?logo=prettier&logoColor=white)](https://prettier.io/)

## Kata Nearest color

### Introduction

Une couleur est faite de trois composants : rouge, vert et bleu.

En informatique, on représente les couleurs en mélangeant ces trois composants.

Chaque composant peut avoir une valeur allant de `0` (absence de la couleur) à `255` (couleur maximale).
Parfois, on utilise aussi des nombres hexadécimaux (entre `00` et `FF`) pour représenter ces valeurs, où `00` équivaut à `0` et `FF` à `255` en décimal.

Lorsqu’on écrit une couleur en hexadécimal, les deux premiers chiffres représentent le rouge, les deux suivants le vert, et les deux derniers le bleu.

Par exemple :

> `FF0000` représente du _rouge_ `00FF00` représente du _vert_ `0000FF` représente du _bleu_.

Pour cet exercice, on utilise une version simplifiée, avec seulement 3 chiffres :

> `F00` pour le _rouge_ (`FF0000`) `0F0` pour le _vert_ (`00FF00`) `00F` pour le _bleu_ (`0000FF`)

### Partie 1 : Trouver la couleur la plus proche

L’idée est de prendre une couleur (comme `F42`) et de deviner laquelle, parmi `F00` (_rouge_), `0F0` (_vert_), et `00F` (_bleu_), est la plus proche.

Exemple : La couleur la plus proche de `F42` est `F00` (_rouge_).

### Partie 2 : Cas d’égalité

Il est possible que plusieurs couleurs soient à égalité pour être les plus proches. Dans ce cas, on les liste toutes.

Exemple : Le _jaune_ `FF0` est fait à partir de _rouge_ (`F00`) et de _vert_ (`0F0`), donc les deux couleurs sont les plus proches.

Bonus

Refais l’exercice avec des couleurs à 6 chiffres. Trouve la couleur la plus éloignée. Compare les couleurs avec des mots-clés.
