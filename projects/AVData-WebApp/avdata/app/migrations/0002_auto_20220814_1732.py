# Generated by Django 3.2 on 2022-08-14 17:32

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='data',
            name='expenses_monthly',
            field=models.IntegerField(default=0),
        ),
        migrations.AddField(
            model_name='data',
            name='income_monthly',
            field=models.IntegerField(default=0),
        ),
    ]
