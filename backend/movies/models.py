from django.db import models

from django.db import models

class Movie(models.Model):
    title = models.CharField(max_length=255)
    genre = models.CharField(max_length=100)
    release_date = models.DateField()
    director = models.CharField(max_length=100)
    # Add other fields as needed

    def __str__(self):
        return self.title

class Rating(models.Model):
    movie = models.ForeignKey(Movie, related_name='ratings', on_delete=models.CASCADE)
    storywriting = models.IntegerField()
    direction = models.IntegerField()
    acting = models.IntegerField()
    cinematography = models.IntegerField()
    score = models.IntegerField()
    overall_score = models.FloatField()
    # Add other metrics as needed

    def __str__(self):
        return f'Rating for {self.movie.title}'