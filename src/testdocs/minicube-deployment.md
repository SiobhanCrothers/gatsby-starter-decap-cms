# Introduction

This article describes how you can run Bravura Cloud in a lab environment using minicube. 

MMinikube is an open-source tool that facilitates running Kubernetes (a popular container orchestration platform) locally on one's machine. Instead of setting up a full-blown Kubernetes cluster on multiple machines or VMs, Minikube provides a single-node Kubernetes cluster inside a virtual machine (VM) or a container on your computer. This makes it especially suitable for developers wanting to test Kubernetes applications, experiment with Kubernetes features, or learn the platform without the overhead of a larger-scale setup. Minikube supports Kubernetes features like DNS, NodePorts, ConfigMaps, and Secrets, ensuring a realistic environment for development and testing.


## Contents

- `core/` - Umbrella chart for core services deployment.

## Usage

### Local / Development

Running any products or components on a local machine for development
or testing purposes should be achievable using the instructions below.

The following assumes Ubuntu running in WSL2 and may be adjusted as required
for other systems.

Note: Specific requirements or instructions may be provided in the README files
of projects within.

#### Requirements

- Docker
- Minikube

#### Environment Preparation

##### Install Docker

Docker GPG key:

`curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /usr/share/keyrings/docker-archive-keyring.gpg`

Docker repository:

`echo "deb [arch=amd64 signed-by=/usr/share/keyrings/docker-archive-keyring.gpg] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list`

Docker dependencies:

`sudo apt-get install apt-transport-https ca-certificates curl gnupg lsb-release -y`

Install Docker:

`sudo apt-get install docker-ce docker-ce-cli containerd.io -y`

Add yourself to the docker group (optional):

`sudo usermod -aG docker $USER`

##### Install Minikube

Fetch Minikube:

`wget https://storage.googleapis.com/minikube/releases/latest/minikube-linux-amd64`

Place Minikube on the path:

`sudo cp minikube-linux-amd64 /usr/local/bin/minikube`

Fetch kubectl:

```curl -LO https://storage.googleapis.com/kubernetes-release/release/`curl -s https://storage.googleapis.com/kubernetes-release/release/stable.txt`/bin/linux/amd64/kubectl```

Make kubectl executable:

`chmod +x kubectl`

`sudo chmod 755 /usr/local/bin/minikube`

Place kubectl on the path:

`sudo mv kubectl /usr/local/bin/`

Start a Kubernetes cluster for the first time:

`minikube start --driver=docker`

##### Install Helm

`curl https://baltocdn.com/helm/signing.asc | gpg --dearmor | sudo tee /usr/share/keyrings/helm.gpg > /dev/null`

`sudo apt-get install apt-transport-https --yes`

`echo "deb [arch=$(dpkg --print-architecture) signed-by=/usr/share/keyrings/helm.gpg] https://baltocdn.com/helm/stable/debian/ all main" | sudo tee /etc/apt/sources.list.d/helm-stable-debian.list`

`sudo apt-get update`

`sudo apt-get install helm`

### Typical Execution Workflow

The following demonstrates how to run the core services via its umbrella chart.

Start a Kubernetes cluster:

`minikube start`

Deploy:

`helm install core core/`

Enable accessing resources:

`minikube tunnel`

Access resources as required.

Remove the deployment:

`helm uninstall core`

Confirm the pods have terminated:

`kubectl get pods`

Stop the cluster:

`minikube stop`

### Helpful Execution Commands

Check the cluster status:

`minikube status`

List pods:

`kubectl get pods`

Watch pod behavior (handy when waiting for shutdown):

`watch kubectl get pods`

View cluster information:

`kubectl cluster-info`

List nodes and their status:

`kubectl get nodes`

Enable a browser-based dashboard:

`minikube dashboard`

Access the dashboard using the URL provided.
This URL may be made more predictable by providing a port to the command.

View the logs from a pod:

`kubectl logs podname`

View the logs from one container in a pod:

`kubectl logs podname -c containername`

View the logs of a pod given its name prefix:

``` kubectl logs -f -c hasura-cli `kubectl get pods | grep hasura- | cut -f 1 -d ' ' ` ```

### Helpful Deployment Commands

View proposed deployment:

`helm install --dry-run --debug core core/`

This is a highly valuable view of the deployment implementation which
can help when troubleshooting deployment issues or validating chart changes.