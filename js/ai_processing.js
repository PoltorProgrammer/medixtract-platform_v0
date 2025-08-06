// AI Processing Extension for MediXtractApp
Object.assign(MediXtractApp.prototype, {
    // AI Processing (now starts from translation review)
    async startProcessing() {
        this.completeStage(5); // Translation Review is stage 5
        this.currentStage = 6; // Results Dashboard is now stage 6
        this.showStage(6);
        this.processingActive = true;
        
        // Reset delivery notification state for new patient
        this.resetDeliveryNotification();
        
        // Reset field acceptance states for new patient
        this.fieldAcceptanceState = {};
        
        // Update processing header to show discovered documents
        const processingPatient = document.getElementById('processingPatient');
        if (processingPatient) {
            processingPatient.textContent = `Processing ${this.medicalDocuments.length} translated medical documents`;
        }
        
        // Load JSON data and show manual input fields immediately
        await this.loadJsonData();
        
        // Reset processing state
        this.processingProgress = 0;
        this.currentProcessingStage = 0;
        
        // Start processing simulation
        await this.delay(500);
        this.runProcessingSimulation();
    },

    async runProcessingSimulation() {
        const progressFill = document.getElementById('progressFill');
        const progressText = document.getElementById('progressText');
        const progressTime = document.getElementById('progressTime');
        const completionMessage = document.getElementById('completionMessage');
        const processingHeader = document.getElementById('processingHeader');

        // Show processing popup
        const processingPopup = document.getElementById('processingPopup');
        if (processingPopup) {
            processingPopup.style.display = 'block';
        }

        // Hide completion message initially
        if (completionMessage) completionMessage.classList.remove('show');

        // Calculate total duration based on selected documents
        const totalDocs = this.medicalDocuments.length;
        const baseDuration = this.processingStages.reduce((sum, stage) => sum + stage.duration, 0);
        let elapsed = 0;

        for (let i = 0; i < this.processingStages.length; i++) {
            const stage = this.processingStages[i];
            this.currentProcessingStage = i;
            
            // Update current stage
            this.updateProcessingStageUI(i, 'active');
            
            // Create realistic processing messages based on selected documents
            let stageMessage = this.getRealisticProcessingMessage(stage, i);
            if (progressText) progressText.textContent = stageMessage;
            
            // Update popup with current progress
            const currentProgress = ((elapsed + stage.duration/2) / baseDuration) * 100;
            const timeRemaining = baseDuration - elapsed - stage.duration/2;
            this.updateProcessingPopup(stageMessage, currentProgress, timeRemaining);
            
            // Animate progress for this stage
            const stageStart = elapsed;
            const stageEnd = elapsed + stage.duration;
            
            if (progressFill && progressTime) {
                await this.animateProgress(
                    (stageStart / baseDuration) * 100,
                    (stageEnd / baseDuration) * 100,
                    stage.duration * 100, // Convert to milliseconds
                    progressFill,
                    progressTime,
                    baseDuration - stageEnd
                );
            } else {
                // Just wait for the stage duration if elements don't exist
                await this.delay(stage.duration * 100);
            }
            
            // Mark stage as completed
            this.updateProcessingStageUI(i, 'completed');
            elapsed += stage.duration;
        }

        // Complete processing
        this.processingActive = false;
        
        // Complete all stages in popup
        this.currentProcessingStage = this.processingStages.length;
        this.updateProcessingPopup('Processing Complete!', 100, 0);
        
        // Show completion with actual file names
        const processedFileNames = this.medicalDocuments.slice(0, 3).map(doc => doc.name).join(', ');
        const moreFiles = this.medicalDocuments.length > 3 ? ` and ${this.medicalDocuments.length - 3} more files` : '';
        
        if (progressText) {
            progressText.textContent = `Successfully processed: ${processedFileNames}${moreFiles}`;
        }
        if (progressTime) {
            progressTime.textContent = `Extracted data from ${totalDocs} translated documents using ${this.jsonFiles[0].name}`;
        }
        
        await this.delay(1000);
        if (completionMessage) completionMessage.classList.add('show');
        
        // Mark processing header as completed
        if (processingHeader) processingHeader.classList.add('completed');
        
        // Hide processing popup and complete stage
        setTimeout(() => {
            this.hideProcessingPopup();
            this.completeStage(6); // Results Dashboard is now stage 6
        }, 2000);
    },

    getRealisticProcessingMessage(stage, index) {
        const docCount = this.medicalDocuments.length;
        const fileTypes = [...new Set(this.medicalDocuments.map(doc => this.getFileExtension(doc.name)))];
        const fileTypeText = fileTypes.includes('pdf') ? 'translated PDF files' : 'translated document files';
        
        const messages = {
            0: [
                `Parsing ${docCount} translated medical documents...`, 
                `Extracting text from ${fileTypeText}...`, 
                `Analyzing translated document structure and metadata...`
            ],
            1: [
                `Analyzing critical fields across ${docCount} translated documents...`, 
                `Extracting antibiotics and medication data from English translations...`, 
                `Processing feeding and nutrition information...`
            ],
            2: [
                `Processing specialized clinical data from translations...`, 
                `Analyzing translated surgical reports and procedures...`, 
                `Extracting respiratory support information...`
            ],
            3: [
                `Integrating data from ${docCount} translated sources...`, 
                `Resolving conflicts between translated documents...`, 
                `Cross-validating extracted information...`
            ],
            4: [
                'Performing quality validation on extracted data...', 
                'Calculating confidence scores for translated content...', 
                'Finalizing extracted dataset...'
            ]
        };
        
        const stageMessages = messages[index] || ['Processing...'];
        const randomMessage = stageMessages[Math.floor(Math.random() * stageMessages.length)];
        return randomMessage;
    },

    async animateProgress(startPercent, endPercent, duration, progressFill, progressTime, remainingTime) {
        const steps = 50;
        const stepDuration = duration / steps;
        const progressStep = (endPercent - startPercent) / steps;

        for (let i = 0; i <= steps; i++) {
            const currentProgress = startPercent + (progressStep * i);
            progressFill.style.width = `${currentProgress}%`;
            
            const timeRemaining = Math.max(0, remainingTime - ((i / steps) * (duration / 100)));
            progressTime.textContent = `Estimated time remaining: ${Math.ceil(timeRemaining)} seconds`;
            
            await this.delay(stepDuration);
        }
    },

    updateProcessingStageUI(stageIndex, status) {
        const stages = document.querySelectorAll('.processing-stage');
        
        stages.forEach((stage, index) => {
            stage.classList.remove('active', 'completed');
            
            if (index < stageIndex) {
                stage.classList.add('completed');
            } else if (index === stageIndex) {
                if (status === 'active') {
                    stage.classList.add('active');
                } else if (status === 'completed') {
                    stage.classList.add('completed');
                }
            }
        });
    },

    // Processing Popup Management
    toggleProcessingPopup() {
        const popupDetails = document.getElementById('popupDetails');
        const popupToggle = document.getElementById('popupToggle');
        
        if (popupDetails.classList.contains('show')) {
            popupDetails.classList.remove('show');
            popupToggle.classList.remove('expanded');
        } else {
            popupDetails.classList.add('show');
            popupToggle.classList.add('expanded');
        }
    },

    updateProcessingPopup(stage, progress, timeRemaining) {
        const popupProcessingText = document.getElementById('popupProcessingText');
        const progressFillSmall = document.getElementById('progressFillSmall');
        const popupProgressText = document.getElementById('popupProgressText');
        const popupProgressTime = document.getElementById('popupProgressTime');
        const popupStages = document.querySelectorAll('.popup-stage');

        if (popupProcessingText) {
            popupProcessingText.textContent = stage;
        }
        if (progressFillSmall) {
            progressFillSmall.style.width = `${progress}%`;
        }
        if (popupProgressText) {
            popupProgressText.textContent = stage;
        }
        if (popupProgressTime) {
            popupProgressTime.textContent = timeRemaining > 0 ? `${Math.ceil(timeRemaining)}s remaining` : 'Complete';
        }

        // Update popup stages based on current processing stage
        popupStages.forEach((stageEl, index) => {
            stageEl.classList.remove('active', 'completed');
            if (index < this.currentProcessingStage) {
                stageEl.classList.add('completed');
            } else if (index === this.currentProcessingStage) {
                stageEl.classList.add('active');
            }
        });
    },

    hideProcessingPopup() {
        const popup = document.getElementById('processingPopup');
        if (popup) {
            // Mark as completed first
            popup.classList.add('completed');
            
            // Update to show completion
            const popupProcessingText = document.getElementById('popupProcessingText');
            const popupIcon = popup.querySelector('.popup-icon i');
            if (popupProcessingText) {
                popupProcessingText.textContent = 'Processing Complete!';
            }
            if (popupIcon) {
                popupIcon.className = 'fas fa-check-circle';
            }
            
            // Hide after a delay
            setTimeout(() => {
                popup.classList.add('hidden');
            }, 3000);
        }
    }
});