# Generated by Django 4.2.7 on 2023-12-09 05:07

from django.db import migrations, models
import django.utils.timezone


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='add_task',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('task_Title', models.CharField(max_length=100)),
                ('task_Description', models.TextField()),
                ('is_completed', models.BooleanField(blank=True, default=False)),
                ('task_assign_date', models.DateField(blank=True, default=django.utils.timezone.now, null=True)),
            ],
        ),
    ]
