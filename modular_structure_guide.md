# MediXtract Modular File Structure

This guide shows how to split the monolithic `script.js` and `styles.css` files into a clean, maintainable modular structure.

## JavaScript File Structure

### Core Files

#### `js/app.js` - Main Application Class
```javascript
// Main Application State Management
class MediXtractApp {
    constructor() {
        // All initialization properties...
        this.init();
    }
    
    init() {
        this.setupEventListeners();
        this.showStage(1);
    }
    
    setupEventListeners() {
        // All event listener setup...
    }
    
    // Core methods like resetForNewPatient(), resetDeliveryNotification()
}

// Global initialization
document.addEventListener('DOMContentLoaded', () => {
    window.medixtractApp = new MediXtractApp();
});
```

#### `js/stage_manager.js` - Stage Navigation
```javascript
Object.assign(MediXtractApp.prototype, {
    goToStage(stageNumber) { /* ... */ },
    completeStage(stageNumber) { /* ... */ },
    showStage(stageNumber) { /* ... */ },
    goToNewPatient() { /* ... */ },
    goTopatient_database() { /* ... */ },
    goTouser_portal() { /* ... */ },
    goTodocument_management() { /* ... */ }
});
```

#### `js/utils.js` - Utility Functions
```javascript
Object.assign(MediXtractApp.prototype, {
    delay(ms) { /* ... */ },
    formatFileSize(bytes) { /* ... */ },
    showNotification(message, type) { /* ... */ },
    getNotificationIcon(type) { /* ... */ },
    getNotificationColor(type) { /* ... */ },
    // PDF and delivery utilities
});
```

### Feature Modules

#### `js/authentication.js` - Login & User Management
```javascript
Object.assign(MediXtractApp.prototype, {
    handleLogin(e) { /* async login handling */ },
    formatRole(role) { /* role formatting */ },
    extractNameFromEmail(email) { /* name extraction */ },
    handleSignOut() { /* sign out logic */ }
});
```

#### `js/user_portal.js` - Dashboard & Portal
```javascript
Object.assign(MediXtractApp.prototype, {
    updateuser_portalInfo() { /* update user display */ },
    updateuser_portalStats() { /* refresh statistics */ },
    handleSecondaryAction(actionItem) { /* menu actions */ }
});
```

#### `js/patient_database.js` - Database Management
```javascript
Object.assign(MediXtractApp.prototype, {
    loadpatient_database() { /* load sample data */ },
    applyDatabaseFilters() { /* filter & search */ },
    sortPatients(patients, sortBy) { /* sorting logic */ },
    clearDatabaseFilters() { /* reset filters */ },
    renderpatient_database(patients) { /* render table */ },
    formatStatus(status) { /* status formatting */ },
    viewPatient(patientId) { /* view patient */ },
    editPatient(patientId) { /* edit patient */ }
});
```

#### `js/document_management.js` - File Upload & Analysis
```javascript
Object.assign(MediXtractApp.prototype, {
    handleFolderSelection(event) { /* folder selection */ },
    isMedicalDocument(file) { /* file validation */ },
    loadJsonFromFile(jsonFile) { /* JSON loading */ },
    showFolderAnalysis(folderName) { /* display analysis */ },
    renderMedicalDocuments() { /* render file list */ },
    renderSchemaInfo() { /* show schema info */ },
    updateFolderSummary() { /* update stats */ },
    // File utility methods...
});
```

#### `js/translation.js` - Translation Workflow
```javascript
Object.assign(MediXtractApp.prototype, {
    startTranslation() { /* begin translation */ },
    detectLanguage(fileName) { /* language detection */ },
    generateQualityScore() { /* quality scoring */ },
    runTranslationSimulation() { /* translation process */ },
    updateTranslationStageUI(stageIndex, status) { /* UI updates */ },
    renderDocumentList() { /* document list */ },
    selectDocumentForReview(documentItem) { /* document selection */ },
    approveCurrentDocument() { /* approve document */ },
    approveAllDocuments() { /* approve all */ },
    toggleDocumentView() { /* toggle view mode */ },
    // Translation utility methods...
});
```

#### `js/ai_processing.js` - AI Processing Simulation
```javascript
Object.assign(MediXtractApp.prototype, {
    startProcessing() { /* begin AI processing */ },
    runProcessingSimulation() { /* processing simulation */ },
    getRealisticProcessingMessage(stage, index) { /* stage messages */ },
    animateProgress(startPercent, endPercent, duration, progressFill, progressTime, remainingTime) { /* progress animation */ },
    updateProcessingStageUI(stageIndex, status) { /* stage UI updates */ },
    // Processing popup methods...
    toggleProcessingPopup() { /* toggle popup */ },
    updateProcessingPopup(stage, progress, timeRemaining) { /* update popup */ },
    hideProcessingPopup() { /* hide popup */ }
});
```

#### `js/results_dashboard.js` - Results & Field Management
```javascript
Object.assign(MediXtractApp.prototype, {
    switchResultsSection(sectionId) { /* switch sections */ },
    updateDeliveryButton() { /* update delivery state */ },
    loadJsonData() { /* load JSON data */ },
    categorizeFields() { /* categorize fields */ },
    renderFields() { /* render all fields */ },
    renderManualInputFields() { /* manual input fields */ },
    renderHighConfidenceFields() { /* high confidence fields */ },
    renderDoubleCheckFields() { /* double check fields */ },
    updateFieldCounts() { /* update counters */ },
    loadSampleData() { /* load sample data */ }
});
```

#### `js/field_manager.js` - Field Creation & Validation
```javascript
Object.assign(MediXtractApp.prototype, {
    createFieldCard(fieldName, field, category) { /* create field UI */ },
    generateInputField(field) { /* generate input */ },
    getFieldType(field) { /* determine field type */ },
    getFieldOptions(field) { /* get field options */ },
    generateSampleValue(field, fieldName) { /* generate values */ },
    formatFieldName(fieldName) { /* format names */ },
    // Field interaction methods...
    enableFieldEditing(fieldElement) { /* enable editing */ },
    handleFieldAccept(button) { /* accept field */ },
    handleFieldEdit(fieldCard) { /* edit field */ },
    handleAcceptAll(sectionId) { /* accept all */ },
    updateSectionCounters() { /* update counters */ },
    updateAcceptAllButtons() { /* update buttons */ }
});
```

#### `js/notifications.js` - Notifications & Modals
```javascript
Object.assign(MediXtractApp.prototype, {
    showNotification(message, type) { /* show notification */ },
    getNotificationIcon(type) { /* get icon */ },
    getNotificationColor(type) { /* get color */ },
    showDeliveryNotification() { /* show delivery */ },
    hideDeliveryNotification() { /* hide delivery */ },
    showPDFReview() { /* show PDF panel */ },
    closePDFReview() { /* close PDF panel */ }
});
```

## CSS File Structure

### `css/styles.css` - Main Import File
```css
/* Foundation Files */
@import "variables.css";
@import "reset.css";
@import "layout.css";

/* Component Files */
@import "buttons.css";
@import "forms.css";
@import "cards.css";
@import "tables.css";
@import "modals.css";
@import "notifications.css";
@import "progress.css";

/* Feature-Specific Files */
@import "authentication.css";
@import "user_portal.css";
@import "patient_database.css";
@import "document_management.css";
@import "translation.css";
@import "processing.css";
@import "results_dashboard.css";

/* Responsive Design */
@import "responsive.css";
```

### Foundation Files

#### `css/variables.css` - CSS Custom Properties
```css
:root {
    --color-primary: #1D6491;
    --color-accent: #4361EE;
    /* All CSS variables from original file */
}
```

#### `css/reset.css` - Reset & Base Styles
```css
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

/* Base typography and animations */
```

#### `css/layout.css` - Application Structure
```css
.app-container { /* ... */ }
.main-content { /* ... */ }
.stage-content { /* ... */ }
.stage-header { /* ... */ }
/* Core layout styles */
```

### Component Files

#### `css/buttons.css` - Button Styles
```css
.primary-btn { /* ... */ }
.btn-back-to-portal { /* ... */ }
.btn-accept { /* ... */ }
.btn-edit { /* ... */ }
.btn-review { /* ... */ }
/* All button variations */
```

#### `css/forms.css` - Form Components
```css
.form-group { /* ... */ }
.form-group input { /* ... */ }
.form-group select { /* ... */ }
.field-input { /* ... */ }
.field-select { /* ... */ }
/* Form styling */
```

#### `css/cards.css` - Card Components
```css
.welcome-card { /* ... */ }
.action-card { /* ... */ }
.field-card { /* ... */ }
.activity-card { /* ... */ }
/* All card styles */
```

#### `css/tables.css` - Table Components
```css
.patient-records-table { /* ... */ }
.table-header { /* ... */ }
.table-row { /* ... */ }
.table-cell { /* ... */ }
/* Table styling */
```

#### `css/modals.css` - Modal & Overlay Components
```css
.modal-overlay { /* ... */ }
.modal-content { /* ... */ }
.pdf-overlay { /* ... */ }
.pdf-review-panel { /* ... */ }
/* Modal and overlay styles */
```

#### `css/notifications.css` - Notification System
```css
.notification { /* ... */ }
.delivery-notification { /* ... */ }
.processing-popup { /* ... */ }
/* Notification styles */
```

#### `css/progress.css` - Progress Indicators
```css
.progress-bar { /* ... */ }
.progress-fill { /* ... */ }
.processing-stages { /* ... */ }
.translation-stages { /* ... */ }
/* Progress and loading styles */
```

### Feature-Specific Files

#### `css/authentication.css` - Login & Auth
```css
.auth-container { /* ... */ }
.auth-left { /* ... */ }
.auth-right { /* ... */ }
.auth-form { /* ... */ }
/* Authentication page styles */
```

#### `css/user_portal.css` - User Dashboard
```css
.welcome-section { /* ... */ }
.actions-section { /* ... */ }
.main-actions { /* ... */ }
.secondary-actions { /* ... */ }
.activity-section { /* ... */ }
/* User portal specific styles */
```

#### `css/patient_database.css` - Database Interface
```css
.database-controls { /* ... */ }
.search-filters { /* ... */ }
.filter-group { /* ... */ }
.database-results { /* ... */ }
/* Patient database styles */
```

#### `css/document_management.css` - File Upload
```css
.upload-section { /* ... */ }
.folder-selection { /* ... */ }
.folder-picker-zone { /* ... */ }
.folder-analysis { /* ... */ }
.medical-file-item { /* ... */ }
/* Document management styles */
```

#### `css/translation.css` - Translation Interface
```css
.translation-progress-header { /* ... */ }
.translation-container { /* ... */ }
.document-navigation { /* ... */ }
.document-comparison { /* ... */ }
.document-viewers { /* ... */ }
/* Translation workflow styles */
```

#### `css/processing.css` - AI Processing
```css
.processing-header { /* ... */ }
.processing-section { /* ... */ }
.processing-stages { /* ... */ }
.processing-stage { /* ... */ }
.completion-message { /* ... */ }
/* AI processing styles */
```

#### `css/results_dashboard.css` - Results Interface
```css
.results-navigation { /* ... */ }
.nav-tabs { /* ... */ }
.nav-tab { /* ... */ }
.results-main { /* ... */ }
.results-section { /* ... */ }
.field-grid { /* ... */ }
/* Results dashboard styles */
```

### `css/responsive.css` - Mobile Adaptations
```css
@media (max-width: 768px) {
    .main-content { padding: 20px; }
    .auth-container { flex-direction: column; }
    /* All responsive adaptations */
}
```

## HTML Integration

### Update HTML to include modular files:

```html
<head>
    <!-- Main CSS -->
    <link rel="stylesheet" href="css/styles.css">
</head>

<body>
    <!-- Your existing HTML content -->
    
    <!-- Core JavaScript Files -->
    <script src="js/app.js"></script>
    <script src="js/stage_manager.js"></script>
    <script src="js/utils.js"></script>
    
    <!-- Feature Modules -->
    <script src="js/authentication.js"></script>
    <script src="js/user_portal.js"></script>
    <script src="js/patient_database.js"></script>
    <script src="js/document_management.js"></script>
    <script src="js/translation.js"></script>
    <script src="js/ai_processing.js"></script>
    <script src="js/results_dashboard.js"></script>
    <script src="js/field_manager.js"></script>
    <script src="js/notifications.js"></script>
</body>
```

## Implementation Benefits

1. **Maintainability**: Easy to locate and modify specific functionality
2. **Team Collaboration**: Multiple developers can work on different modules
3. **Testing**: Individual modules can be tested in isolation
4. **Performance**: Can implement lazy loading for specific modules
5. **Reusability**: Components can be reused across different sections
6. **Organization**: Clear separation of concerns and functionality

## Notes

- All existing functionality is preserved
- No code logic is modified, only reorganized
- Each module extends the main MediXtractApp prototype
- CSS imports maintain the same cascade order
- Responsive styles are consolidated in one file
- File loading order ensures proper dependency resolution

This modular structure transforms the monolithic codebase into a clean, maintainable, and scalable architecture while preserving all existing functionality.