from django.contrib import admin
from polls.models import Poll, Choice
# Register your models here.

# method 1: class ChoiceInline(admin.StackedInline):
class ChoiceInline(admin.TabularInline):
    model = Choice
    extra = 3

class PollAdmin(admin.ModelAdmin):
    # method 1: fields = ['pub_date', 'question']
    
    # method 2
    # fieldsets = [
    #     (None,               {'fields': ['question']}),
    #     ('Date information', {'fields': ['pub_date']}),
    # ]

    fieldsets = [
        (None,               {'fields': ['question']}),
        ('Date information', {'fields': ['pub_date'], 'classes': ['collapse']}),
    ]
    inlines = [ChoiceInline]
    # method 1: list_display = ('question', 'pub_date')
    list_display = ('question', 'pub_date', 'was_published_recently')
    list_filter = ['pub_date']
    search_fields = ['question']

admin.site.register(Poll, PollAdmin)
# method 1: admin.site.register(Choice)