pipeline{
    agent any

    stages {
        stage ("Checkout") {
            steps {
                git credentialsId: 'sangita_id_rsa' ,
                url: 'ssh://git@github.ibm.com/CIO-MAP/MIP-Dashboard.git', branch: 'iteration_sso_withoutpopup'
            } //steps
        }

    }
    
}

