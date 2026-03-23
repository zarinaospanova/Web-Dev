# Lab 8: Django Backend

## Project: shop-back
## App: api

## Models
### Category
- name

### Product
- name
- price
- description
- count
- is_active
- category

## API Endpoints
- /api/products/
- /api/products/<int:id>/
- /api/categories/
- /api/categories/<int:id>/
- /api/categories/<int:id>/products/

## Run
```bash
python3 -m venv venv
source venv/bin/activate
pip install -r requirements.txt
python manage.py runserver