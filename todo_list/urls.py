from django.contrib import admin
from django.urls import path, include
from .views import TodoListApiView,TodoDetailApiView,MyTokenObtainPairView,registerUser




urlpatterns = [
    path('login/', MyTokenObtainPairView.as_view(),name='token_obtain_pair'),
    path('register/', registerUser, name='register'),
    path('todo/', TodoListApiView.as_view()),
    path('todo/<int:todo_id>/', TodoDetailApiView.as_view()),
]