# Jupyter Gateway Demos

Some demo's to get you started exposing APIs from your jupyter notebooks.

## Hello world

This demo shows how to build a collection of counters as RESTfull resources

### How to run

This demo requires conda (https://conda.io/docs/index.html) to be installed in the system. Also use curl to inspect that the API exposed by the notebook is working correctly. In order to run the demo use the provided Makefile as follows:

```
make install
make gateway
```
The above command will install the necessary packages in a demo conda environment and start the notebook in HTTP API gateway mode on `port 9000`, you can also inspect the notebook, by starting jupyter in notebook mode by running `make notebook` available on `port 8888`. When finished with this demo, you can remove the conda environment by typing `make uninstall`.

### Testing the API

You can find the latest notebook exposing the API here:  
https://github.com/natbusa/kernelgateway_demos/blob/master/hello-world/notebooks/getting-started.ipynb

#### Basic Data Type requests:

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

#### A simple RESTful API:

The notebook shows also how you can keep a collection of counters, maintaining the counters state in the session memory of the executed jupyter notebook. Here below the API exposed as HTTP RESTful interface and makeing use of HTTP verbs.

get the current value of a counter :id
```
GET /counters/:id
```

create/set the counter :id to a given value
```
PUT /counters/:id
request body: {'value': value}
```

increment the counter :id by one, if not there create it with the value 1
```
POST /counters/:id
```

remove counter :id  
```
DELETE /counters/:id
```

list the whole collection of current counters
```
GET /counters
```

Example:
```
curl --request POST --url http://localhost:9000/counters/foo
curl --request POST --url http://localhost:9000/counters/bar

curl --request GET  --url http://localhost:9000/counters
[ {'foo': {'value':1}}, {'bar': {'value':1}} ]
```


## Iris classification

This demo shows how easy it is to explose train, and scoring ML functions straight from the notebook

The full API, including tuning, scoring, exploration exposing both json data as well as png images can be found on the following link:   
https://github.com/natbusa/kernelgateway_demos/blob/master/iris-classifier/notebooks/iris-classifier.ipynb

![screenshot](https://raw.githubusercontent.com/natbusa/kernelgateway_demos/master/media/screenshot.png)

### How to run

This demo requires docker (https://www.docker.com/community-edition#/download) to be installed in the system. Also use curl or postman or your web browser to inspect that the API exposed by the notebook is working correctly.

You need to build the container with the command:
```docker build . -t iris_webapp_demo```

Type the following to run the container and expose the webapp on port 9000:
```docker run . -t -p 9000:9000 iris_webapp_demo```

Demo will run on http://localhost:9000/public/index.html  

The full API, including tuning, scoring, exploration exposing both json data as well as png images can be found on the following link:   
https://github.com/natbusa/kernelgateway_demos/blob/master/iris-classifier/notebooks/iris-classifier.ipynb

When finished with this demo, you can remove stop and remove the container by typing:
```
docker kill iris_webapp_demo
docker rm iris_webapp_demo
```

# Resources

https://github.com/jupyter/kernel_gateway_demos  
https://github.com/jupyter/kernel_gateway/tree/master/etc/api_examples
