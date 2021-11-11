from django.urls import path
from . import views

urlpatterns = [
    path('', views.getRoutes, name="routes"),
    path('contacts/', views.getContacts, name="contacts"),
    path('contacts/create/', views.createContact, name="createcontact"),
    path('contacts/<str:pk>/update', views.updateContact, name="contactupdate"),
    path('contacts/<str:pk>/delete', views.deleteContact, name="contactdelete"),
    path('contacts/<str:pk>/', views.getContact, name="contact"),
]
