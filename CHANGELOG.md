## {{ UNRELEASED_VERSION }} - [{{ UNRELEASED_DATE }}]({{ UNRELEASED_LINK }})

## v1.7.3 - [December 6, 2024](https://github.com/lando/lamp/releases/tag/v1.7.3)

* Updated the version index.md to get Docuverse page to build correctly.

## v1.7.2 - [December 4, 2024](https://github.com/lando/lamp/releases/tag/v1.7.2)

* Updated to [@lando/vitepress-theme-default-plus@v1.1.0-beta.24](https://github.com/lando/vitepress-theme-default-plus/releases/tag/v1.1.0-beta.24).

## v1.7.1 - [November 4, 2024](https://github.com/lando/lamp/releases/tag/v1.7.1)

* Updated to [@lando/vitepress-theme-default-plus@v1.1.0-beta.18](https://github.com/lando/vitepress-theme-default-plus/releases/tag/v1.1.0-beta.18).

## v1.7.0 - [October 25, 2024](https://github.com/lando/lamp/releases/tag/v1.7.0)

* Updated release process to generate an edge release when stable releases are created.

  * Removed unnecessary dependency lando/nginx.

## v1.6.0 - [October 18, 2024](https://github.com/lando/lamp/releases/tag/v1.6.0)

* Updated lando/php to v1.5.0.

## v1.5.0 - [September 30, 2024](https://github.com/lando/lamp/releases/tag/v1.5.0)

* Updated lando/mariadb to v1.5.0.
* Updated lando/mysql to v1.3.0.

## v1.4.1 - [September 6, 2024](https://github.com/lando/lamp/releases/tag/v1.4.1)

## Bug Fixes

* Fixed bug causing default `proxy` settings to be clobbered by user specified ones

## Internal

* Updated DevOps to use new `lando exec`
* Updated `ubuntu` test runners to `24.04`

## v1.4.0 - [May 27, 2024](https://github.com/lando/lamp/releases/tag/v1.4.0)

* Updated mariadb plugin [#51](https://github.com/lando/symfony/pull/51)
* Use mysql command for MariaDB 10.3.x and below
* Cleaned up test comments

## v1.3.0 - [March 8, 2024](https://github.com/lando/lamp/releases/tag/v1.3.0)

* Updated to latest database services.

## v1.2.1 - [March 6, 2024](https://github.com/lando/lamp/releases/tag/v1.2.1)

### Fixes

* Improved `database` selection for purposes of `config` loading, fixes some `database` bootup issues when the `database` type is overridden downstream

### Internal

* Updated config testing.

## v1.2.0 - [February 27, 2024](https://github.com/lando/lamp/releases/tag/v1.2.0)

### New Features

* Added support for `php:8.3`
* Added support for `php:8.2`

### Internal

* Updated to `@lando/php@1.2.0`
* Added config testing.

## v1.1.0 - [February 20, 2024](https://github.com/lando/lamp/releases/tag/v1.1.0)

* Included ability to specify `database: mssql` in the `config` section to maintain backwards compatibility. [@lando/mssql#31](https://github.com/lando/mssql/issues/31)

## v1.0.0 - [December 7, 2023](https://github.com/lando/lamp/releases/tag/v1.0.0)
    * Dialed fully for `lando update`

## v0.10.1 - [November 27, 2023](https://github.com/lando/lamp/releases/tag/v0.10.1)
* Changed our php-nginx service to a lamp-nginx.

## v0.10.0 - [November 21, 2023](https://github.com/lando/lamp/releases/tag/v0.10.0)
* Updated PHP/Nginx dependencies [#40](https://github.com/lando/lamp/pull/40)


## v0.9.0 - [November 17, 2023](https://github.com/lando/lamp/releases/tag/v0.9.0)
* Detached LAMP recipe from core _lamp service type. [#39](https://github.com/lando/lamp/pull/39)

## v0.8.0 - [July 3, 2023](https://github.com/lando/lamp/releases/tag/v0.8.0)
* Removed bundle-dependencies and version-bump-prompt from plugin.
* Updated package to use prepare-release-action.
* Updated documentation to reflect new release process.

## v0.7.0 - [December 12, 2022](https://github.com/lando/lamp/releases/tag/v0.7.0)
* Added bundle-dependencies to release process.
* Fixed bug in plugin dogfooding test.

## v0.6.0 - [September 8, 2022](https://github.com/lando/lamp/releases/tag/v0.6.0)

## v0.5.1 - [December 21, 2021](https://github.com/lando/lamp/releases/tag/v0.5.1)

Lando is **free** and **open source** software that relies on contributions from developers like you! If you like Lando then help us spend more time making, updating and supporting it by [contributing](https://github.com/sponsors/lando).

* Adjust lodash Issue

## v0.5.0 - [December 21, 2021](https://github.com/lando/lamp/releases/tag/v0.5.0)

Lando is **free** and **open source** software that relies on contributions from developers like you! If you like Lando then help us spend more time making, updating and supporting it by [contributing](https://github.com/sponsors/lando).

* Initial Release
