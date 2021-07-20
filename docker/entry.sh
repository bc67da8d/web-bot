#!/usr/bin/env sh
echo "Serve build/..."
echo $@
echo $1
serve -l $@ -s build
#nodemon --ignore db.json start