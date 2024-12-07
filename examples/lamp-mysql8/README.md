# LAMP MySQL 8 Example

This example exists primarily to test the following documentation:

* [LAMP Recipe](https://docs.devwithlando.io/tutorials/lamp.html)

## Start up tests

Run the following commands to get up and running with this example.

```bash
# Should poweroff
lando poweroff

# Initialize an empty lamp recipe
rm -rf mysql8 && mkdir -p mysql8 && cd mysql8
lando init --source cwd --recipe lamp --webroot app/public --name lando-lamp-mysql8 --option php='8.1' --option database=mysql:8.0.22
cp -f ../../.lando.upstream.yml .lando.upstream.yml && cat .lando.upstream.yml

# Should start up successfully
cd mysql8
lando start
```

## Verification commands

Run the following commands to validate things are rolling as they should.

```bash
# Should use 8.1 as the default php version
cd mysql8
lando php -v | grep "PHP 8.1"

# Should be running apache 2.4 by default
cd mysql8
lando exec appserver -- apachectl -V | grep 2.4
lando exec appserver -- curl -IL localhost | grep Server | grep 2.4

# Should be running mysql 8.0.x by default
cd mysql8
lando mysql -V | grep 8.0

# Should not enable xdebug by default
cd mysql8
lando php -m | grep xdebug || echo $? | grep 1

# Should use the default database connection info
cd mysql8
lando mysql -ulamp -plamp lamp -e quit

# Should have artisan available
cd mysql8
lando artisan env
```

## Destroy tests

Run the following commands to trash this app like nothing ever happened.

```bash
# Should be destroyed with success
cd mysql8
lando destroy -y
lando poweroff
```
