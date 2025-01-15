FROM python:3-alpine

ENV PYTHONDONTWRITEBYTECODE=1
ENV PYTHONUNBUFFERED=1

WORKDIR /django

COPY ./django/ .

RUN pip install --no-cache-dir -r requirements.txt

COPY ./docker/django/django_setup.sh /usr/local/bin/django_setup.sh
# make sure the script is executable
RUN chmod +x /usr/local/bin/django_setup.sh

CMD ["sh", "/usr/local/bin/django_setup.sh"]