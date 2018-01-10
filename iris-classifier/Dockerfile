FROM jupyter/scipy-notebook

# Install Kernel Gateway
RUN pip install jupyter-kernel-gateway

# REST API is designed as notebooks
ADD notebooks /srv/notebooks

# and some static files for the webapp, 
ADD static /srv/static

# expose kernel gateway
EXPOSE 9000

# App served on http://localhost:9000/public/index.html

CMD ["jupyter", "kernelgateway", "--debug", "--KernelGatewayApp.ip=0.0.0.0", "--KernelGatewayApp.port=9000", "--KernelGatewayApp.api=notebook-http", "--NotebookHTTPPersonality.static_path=/srv/static", "--KernelGatewayApp.seed_uri=/srv/notebooks/iris-classifier.ipynb"]
