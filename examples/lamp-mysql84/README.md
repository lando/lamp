# LAMP MySQL 8.4 Example

This example exists primarily to test the following documentation:

* [LAMP Recipe](https://docs.devwithlando.io/tutorials/lamp.html)

## Start up tests

Run the following commands to get up and running with this example.

```bash
# Should poweroff
lando poweroff

# Initialize an empty lamp recipe
rm -rf mysql84 && mkdir -p mysql84 && cd mysql84
lando init --source cwd --recipe lamp --webroot app/public --name lando-lamp-mysql84 --option php='8.1' --option database=mysql:8
cp -f ../../.lando.upstream.yml .lando.upstream.yml && cat .lando.upstream.yml

# Should start up successfully
cd mysql84
lando start
```

## Verification commands

Run the following commands to validate things are rolling as they should.

```bash
# Should use 8.1 as the default php version
cd mysql84
lando php -v | grep "PHP 8.1"

# Should be running apache 2.4 by default
cd mysql84
lando exec appserver -- apachectl -V | grep 2.4
lando exec appserver -- curl -IL localhost | grep Server | grep 2.4

# Should be running mysql 8.4.x via the mysql:8 alias
cd mysql84
lando mysql -V | grep '8.4.'

# Should use the default mysql8 config file
cd mysql84
lando exec database -- cat /opt/bitnami/mysql/conf/my_custom.cnf | grep "LANDOLAMPMYSQL8CNF"

# Should use binlog_expire_logs_seconds instead of the removed expire_logs_days
cd mysql84
lando mysql -u root -e "show variables;" | grep binlog_expire_logs_seconds | grep 864000

# Should not enable xdebug by default
cd mysql84
lando php -m | grep xdebug || echo $? | grep 1

# Should use the default database connection info
cd mysql84
lando mysql -ulamp -plamp lamp -e quit

# Should have artisan available
cd mysql84
lando artisan env
```

## Destroy tests

Run the following commands to trash this app like nothing ever happened.

```bash
# Should be destroyed with success
cd mysql84
lando destroy -y
lando poweroff
```
