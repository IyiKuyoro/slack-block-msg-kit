#!/bin/bash

# This file is run before any commit is made
#

npm run lint && echo "Code linting successful"

npm run format && echo "Code formatting successful"

git add .
