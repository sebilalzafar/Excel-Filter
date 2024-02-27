from django.db import models
import uuid
# Create your models here.


class UploadedFile(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    file = models.FileField(upload_to='uploads/')
    total_downloads = models.IntegerField(null = True, blank=True, default=0)
    headers = models.JSONField(null=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.file.name
    
    
class muslimNames(models.Model):
    females = models.JSONField(blank = True,null= True)
    males = models.JSONField(blank = True,null= True)