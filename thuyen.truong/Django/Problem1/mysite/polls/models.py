from django.db import models
from django.utils import timezone
import datetime
class Poll(models.Model):
    question = models.CharField(max_length=200)
    pub_date = models.DateTimeField('date published')
    def __str__(self):  # Python 3: def __str__(self):
        return self.question
    def was_published_recently(self):
    	now = timezone.now()
    	return now - datetime.timedelta(days=1) <= self.pub_date <= now
    # method 1
    # def was_published_recently(self):
    #     return self.pub_date >= timezone.now() - datetime.timedelta(days=1)
    #method 2: 
    was_published_recently.admin_order_field = 'pub_date'
    was_published_recently.boolean = True
    was_published_recently.short_description = 'Published recently?'
 #    def test_was_published_recently_with_old_poll(self):
 #    	"""
 #    	was_published_recently() should return False for polls whose pub_date
 #    	is older than 1 day
 #    	"""
 #    	old_poll = Poll(pub_date=timezone.now() - datetime.timedelta(days=30))
 #    	self.assertEqual(old_poll.was_published_recently(), False)

	# def test_was_published_recently_with_recent_poll(self):
 #    	"""
 #    	was_published_recently() should return True for polls whose pub_date
 #    	is within the last day
 #    	"""
 #    	recent_poll = Poll(pub_date=timezone.now() - datetime.timedelta(hours=1))
 #    	self.assertEqual(recent_poll.was_published_recently(), True)

class Choice(models.Model):
    poll = models.ForeignKey(Poll)
    choice_text = models.CharField(max_length=200)
    votes = models.IntegerField(default=0)
    def __str__(self):  # Python 3: def __str__(self):
        return self.choice_text
