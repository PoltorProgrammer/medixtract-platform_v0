// Stage Management Extension for MediXtractApp
Object.assign(MediXtractApp.prototype, {
    // Stage Management
    goToStage(stageNumber) {
        this.currentStage = stageNumber;
        this.showStage(stageNumber);
    },

    completeStage(stageNumber) {
        if (!this.completedStages.includes(stageNumber)) {
            this.completedStages.push(stageNumber);
        }
    },

    showStage(stageNumber) {
        // Hide all stages
        document.querySelectorAll('.stage-content').forEach(stage => {
            stage.classList.remove('active');
        });

        // Show current stage
        const currentStage = document.getElementById(`stage-${stageNumber}`);
        if (currentStage) {
            currentStage.classList.add('active');
        }

        this.currentStage = stageNumber;
    },

    goToNewPatient() {
        this.completeStage(2);
        this.currentStage = 4; // Document Management is stage 4
        this.showStage(4);
        // Reset everything for new patient
        this.resetForNewPatient();
        this.showNotification('Ready to process new patient documents', 'info');
    },

    goToPatientDatabase() {
        this.completeStage(2);
        this.currentStage = 3; // Patient Database is stage 3
        this.showStage(3);
        this.loadPatientDatabase();
        this.showNotification('Loading patient database...', 'info');
    },

    goToUserPortal() {
        this.currentStage = 2;
        this.showStage(2);
        this.updateUserPortalStats();
    },

    goToDocumentManagement() {
        this.currentStage = 4;
        this.showStage(4);
    }
});