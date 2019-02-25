from django.http import HttpResponse
from django.template import Template, Context
from django.template.loader import get_template
from django.template import Template, Context

def index(request):
    t = get_template('main.html')
    c = {'user': 'Obijuan'}
    html = t.render(c)
    return HttpResponse(html)

def mi_funcion(request):
    html = "Hola, esto es una prueba"
    return HttpResponse(html)

def mi_producto(request, param):
    numero = int(param)
    html = "Acceso al producto: %i" % numero;
    return HttpResponse(html)

PLANTILLA = """
<!DOCTYPE html>
<html lang= "es" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title>Saludo</title>
  </head>
  <body>
      <p>Bienvenido a mi tienda, {{user}}</p>
  </body>
</html>
"""
def saludo(request):
    t = Template(PLANTILLA)
    c = Context({'user': 'Pepito'})

    html = t.render(c)
    return HttpResponse(html)
