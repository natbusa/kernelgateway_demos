# Jupyter Gateway Demos

Some demo's to get you started exposing APIs from your jupyter notebooks.

## Hello world

This demo shows how to build a collection of counters as RESTfull resources

https://github.com/natbusa/kernelgateway_demos/blob/master/hello-world/notebooks/getting-started.ipynb

Basic Data Type requests:

*Text*

```
curl --request GET \
  --url http://localhost:9000/text 
```
```
hello world !
```

*json*
```
curl --request GET \
  --url http://localhost:9000/json \
  --header 'Content-Type: application/json'
```
```
{
  "hello": "world"
}
```

*data blob*
```
curl --request GET \
  --url http://localhost:9000/image-data \
  --header 'Content-Type: application/json'
```
```
data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQI12P4//8/w38GIAXDIBKE0DHxgljNBAAO9TXL0Y4OHwAAAABJRU5ErkJggg==
```

*html snippet*
```
curl --request GET \
  --url http://localhost:9000/image-html
```
```
<img src=data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQI12P4//8/w38GIAXDIBKE0DHxgljNBAAO9TXL0Y4OHwAAAABJRU5ErkJggg== />
```

## Iris classification

This demo shows how easy it is to explose train, and scoring ML functions straight from the notebook

https://github.com/natbusa/kernelgateway_demos/blob/master/iris-classifier/notebooks/iris-classifier.ipynb

# Resources

https://github.com/jupyter/kernel_gateway_demos  
https://github.com/jupyter/kernel_gateway/tree/master/etc/api_examples


