# Lab 9: Django REST Framework (Enhanced API)

## Project
shop-back

## App
api

---

## 🔗 API Endpoints

### Categories
- http://127.0.0.1:8000/api/categories/
- http://127.0.0.1:8000/api/categories/1/
- http://127.0.0.1:8000/api/categories/1/products/

### Products
- http://127.0.0.1:8000/api/products/
- http://127.0.0.1:8000/api/products/1/

---

## 🔍 Filtering

- http://127.0.0.1:8000/api/products/?category=1
- http://127.0.0.1:8000/api/products/?is_active=true
- http://127.0.0.1:8000/api/products/?is_active=false

---

## 🔎 Search

- http://127.0.0.1:8000/api/products/?search=phone

---

## 🔽 Ordering

- http://127.0.0.1:8000/api/products/?ordering=name
- http://127.0.0.1:8000/api/products/?ordering=-price

---

## 🔥 Combined Query

- http://127.0.0.1:8000/api/products/?category=1&is_active=true&search=iphone&ordering=-price

---

## 🚀 Custom Endpoint

- http://127.0.0.1:8000/api/products/active/
- http://127.0.0.1:8000/api/products/active/?search=iphone

---

## ⚙️ Admin Panel

- http://127.0.0.1:8000/admin/

---

## 🛠 Technologies

- Django
- Django REST Framework

---

## ▶️ Run Project

```bash
python3 -m venv venv
source venv/bin/activate
pip install -r requirements.txt
python manage.py runserver



# Lab 10: Building API Views

## Project
shop-back

## App
api

## View Levels
- Level 2: FBV
- Level 3: CBV
- Level 4: Mixins
- Level 5: Generics

## Active Implementation
Level 5 — Generics

## Endpoints
- /api/products/
- /api/products/<product_id>/
- /api/categories/
- /api/categories/<category_id>/
- /api/categories/<category_id>/products/

## Files
- api/views/fbv.py
- api/views/cbv.py
- api/views/mixins.py
- api/views/generics.py
- api/views/__init__.py

## Run
```bash
python3 -m venv venv
source venv/bin/activate
pip install -r requirements.txt
python manage.py runserver