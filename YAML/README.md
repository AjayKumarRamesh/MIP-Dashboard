# MIP-Dashbaord


### How to connect to K8s Cluster via ibmcloud and kubectl CLI

### Pre-requisites 
    Install IBM Cloud CLI


### Install plugins and list them
    ibmcloud plugin install container-service
    ibmcloud plugin install container-registry
    ibmcloud plugin install observe-service
    ibmcloud plugin install secrets-manager
    ibmcloud plugin list

### Install podman

### Build the Image and Push into Container Registry
* Login IBM Cloud
    ~~~
        $ $ ibmcloud login -r us-south --sso
                        or
        Download apikey.json from clod console
        $ ibmcloud login -r us-south --apikey @apikey.json
    ~~~
* Login container Registry
    ~~~
        $ ibmcloud cr login 
    ~~~
* Build the Docker Image
    ~~~
        $ podman build -t us.icr.io/mip-prod-namespace/mipdashboard:${BUILD_NUMBER} -f Dockerfile .
    ~~~
* Push the Docker Image into Dev Registry
    ~~~
        $ podman push us.icr.io/mip-prod-namespace/mipdashboard:${BUILD_NUMBER}
    ~~~
* change the tag name from build number to latest
    ~~~
        ibmcloud cr image-tag us.icr.io/mip-prod-namespace/mipdashboard:${BUILD_NUMBER} us.icr.io/mip-prod-namespace/mipdashboard:latest
    ~~~

### Login to IBM
    $ ibmcloud login -r us-south --sso
    or
    Download apikey.json from clod console
    $ ibmcloud login -r us-south --apikey @apikey.json


### Set cluster context for local client and view current context to make sure everything is ok
    $ ibmcloud ks cluster config --cluster map-dal10-16x64-03
    $ kubectl config current-context

### Create the Namespace
    $ kubectl create namespace mipdashboard


### Deploying  Deployment, Service and Ingress

    $ kubectl apply -f mipdashboard.yml

### Restart  the deployment
    $ kubectl rollout restart deployment mipdashboard -n mipdashboard









