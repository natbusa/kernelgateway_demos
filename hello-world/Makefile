# Copyright (c) Jupyter Development Team.
# Distributed under the terms of the Modified BSD License.
	
.PHONY: help install uninstall notebook gateway 

IMAGE=autoscience/kernel_gateway

help:
	@echo 'Host commands:'
	@echo ''
	@echo 'install        - install jupyter and jupyter gateway with conda'
	@echo 'uninstall      - uninstall jupyter and jupyter gateway with conda'
	@echo 'gateway        - run jupyter gateway  (default port 9000)'
	@echo 'notebook       - run jupyter notebook (default port 8888)'

install:
	conda create  -n jkg_demo_env python=3.6
	conda install -n jkg_demo_env -q -y jupyter
	conda install -n jkg_demo_env -q -y -c conda-forge jupyter_kernel_gateway

uninstall:
	source deactivate && conda remove --name jkg_demo_env --all

notebook:
	source activate jkg_demo_env && \
	jupyter notebook --notebook-dir=notebooks 

# http://jupyter-kernel-gateway.readthedocs.io/en/latest/config-options.html
# Setting allow-origin options in a lax way to enable xmlhttprequest from all origin
# as well as pre-flight disabling CORS checks using OPTIONS

gateway:
	source activate jkg_demo_env && \
	jupyter kernelgateway \
	  --debug \
	  --KernelGatewayApp.ip=0.0.0.0 \
	  --KernelGatewayApp.port=9000 \
	  --KernelGatewayApp.api=notebook-http \
	  --KernelGatewayApp.seed_uri=./notebooks/getting-started.ipynb
