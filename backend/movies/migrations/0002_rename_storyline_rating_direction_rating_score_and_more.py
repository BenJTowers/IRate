# Generated by Django 5.1.3 on 2024-11-10 06:37

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('movies', '0001_initial'),
    ]

    operations = [
        migrations.RenameField(
            model_name='rating',
            old_name='storyline',
            new_name='direction',
        ),
        migrations.AddField(
            model_name='rating',
            name='score',
            field=models.IntegerField(default=0),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='rating',
            name='storywriting',
            field=models.IntegerField(default=0),
            preserve_default=False,
        ),
    ]
