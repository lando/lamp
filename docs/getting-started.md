---
description: Learn how to get started with the Lando LAMP recipe.
---

# Getting Started

## Requirements

Before you get started with this recipe we assume that you have:

1. [Installed Lando](https://docs.lando.dev/getting-started/installation.html) and gotten familiar with [its basics](https://docs.lando.dev/cli/)
2. [Initialized](https://docs.lando.dev/cli/init.html) a [Landofile](https://docs.lando.dev/core/v3) for your codebase for use with this recipe
3. Read about the various [services](https://docs.lando.dev/core/v3/lando-service.html), [tooling](https://docs.lando.dev/core/v3/tooling.html), [events](https://docs.lando.dev/core/v3/events.html) and [routing](https://docs.lando.dev/core/v3/proxy.html) Lando offers.

## Quick Start

Try out the relevant commands below to spin up a new Landoified vanilla LAMP site.

Note that CodeIgniter could be any other [php framework](https://www.dotcominfoway.com/blog/top-5-must-have-php-frameworks-2018) or your own custom php thing.

```bash
# Initialize a lamp recipe using the latest codeigniter version
lando init \
  --source remote \
  --remote-url https://github.com/bcit-ci/CodeIgniter/archive/3.1.10.tar.gz \
  --remote-options="--strip-components 1" \
  --recipe lamp \
  --webroot . \
  --name my-first-lamp-app

# Start it up
lando start

# List information about this app.
lando info
```

