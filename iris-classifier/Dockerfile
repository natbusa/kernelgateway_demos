FROM jupyter/scipy-notebook

# Install Kernel Gateway
RUN pip install jupyter-kernel-gateway

# add some extra packages
#ADD requirements.txt /srv/
#RUN pip install -r /srv/requirements.txt

# REST API is designed as notebooks, and some static files
ADD notebooks /srv/notebooks
ADD static /srv/static

# expose kernel gateway
EXPOSE 9000

CMD ["jupyter", "kernelgateway", "--debug", "--KernelGatewayApp.ip=0.0.0.0", "--KernelGatewayApp.port=9000", "--KernelGatewayApp.api=notebook-http", "--NotebookHTTPPersonality.static_path=/srv/static", "--KernelGatewayApp.seed_uri=/srv/notebooks/iris-classifier.ipynb"]
