# Django boilerplate

This is a boilerplate for Django projects. It includes a basic setup for a Django project with a PostgreSQL database, daisyui for the frontend and docker-compose for development.

## Features

- Django 5
- PostgreSQL
- DaisyUI
- Docker-compose

## Getting started

1. Clone the repository

```bash
git clone https://github.com/tsarbas/django-boilerplate.git myproject
```

2. Run database

```bash
docker-compose up -d
```

3. Install backend dependencies

```bash
poetry install
```

4. Install frontend dependencies

```bash
npm install
```

5. Run migrations

```bash
python manage.py migrate
```

6. Install pre-commit hooks

```bash
pre-commit install
```

7. Run css watcher

```bash
npm run dev
```

8. Run the server

```bash
python manage.py runserver
```

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
