#! /bin/bash
set -e

plugin=$(basename "$PWD")
plugin_uppercase=$(echo "$plugin" | awk '{first=toupper(substr($0,1,1)); rest=substr($0,2); print first rest}')
echo $plugin_uppercase

cp -R ~/workspace/lando-scripts-big-update/laravel/examples/ examples
cd examples
for dir in laravel-*; do mv "$dir" "${dir/laravel-/$plugin-}"; done
cd ..
find examples -type f -exec sh -c 'tmpfile=$(mktemp); sed "s/laravel/$1/g" "$0" > "$tmpfile" && mv "$tmpfile" "$0"' {} $plugin \;
find examples -type f -exec sh -c 'tmpfile=$(mktemp); sed "s/laravel/$1/g" "$0" > "$tmpfile" && mv "$tmpfile" "$0"' {} $plugin_uppercase \;
rm -r examples/$plugin-init
mv examples/$plugin examples/$plugin-init

chmod u+x examples/$plugin-import/test.sh
chmod u+x examples/$plugin-export/mysql-test.sh
