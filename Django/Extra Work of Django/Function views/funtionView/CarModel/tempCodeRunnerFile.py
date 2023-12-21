from django.shortcuts import render,redirect
from CarModel.models import CarModel
from CarModel.models import Comment,buying_history
from CarModel.forms import CommentForm
# Create your views here.
def ViewDetails(request,id):
    comments = Comment.objects.all()
    data = CarModel.objects.get(pk=id)
    if request.method == 'POST':
        commentform =  CommentForm(request.POST)
        if commentform.is_valid():
            print(commentform.cleaned_data)
            commentform.save()
    else:
        commentform =  CommentForm()
    return render(request,'ViewDetaisl.html', {'object':data,'comment_form': commentform, 'comment':comments})
