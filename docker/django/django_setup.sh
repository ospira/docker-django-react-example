#!/bin/bash

echo "start django_setup.sh"


python manage.py migrate

python manage.py runserver 0.0.0.0:8000

rm -- "$0"