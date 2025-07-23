# LAMP Lando Plugin

This is the _official_ [Lando](https://lando.dev) plugin for [LAMP](https://en.wikipedia.org/wiki/LAMP_%28software_bundle%29). When installed it...

* Allows users to run a `lamp` stack
* Allows users to configure `php` version from `5.3` all the way to `8.1`
* Allows users to configure `webroot`
* Allows users to configure an `apache` web server
* Allows users to configure database backend to (`mariadb`, `mysql`, or `postgres`)
* Allows users to configure `composer`
* Allows users to configure `xdebug`

Of course, once a user is running their LAMP project with Lando they can take advantage of [all the other awesome development features](https://docs.lando.dev) Lando provides.

## Basic Usage

Add a `lamp` recipe to your Landofile

```yaml
name: lamp-app
recipe: lamp
```

For more info you should check out the [docs](https://docs.lando.dev/lamp):

* [Getting Started](https://docs.lando.dev/lamp/)
* [Configuration](https://docs.lando.dev/lamp/config.html)
* [Tooling](https://docs.lando.dev/lamp/tooling.html)
* [Examples](https://github.com/lando/lamp/tree/main/examples)
* [Development](https://docs.lando.dev/lamp/development.html)

## Issues, Questions and Support

If you have a question or would like some community support we recommend you [join us on Slack](https://launchpass.com/devwithlando).

If you'd like to report a bug or submit a feature request then please [use the issue queue](https://github.com/lando/lamp/issues/new/choose) in this repo.

## Changelog

We try to log all changes big and small in both [THE CHANGELOG](https://github.com/lando/lamp/blob/main/CHANGELOG.md) and the [release notes](https://github.com/lando/lamp/releases).


## Maintainers

* [@pirog](https://github.com/pirog)
* [@reynoldsalec](https://github.com/reynoldsalec)

## Contributors

<a href="https://github.com/lando/lamp/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=lando/lamp" />
</a>

Made with [contributors-img](https://contrib.rocks).

## Other Selected Resources

* [LICENSE](/LICENSE)
* [TERMS OF USE](https://docs.lando.dev/terms)
* [PRIVACY POLICY](https://docs.lando.dev/privacy)
* [CODE OF CONDUCT](https://docs.lando.dev/coc)

