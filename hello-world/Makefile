# Copyright (c) Jupyter Development Team.
# Distributed under the terms of the Modified BSD License.
	
.PHONY: help build notebook gateway 

IMAGE=autoscience/kernel_gateway

help:
	@echo 'Host commands:'
	@echo ''
	@echo 'install        - install jupyter and jupyter gateway with conda'
	@echo 'gateway        - run jupyter gateway'
	@echo 'notebook       - run jupyter notebook'

install:
	conda install -q -y jupyter
	conda install -q -y -c conda-forge jupyter_kernel_gateway

notebook:
	jupyter notebook --notebook-dir=notebooks 

# http://jupyter-kernel-gateway.readthedocs.io/en/latest/config-options.html
# Setting allow-origin options in a lax way to enable xmlhttprequest from all origin
# as well as pre-flight disabling CORS checks using OPTIONS

gateway:
	jupyter kernelgateway \
	  --debug \
	  --KernelGatewayApp.ip=0.0.0.0 \
	  --KernelGatewayApp.port=9000 \
	  --KernelGatewayApp.api=notebook-http \
	  --KernelGatewayApp.seed_uri=./notebooks/getting-started.ipynb