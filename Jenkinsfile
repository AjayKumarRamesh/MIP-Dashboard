pipeline{
    agent any

    stages {
        stage ("Github Checkout") {
            steps {
                git credentialsId: 'sangita_id_rsa' ,
                url: 'ssh://git@github.ibm.com/CIO-MAP/MIP-Dashboard.git', branch: 'iteration_sso_withoutpopup'
            } //steps
        }

        stage ("Prepare IBM Cloud CLI") {
            steps {
                sh('ibmcloud update -f -q')
                sh('ibmcloud plugin install container-registry -f -q')
                sh('ibmcloud plugin install container-service -f -q')
                sh('ibmcloud plugin list')
            }
        }

        stage ("Build MIP Dashboard App") {
            environment {
                IBMCLOUD_CREDS = credentials('ibm-cloud-cr')
            }
            steps {
                sh('ibmcloud login --apikey ${IBMCLOUD_CREDS_PSW} -r us-south')
                sh('ibmcloud cr login')
                sh('docker build -t us.icr.io/map-dev-namespace/mipdashboard:${BUILD_NUMBER} -f Dockerfile .')
                sh('docker images')
                sh('docker push us.icr.io/map-dev-namespace/mipdashboard:${BUILD_NUMBER}')
                sh('ibmcloud cr image-tag us.icr.io/map-dev-namespace/mipdashboard:${BUILD_NUMBER} us.icr.io/map-dev-namespace/mipdashboard:latest')
                sh('ibmcloud cr image-list --restrict map-dev-namespace')
            }
        }

        stage ("Deploy the MIP-Dashboard to dev cluster") {
            environment {
                IBMCLOUD_CREDS = credentials('ibm-cloud-cr')
            }
            steps {
                sh('ibmcloud login --apikey ${IBMCLOUD_CREDS_PSW} -r us-south')
                sh('ibmcloud ks cluster config --cluster map-dal10-16x64-01')
                sh('kubectl config current-context')
                sh('kubectl rollout restart deployment mipdashboard -n mipdashboard')
            } //steps
        }

    }
    
}

