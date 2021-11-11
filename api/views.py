from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .models import Contact
from .serializers import ContactSerializer

# Create your views here.


@api_view(["GET"])
def getRoutes(request):
    routes = [
        {
            'Endpoint': '/contacts/',
            'method': 'GET',
            'body': None,
            'description': 'Returns an array of contacts'
        },
        {
            'Endpoint': '/contacts/id',
            'method': 'GET',
            'body': None,
            'description': 'Returns a single contact object'
        },
        {
            'Endpoint': '/contacts/create/',
            'method': 'POST',
            'body': {'body': ""},
            'description': 'Creates new contact with data sent in post request'
        },
        {
            'Endpoint': '/contacts/id/update/',
            'method': 'PUT',
            'body': {'body': ""},
            'description': 'Creates an existing contact with data sent in post request'
        },
        {
            'Endpoint': '/contacts/id/delete/',
            'method': 'DELETE',
            'body': None,
            'description': 'Deletes and exiting contact'
        }
    ]
    return Response(routes)


@api_view(['GET'])
def getContacts(request):
    contact = Contact.objects.all()
    serializer = ContactSerializer(contact, many=True)
    return Response(serializer.data)


@api_view(['GET'])
def getContact(request, pk):
    contact = Contact.objects.get(id=pk)
    serializer = ContactSerializer(contact)
    return Response(serializer.data)


@api_view(['PUT'])
def updateContact(request, pk):
    data = request.data
    contact = Contact.objects.get(id=pk)
    serializer = ContactSerializer(instance=contact, data=data)

    if serializer.is_valid():
        serializer.save()

    return Response(serializer.data)


@api_view(['DELETE'])
def deleteContact(request, pk):
    contact = Contact.objects.get(id=pk)
    contact.delete()
    return Response('Note was deleted')


@api_view(['POST'])
def createContact(request):
    data = request.data
    contact = Contact.objects.create(
        name=data['name'],
        number=data['number'],
    )
    serializer = ContactSerializer(contact, many=False)
    return Response(serializer.data)
