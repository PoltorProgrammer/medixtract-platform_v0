// Translation Extension for MediXtractApp
Object.assign(MediXtractApp.prototype, {
    // Translation Stage
    async startTranslation() {
        this.completeStage(4); // Document Management is stage 4
        this.currentStage = 5; // Translation Review is stage 5
        this.showStage(5);
        this.translationActive = true;
        
        // Initialize translated documents array
        this.translatedDocuments = this.medicalDocuments.map((doc, index) => ({
            id: index,
            name: doc.name,
            size: doc.size,
            originalLanguage: this.detectLanguage(doc.name),
            translationQuality: this.generateQualityScore(),
            status: 'pending',
            translated: false
        }));
        
        // Reset approval state
        this.approvedDocuments.clear();
        this.currentSelectedDocument = null;
        
        // Update translation summary
        this.updateTranslationSummary();
        
        // Show translation progress header
        const translationProgressHeader = document.getElementById('translationProgressHeader');
        if (translationProgressHeader) {
            translationProgressHeader.style.display = 'block';
        }
        
        // Hide translation dashboard initially
        const translationReviewDashboard = document.getElementById('translationReviewDashboard');
        if (translationReviewDashboard) {
            translationReviewDashboard.style.display = 'none';
        }
        
        // Start translation simulation
        await this.delay(500);
        this.runTranslationSimulation();
    },

    detectLanguage(fileName) {
        // Simulate language detection based on filename or content
        const languages = ['Spanish', 'French', 'German', 'Italian', 'Portuguese'];
        return languages[Math.floor(Math.random() * languages.length)];
    },

    generateQualityScore() {
        // Generate realistic quality scores (85-99%)
        return (85 + Math.random() * 14).toFixed(1);
    },

    async runTranslationSimulation() {
        const progressFill = document.getElementById('translationProgressFill');
        const progressText = document.getElementById('translationProgressText');
        const progressTime = document.getElementById('translationProgressTime');
        const completionMessage = document.getElementById('translationCompletionMessage');
        const translationProgressHeader = document.getElementById('translationProgressHeader');

        // Hide completion message initially
        if (completionMessage) completionMessage.classList.remove('show');

        // Calculate total duration
        const totalDocs = this.medicalDocuments.length;
        const baseDuration = this.translationStages.reduce((sum, stage) => sum + stage.duration, 0);
        let elapsed = 0;

        for (let i = 0; i < this.translationStages.length; i++) {
            const stage = this.translationStages[i];
            this.currentTranslationStage = i;
            
            // Update current stage
            this.updateTranslationStageUI(i, 'active');
            
            // Create realistic translation messages
            let stageMessage = this.getRealisticTranslationMessage(stage, i);
            if (progressText) progressText.textContent = stageMessage;
            
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
            this.updateTranslationStageUI(i, 'completed');
            elapsed += stage.duration;
        }

        // Complete translation
        this.translationActive = false;
        
        // Mark all documents as translated
        this.translatedDocuments.forEach(doc => {
            doc.status = 'translated';
            doc.translated = true;
        });
        
        // Show completion
        if (progressText) {
            progressText.textContent = `Successfully translated ${totalDocs} documents to English`;
        }
        if (progressTime) {
            progressTime.textContent = `All documents ready for review and validation`;
        }
        
        await this.delay(1000);
        if (completionMessage) completionMessage.classList.add('show');
        
        // Mark translation header as completed
        if (translationProgressHeader) translationProgressHeader.classList.add('completed');
        
        // Show translation review dashboard
        setTimeout(() => {
            const translationReviewDashboard = document.getElementById('translationReviewDashboard');
            if (translationReviewDashboard) {
                translationReviewDashboard.style.display = 'block';
            }
            if (translationProgressHeader) {
                translationProgressHeader.style.display = 'none';
            }
            this.renderDocumentList();
            this.updateTranslationSummary();
            this.completeStage(5);
        }, 2000);
    },

    getRealisticTranslationMessage(stage, index) {
        const docCount = this.medicalDocuments.length;
        
        const messages = {
            0: [
                `Analyzing language structure in ${docCount} documents...`, 
                'Detecting document languages and formats...',
                'Preparing documents for translation pipeline...'
            ],
            1: [
                `Translating ${docCount} medical documents to English...`, 
                'Processing medical terminology and context...',
                'Applying clinical translation models...'
            ],
            2: [
                'Preserving original document formatting...',
                'Maintaining table structures and layouts...',
                'Ensuring visual consistency with originals...'
            ],
            3: [
                'Validating translation accuracy...',
                'Checking medical terminology consistency...',
                'Calculating quality confidence scores...'
            ]
        };
        
        const stageMessages = messages[index] || ['Processing...'];
        const randomMessage = stageMessages[Math.floor(Math.random() * stageMessages.length)];
        return randomMessage;
    },

    updateTranslationStageUI(stageIndex, status) {
        const stages = document.querySelectorAll('.translation-stage');
        
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

    renderDocumentList() {
        const documentList = document.getElementById('documentList');
        if (!documentList) return;

        documentList.innerHTML = '';

        this.translatedDocuments.forEach(doc => {
            const documentItem = document.createElement('div');
            documentItem.className = `document-item ${doc.status === 'approved' ? 'approved' : ''}`;
            documentItem.dataset.documentId = doc.id;

            documentItem.innerHTML = `
                <div class="document-item-header">
                    <div class="document-name">${doc.name}</div>
                    <div class="document-status ${doc.status}">${this.formatDocumentStatus(doc.status)}</div>
                </div>
                <div class="document-info">
                    <span>${this.formatFileSize(doc.size)}</span>
                    <span>Quality: ${doc.translationQuality}%</span>
                </div>
            `;

            documentList.appendChild(documentItem);
        });
    },

    formatDocumentStatus(status) {
        const statusMap = {
            'pending': 'Pending',
            'translated': 'Translated',
            'approved': 'Approved'
        };
        return statusMap[status] || status;
    },

    selectDocumentForReview(documentItem) {
        // Remove active class from all document items
        document.querySelectorAll('.document-item').forEach(item => {
            item.classList.remove('active');
        });

        // Add active class to selected item
        documentItem.classList.add('active');

        // Get document data
        const documentId = parseInt(documentItem.dataset.documentId);
        this.currentSelectedDocument = this.translatedDocuments[documentId];

        // Update comparison view
        this.updateDocumentComparison();

        // Enable approve button
        const approveDocBtn = document.getElementById('approveDocBtn');
        if (approveDocBtn) {
            approveDocBtn.disabled = false;
        }
    },

    updateDocumentComparison() {
        if (!this.currentSelectedDocument) return;

        const currentDocumentTitle = document.getElementById('currentDocumentTitle');
        const originalLanguage = document.getElementById('originalLanguage');
        const translationQualityBadge = document.getElementById('translationQualityBadge');
        const originalDocViewer = document.getElementById('originalDocViewer');
        const translatedDocViewer = document.getElementById('translatedDocViewer');

        if (currentDocumentTitle) {
            currentDocumentTitle.textContent = this.currentSelectedDocument.name;
        }

        if (originalLanguage) {
            originalLanguage.textContent = `Detected: ${this.currentSelectedDocument.originalLanguage}`;
        }

        if (translationQualityBadge) {
            translationQualityBadge.textContent = `Quality: ${this.currentSelectedDocument.translationQuality}%`;
        }

        // Update document viewers with simulated content
        if (originalDocViewer) {
            originalDocViewer.innerHTML = `
                <div class="document-content">
                    <h4>Original Document Content</h4>
                    <p><strong>File:</strong> ${this.currentSelectedDocument.name}</p>
                    <p><strong>Language:</strong> ${this.currentSelectedDocument.originalLanguage}</p>
                    <p><strong>Size:</strong> ${this.formatFileSize(this.currentSelectedDocument.size)}</p>
                    <div class="content-preview">
                        <p><em>This would show the original document content in its native language. In a real implementation, this would display the actual PDF or document content for side-by-side comparison.</em></p>
                    </div>
                </div>
            `;
        }

        if (translatedDocViewer) {
            translatedDocViewer.innerHTML = `
                <div class="document-content">
                    <h4>English Translation</h4>
                    <p><strong>Quality Score:</strong> ${this.currentSelectedDocument.translationQuality}%</p>
                    <p><strong>Status:</strong> ${this.formatDocumentStatus(this.currentSelectedDocument.status)}</p>
                    <div class="content-preview">
                        <p><em>This would show the English translation of the document, preserving the original formatting and structure. Medical terminology would be accurately translated while maintaining clinical context.</em></p>
                    </div>
                </div>
            `;
        }
    },

    approveCurrentDocument() {
        if (!this.currentSelectedDocument) return;

        // Mark document as approved
        this.currentSelectedDocument.status = 'approved';
        this.approvedDocuments.add(this.currentSelectedDocument.id);

        // Update document item in list
        const documentItem = document.querySelector(`[data-document-id="${this.currentSelectedDocument.id}"]`);
        if (documentItem) {
            documentItem.classList.add('approved');
            const statusElement = documentItem.querySelector('.document-status');
            if (statusElement) {
                statusElement.textContent = 'Approved';
                statusElement.className = 'document-status approved';
            }
        }

        // Update comparison view
        this.updateDocumentComparison();
        
        // Update summary and check if all approved
        this.updateTranslationSummary();
        this.checkAllDocumentsApproved();

        this.showNotification(`Document "${this.currentSelectedDocument.name}" approved`, 'success');
    },

    approveAllDocuments() {
        this.translatedDocuments.forEach(doc => {
            doc.status = 'approved';
            this.approvedDocuments.add(doc.id);
        });

        // Update all document items
        document.querySelectorAll('.document-item').forEach(item => {
            item.classList.add('approved');
            const statusElement = item.querySelector('.document-status');
            if (statusElement) {
                statusElement.textContent = 'Approved';
                statusElement.className = 'document-status approved';
            }
        });

        // Update summary and enable proceed button
        this.updateTranslationSummary();
        this.checkAllDocumentsApproved();

        this.showNotification('All documents approved for processing', 'success');
    },

    checkAllDocumentsApproved() {
        const allApproved = this.translatedDocuments.length === this.approvedDocuments.size;
        
        const proceedBtn = document.getElementById('proceedProcessingBtn');
        if (proceedBtn) {
            proceedBtn.disabled = !allApproved;
        }

        const approveAllBtn = document.getElementById('approveAllBtn');
        if (approveAllBtn && allApproved) {
            approveAllBtn.innerHTML = '<i class="fas fa-check-double"></i> All Documents Approved';
            approveAllBtn.disabled = true;
        }
    },

    updateTranslationSummary() {
        const totalDocuments = document.getElementById('total-documents');
        const translatedDocs = document.getElementById('translated-docs');
        const approvedDocs = document.getElementById('reviewed-docs');

        if (totalDocuments) {
            totalDocuments.textContent = this.translatedDocuments.length;
        }
        if (translatedDocs) {
            translatedDocs.textContent = this.translatedDocuments.filter(doc => doc.translated).length;
        }
        if (approvedDocs) {
            approvedDocs.textContent = this.approvedDocuments.size;
        }
    },

    toggleDocumentView() {
        const documentViewers = document.querySelector('.document-viewers');
        const toggleBtn = document.getElementById('toggleViewBtn');
        
        if (documentViewers && toggleBtn) {
            if (documentViewers.style.flexDirection === 'column') {
                documentViewers.style.flexDirection = 'row';
                toggleBtn.innerHTML = '<i class="fas fa-columns"></i> Side by Side';
            } else {
                documentViewers.style.flexDirection = 'column';
                toggleBtn.innerHTML = '<i class="fas fa-bars"></i> Stacked View';
            }
        }
    }
});