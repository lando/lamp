LAMP Example
============

This example exists primarily to test the following documentation:

* [LAMP Recipe](https://docs.devwithlando.io/tutorials/lamp.html)

Start up tests
--------------

Run the following commands to get up and running with this example

```bash
# Should poweroff
lando poweroff

# Should initialize the latest codeignitor codebase
rm -rf lamp && mkdir -p lamp && cd lamp
lando init --source remote --remote-url https://github.com/bcit-ci/CodeIgniter/archive/3.1.10.tar.gz --remote-options="--strip-components 1" --recipe lamp --webroot . --name lando-lamp --option composer_version=1.10.1

# Should start up successfully
cd lamp
lando start
```

Verification commands
---------------------

Run the following commands to validate things are rolling as they should.

```bash
# Should return the drupal installation page by default
cd lamp
lando ssh -s appserver -c "curl -L localhost" | grep "CodeIgniter"

# Should use 7.3 as the default php version
cd lamp
lando php -v | grep "PHP 7.3"

# Should be running apache 2.4 by default
cd lamp
lando ssh -s appserver -c "apachectl -V | grep 2.4"
lando ssh -s appserver -c "curl -IL localhost" | grep Server | grep 2.4

# Should be running mysql 5.7 by default
cd lamp
lando mysql -V | grep 5.7

# Should not enable xdebug by default
cd lamp
lando php -m | grep xdebug || echo $? | grep 1

# Should use the default database connection info
cd lamp
lando mysql -ulamp -plamp lamp -e quit

# Should be able to global require a composer dep
cd lamp
lando composer global require phpunit/phpunit
lando ssh -s appserver -c "phpunit --version"
lando ssh -s appserver -c "which phpunit | grep /var/www/"

# Should be able to require a composer dep
cd lamp
lando composer require phpunit/phpunit
lando ssh -s appserver -c "phpunit --version"
lando ssh -s appserver -c "which phpunit | grep /app"

# Should be able to configure via the config key
# This tests the 'How do I configure a Lando Recipe' guide.
# https://docs.lando.dev/guides/how-do-i-configure-a-lando-recipe.html
cd lamp
cp .lando.yml orig.lando.yml
cp ../config.lando.yml .lando.yml
lando rebuild -y
lando php -v |grep "5.6"
lando ssh -s database -c "mysql --version" |grep "10.3"
lando poweroff
mv orig.lando.yml .lando.yml
```

Destroy tests
-------------

Run the following commands to trash this app like nothing ever happened.

```bash
# Should be destroyed with success
cd lamp
lando destroy -y
lando poweroff
```
