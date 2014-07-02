from django.contrib import admin
from polls.models import Choice, Poll
class ChoiceInline(admin.StackedInline):
    model = Choice
    extra = 4
class PollAdmin(admin.ModelAdmin):
    fieldsets = [
        ('Question',           {'fields': ['question']}),
        ('Date information',   {'fields': ['pub_date']}),
    ]
    inlines = [ChoiceInline]
    list_display=('question','pub_date','was_published_recently')
    list_filter=['pub_date']
    search_fields=['question']
admin.site.register(Poll,PollAdmin)
# class ChoiceInline(admin.ModelAdmin):
#     fields=['choice_text','votes']
# admin.site.register(Choice,ChoiceInline )