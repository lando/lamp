---
title: LAMP Lando Plugin
description: Use a generic LAMP stack on Lando for local development; powered by Docker and Docker Compose; learn how to config php and apache version, use postgres or mysql or mariadb, composer, xdebug and custom config files, oh and also import and export databases.
next: ./config.html
---

# LAMP

The [LAMP](https://en.wikipedia.org/wiki/LAMP_%28software_bundle%29) stack is a common infrastructure designed to run PHP applications.

Lando offers a configurable [recipe](https://docs.lando.dev/landofile/recipes.html) for developing [LAMP](https://en.wikipedia.org/wiki/LAMP_%28software_bundle%29) apps.

Note that this recipe is for a generic LAMP stack. Definitely check out Lando's [other recipes](https://docs.lando.dev/landofile/recipes.html) before you use this as there may be one designed specifically for use with your framework.

#### Features of this plugin:

* Configurable `php` version from `5.3` all the way to `8.3`
* Configurable `webroot`
* Configurable `apache` web server
* Configurable database backend (`mariadb`, `mysql`, or `postgres`)
* Configurable `composer`
* `xdebug`
