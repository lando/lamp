---
title: Configuration
description: Learn how to configure the Lando LAMP recipe.
---

# Configuration

While Lando [recipes](https://docs.lando.dev/config/recipes.html) set sane defaults so they work out of the box, they are also [configurable](https://docs.lando.dev/config/recipes.html#config).

Here are the configuration options, set to the default values, for this recipe's [Landofile](https://docs.lando.dev/config/lando.html). If you are unsure about where this goes or what this means we *highly recommend* scanning the [recipes documentation](https://docs.lando.dev/config/recipes.html) to get a good handle on how the magicks work.

```yaml
recipe: lamp
config:
  php: '7.4'
  composer_version: '2.0.7'
  webroot: .
  database: mysql:5.7
  xdebug: false
  config:
    server: SEE BELOW
    php: SEE BELOW
    database: SEE BELOW
    vhosts: SEE BELOW
```

Note that if the above config options are not enough, all Lando recipes can be further [extended and overriden](https://docs.lando.dev/config/recipes.html#extending-and-overriding-recipes).

## Choosing a php version

You can set `php` to any version that is available in our [php service](https://docs.lando.dev/php). However, you should make sure that whatever framework or custom code you write is designed to work with your choice.

The [recipe config](https://docs.lando.dev/config/recipes.html#config) to set the LAMP recipe to use `php` version `5.3` is shown below:

```yaml
recipe: lamp
config:
  php: '5.3'
```

## Choosing a composer version

You can set `composer_version` to any version that is available in our [php service](https://docs.lando.dev/php/config.html#installing-composer).

```yaml
recipe: lamp
config:
  composer_version: '1.10.1'
```

## Choosing a database backend

By default, this recipe will use the default version of our [mysql](https://docs.lando.devmysql.html) service as the database backend but you can also switch this to use [`mariadb`](https://docs.lando.devmariadb.html) or ['postgres'](https://docs.lando.devpostgres.html) instead. Note that you can also specify a version *as long as it is a version available for use with lando* for either `mysql`, `mariadb` or `postgres`.

If you are unsure about how to configure the `database`, we *highly recommend* you check out the [mysql](https://docs.lando.devmysql.html), [mariadb](https://docs.lando.devmariadb.html)and ['postgres'](https://docs.lando.devpostgres.html) services before you change the default.

#### Using MySQL (default)

```yaml
recipe: lamp
config:
  database: mysql
```

#### Using MariaDB

```yaml
recipe: lamp
config:
  database: mariadb
```

#### Using Postgres

```yaml
recipe: lamp
config:
  database: postgres
```

#### Using a custom version

```yaml
recipe: lamp
config:
  database: postgres:9.6
```

## Connecting to your database

Lando will automatically set up a database with a user and password and also set an environment variable called [`LANDO INFO`](https://docs.lando.dev/guides/lando-info.html) that contains useful information about how your application can access other Lando services.

The default database connection information for a LAMP site is shown below:

Note that the `host` is not `localhost` but `database`.

```yaml
database: lamp
username: lamp
password: lamp
host: database
# for mysql
port: 3306
# for postgres
# port: 5432
```

You can get also get the above information, and more, by using the [`lando info`](https://docs.lando.dev/cli/info.html) command.

## Using custom config files

You may need to override our [default LAMP config](https://github.com/lando/lamp/tree/main/recipes/lamp) with your own.

If you do this, you must use files that exist inside your application and express them relative to your project root as shown below:

Note that the default files may change based on how you set both `ssl` and `via`. Also note that the `vhosts` and `server` config will be explicitly for `apache`. We *highly recommend* you check out the [apache](https://docs.lando.devapache.html#configuration) if you plan to use a custom `vhosts` or `server` config.

**A hypothetical project**

Note that you can put your configuration files anywhere inside your application directory. We use a `config` directory in the below example but you can call it whatever you want such as `.lando`.

```bash
./
|-- config
   |-- default-ssl.conf
   |-- httpd.conf
   |-- my-custom.cnf
   |-- php.ini
|-- index.php
|-- .lando.yml
```

**Landofile using custom lamp config**

```yaml
recipe: lamp
config:
  config:
    database: config/my-custom.cnf
    php: config/php.ini
    server: config/httpd.conf
    vhosts: config/default-ssl.conf
```