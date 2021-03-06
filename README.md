# HeroesApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.0.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## Angular material

```sh
ng add @angular/material
```

- Purple/Green

- Global typo: yes

-Browser animation setup: yes

## Basic modules

```sh
ng g m auth
```

```sh
ng g m heroes
```

```sh
ng g m material
```

## Basic Components

```sh
ng g c auth/pages/login --skip-tests -is
```

```sh
ng g c auth/pages/registro --skip-tests -is
```

```sh
ng g c heroes/pages/agregar --skip-tests -is
```

```sh
ng g c heroes/pages/buscar --skip-tests -is
```

```sh
ng g c heroes/pages/heroe --skip-tests -is
```

```sh
ng g c heroes/pages/home --skip-tests -is
```

```sh
ng g c heroes/pages/listado --skip-tests -is
```

```sh
ng g c shared/errorPage --skip-tests -is
```

## Routes

- flat: no creara una carpeta para el module

```sh
ng g m appRouting --flat
```

## Internal auth routes

```sh
ng g m auth/authRouting --flat
```

## Internal heroes routes

```sh
ng g m heroes/heroesRouting --flat
```

# <!-- All Routes basic and lazy load -->

## Install flex layout ( better option )

```sh
npm i -s @angular/flex-layout @angular/cdk
```

## Link to icns

- https://fonts.google.com/icons?selected=Material+Icons:bookmark

## Fast backend

- https://www.npmjs.com/package/json-server

```sh
npm install -g json-server
```

- create folder with db.json and execute

```sh
json-server --watch db.json
```

## Create service to get data

- a??adir el HttpClientModule, en el app.module

```sh
ng g s heroes/services/heroes --skip-tests
```

## Get interfaces

https://quicktype.io/

## Heore component

```sh
ng g c heroes/components/heroeTarjeta --skip-tests -is
```

## Create PipeImagen

```sh
ng g pipe heroes/pipes/imagen --skip-tests
```

<!-- =========================== -->

## Contenido seccion 13 - finished

- Angular Material

- Interfaces y tipado

- Pipes personalizados

- Variables de entorno

- Autocomplete de AngularMaterial

- Peticiones HTTP

- JSON-Server

- Angular Flex y Flexbox

## Dialog component

```sh
ng g c heroes/components/confirmar --skip-tests -is
```

## Contenido seccion 14 - finished

- CRUD

  - Create

  - Read

  - Update

  - Delete

- Pipes puros e impuros

- Snacks

- Dialogs

- Inyecci??n de servicios manualmente

## Auth service

```sh
ng g s auth/services/auth
```

## Guard - service

```sh
ng g guard auth/guards/auth --skip-tests
```

select:

- CanActivate
- CanLoad

<!-- ================================================================ -->

## Section 15 - finished

- Protecci??n de rutas

- Rutas privadas

- Rutas p??blicas

- Servicio de autenticaci??n

- Guards

- CanActivate

- Can Load

- Mantener la sesi??n del usuario
