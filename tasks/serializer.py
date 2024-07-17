from rest_framework import serializers
from .models import Task

class TaskSerializer(serializers.ModelSerializer):
  class Meta:
    # fields = ('id', 'title', 'description', 'completed')
    fields = '__all__'
    model = Task
    read_only_fields = ('id',)