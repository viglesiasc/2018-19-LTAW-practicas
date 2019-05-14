"""mi_tienda URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/1.8/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  url(r'^$', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  url(r'^$', Home.as_view(), name='home')
Including another URLconf
    1. Add a URL to urlpatterns:  url(r'^blog/', include('blog.urls'))
"""
from django.conf.urls import include, url
from django.contrib import admin
from mi_tienda.views import mi_funcion
from mi_tienda.views import mi_producto
from mi_tienda.views import saludo
from mi_tienda.views import index
from django.template.loader import get_template
from django.template import Template, Context

urlpatterns = [
    url('^producto/(\d{1,2})/$', mi_producto),
    url(r'^saludo/', saludo),
    url(r'^hola/', mi_funcion),
    url(r'^main/', index),
    url(r'^test/', include(admin.site.urls)),
]
