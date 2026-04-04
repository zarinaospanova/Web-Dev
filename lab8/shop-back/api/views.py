from rest_framework import viewsets, filters
from rest_framework.decorators import action
from rest_framework.response import Response

from .models import Category, Product
from .serializers import CategorySerializer, ProductSerializer


class CategoryViewSet(viewsets.ModelViewSet):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer


class ProductViewSet(viewsets.ModelViewSet):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer

    # 🔥 Включаем search и ordering
    filter_backends = [filters.SearchFilter, filters.OrderingFilter]
    search_fields = ['name']
    ordering_fields = ['name', 'price']

    def get_queryset(self):
        queryset = Product.objects.all()

        # 🔥 фильтр по category
        category = self.request.query_params.get('category')
        if category:
            queryset = queryset.filter(category_id=category)

        # 🔥 фильтр по is_active
        is_active = self.request.query_params.get('is_active')
        if is_active is not None:
            if is_active.lower() == 'true':
                queryset = queryset.filter(is_active=True)
            elif is_active.lower() == 'false':
                queryset = queryset.filter(is_active=False)

        return queryset

    # 🔥 /api/products/active/
    @action(detail=False)
    def active(self, request):
        queryset = Product.objects.filter(is_active=True)

        # применяем search + ordering
        queryset = self.filter_queryset(queryset)

        serializer = self.get_serializer(queryset, many=True)
        return Response(serializer.data)