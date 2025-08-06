// Main Application State Management
class MediXtractApp {
    constructor() {
        this.currentStage = 1;
        this.completedStages = [];
        this.medicalDocuments = [];
        this.jsonFiles = [];
        this.processingProgress = 0;
        this.processingStages = [
            { id: 'parsing', name: 'Document Parsing', duration: 15 },
            { id: 'critical', name: 'Critical Fields Analysis', duration: 20 },
            { id: 'specialized', name: 'Specialized Analysis', duration: 25 },
            { id: 'integration', name: 'Data Integration', duration: 10 },
            { id: 'validation', name: 'Quality Validation', duration: 8 }
        ];
        this.translationStages = [
            { id: 'analysis', name: 'Document Analysis', duration: 10 },
            { id: 'translation', name: 'AI Translation', duration: 25 },
            { id: 'formatting', name: 'Format Preservation', duration: 12 },
            { id: 'validation', name: 'Quality Validation', duration: 8 }
        ];
        this.currentProcessingStage = 0;
        this.currentTranslationStage = 0;
        this.processingTimer = null;
        this.translationTimer = null;
        this.jsonData = null;
        this.categorizedFields = {
            highConfidence: {},
            doubleCheck: {},
            manualInput: {}
        };
        this.fieldAcceptanceState = {}; // Track acceptance state of fields
        this.patientDatabase = []; // Store patient data
        this.currentPatientId = null;
        this.userInfo = {
            name: 'Dr. Smith',
            role: 'Attending Physician',
            email: ''
        };
        this.processingActive = false; // Track if AI processing is active
        this.translationActive = false; // Track if translation is active
        this.allPatients = []; // Store all patient records for filtering
        this.translatedDocuments = []; // Store translation state
        this.approvedDocuments = new Set(); // Track approved documents
        this.currentSelectedDocument = null; // Currently selected document for review
        
        this.init();
    }

    init() {
        this.setupEventListeners();
        this.showStage(1);
    }

    setupEventListeners() {
        // Authentication form
        const loginForm = document.getElementById('loginForm');
        if (loginForm) {
            loginForm.addEventListener('submit', (e) => this.handleLogin(e));
        }

        // User Portal actions
        const newPatientCard = document.getElementById('newPatientCard');
        const viewPatientsCard = document.getElementById('viewPatientsCard');
        
        if (newPatientCard) {
            newPatientCard.addEventListener('click', () => this.goToNewPatient());
        }
        if (viewPatientsCard) {
            viewPatientsCard.addEventListener('click', () => this.goToPatientDatabase());
        }

        // Patient Database navigation
        const backToPortalBtn = document.getElementById('backToPortalBtn');
        const backPortalBtn = document.getElementById('backPortalBtn');
        const backToPortalFromDoc = document.getElementById('backToPortalFromDoc');
        const backToDocumentsBtn = document.getElementById('backToDocumentsBtn');
        
        if (backToPortalBtn) {
            backToPortalBtn.addEventListener('click', () => this.goToUserPortal());
        }
        if (backPortalBtn) {
            backPortalBtn.addEventListener('click', () => this.goToUserPortal());
        }
        if (backToPortalFromDoc) {
            backToPortalFromDoc.addEventListener('click', () => this.goToUserPortal());
        }
        if (backToDocumentsBtn) {
            backToDocumentsBtn.addEventListener('click', () => this.goToDocumentManagement());
        }

        // Patient Database filters - automatic updates
        const patientIdFilter = document.getElementById('patientIdFilter');
        const hospitalFilter = document.getElementById('hospitalFilter');
        const statusFilter = document.getElementById('statusFilter');
        const clearFiltersBtn = document.getElementById('clearFiltersBtn');
        const sortBySelect = document.getElementById('sortBy');

        if (patientIdFilter) {
            patientIdFilter.addEventListener('input', () => this.applyDatabaseFilters());
        }
        if (hospitalFilter) {
            hospitalFilter.addEventListener('change', () => this.applyDatabaseFilters());
        }
        if (statusFilter) {
            statusFilter.addEventListener('change', () => this.applyDatabaseFilters());
        }
        if (clearFiltersBtn) {
            clearFiltersBtn.addEventListener('click', () => this.clearDatabaseFilters());
        }
        if (sortBySelect) {
            sortBySelect.addEventListener('change', () => this.applyDatabaseFilters());
        }

        // Folder selection
        const selectFolderBtn = document.getElementById('selectFolderBtn');
        const folderInput = document.getElementById('folderInput');
        
        if (selectFolderBtn && folderInput) {
            selectFolderBtn.addEventListener('click', () => folderInput.click());
            folderInput.addEventListener('change', (e) => this.handleFolderSelection(e));
        }

        // Translation button (replaces original processing button)
        const startTranslationBtn = document.getElementById('startTranslationBtn');
        if (startTranslationBtn) {
            startTranslationBtn.addEventListener('click', () => this.startTranslation());
        }

        // Translation review buttons
        const approveAllBtn = document.getElementById('approveAllBtn');
        const proceedProcessingBtn = document.getElementById('proceedProcessingBtn');
        const approveDocBtn = document.getElementById('approveDocBtn');
        const toggleViewBtn = document.getElementById('toggleViewBtn');

        if (approveAllBtn) {
            approveAllBtn.addEventListener('click', () => this.approveAllDocuments());
        }
        if (proceedProcessingBtn) {
            proceedProcessingBtn.addEventListener('click', () => this.startProcessing());
        }
        if (approveDocBtn) {
            approveDocBtn.addEventListener('click', () => this.approveCurrentDocument());
        }
        if (toggleViewBtn) {
            toggleViewBtn.addEventListener('click', () => this.toggleDocumentView());
        }

        // Results navigation
        const navTabs = document.querySelectorAll('.nav-tab');
        navTabs.forEach(tab => {
            tab.addEventListener('click', () => this.switchResultsSection(tab.dataset.section));
        });

        // Processing popup toggle
        const popupToggle = document.getElementById('popupToggle');
        const popupHeader = document.querySelector('.popup-header');
        if (popupToggle && popupHeader) {
            popupHeader.addEventListener('click', () => this.toggleProcessingPopup());
        }

        // Accept All buttons
        document.addEventListener('click', (e) => {
            if (e.target.classList.contains('btn-accept-all')) {
                this.handleAcceptAll(e.target.dataset.section);
            }
        });

        // Field editing and actions
        document.addEventListener('click', (e) => {
            if (e.target.classList.contains('field-value') && e.target.classList.contains('editable')) {
                this.enableFieldEditing(e.target);
            }
            if (e.target.classList.contains('btn-edit')) {
                const fieldCard = e.target.closest('.field-card');
                this.handleFieldEdit(fieldCard);
            }
            if (e.target.classList.contains('btn-accept')) {
                this.handleFieldAccept(e.target);
            }
            if (e.target.classList.contains('btn-review')) {
                this.showPDFReview();
            }
            if (e.target.classList.contains('btn-delivery') || e.target.classList.contains('btn-delivery-fixed')) {
                this.handleDelivery();
            }
            if (e.target.classList.contains('pdf-close') || e.target.closest('.pdf-close')) {
                this.closePDFReview();
            }
        });

        // Document item clicks for translation review
        document.addEventListener('click', (e) => {
            const documentItem = e.target.closest('.document-item');
            if (documentItem) {
                this.selectDocumentForReview(documentItem);
            }
        });

        // PDF Review Panel - Close when clicking outside
        document.addEventListener('click', (e) => {
            const pdfPanel = document.getElementById('pdfReviewPanel');
            const overlay = document.getElementById('pdfOverlay');
            
            if (pdfPanel && pdfPanel.classList.contains('active')) {
                // Check if click is on the overlay or outside the panel
                if (e.target === overlay || (!pdfPanel.contains(e.target) && !e.target.classList.contains('btn-review'))) {
                    this.closePDFReview();
                }
            }
        });

        // Keyboard event handlers
        document.addEventListener('keydown', (e) => {
            // ESC key to close PDF review panel
            if (e.key === 'Escape') {
                const pdfPanel = document.getElementById('pdfReviewPanel');
                if (pdfPanel && pdfPanel.classList.contains('active')) {
                    this.closePDFReview();
                    e.preventDefault();
                }
            }
        });

        // Secondary actions in User Portal
        document.addEventListener('click', (e) => {
            const secondaryAction = e.target.closest('.secondary-action-item');
            if (secondaryAction) {
                this.handleSecondaryAction(secondaryAction);
            }
        });

        // No manual step navigation - pure sequential flow only
    }

    resetForNewPatient() {
        // Clear all field containers for fresh start
        const containers = ['manual-input-fields', 'high-confidence-fields', 'double-check-fields'];
        containers.forEach(containerId => {
            const container = document.getElementById(containerId);
            if (container) {
                container.innerHTML = '';
            }
        });
        
        // Reset processing states
        this.processingActive = false;
        this.translationActive = false;
        this.medicalDocuments = [];
        this.jsonFiles = [];
        this.jsonData = null;
        this.categorizedFields = {
            highConfidence: {},
            doubleCheck: {},
            manualInput: {}
        };
        this.translatedDocuments = [];
        this.approvedDocuments.clear();
        this.currentSelectedDocument = null;
        
        // Reset delivery notification completely
        this.resetDeliveryNotification();
        
        // Reset folder selection interface
        const folderSelection = document.getElementById('folderSelection');
        const folderAnalysis = document.getElementById('folderAnalysis');
        if (folderSelection && folderAnalysis) {
            folderSelection.style.display = 'block';
            folderAnalysis.style.display = 'none';
        }
        
        // Reset folder input
        const folderInput = document.getElementById('folderInput');
        if (folderInput) {
            folderInput.value = '';
        }
    }

    resetDeliveryNotification() {
        // Hide delivery notification if it's visible
        this.hideDeliveryNotification();
        
        // Reset delivery button to original state
        const deliveryBtn = document.querySelector('.btn-delivery-fixed');
        if (deliveryBtn) {
            deliveryBtn.innerHTML = '<i class="fas fa-paper-plane"></i> Deliver Patient Data';
            deliveryBtn.disabled = false;
            deliveryBtn.style.opacity = '1';
        }
        
        // Don't reset fieldAcceptanceState here - that should be handled separately
    }
}

// Initialize Application
document.addEventListener('DOMContentLoaded', () => {
    window.medixtractApp = new MediXtractApp();
});

// Global error handling
window.addEventListener('error', (e) => {
    console.error('Application error:', e.error);
    if (window.medixtractApp) {
        window.medixtractApp.showNotification('An unexpected error occurred', 'error');
    }
});

// Handle window resize for responsive behavior
window.addEventListener('resize', () => {
    // Update any responsive elements if needed
    const results = document.querySelector('.results-container');
    if (results && window.innerWidth <= 768) {
        results.style.flexDirection = 'column';
    } else if (results) {
        results.style.flexDirection = 'row';
    }
});