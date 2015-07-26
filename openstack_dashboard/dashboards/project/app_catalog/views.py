from horizon import views


class IndexView(views.APIView):
    # A very simple class-based view...
    template_name = 'project/app_catalog/index.html'

    def get_data(self, request, context, *args, **kwargs):
        # Add data to the context here...
        return context

class ComponentView(views.APIView):
    # A very simple class-based view...
    template_name = 'project/component_catalog/index.html'

    def get_data(self, request, context, *args, **kwargs):
        # Add data to the context here...
        return context

