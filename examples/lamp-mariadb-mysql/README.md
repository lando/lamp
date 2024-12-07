# LAMP MariaDB/MySQL Example

This example exists primarily to test the following documentation:

* [LAMP Recipe](https://docs.devwithlando.io/tutorials/lamp.html)

Versions of MariaDB 10.3.x and lower do not have the mariadb command and must use the mysql executable.

## Start up tests

Run the following commands to get up and running with this example.

```bash
# Should poweroff
lando poweroff

# Initialize an empty lamp recipe
rm -rf mariadb && mkdir -p mariadb && cd mariadb
lando init --source cwd --recipe lamp --webroot app/public --name lando-lamp-mariadb --option php=8.3 --option database=mariadb:10.3
cp -f ../../.lando.upstream.yml .lando.upstream.yml && cat .lando.upstream.yml

# Should start up successfully
cd mariadb
lando start
```

## Verification commands

Run the following commands to validate things are rolling as they should.

```bash
# Should use 8.3 as the default php version
cd mariadb
lando php -v | grep "PHP 8.3"

# Should be running apache 2.4 by default
cd mariadb
lando exec appserver -- apachectl -V | grep 2.4
lando exec appserver -- curl -IL localhost | grep Server | grep 2.4

# Should be running mariadb 10.3.x by default
cd mariadb
lando mysql -V | grep "MariaDB" | grep 10.3.

# Should not enable xdebug by default
cd mariadb
lando php -m | grep xdebug || echo $? | grep 1

# Should use the default database connection info
cd mariadb
lando mysql -ulamp -plamp lamp -e quit

# Should have artisan available
cd mariadb
lando artisan env
```

## Destroy tests

Run the following commands to trash this app like nothing ever happened.

```bash
# Should be destroyed with success
cd mariadb
lando destroy -y
lando poweroff
```
