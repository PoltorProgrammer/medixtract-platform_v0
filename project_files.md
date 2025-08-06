### File: index.html
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>MediXtract - Clinical Data Extraction Platform</title>
    <link rel="icon" type="image/png" href="https://raw.githubusercontent.com/MediXTract/MediXtract/refs/heads/main/images/LOGO_MediXtract_Circular.png">
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" rel="stylesheet">
    <link rel="stylesheet" href="css/styles.css">
</head>
<body>
    <div class="app-container">
        <!-- Main Content Area -->
        <div class="main-content">
            <!-- Stage 1: Authentication -->
            <div class="stage-content active" id="stage-1">
                <div class="stage-header">
                    <h1><i class="fas fa-stethoscope"></i> MediXtract</h1>
                    <p>AI-Powered Clinical Data Extraction Platform</p>
                </div>

                <div class="auth-container">
                    <div class="auth-left">
                        <h2>Clinical Access Portal</h2>
                        <p>Secure authentication with institutional SSO integration and role-based access controls.</p>
                        <ul class="feature-list">
                            <li><i class="fas fa-shield-alt"></i> Enterprise Security Standards</li>
                            <li><i class="fas fa-users"></i> Multi-Role Access Management</li>
                            <li><i class="fas fa-key"></i> Single Sign-On Integration</li>
                            <li><i class="fas fa-history"></i> Complete Audit Trail</li>
                        </ul>
                    </div>
                    <div class="auth-right">
                        <form class="auth-form" id="loginForm">
                            <h3>Sign In to MediXtract</h3>
                            <div class="form-group">
                                <label for="email">Email Address</label>
                                <input type="email" id="email" placeholder="physician@hospital.com" required>
                            </div>
                            <div class="form-group">
                                <label for="password">Password</label>
                                <input type="password" id="password" placeholder="Enter your password" required>
                            </div>
                            <div class="form-group">
                                <label for="role">Role</label>
                                <select id="role" required>
                                    <option value="">Select your role</option>
                                    <option value="physician">Attending Physician</option>
                                    <option value="resident">Resident</option>
                                    <option value="analyst">Data Analyst</option>
                                    <option value="coordinator">Research Coordinator</option>
                                </select>
                            </div>
                            <button type="submit" class="primary-btn">
                                <i class="fas fa-sign-in-alt"></i> Sign In
                            </button>
                        </form>
                    </div>
                </div>
            </div>

            <!-- Stage 2: User Portal -->
            <div class="stage-content" id="stage-2">
                <div class="stage-header">
                    <h2>User Portal</h2>
                    <p>Welcome to your clinical data extraction workspace</p>
                </div>

                <div class="portal-container">
                    <!-- User Welcome Section -->
                    <div class="welcome-section">
                        <div class="welcome-card">
                            <div class="welcome-content">
                                <div class="user-info">
                                    <div class="user-avatar">
                                        <i class="fas fa-user-md"></i>
                                    </div>
                                    <div class="user-details">
                                        <h3>Welcome back, <span id="userName">Dr. Smith</span></h3>
                                        <p class="user-role" id="userRole">Attending Physician</p>
                                        <p class="last-login">Last login: Today at 2:30 PM</p>
                                    </div>
                                </div>
                                
                                    <div class="quick-stats">
                                        <div class="stat-item">
                                            <span class="stat-number" id="ongoingPatients">3</span>
                                            <span class="stat-label">Ongoing Cases</span>
                                        </div>
                                        <div class="stat-item">
                                            <span class="stat-number" id="completedPatients">21</span>
                                            <span class="stat-label">Completed Cases</span>
                                        </div>
                                        <div class="stat-item">
                                            <span class="stat-number" id="totalFieldsProcessed">156</span>
                                            <span class="stat-label">Fields Extracted</span>
                                        </div>
                                    </div>
                            </div>
                        </div>
                    </div>

                    <!-- Main Actions Section -->
                    <div class="actions-section">
                        <div class="main-actions">
                            <div class="action-card primary-action" id="newPatientCard">
                                <div class="action-icon">
                                    <i class="fas fa-plus-circle"></i>
                                </div>
                                <div class="action-content">
                                    <h3>Introduce New Patient</h3>
                                    <p>Upload and process medical documents for a new patient case</p>
                                    <div class="action-features">
                                        <span><i class="fas fa-check"></i> Multi-format document support</span>
                                        <span><i class="fas fa-check"></i> AI-powered data extraction</span>
                                        <span><i class="fas fa-check"></i> Quality validation workflow</span>
                                    </div>
                                </div>
                                <button class="action-btn">
                                    <i class="fas fa-arrow-right"></i> Start New Case
                                </button>
                            </div>

                            <div class="action-card secondary-action" id="viewPatientsCard">
                                <div class="action-icon">
                                    <i class="fas fa-list-alt"></i>
                                </div>
                                <div class="action-content">
                                    <h3>View Patient Database</h3>
                                    <p>Review and manage previously processed patient data</p>
                                    <div class="action-features">
                                        <span><i class="fas fa-check"></i> Search and filter patients</span>
                                        <span><i class="fas fa-check"></i> Edit and validate data</span>
                                        <span><i class="fas fa-check"></i> Export patient records</span>
                                    </div>
                                </div>
                                <button class="action-btn">
                                    <i class="fas fa-arrow-right"></i> View Database
                                </button>
                            </div>
                        </div>

                        <!-- Secondary Actions -->
                        <div class="secondary-actions">
                            <div class="secondary-action-item">
                                <i class="fas fa-cog"></i>
                                <span>System Settings</span>
                            </div>
                            <div class="secondary-action-item">
                                <i class="fas fa-download"></i>
                                <span>Export Reports</span>
                            </div>
                            <div class="secondary-action-item">
                                <i class="fas fa-question-circle"></i>
                                <span>Help & Support</span>
                            </div>
                            <div class="secondary-action-item">
                                <i class="fas fa-sign-out-alt"></i>
                                <span>Sign Out</span>
                            </div>
                        </div>
                    </div>

                    <!-- Recent Activity Section -->
                    <div class="activity-section">
                        <div class="activity-card">
                            <h3><i class="fas fa-clock"></i> Recent Activity</h3>
                            <div class="activity-list">
                                <div class="activity-item">
                                    <div class="activity-icon completed">
                                        <i class="fas fa-check"></i>
                                    </div>
                                    <div class="activity-content">
                                        <h4>Patient NEC-2024-023 - Processing Complete</h4>
                                        <p>All 34 fields extracted with 97.8% confidence • 15 minutes ago</p>
                                    </div>
                                </div>
                                <div class="activity-item">
                                    <div class="activity-icon pending">
                                        <i class="fas fa-clock"></i>
                                    </div>
                                    <div class="activity-content">
                                        <h4>Patient NEC-2024-022 - Validation Pending</h4>
                                        <p>Manual review required for 3 fields • 2 hours ago</p>
                                    </div>
                                </div>
                                <div class="activity-item">
                                    <div class="activity-icon completed">
                                        <i class="fas fa-check"></i>
                                    </div>
                                    <div class="activity-content">
                                        <h4>Patient NEC-2024-021 - Data Delivered</h4>
                                        <p>Successfully delivered to research database • Yesterday</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Stage 3: Patient Database -->
            <div class="stage-content" id="stage-3">
                <div class="stage-header">
                    <h2>Patient Database</h2>
                    <p>Search, filter, and manage patient data processing records</p>
                </div>

                <div class="database-container">
                    <!-- Database Controls -->
                    <div class="database-controls">
                        <div class="controls-left">
                            <button class="btn-back-to-portal" id="backToPortalBtn">
                                <i class="fas fa-arrow-left"></i> Back to Portal
                            </button>
                        </div>
                        
                        <div class="controls-center">
                            <div class="search-filters">
                                <div class="filter-group">
                                    <label for="patientIdFilter">Patient ID</label>
                                    <input type="text" id="patientIdFilter" placeholder="Search by Patient ID..." class="filter-input">
                                </div>
                                <div class="filter-group">
                                    <label for="hospitalFilter">Hospital</label>
                                    <select id="hospitalFilter" class="filter-select">
                                        <option value="">All Hospitals</option>
                                        <option value="general">General Hospital</option>
                                        <option value="children">Children's Hospital</option>
                                        <option value="medical">Medical Center</option>
                                        <option value="university">University Hospital</option>
                                    </select>
                                </div>
                                <div class="filter-group">
                                    <label for="statusFilter">Processing Status</label>
                                    <select id="statusFilter" class="filter-select">
                                        <option value="">All Statuses</option>
                                        <option value="processing">Processing</option>
                                        <option value="review">Under Review</option>
                                        <option value="completed">Completed</option>
                                        <option value="delivered">Delivered</option>
                                    </select>
                                </div>
                                <button class="btn-clear-filters" id="clearFiltersBtn">
                                    <i class="fas fa-times"></i> Clear Filters
                                </button>
                            </div>
                        </div>
                        
                        <div class="controls-right">
                            <button class="btn-refresh" id="refreshDatabaseBtn">
                                <i class="fas fa-sync-alt"></i> Refresh
                            </button>
                        </div>
                    </div>

                    <!-- Database Results -->
                    <div class="database-results">
                        <div class="results-header">
                            <h3>Patient Records <span class="results-count" id="resultsCount">(24 found)</span></h3>
                            <div class="sort-controls">
                                <label for="sortBy">Sort by:</label>
                                <select id="sortBy" class="sort-select">
                                    <option value="date">Date Added</option>
                                    <option value="patient-id">Patient ID</option>
                                    <option value="status">Status</option>
                                    <option value="hospital">Hospital</option>
                                </select>
                            </div>
                        </div>

                        <div class="patient-records-table">
                            <div class="table-header">
                                <div class="header-cell header-patient-id">Patient ID</div>
                                <div class="header-cell header-hospital">Hospital</div>
                                <div class="header-cell header-date">Date Added</div>
                                <div class="header-cell header-status">Status</div>
                                <div class="header-cell header-fields">Fields</div>
                                <div class="header-cell header-actions">Actions</div>
                            </div>
                            <div class="table-body" id="patientRecordsBody">
                                <!-- Patient records will be populated here -->
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Stage 4: Document Management -->
            <div class="stage-content" id="stage-4">
                <div class="stage-header">
                    <h2>Patient Data Management Portal</h2>
                    <p>Upload medical documents for a new patient</p>
                </div>

                <div class="portal-container">
                    <!-- Back to Portal Navigation -->
                    <div class="back-navigation">
                        <button class="btn-back-to-portal" id="backToPortalFromDoc">
                            <i class="fas fa-arrow-left"></i> Back to User Portal
                        </button>
                    </div>

                    <!-- New Patient Section -->
                    <div class="new-patient-section">
                        <div class="section-card">
                            <div class="upload-section">
                                <div class="folder-selection" id="folderSelection">
                                    <div class="folder-picker-zone" id="folderPickerZone">
                                        <i class="fas fa-folder-open"></i>
                                        <h4>Select Patient Document Folder</h4>
                                        <p>Choose a folder containing medical documents and JSON schema</p>
                                        <button class="primary-btn" id="selectFolderBtn">
                                            <i class="fas fa-folder"></i> Browse for Folder
                                        </button>
                                        <input type="file" id="folderInput" webkitdirectory multiple style="display: none;">
                                    </div>
                                    
                                    <div class="folder-requirements">
                                        <h4><i class="fas fa-info-circle"></i> Folder Requirements</h4>
                                        <ul>
                                            <li><strong>Medical Documents:</strong> PDF, DOC, DOCX, TXT files</li>
                                            <li><strong>JSON Schema:</strong> One .json file containing field definitions</li>
                                            <li><strong>Supported formats:</strong> Clinical notes, lab results, surgical reports</li>
                                        </ul>
                                    </div>
                                </div>

                                <div class="folder-analysis" id="folderAnalysis" style="display: none;">
                                    <div class="analysis-header">
                                        <h3><i class="fas fa-check-circle"></i> Folder Analysis Complete</h3>
                                        <p id="folderPath">Analyzing folder contents...</p>
                                    </div>
                                    
                                    <div class="folder-contents">
                                        <div class="content-section">
                                            <h4><i class="fas fa-file-medical"></i> Medical Documents Found</h4>
                                            <div class="medical-files" id="medicalFiles">
                                                <!-- Medical documents will be listed here -->
                                            </div>
                                        </div>
                                        
                                        <div class="content-section">
                                            <h4><i class="fas fa-file-code"></i> Schema File</h4>
                                            <div class="schema-file" id="schemaFile">
                                                <!-- JSON schema info will be shown here -->
                                            </div>
                                        </div>
                                    </div>

                                    <div class="processing-summary-box">
                                        <h4>Processing Summary</h4>
                                        <div class="summary-stats">
                                            <div class="stat-item">
                                                <span class="stat-number" id="totalDocsCount">0</span>
                                                <span class="stat-label">Medical Documents</span>
                                            </div>
                                            <div class="stat-item">
                                                <span class="stat-number" id="totalFieldsCount">0</span>
                                                <span class="stat-label">Data Fields</span>
                                            </div>
                                            <div class="stat-item">
                                                <span class="stat-number" id="estimatedTime">0</span>
                                                <span class="stat-label">Est. Time (min)</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="action-section">
                                        <button class="primary-btn" id="startTranslationBtn">
                                            <i class="fas fa-language"></i> Begin Document Translation
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Stage 5: Translation Review -->
            <div class="stage-content" id="stage-5">
                <!-- Translation Progress Header -->
                <div class="translation-progress-header" id="translationProgressHeader" style="display: none;">
                    <div class="stage-header">
                        <h2><i class="fas fa-language fa-spin"></i> Document Translation in Progress</h2>
                        <p id="translationPatient">Translating medical documents to English</p>
                    </div>

                    <div class="translation-progress-section">
                        <div class="progress-container">
                            <div class="progress-bar">
                                <div class="progress-fill" id="translationProgressFill"></div>
                            </div>
                            <div class="progress-text" id="translationProgressText">Initializing translation service...</div>
                            <div class="progress-time" id="translationProgressTime">Estimated time: Calculating...</div>
                        </div>

                        <div class="translation-stages" id="translationStages">
                            <div class="translation-stage" data-stage="analysis">
                                <div class="stage-icon"><i class="fas fa-search"></i></div>
                                <div class="stage-info">
                                    <h4>Document Analysis</h4>
                                    <p>Analyzing document language and structure</p>
                                </div>
                                <div class="stage-status"><i class="fas fa-clock"></i></div>
                            </div>
                            
                            <div class="translation-stage" data-stage="translation">
                                <div class="stage-icon"><i class="fas fa-language"></i></div>
                                <div class="stage-info">
                                    <h4>AI Translation</h4>
                                    <p>Converting documents to English with medical context</p>
                                </div>
                                <div class="stage-status"><i class="fas fa-clock"></i></div>
                            </div>
                            
                            <div class="translation-stage" data-stage="formatting">
                                <div class="stage-icon"><i class="fas fa-file-alt"></i></div>
                                <div class="stage-info">
                                    <h4>Format Preservation</h4>
                                    <p>Maintaining original document layout and structure</p>
                                </div>
                                <div class="stage-status"><i class="fas fa-clock"></i></div>
                            </div>
                            
                            <div class="translation-stage" data-stage="validation">
                                <div class="stage-icon"><i class="fas fa-check-double"></i></div>
                                <div class="stage-info">
                                    <h4>Quality Validation</h4>
                                    <p>Verifying translation accuracy and completeness</p>
                                </div>
                                <div class="stage-status"><i class="fas fa-clock"></i></div>
                            </div>
                        </div>

                        <div class="translation-completion-message" id="translationCompletionMessage">
                            <div class="completion-icon">
                                <i class="fas fa-check-circle"></i>
                            </div>
                            <h3>Translation Complete!</h3>
                            <p>All documents have been successfully translated to English.</p>
                        </div>
                    </div>
                </div>

                <!-- Translation Review Dashboard -->
                <div class="translation-review-dashboard" id="translationReviewDashboard">
                    <div class="stage-header">
                        <div class="header-content">
                            <div class="header-text">
                                <h2>Translation Review</h2>
                                <p>Review original and translated documents side by side</p>
                            </div>
                            <button class="btn-back-portal" id="backToDocumentsBtn">
                                <i class="fas fa-arrow-left"></i> Back to Documents
                            </button>
                        </div>
                    </div>

                    <div class="translation-container">
                        <!-- Document Navigation -->
                        <div class="document-navigation">
                            <div class="translation-summary">
                                <h4>Translation Summary</h4>
                                <div class="summary-grid translation-summary-grid">
                                    <div class="summary-item">
                                        <span>Total:</span>
                                        <span id="total-documents">0</span>
                                    </div>
                                    <div class="summary-item">
                                        <span>Translated:</span>
                                        <span class="success" id="translated-docs">0</span>
                                    </div>
                                    <div class="summary-item">
                                        <span>Approved:</span>
                                        <span class="info" id="reviewed-docs">0</span>
                                    </div>
                                </div>
                            </div>

                            <div class="document-list" id="documentList">
                                <!-- Document list will be populated here -->
                            </div>

                            <div class="translation-actions">
                                <button class="btn-approve-all" id="approveAllBtn">
                                    <i class="fas fa-check-double"></i> Approve All Translations
                                </button>
                                <button class="btn-proceed-processing" id="proceedProcessingBtn" disabled>
                                    <i class="fas fa-arrow-right"></i> Proceed to AI Processing
                                </button>
                            </div>
                        </div>

                        <!-- Document Comparison View -->
                        <div class="document-comparison">
                            <div class="comparison-header">
                                <h3 id="currentDocumentTitle">Select a document to review</h3>
                                <div class="comparison-controls">
                                    <button class="btn-toggle-view" id="toggleViewBtn">
                                        <i class="fas fa-columns"></i> Side by Side
                                    </button>
                                    <button class="btn-approve-doc" id="approveDocBtn" disabled>
                                        <i class="fas fa-check"></i> Approve Translation
                                    </button>
                                </div>
                            </div>

                            <div class="document-viewers">
                                <div class="document-viewer original-viewer">
                                    <div class="viewer-header">
                                        <h4><i class="fas fa-file"></i> Original Document</h4>
                                        <span class="language-badge" id="originalLanguage">Detected: Spanish</span>
                                    </div>
                                    <div class="viewer-content">
                                        <div class="document-placeholder" id="originalDocViewer">
                                            <i class="fas fa-file-alt"></i>
                                            <h4>Original Document</h4>
                                            <p>Select a document from the list to view the original version here.</p>
                                        </div>
                                    </div>
                                </div>

                                <div class="document-viewer translated-viewer">
                                    <div class="viewer-header">
                                        <h4><i class="fas fa-language"></i> English Translation</h4>
                                        <span class="quality-badge" id="translationQualityBadge">Quality: 96.7%</span>
                                    </div>
                                    <div class="viewer-content">
                                        <div class="document-placeholder" id="translatedDocViewer">
                                            <i class="fas fa-file-alt"></i>
                                            <h4>English Translation</h4>
                                            <p>The translated version will appear here for side-by-side comparison.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Stage 6: Results Dashboard with Integrated Processing -->
            <div class="stage-content" id="stage-6">
                <!-- Processing Notification Popup -->
                <div class="processing-popup" id="processingPopup" style="display: none;">
                    <div class="popup-header">
                        <div class="popup-icon">
                            <i class="fas fa-cog fa-spin"></i>
                        </div>
                        <div class="popup-content">
                            <h4>AI Processing in Progress</h4>
                            <p id="popupProcessingText">Processing medical documents...</p>
                        </div>
                        <button class="popup-toggle" id="popupToggle">
                            <i class="fas fa-chevron-down"></i>
                        </button>
                    </div>
                    <div class="popup-details" id="popupDetails">
                        <div class="popup-progress">
                            <div class="progress-bar-small">
                                <div class="progress-fill-small" id="progressFillSmall"></div>
                            </div>
                            <div class="progress-info">
                                <span id="popupProgressText">Initializing...</span>
                                <span id="popupProgressTime">78s remaining</span>
                            </div>
                        </div>
                        <div class="popup-stages" id="popupStages">
                            <div class="popup-stage" data-stage="parsing">
                                <i class="fas fa-file-text"></i> Document Parsing
                            </div>
                            <div class="popup-stage" data-stage="critical">
                                <i class="fas fa-exclamation-triangle"></i> Critical Fields Analysis
                            </div>
                            <div class="popup-stage" data-stage="specialized">
                                <i class="fas fa-lungs"></i> Specialized Analysis
                            </div>
                            <div class="popup-stage" data-stage="integration">
                                <i class="fas fa-puzzle-piece"></i> Data Integration
                            </div>
                            <div class="popup-stage" data-stage="validation">
                                <i class="fas fa-check-circle"></i> Quality Validation
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Processing Status Header (Hidden Initially) -->
                <div class="processing-header" id="processingHeader" style="display: none;">
                    <div class="stage-header">
                        <h2><i class="fas fa-cog fa-spin"></i> AI Processing in Progress</h2>
                        <p id="processingPatient">Processing Patient NEC-2024-001</p>
                    </div>

                    <div class="processing-section">
                        <div class="progress-container">
                            <div class="progress-bar">
                                <div class="progress-fill" id="progressFill"></div>
                            </div>
                            <div class="progress-text" id="progressText">Initializing AI processing...</div>
                            <div class="progress-time" id="progressTime">Estimated time: Calculating...</div>
                        </div>

                        <div class="processing-stages" id="processingStages">
                            <div class="processing-stage" data-stage="parsing">
                                <div class="stage-icon"><i class="fas fa-file-text"></i></div>
                                <div class="stage-info">
                                    <h4>Document Parsing</h4>
                                    <p>Analyzing clinical content structure</p>
                                </div>
                                <div class="stage-status"><i class="fas fa-clock"></i></div>
                            </div>
                            
                            <div class="processing-stage" data-stage="critical">
                                <div class="stage-icon"><i class="fas fa-exclamation-triangle"></i></div>
                                <div class="stage-info">
                                    <h4>Critical Fields Analysis</h4>
                                    <p>Extracting antibiotics, probiotics, feeding data</p>
                                </div>
                                <div class="stage-status"><i class="fas fa-clock"></i></div>
                            </div>
                            
                            <div class="processing-stage" data-stage="specialized">
                                <div class="stage-icon"><i class="fas fa-lungs"></i></div>
                                <div class="stage-info">
                                    <h4>Specialized Analysis</h4>
                                    <p>Respiratory support, surgical interventions</p>
                                </div>
                                <div class="stage-status"><i class="fas fa-clock"></i></div>
                            </div>
                            
                            <div class="processing-stage" data-stage="integration">
                                <div class="stage-icon"><i class="fas fa-puzzle-piece"></i></div>
                                <div class="stage-info">
                                    <h4>Data Integration</h4>
                                    <p>Combining results and resolving conflicts</p>
                                </div>
                                <div class="stage-status"><i class="fas fa-clock"></i></div>
                            </div>
                            
                            <div class="processing-stage" data-stage="validation">
                                <div class="stage-icon"><i class="fas fa-check-circle"></i></div>
                                <div class="stage-info">
                                    <h4>Quality Validation</h4>
                                    <p>Confidence scoring and final checks</p>
                                </div>
                                <div class="stage-status"><i class="fas fa-clock"></i></div>
                            </div>
                        </div>

                        <div class="completion-message" id="completionMessage">
                            <div class="completion-icon">
                                <i class="fas fa-check-circle"></i>
                            </div>
                            <h3>Processing Complete!</h3>
                            <p>All clinical data has been successfully extracted and validated.</p>
                        </div>
                    </div>
                </div>

                <!-- Results Dashboard Content -->
                <div class="results-dashboard" id="resultsDashboard">
                    <div class="stage-header">
                        <div class="header-content">
                            <div class="header-text">
                                <h2>Results Dashboard</h2>
                                <p>Review and validate extracted medical data</p>
                            </div>
                            <button class="btn-back-portal" id="backPortalBtn">
                                <i class="fas fa-home"></i> Return to Portal
                            </button>
                        </div>
                    </div>

                    <div class="results-container">
                        <div class="results-navigation">
                            <div class="processing-summary">
                                <h4>Processing Summary</h4>
                                <div class="summary-grid">
                                    <div class="summary-item">
                                        <span>Total Fields:</span>
                                        <span id="total-fields">0</span>
                                    </div>
                                    <div class="summary-item">
                                        <span>High Confidence:</span>
                                        <span class="success" id="high-confidence-summary">0</span>
                                    </div>
                                    <div class="summary-item">
                                        <span>To Be Checked:</span>
                                        <span class="warning" id="double-check-summary">0</span>
                                    </div>
                                    <div class="summary-item">
                                        <span>Manual Input:</span>
                                        <span class="info" id="manual-input-summary">0</span>
                                    </div>
                                </div>
                            </div>

                            <div class="nav-tabs">
                                <div class="nav-tab active" data-section="manual-input">
                                    <div class="nav-tab-content">
                                        <h4>Manual Input Required</h4>
                                        <p>Group 4 - Start here first</p>
                                        <span class="field-count" id="manual-input-count">0/0</span>
                                    </div>
                                </div>
                                <div class="nav-tab" data-section="high-confidence">
                                    <div class="nav-tab-content">
                                        <h4>High-Confidence Extractions</h4>
                                        <p>Groups 1 & 3 - Verified fields</p>
                                        <span class="field-count" id="high-confidence-count">0/0</span>
                                    </div>
                                </div>
                                <div class="nav-tab" data-section="double-check">
                                    <div class="nav-tab-content">
                                        <h4>To Be Double Checked</h4>
                                        <p>Groups 2 & 5 - AI predictions</p>
                                        <span class="field-count" id="double-check-count">0/0</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="results-main">
                            <div class="results-section active" id="manual-input">
                                <div class="section-header">
                                    <div class="section-title-group">
                                        <h3>Manual Input Required</h3>
                                        <p>Group 4 fields requiring human review and input - Available immediately</p>
                                    </div>
                                </div>
                                
                                <div class="field-grid" id="manual-input-fields">
                                    <!-- Fields will be loaded dynamically -->
                                </div>
                            </div>

                            <div class="results-section" id="high-confidence">
                                <div class="section-header">
                                    <div class="section-title-group">
                                        <h3>High-Confidence Extractions</h3>
                                        <p>Fields from Groups 1 & 3 with verified accuracy</p>
                                    </div>
                                    <button class="btn-accept-all" data-section="high-confidence">
                                        <i class="fas fa-check-double"></i> Accept All
                                    </button>
                                </div>
                                
                                <div class="field-grid" id="high-confidence-fields">
                                    <!-- Fields will be loaded dynamically -->
                                </div>
                            </div>

                            <div class="results-section" id="double-check">
                                <div class="section-header">
                                    <div class="section-title-group">
                                        <h3>To Be Double Checked</h3>
                                        <p>AI predictions from Groups 2 & 5 requiring verification</p>
                                    </div>
                                    <button class="btn-accept-all" data-section="double-check">
                                        <i class="fas fa-check-double"></i> Accept All
                                    </button>
                                </div>
                                
                                <div class="field-grid" id="double-check-fields">
                                    <!-- Fields will be loaded dynamically -->
                                </div>
                            </div>


                        </div>

                        <!-- PDF Review Panel Overlay -->
                        <div class="pdf-overlay" id="pdfOverlay" style="display: none;"></div>

                        <!-- PDF Review Panel -->
                        <div class="pdf-review-panel" id="pdfReviewPanel">
                            <div class="pdf-header">
                                <h3><i class="fas fa-file-pdf"></i> Document Review</h3>
                                <button class="pdf-close">
                                    <i class="fas fa-times"></i>
                                </button>
                            </div>
                            <div class="pdf-info">
                                <span class="pdf-title">Loading document...</span>
                            </div>
                            <div class="pdf-viewer">
                                <div class="pdf-placeholder">
                                    <i class="fas fa-file-pdf"></i>
                                    <h4>PDF Viewer</h4>
                                    <p>In a real implementation, this would display the actual PDF document from your uploaded medical files for review and validation.</p>
                                    <div class="pdf-controls">
                                        <button class="pdf-control-btn">
                                            <i class="fas fa-search-minus"></i> Zoom Out
                                        </button>
                                        <button class="pdf-control-btn">
                                            <i class="fas fa-search-plus"></i> Zoom In
                                        </button>
                                        <button class="pdf-control-btn">
                                            <i class="fas fa-download"></i> Download
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Fixed Delivery Notification -->
                <div class="delivery-notification" id="deliveryNotification" style="display: none;">
                    <div class="delivery-notification-content">
                        <div class="delivery-notification-icon">
                            <i class="fas fa-check-circle"></i>
                        </div>
                        <div class="delivery-notification-text">
                            <h4>All Fields Validated!</h4>
                            <p>Ready to deliver patient data to the research database</p>
                        </div>
                        <button class="btn-delivery-fixed" id="btnDeliveryFixed">
                            <i class="fas fa-paper-plane"></i> Deliver Patient Data
                        </button>
                    </div>
                </div>
            </div>
        </div>

        <!-- Warning Modal -->
        <div class="modal-overlay" id="warningModal" style="display: none;">
            <div class="modal-content">
                <div class="modal-header">
                    <h3><i class="fas fa-exclamation-triangle"></i> Leave without saving progress?</h3>
                </div>
                <div class="modal-body">
                    <p>You have unsaved changes. What would you like to do?</p>
                </div>
                <div class="modal-actions">
                    <button class="btn-save-progress">
                        <i class="fas fa-save"></i> Save Progress
                    </button>
                    <button class="btn-discard-all">
                        <i class="fas fa-trash"></i> Discard All Changes
                    </button>
                    <button class="btn-cancel">
                        <i class="fas fa-arrow-left"></i> Continue Working
                    </button>
                </div>
            </div>
        </div>
    </div>

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
</html>
```

### File: modular_structure_guide.md
```markdown
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
```

### File: project_files.md
```markdown
### File: index.html
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>MediXtract - Clinical Data Extraction Platform</title>
    <link rel="icon" type="image/png" href="https://raw.githubusercontent.com/MediXTract/MediXtract/refs/heads/main/images/LOGO_MediXtract_Circular.png">
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" rel="stylesheet">
    <link rel="stylesheet" href="css/styles.css">
</head>
<body>
    <div class="app-container">
        <!-- Main Content Area -->
        <div class="main-content">
            <!-- Stage 1: Authentication -->
            <div class="stage-content active" id="stage-1">
                <div class="stage-header">
                    <h1><i class="fas fa-stethoscope"></i> MediXtract</h1>
                    <p>AI-Powered Clinical Data Extraction Platform</p>
                </div>

                <div class="auth-container">
                    <div class="auth-left">
                        <h2>Clinical Access Portal</h2>
                        <p>Secure authentication with institutional SSO integration and role-based access controls.</p>
                        <ul class="feature-list">
                            <li><i class="fas fa-shield-alt"></i> Enterprise Security Standards</li>
                            <li><i class="fas fa-users"></i> Multi-Role Access Management</li>
                            <li><i class="fas fa-key"></i> Single Sign-On Integration</li>
                            <li><i class="fas fa-history"></i> Complete Audit Trail</li>
                        </ul>
                    </div>
                    <div class="auth-right">
                        <form class="auth-form" id="loginForm">
                            <h3>Sign In to MediXtract</h3>
                            <div class="form-group">
                                <label for="email">Email Address</label>
                                <input type="email" id="email" placeholder="physician@hospital.com" required>
                            </div>
                            <div class="form-group">
                                <label for="password">Password</label>
                                <input type="password" id="password" placeholder="Enter your password" required>
                            </div>
                            <div class="form-group">
                                <label for="role">Role</label>
                                <select id="role" required>
                                    <option value="">Select your role</option>
                                    <option value="physician">Attending Physician</option>
                                    <option value="resident">Resident</option>
                                    <option value="analyst">Data Analyst</option>
                                    <option value="coordinator">Research Coordinator</option>
                                </select>
                            </div>
                            <button type="submit" class="primary-btn">
                                <i class="fas fa-sign-in-alt"></i> Sign In
                            </button>
                        </form>
                    </div>
                </div>
            </div>

            <!-- Stage 2: User Portal -->
            <div class="stage-content" id="stage-2">
                <div class="stage-header">
                    <h2>User Portal</h2>
                    <p>Welcome to your clinical data extraction workspace</p>
                </div>

                <div class="portal-container">
                    <!-- User Welcome Section -->
                    <div class="welcome-section">
                        <div class="welcome-card">
                            <div class="welcome-content">
                                <div class="user-info">
                                    <div class="user-avatar">
                                        <i class="fas fa-user-md"></i>
                                    </div>
                                    <div class="user-details">
                                        <h3>Welcome back, <span id="userName">Dr. Smith</span></h3>
                                        <p class="user-role" id="userRole">Attending Physician</p>
                                        <p class="last-login">Last login: Today at 2:30 PM</p>
                                    </div>
                                </div>
                                
                                    <div class="quick-stats">
                                        <div class="stat-item">
                                            <span class="stat-number" id="ongoingPatients">3</span>
                                            <span class="stat-label">Ongoing Cases</span>
                                        </div>
                                        <div class="stat-item">
                                            <span class="stat-number" id="completedPatients">21</span>
                                            <span class="stat-label">Completed Cases</span>
                                        </div>
                                        <div class="stat-item">
                                            <span class="stat-number" id="totalFieldsProcessed">156</span>
                                            <span class="stat-label">Fields Extracted</span>
                                        </div>
                                    </div>
                            </div>
                        </div>
                    </div>

                    <!-- Main Actions Section -->
                    <div class="actions-section">
                        <div class="main-actions">
                            <div class="action-card primary-action" id="newPatientCard">
                                <div class="action-icon">
                                    <i class="fas fa-plus-circle"></i>
                                </div>
                                <div class="action-content">
                                    <h3>Introduce New Patient</h3>
                                    <p>Upload and process medical documents for a new patient case</p>
                                    <div class="action-features">
                                        <span><i class="fas fa-check"></i> Multi-format document support</span>
                                        <span><i class="fas fa-check"></i> AI-powered data extraction</span>
                                        <span><i class="fas fa-check"></i> Quality validation workflow</span>
                                    </div>
                                </div>
                                <button class="action-btn">
                                    <i class="fas fa-arrow-right"></i> Start New Case
                                </button>
                            </div>

                            <div class="action-card secondary-action" id="viewPatientsCard">
                                <div class="action-icon">
                                    <i class="fas fa-list-alt"></i>
                                </div>
                                <div class="action-content">
                                    <h3>View Patient Database</h3>
                                    <p>Review and manage previously processed patient data</p>
                                    <div class="action-features">
                                        <span><i class="fas fa-check"></i> Search and filter patients</span>
                                        <span><i class="fas fa-check"></i> Edit and validate data</span>
                                        <span><i class="fas fa-check"></i> Export patient records</span>
                                    </div>
                                </div>
                                <button class="action-btn">
                                    <i class="fas fa-arrow-right"></i> View Database
                                </button>
                            </div>
                        </div>

                        <!-- Secondary Actions -->
                        <div class="secondary-actions">
                            <div class="secondary-action-item">
                                <i class="fas fa-cog"></i>
                                <span>System Settings</span>
                            </div>
                            <div class="secondary-action-item">
                                <i class="fas fa-download"></i>
                                <span>Export Reports</span>
                            </div>
                            <div class="secondary-action-item">
                                <i class="fas fa-question-circle"></i>
                                <span>Help & Support</span>
                            </div>
                            <div class="secondary-action-item">
                                <i class="fas fa-sign-out-alt"></i>
                                <span>Sign Out</span>
                            </div>
                        </div>
                    </div>

                    <!-- Recent Activity Section -->
                    <div class="activity-section">
                        <div class="activity-card">
                            <h3><i class="fas fa-clock"></i> Recent Activity</h3>
                            <div class="activity-list">
                                <div class="activity-item">
                                    <div class="activity-icon completed">
                                        <i class="fas fa-check"></i>
                                    </div>
                                    <div class="activity-content">
                                        <h4>Patient NEC-2024-023 - Processing Complete</h4>
                                        <p>All 34 fields extracted with 97.8% confidence • 15 minutes ago</p>
                                    </div>
                                </div>
                                <div class="activity-item">
                                    <div class="activity-icon pending">
                                        <i class="fas fa-clock"></i>
                                    </div>
                                    <div class="activity-content">
                                        <h4>Patient NEC-2024-022 - Validation Pending</h4>
                                        <p>Manual review required for 3 fields • 2 hours ago</p>
                                    </div>
                                </div>
                                <div class="activity-item">
                                    <div class="activity-icon completed">
                                        <i class="fas fa-check"></i>
                                    </div>
                                    <div class="activity-content">
                                        <h4>Patient NEC-2024-021 - Data Delivered</h4>
                                        <p>Successfully delivered to research database • Yesterday</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Stage 3: Patient Database -->
            <div class="stage-content" id="stage-3">
                <div class="stage-header">
                    <h2>Patient Database</h2>
                    <p>Search, filter, and manage patient data processing records</p>
                </div>

                <div class="database-container">
                    <!-- Database Controls -->
                    <div class="database-controls">
                        <div class="controls-left">
                            <button class="btn-back-to-portal" id="backToPortalBtn">
                                <i class="fas fa-arrow-left"></i> Back to Portal
                            </button>
                        </div>
                        
                        <div class="controls-center">
                            <div class="search-filters">
                                <div class="filter-group">
                                    <label for="patientIdFilter">Patient ID</label>
                                    <input type="text" id="patientIdFilter" placeholder="Search by Patient ID..." class="filter-input">
                                </div>
                                <div class="filter-group">
                                    <label for="hospitalFilter">Hospital</label>
                                    <select id="hospitalFilter" class="filter-select">
                                        <option value="">All Hospitals</option>
                                        <option value="general">General Hospital</option>
                                        <option value="children">Children's Hospital</option>
                                        <option value="medical">Medical Center</option>
                                        <option value="university">University Hospital</option>
                                    </select>
                                </div>
                                <div class="filter-group">
                                    <label for="statusFilter">Processing Status</label>
                                    <select id="statusFilter" class="filter-select">
                                        <option value="">All Statuses</option>
                                        <option value="processing">Processing</option>
                                        <option value="review">Under Review</option>
                                        <option value="completed">Completed</option>
                                        <option value="delivered">Delivered</option>
                                    </select>
                                </div>
                                <button class="btn-clear-filters" id="clearFiltersBtn">
                                    <i class="fas fa-times"></i> Clear Filters
                                </button>
                            </div>
                        </div>
                        
                        <div class="controls-right">
                            <button class="btn-refresh" id="refreshDatabaseBtn">
                                <i class="fas fa-sync-alt"></i> Refresh
                            </button>
                        </div>
                    </div>

                    <!-- Database Results -->
                    <div class="database-results">
                        <div class="results-header">
                            <h3>Patient Records <span class="results-count" id="resultsCount">(24 found)</span></h3>
                            <div class="sort-controls">
                                <label for="sortBy">Sort by:</label>
                                <select id="sortBy" class="sort-select">
                                    <option value="date">Date Added</option>
                                    <option value="patient-id">Patient ID</option>
                                    <option value="status">Status</option>
                                    <option value="hospital">Hospital</option>
                                </select>
                            </div>
                        </div>

                        <div class="patient-records-table">
                            <div class="table-header">
                                <div class="header-cell header-patient-id">Patient ID</div>
                                <div class="header-cell header-hospital">Hospital</div>
                                <div class="header-cell header-date">Date Added</div>
                                <div class="header-cell header-status">Status</div>
                                <div class="header-cell header-fields">Fields</div>
                                <div class="header-cell header-actions">Actions</div>
                            </div>
                            <div class="table-body" id="patientRecordsBody">
                                <!-- Patient records will be populated here -->
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Stage 4: Document Management -->
            <div class="stage-content" id="stage-4">
                <div class="stage-header">
                    <h2>Patient Data Management Portal</h2>
                    <p>Upload medical documents for a new patient</p>
                </div>

                <div class="portal-container">
                    <!-- Back to Portal Navigation -->
                    <div class="back-navigation">
                        <button class="btn-back-to-portal" id="backToPortalFromDoc">
                            <i class="fas fa-arrow-left"></i> Back to User Portal
                        </button>
                    </div>

                    <!-- New Patient Section -->
                    <div class="new-patient-section">
                        <div class="section-card">
                            <div class="upload-section">
                                <div class="folder-selection" id="folderSelection">
                                    <div class="folder-picker-zone" id="folderPickerZone">
                                        <i class="fas fa-folder-open"></i>
                                        <h4>Select Patient Document Folder</h4>
                                        <p>Choose a folder containing medical documents and JSON schema</p>
                                        <button class="primary-btn" id="selectFolderBtn">
                                            <i class="fas fa-folder"></i> Browse for Folder
                                        </button>
                                        <input type="file" id="folderInput" webkitdirectory multiple style="display: none;">
                                    </div>
                                    
                                    <div class="folder-requirements">
                                        <h4><i class="fas fa-info-circle"></i> Folder Requirements</h4>
                                        <ul>
                                            <li><strong>Medical Documents:</strong> PDF, DOC, DOCX, TXT files</li>
                                            <li><strong>JSON Schema:</strong> One .json file containing field definitions</li>
                                            <li><strong>Supported formats:</strong> Clinical notes, lab results, surgical reports</li>
                                        </ul>
                                    </div>
                                </div>

                                <div class="folder-analysis" id="folderAnalysis" style="display: none;">
                                    <div class="analysis-header">
                                        <h3><i class="fas fa-check-circle"></i> Folder Analysis Complete</h3>
                                        <p id="folderPath">Analyzing folder contents...</p>
                                    </div>
                                    
                                    <div class="folder-contents">
                                        <div class="content-section">
                                            <h4><i class="fas fa-file-medical"></i> Medical Documents Found</h4>
                                            <div class="medical-files" id="medicalFiles">
                                                <!-- Medical documents will be listed here -->
                                            </div>
                                        </div>
                                        
                                        <div class="content-section">
                                            <h4><i class="fas fa-file-code"></i> Schema File</h4>
                                            <div class="schema-file" id="schemaFile">
                                                <!-- JSON schema info will be shown here -->
                                            </div>
                                        </div>
                                    </div>

                                    <div class="processing-summary-box">
                                        <h4>Processing Summary</h4>
                                        <div class="summary-stats">
                                            <div class="stat-item">
                                                <span class="stat-number" id="totalDocsCount">0</span>
                                                <span class="stat-label">Medical Documents</span>
                                            </div>
                                            <div class="stat-item">
                                                <span class="stat-number" id="totalFieldsCount">0</span>
                                                <span class="stat-label">Data Fields</span>
                                            </div>
                                            <div class="stat-item">
                                                <span class="stat-number" id="estimatedTime">0</span>
                                                <span class="stat-label">Est. Time (min)</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="action-section">
                                        <button class="primary-btn" id="startTranslationBtn">
                                            <i class="fas fa-language"></i> Begin Document Translation
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Stage 5: Translation Review -->
            <div class="stage-content" id="stage-5">
                <!-- Translation Progress Header -->
                <div class="translation-progress-header" id="translationProgressHeader" style="display: none;">
                    <div class="stage-header">
                        <h2><i class="fas fa-language fa-spin"></i> Document Translation in Progress</h2>
                        <p id="translationPatient">Translating medical documents to English</p>
                    </div>

                    <div class="translation-progress-section">
                        <div class="progress-container">
                            <div class="progress-bar">
                                <div class="progress-fill" id="translationProgressFill"></div>
                            </div>
                            <div class="progress-text" id="translationProgressText">Initializing translation service...</div>
                            <div class="progress-time" id="translationProgressTime">Estimated time: Calculating...</div>
                        </div>

                        <div class="translation-stages" id="translationStages">
                            <div class="translation-stage" data-stage="analysis">
                                <div class="stage-icon"><i class="fas fa-search"></i></div>
                                <div class="stage-info">
                                    <h4>Document Analysis</h4>
                                    <p>Analyzing document language and structure</p>
                                </div>
                                <div class="stage-status"><i class="fas fa-clock"></i></div>
                            </div>
                            
                            <div class="translation-stage" data-stage="translation">
                                <div class="stage-icon"><i class="fas fa-language"></i></div>
                                <div class="stage-info">
                                    <h4>AI Translation</h4>
                                    <p>Converting documents to English with medical context</p>
                                </div>
                                <div class="stage-status"><i class="fas fa-clock"></i></div>
                            </div>
                            
                            <div class="translation-stage" data-stage="formatting">
                                <div class="stage-icon"><i class="fas fa-file-alt"></i></div>
                                <div class="stage-info">
                                    <h4>Format Preservation</h4>
                                    <p>Maintaining original document layout and structure</p>
                                </div>
                                <div class="stage-status"><i class="fas fa-clock"></i></div>
                            </div>
                            
                            <div class="translation-stage" data-stage="validation">
                                <div class="stage-icon"><i class="fas fa-check-double"></i></div>
                                <div class="stage-info">
                                    <h4>Quality Validation</h4>
                                    <p>Verifying translation accuracy and completeness</p>
                                </div>
                                <div class="stage-status"><i class="fas fa-clock"></i></div>
                            </div>
                        </div>

                        <div class="translation-completion-message" id="translationCompletionMessage">
                            <div class="completion-icon">
                                <i class="fas fa-check-circle"></i>
                            </div>
                            <h3>Translation Complete!</h3>
                            <p>All documents have been successfully translated to English.</p>
                        </div>
                    </div>
                </div>

                <!-- Translation Review Dashboard -->
                <div class="translation-review-dashboard" id="translationReviewDashboard">
                    <div class="stage-header">
                        <div class="header-content">
                            <div class="header-text">
                                <h2>Translation Review</h2>
                                <p>Review original and translated documents side by side</p>
                            </div>
                            <button class="btn-back-portal" id="backToDocumentsBtn">
                                <i class="fas fa-arrow-left"></i> Back to Documents
                            </button>
                        </div>
                    </div>

                    <div class="translation-container">
                        <!-- Document Navigation -->
                        <div class="document-navigation">
                            <div class="translation-summary">
                                <h4>Translation Summary</h4>
                                <div class="summary-grid translation-summary-grid">
                                    <div class="summary-item">
                                        <span>Total:</span>
                                        <span id="total-documents">0</span>
                                    </div>
                                    <div class="summary-item">
                                        <span>Translated:</span>
                                        <span class="success" id="translated-docs">0</span>
                                    </div>
                                    <div class="summary-item">
                                        <span>Approved:</span>
                                        <span class="info" id="reviewed-docs">0</span>
                                    </div>
                                </div>
                            </div>

                            <div class="document-list" id="documentList">
                                <!-- Document list will be populated here -->
                            </div>

                            <div class="translation-actions">
                                <button class="btn-approve-all" id="approveAllBtn">
                                    <i class="fas fa-check-double"></i> Approve All Translations
                                </button>
                                <button class="btn-proceed-processing" id="proceedProcessingBtn" disabled>
                                    <i class="fas fa-arrow-right"></i> Proceed to AI Processing
                                </button>
                            </div>
                        </div>

                        <!-- Document Comparison View -->
                        <div class="document-comparison">
                            <div class="comparison-header">
                                <h3 id="currentDocumentTitle">Select a document to review</h3>
                                <div class="comparison-controls">
                                    <button class="btn-toggle-view" id="toggleViewBtn">
                                        <i class="fas fa-columns"></i> Side by Side
                                    </button>
                                    <button class="btn-approve-doc" id="approveDocBtn" disabled>
                                        <i class="fas fa-check"></i> Approve Translation
                                    </button>
                                </div>
                            </div>

                            <div class="document-viewers">
                                <div class="document-viewer original-viewer">
                                    <div class="viewer-header">
                                        <h4><i class="fas fa-file"></i> Original Document</h4>
                                        <span class="language-badge" id="originalLanguage">Detected: Spanish</span>
                                    </div>
                                    <div class="viewer-content">
                                        <div class="document-placeholder" id="originalDocViewer">
                                            <i class="fas fa-file-alt"></i>
                                            <h4>Original Document</h4>
                                            <p>Select a document from the list to view the original version here.</p>
                                        </div>
                                    </div>
                                </div>

                                <div class="document-viewer translated-viewer">
                                    <div class="viewer-header">
                                        <h4><i class="fas fa-language"></i> English Translation</h4>
                                        <span class="quality-badge" id="translationQualityBadge">Quality: 96.7%</span>
                                    </div>
                                    <div class="viewer-content">
                                        <div class="document-placeholder" id="translatedDocViewer">
                                            <i class="fas fa-file-alt"></i>
                                            <h4>English Translation</h4>
                                            <p>The translated version will appear here for side-by-side comparison.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Stage 6: Results Dashboard with Integrated Processing -->
            <div class="stage-content" id="stage-6">
                <!-- Processing Notification Popup -->
                <div class="processing-popup" id="processingPopup" style="display: none;">
                    <div class="popup-header">
                        <div class="popup-icon">
                            <i class="fas fa-cog fa-spin"></i>
                        </div>
                        <div class="popup-content">
                            <h4>AI Processing in Progress</h4>
                            <p id="popupProcessingText">Processing medical documents...</p>
                        </div>
                        <button class="popup-toggle" id="popupToggle">
                            <i class="fas fa-chevron-down"></i>
                        </button>
                    </div>
                    <div class="popup-details" id="popupDetails">
                        <div class="popup-progress">
                            <div class="progress-bar-small">
                                <div class="progress-fill-small" id="progressFillSmall"></div>
                            </div>
                            <div class="progress-info">
                                <span id="popupProgressText">Initializing...</span>
                                <span id="popupProgressTime">78s remaining</span>
                            </div>
                        </div>
                        <div class="popup-stages" id="popupStages">
                            <div class="popup-stage" data-stage="parsing">
                                <i class="fas fa-file-text"></i> Document Parsing
                            </div>
                            <div class="popup-stage" data-stage="critical">
                                <i class="fas fa-exclamation-triangle"></i> Critical Fields Analysis
                            </div>
                            <div class="popup-stage" data-stage="specialized">
                                <i class="fas fa-lungs"></i> Specialized Analysis
                            </div>
                            <div class="popup-stage" data-stage="integration">
                                <i class="fas fa-puzzle-piece"></i> Data Integration
                            </div>
                            <div class="popup-stage" data-stage="validation">
                                <i class="fas fa-check-circle"></i> Quality Validation
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Processing Status Header (Hidden Initially) -->
                <div class="processing-header" id="processingHeader" style="display: none;">
                    <div class="stage-header">
                        <h2><i class="fas fa-cog fa-spin"></i> AI Processing in Progress</h2>
                        <p id="processingPatient">Processing Patient NEC-2024-001</p>
                    </div>

                    <div class="processing-section">
                        <div class="progress-container">
                            <div class="progress-bar">
                                <div class="progress-fill" id="progressFill"></div>
                            </div>
                            <div class="progress-text" id="progressText">Initializing AI processing...</div>
                            <div class="progress-time" id="progressTime">Estimated time: Calculating...</div>
                        </div>

                        <div class="processing-stages" id="processingStages">
                            <div class="processing-stage" data-stage="parsing">
                                <div class="stage-icon"><i class="fas fa-file-text"></i></div>
                                <div class="stage-info">
                                    <h4>Document Parsing</h4>
                                    <p>Analyzing clinical content structure</p>
                                </div>
                                <div class="stage-status"><i class="fas fa-clock"></i></div>
                            </div>
                            
                            <div class="processing-stage" data-stage="critical">
                                <div class="stage-icon"><i class="fas fa-exclamation-triangle"></i></div>
                                <div class="stage-info">
                                    <h4>Critical Fields Analysis</h4>
                                    <p>Extracting antibiotics, probiotics, feeding data</p>
                                </div>
                                <div class="stage-status"><i class="fas fa-clock"></i></div>
                            </div>
                            
                            <div class="processing-stage" data-stage="specialized">
                                <div class="stage-icon"><i class="fas fa-lungs"></i></div>
                                <div class="stage-info">
                                    <h4>Specialized Analysis</h4>
                                    <p>Respiratory support, surgical interventions</p>
                                </div>
                                <div class="stage-status"><i class="fas fa-clock"></i></div>
                            </div>
                            
                            <div class="processing-stage" data-stage="integration">
                                <div class="stage-icon"><i class="fas fa-puzzle-piece"></i></div>
                                <div class="stage-info">
                                    <h4>Data Integration</h4>
                                    <p>Combining results and resolving conflicts</p>
                                </div>
                                <div class="stage-status"><i class="fas fa-clock"></i></div>
                            </div>
                            
                            <div class="processing-stage" data-stage="validation">
                                <div class="stage-icon"><i class="fas fa-check-circle"></i></div>
                                <div class="stage-info">
                                    <h4>Quality Validation</h4>
                                    <p>Confidence scoring and final checks</p>
                                </div>
                                <div class="stage-status"><i class="fas fa-clock"></i></div>
                            </div>
                        </div>

                        <div class="completion-message" id="completionMessage">
                            <div class="completion-icon">
                                <i class="fas fa-check-circle"></i>
                            </div>
                            <h3>Processing Complete!</h3>
                            <p>All clinical data has been successfully extracted and validated.</p>
                        </div>
                    </div>
                </div>

                <!-- Results Dashboard Content -->
                <div class="results-dashboard" id="resultsDashboard">
                    <div class="stage-header">
                        <div class="header-content">
                            <div class="header-text">
                                <h2>Results Dashboard</h2>
                                <p>Review and validate extracted medical data</p>
                            </div>
                            <button class="btn-back-portal" id="backPortalBtn">
                                <i class="fas fa-home"></i> Return to Portal
                            </button>
                        </div>
                    </div>

                    <div class="results-container">
                        <div class="results-navigation">
                            <div class="processing-summary">
                                <h4>Processing Summary</h4>
                                <div class="summary-grid">
                                    <div class="summary-item">
                                        <span>Total Fields:</span>
                                        <span id="total-fields">0</span>
                                    </div>
                                    <div class="summary-item">
                                        <span>High Confidence:</span>
                                        <span class="success" id="high-confidence-summary">0</span>
                                    </div>
                                    <div class="summary-item">
                                        <span>To Be Checked:</span>
                                        <span class="warning" id="double-check-summary">0</span>
                                    </div>
                                    <div class="summary-item">
                                        <span>Manual Input:</span>
                                        <span class="info" id="manual-input-summary">0</span>
                                    </div>
                                </div>
                            </div>

                            <div class="nav-tabs">
                                <div class="nav-tab active" data-section="manual-input">
                                    <div class="nav-tab-content">
                                        <h4>Manual Input Required</h4>
                                        <p>Group 4 - Start here first</p>
                                        <span class="field-count" id="manual-input-count">0/0</span>
                                    </div>
                                </div>
                                <div class="nav-tab" data-section="high-confidence">
                                    <div class="nav-tab-content">
                                        <h4>High-Confidence Extractions</h4>
                                        <p>Groups 1 & 3 - Verified fields</p>
                                        <span class="field-count" id="high-confidence-count">0/0</span>
                                    </div>
                                </div>
                                <div class="nav-tab" data-section="double-check">
                                    <div class="nav-tab-content">
                                        <h4>To Be Double Checked</h4>
                                        <p>Groups 2 & 5 - AI predictions</p>
                                        <span class="field-count" id="double-check-count">0/0</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="results-main">
                            <div class="results-section active" id="manual-input">
                                <div class="section-header">
                                    <div class="section-title-group">
                                        <h3>Manual Input Required</h3>
                                        <p>Group 4 fields requiring human review and input - Available immediately</p>
                                    </div>
                                </div>
                                
                                <div class="field-grid" id="manual-input-fields">
                                    <!-- Fields will be loaded dynamically -->
                                </div>
                            </div>

                            <div class="results-section" id="high-confidence">
                                <div class="section-header">
                                    <div class="section-title-group">
                                        <h3>High-Confidence Extractions</h3>
                                        <p>Fields from Groups 1 & 3 with verified accuracy</p>
                                    </div>
                                    <button class="btn-accept-all" data-section="high-confidence">
                                        <i class="fas fa-check-double"></i> Accept All
                                    </button>
                                </div>
                                
                                <div class="field-grid" id="high-confidence-fields">
                                    <!-- Fields will be loaded dynamically -->
                                </div>
                            </div>

                            <div class="results-section" id="double-check">
                                <div class="section-header">
                                    <div class="section-title-group">
                                        <h3>To Be Double Checked</h3>
                                        <p>AI predictions from Groups 2 & 5 requiring verification</p>
                                    </div>
                                    <button class="btn-accept-all" data-section="double-check">
                                        <i class="fas fa-check-double"></i> Accept All
                                    </button>
                                </div>
                                
                                <div class="field-grid" id="double-check-fields">
                                    <!-- Fields will be loaded dynamically -->
                                </div>
                            </div>


                        </div>

                        <!-- PDF Review Panel Overlay -->
                        <div class="pdf-overlay" id="pdfOverlay" style="display: none;"></div>

                        <!-- PDF Review Panel -->
                        <div class="pdf-review-panel" id="pdfReviewPanel">
                            <div class="pdf-header">
                                <h3><i class="fas fa-file-pdf"></i> Document Review</h3>
                                <button class="pdf-close">
                                    <i class="fas fa-times"></i>
                                </button>
                            </div>
                            <div class="pdf-info">
                                <span class="pdf-title">Loading document...</span>
                            </div>
                            <div class="pdf-viewer">
                                <div class="pdf-placeholder">
                                    <i class="fas fa-file-pdf"></i>
                                    <h4>PDF Viewer</h4>
                                    <p>In a real implementation, this would display the actual PDF document from your uploaded medical files for review and validation.</p>
                                    <div class="pdf-controls">
                                        <button class="pdf-control-btn">
                                            <i class="fas fa-search-minus"></i> Zoom Out
                                        </button>
                                        <button class="pdf-control-btn">
                                            <i class="fas fa-search-plus"></i> Zoom In
                                        </button>
                                        <button class="pdf-control-btn">
                                            <i class="fas fa-download"></i> Download
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Fixed Delivery Notification -->
                <div class="delivery-notification" id="deliveryNotification" style="display: none;">
                    <div class="delivery-notification-content">
                        <div class="delivery-notification-icon">
                            <i class="fas fa-check-circle"></i>
                        </div>
                        <div class="delivery-notification-text">
                            <h4>All Fields Validated!</h4>
                            <p>Ready to deliver patient data to the research database</p>
                        </div>
                        <button class="btn-delivery-fixed" id="btnDeliveryFixed">
                            <i class="fas fa-paper-plane"></i> Deliver Patient Data
                        </button>
                    </div>
                </div>
            </div>
        </div>

        <!-- Warning Modal -->
        <div class="modal-overlay" id="warningModal" style="display: none;">
            <div class="modal-content">
                <div class="modal-header">
                    <h3><i class="fas fa-exclamation-triangle"></i> Leave without saving progress?</h3>
                </div>
                <div class="modal-body">
                    <p>You have unsaved changes. What would you like to do?</p>
                </div>
                <div class="modal-actions">
                    <button class="btn-save-progress">
                        <i class="fas fa-save"></i> Save Progress
                    </button>
                    <button class="btn-discard-all">
                        <i class="fas fa-trash"></i> Discard All Changes
                    </button>
                    <button class="btn-cancel">
                        <i class="fas fa-arrow-left"></i> Continue Working
                    </button>
                </div>
            </div>
        </div>
    </div>

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
</html>
```

### File: modular_structure_guide.md
```markdown
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
```

### File: Set_Together.py
```python
import os

# Automatically get the folder where the script is located
root_dir = os.path.dirname(os.path.abspath(__file__))
output_md = os.path.join(root_dir, "project_files.md")

# Allowed file extensions (you can customize this)
valid_extensions = {".js", ".css", ".html", ".py", ".json", ".ts", ".jsx", ".tsx", ".md"}

# Map extension to syntax-highlight language
def get_language(ext):
    return {
        ".js": "javascript",
        ".css": "css",
        ".html": "html",
        ".py": "python",
        ".json": "json",
        ".ts": "typescript",
        ".jsx": "jsx",
        ".tsx": "tsx",
        ".md": "markdown",
    }.get(ext, "")

with open(output_md, "w", encoding="utf-8") as md_file:
    for dirpath, _, filenames in os.walk(root_dir):
        for filename in filenames:
            filepath = os.path.join(dirpath, filename)
            ext = os.path.splitext(filename)[1].lower()

            if ext in valid_extensions:
                relative_path = os.path.relpath(filepath, root_dir)
                language = get_language(ext)

                md_file.write(f"### File: {relative_path}\n")
                md_file.write(f"```{language}\n")
                try:
                    with open(filepath, "r", encoding="utf-8") as code_file:
                        md_file.write(code_file.read())
                except Exception as e:
                    md_file.write(f"/* Error reading file: {e} */")
                md_file.write("\n```\n\n")

print(f"✅ Markdown created at: {output_md}")

```

### File: css\authentication.css
```css
/* Authentication Stage */

.auth-container {
    display: flex;
    background: var(--white);
    border-radius: var(--radius-lg);
    box-shadow: var(--shadow-lg);
    overflow: hidden;
    max-width: 1000px;
    margin: 0 auto;
    min-height: 500px;
}

.auth-left {
    flex: 1;
    background: linear-gradient(135deg, var(--primary) 0%, var(--primary-dark) 100%);
    color: var(--white);
    padding: 60px;
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.auth-left h2 {
    font-size: 2rem;
    margin-bottom: 20px;
    color: var(--white);
}

.auth-left p {
    font-size: 1.1rem;
    opacity: 0.9;
    margin-bottom: 30px;
}

.feature-list {
    list-style: none;
}

.feature-list li {
    margin: 12px 0;
    display: flex;
    align-items: center;
    gap: 12px;
}

.feature-list i {
    color: var(--color-light);
    width: 20px;
}

.auth-right {
    flex: 1;
    padding: 60px;
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.auth-form h3 {
    color: var(--gray-700);
    font-size: 1.8rem;
    margin-bottom: 30px;
    text-align: center;
}
```

### File: css\buttons.css
```css
/* Button Styles */

.primary-btn {
    width: 100%;
    background: var(--primary);
    color: var(--white);
    border: none;
    padding: 14px 20px;
    border-radius: var(--radius);
    font-size: 1rem;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
    margin-top: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
}

.primary-btn:hover:not(:disabled) {
    background: var(--primary-dark);
    transform: translateY(-1px);
}

.primary-btn:disabled {
    opacity: 0.6;
    cursor: not-allowed;
}

/* Back Navigation Buttons */
.btn-back-to-portal {
    background: var(--gray-200);
    color: var(--gray-700);
    border: none;
    padding: 12px 20px;
    border-radius: var(--radius);
    cursor: pointer;
    font-size: 0.9rem;
    font-weight: 600;
    transition: all 0.3s ease;
    display: flex;
    align-items: center;
    gap: 8px;
}

.btn-back-to-portal:hover {
    background: var(--gray-300);
    transform: translateY(-1px);
}

.btn-back-portal {
    background: var(--primary);
    color: var(--white);
    border: none;
    padding: 12px 20px;
    border-radius: var(--radius);
    cursor: pointer;
    font-size: 0.9rem;
    font-weight: 600;
    transition: all 0.3s ease;
    display: flex;
    align-items: center;
    gap: 10px;
    box-shadow: var(--shadow);
}

.btn-back-portal:hover {
    background: var(--primary-dark);
    transform: translateY(-2px);
    box-shadow: var(--shadow-lg);
}

/* Database Control Buttons */
.btn-clear-filters {
    background: var(--danger);
    color: var(--white);
    border: none;
    padding: 10px 16px;
    border-radius: var(--radius);
    cursor: pointer;
    font-size: 0.9rem;
    font-weight: 600;
    transition: all 0.3s ease;
    display: flex;
    align-items: center;
    gap: 8px;
    white-space: nowrap;
    height: fit-content;
}

.btn-clear-filters:hover {
    background: #DC2626;
    transform: translateY(-1px);
}

.btn-filter {
    background: var(--primary);
    color: var(--white);
    border: none;
    padding: 10px 16px;
    border-radius: var(--radius);
    cursor: pointer;
    font-size: 0.9rem;
    font-weight: 600;
    transition: all 0.3s ease;
    display: flex;
    align-items: center;
    gap: 8px;
    white-space: nowrap;
    height: fit-content;
}

.btn-filter:hover {
    background: var(--primary-dark);
    transform: translateY(-1px);
}

.btn-refresh {
    background: var(--success);
    color: var(--white);
    border: none;
    padding: 12px 16px;
    border-radius: var(--radius);
    cursor: pointer;
    font-size: 0.9rem;
    font-weight: 600;
    transition: all 0.3s ease;
    display: flex;
    align-items: center;
    gap: 8px;
}

.btn-refresh:hover {
    background: #0F8F6F;
    transform: translateY(-1px);
}

/* Action Buttons */
.action-btn {
    background: var(--primary);
    color: var(--white);
    border: none;
    padding: 15px 25px;
    border-radius: var(--radius);
    cursor: pointer;
    font-size: 1rem;
    font-weight: 600;
    transition: all 0.3s ease;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    align-self: flex-start;
}

.action-btn:hover {
    background: var(--primary-dark);
    transform: translateY(-2px);
}

.secondary-action .action-btn {
    background: var(--gray-400);
}

.secondary-action .action-btn:hover {
    background: var(--gray-500);
}

/* Database Action Buttons */
.btn-view,
.btn-edit-record {
    background: var(--primary);
    color: var(--white);
    border: none;
    padding: 6px 12px;
    border-radius: var(--radius);
    cursor: pointer;
    font-size: 0.8rem;
    font-weight: 500;
    transition: all 0.3s ease;
}

.btn-view:hover,
.btn-edit-record:hover {
    background: var(--primary-dark);
    transform: translateY(-1px);
}

.btn-edit-record {
    background: var(--gray-400);
}

.btn-edit-record:hover {
    background: var(--gray-500);
}

/* Field Action Buttons */
.btn-accept {
    background: var(--success);
    color: var(--white);
    border: none;
    padding: 8px 16px;
    border-radius: var(--radius);
    cursor: pointer;
    font-size: 0.8rem;
    font-weight: 500;
    transition: all 0.3s ease;
}

.btn-accept:hover {
    background: #0F8F6F;
    transform: translateY(-1px);
}

.btn-edit {
    background: var(--gray-200);
    color: var(--gray-700);
    border: none;
    padding: 8px 16px;
    border-radius: var(--radius);
    cursor: pointer;
    font-size: 0.8rem;
    font-weight: 500;
    transition: all 0.3s ease;
}

.btn-edit:hover {
    background: var(--gray-300);
    transform: translateY(-1px);
}

.btn-review {
    background: var(--gray-200);
    color: var(--gray-700);
    border: none;
    padding: 8px 16px;
    border-radius: var(--radius);
    cursor: pointer;
    font-size: 0.8rem;
    font-weight: 500;
    transition: all 0.3s ease;
}

.btn-review:hover {
    background: var(--gray-300);
    transform: translateY(-1px);
}

/* Accept All Buttons */
.btn-accept-all {
    background: var(--primary);
    color: var(--white);
    border: none;
    padding: 12px 20px;
    border-radius: var(--radius);
    cursor: pointer;
    font-size: 0.9rem;
    font-weight: 600;
    transition: all 0.3s ease;
    display: flex;
    align-items: center;
    gap: 8px;
    white-space: nowrap;
}

.btn-accept-all:hover {
    background: var(--primary-dark);
    transform: translateY(-1px);
}

.btn-accept-all:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none;
}

/* Translation Buttons */
.btn-approve-all,
.btn-proceed-processing {
    background: var(--primary);
    color: var(--white);
    border: none;
    padding: 12px 20px;
    border-radius: var(--radius);
    cursor: pointer;
    font-size: 0.9rem;
    font-weight: 600;
    transition: all 0.3s ease;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
}

.btn-approve-all:hover,
.btn-proceed-processing:hover:not(:disabled) {
    background: var(--primary-dark);
    transform: translateY(-1px);
}

.btn-proceed-processing:disabled {
    background: var(--gray-400);
    cursor: not-allowed;
    transform: none;
}

.btn-toggle-view,
.btn-approve-doc {
    background: var(--primary);
    color: var(--white);
    border: none;
    padding: 8px 16px;
    border-radius: var(--radius);
    cursor: pointer;
    font-size: 0.8rem;
    font-weight: 500;
    transition: all 0.3s ease;
    display: flex;
    align-items: center;
    gap: 6px;
}

.btn-toggle-view:hover,
.btn-approve-doc:hover:not(:disabled) {
    background: var(--primary-dark);
    transform: translateY(-1px);
}

.btn-approve-doc:disabled {
    background: var(--gray-400);
    cursor: not-allowed;
    transform: none;
}

/* Delivery Buttons */
.btn-delivery {
    background: var(--success);
    color: var(--white);
    border: none;
    padding: 15px 25px;
    border-radius: var(--radius);
    cursor: pointer;
    font-size: 1rem;
    font-weight: 600;
    transition: all 0.3s ease;
    display: flex;
    align-items: center;
    gap: 10px;
    white-space: nowrap;
}

.btn-delivery:hover {
    background: #0F8F6F;
    transform: translateY(-2px);
    box-shadow: var(--shadow-lg);
}

.btn-delivery:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none;
}

.btn-delivery-fixed {
    background: var(--success);
    color: var(--white);
    border: none;
    padding: 12px 20px;
    border-radius: var(--radius);
    cursor: pointer;
    font-size: 0.95rem;
    font-weight: 600;
    transition: all 0.3s ease;
    display: flex;
    align-items: center;
    gap: 8px;
    white-space: nowrap;
    flex-shrink: 0;
}

.btn-delivery-fixed:hover {
    background: #0F8F6F;
    transform: translateY(-2px);
    box-shadow: var(--shadow-lg);
}

.btn-delivery-fixed:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none;
}

/* PDF Control Buttons */
.pdf-control-btn {
    background: var(--primary);
    color: var(--white);
    border: none;
    padding: 10px 15px;
    border-radius: var(--radius);
    cursor: pointer;
    font-size: 0.8rem;
    transition: all 0.3s ease;
    display: flex;
    align-items: center;
    gap: 5px;
}

.pdf-control-btn:hover {
    background: var(--primary-dark);
    transform: translateY(-1px);
}

/* Close Button */
.pdf-close {
    background: none;
    border: none;
    font-size: 1.2rem;
    color: var(--gray-500);
    cursor: pointer;
    padding: 10px;
    border-radius: var(--radius);
    transition: all 0.3s ease;
    min-width: 40px;
    min-height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.pdf-close:hover {
    background: var(--gray-200);
    color: var(--gray-700);
    transform: scale(1.1);
}

.pdf-close:active {
    transform: scale(0.95);
}

.pdf-close i {
    pointer-events: none;
}

/* Popup Toggle Button */
.popup-toggle {
    background: none;
    border: none;
    color: var(--gray-400);
    cursor: pointer;
    padding: 4px;
    border-radius: var(--radius);
    transition: all 0.3s ease;
}

.popup-toggle:hover {
    background: var(--gray-100);
    color: var(--gray-600);
}

.popup-toggle.expanded {
    transform: rotate(180deg);
}

.popup-toggle i {
    pointer-events: none;
}
```

### File: css\cards.css
```css
/* Card Components */

/* Welcome Card */
.welcome-card {
    background: linear-gradient(135deg, var(--primary) 0%, var(--primary-dark) 100%);
    color: var(--white);
    border-radius: var(--radius-lg);
    padding: 40px;
    box-shadow: var(--shadow-xl);
}

.welcome-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 40px;
}

/* User Info Components */
.user-info {
    display: flex;
    align-items: center;
    gap: 20px;
    flex: 1;
}

.user-avatar {
    width: 80px;
    height: 80px;
    background: rgba(255, 255, 255, 0.2);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 2rem;
    color: var(--white);
    border: 3px solid rgba(255, 255, 255, 0.3);
}

.user-details h3 {
    font-size: 1.8rem;
    margin: 0 0 5px 0;
    color: var(--white);
}

.user-role {
    color: var(--color-light);
    font-size: 1.1rem;
    margin: 0 0 5px 0;
    font-weight: 500;
}

.last-login {
    color: rgba(255, 255, 255, 0.8);
    font-size: 0.9rem;
    margin: 0;
}

/* Quick Stats */
.quick-stats {
    display: flex;
    gap: 30px;
}

.quick-stats .stat-item {
    text-align: center;
    padding: 20px;
    background: rgba(255, 255, 255, 0.1);
    border-radius: var(--radius);
    border: 1px solid rgba(255, 255, 255, 0.2);
    min-width: 120px;
}

.quick-stats .stat-number {
    display: block;
    font-size: 2rem;
    font-weight: 700;
    color: var(--white);
    margin-bottom: 5px;
}

.quick-stats .stat-label {
    color: var(--color-light);
    font-size: 0.9rem;
    font-weight: 500;
}

/* Action Cards */
.action-card {
    background: var(--white);
    border-radius: var(--radius-lg);
    padding: 40px;
    box-shadow: var(--shadow);
    border: 2px solid var(--gray-200);
    transition: all 0.3s ease;
    display: flex;
    flex-direction: column;
    position: relative;
    overflow: hidden;
}

.action-card:hover {
    transform: translateY(-5px);
    box-shadow: var(--shadow-xl);
}

.action-card.primary-action {
    border-color: var(--primary);
    background: linear-gradient(135deg, var(--white) 0%, var(--gray-50) 100%);
    cursor: pointer;
}

.action-card.primary-action:hover {
    border-color: var(--primary-dark);
    background: linear-gradient(135deg, var(--gray-50) 0%, var(--color-light) 100%);
}

.action-card.secondary-action {
    border-color: var(--gray-300);
    cursor: pointer;
}

.action-card.secondary-action:hover {
    border-color: var(--gray-400);
}

.action-icon {
    width: 80px;
    height: 80px;
    background: var(--primary);
    color: var(--white);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 2rem;
    margin-bottom: 25px;
    transition: all 0.3s ease;
}

.action-card.secondary-action .action-icon {
    background: var(--gray-400);
}

.action-card:hover .action-icon {
    transform: scale(1.1);
}

.action-content {
    flex: 1;
    margin-bottom: 25px;
}

.action-content h3 {
    color: var(--gray-700);
    font-size: 1.5rem;
    margin: 0 0 15px 0;
    font-weight: 600;
}

.action-content p {
    color: var(--gray-500);
    margin: 0 0 20px 0;
    line-height: 1.6;
}

.action-features {
    display: flex;
    flex-direction: column;
    gap: 8px;
}

.action-features span {
    display: flex;
    align-items: center;
    gap: 8px;
    color: var(--gray-600);
    font-size: 0.9rem;
}

.action-features i {
    color: var(--success);
    font-size: 0.8rem;
}

/* Activity Card */
.activity-card {
    background: var(--white);
    border-radius: var(--radius-lg);
    box-shadow: var(--shadow);
    padding: 30px;
    border: 1px solid var(--gray-200);
}

.activity-card h3 {
    color: var(--gray-700);
    font-size: 1.3rem;
    margin: 0 0 25px 0;
    display: flex;
    align-items: center;
    gap: 10px;
}

.activity-card i {
    color: var(--primary);
}

.activity-list {
    display: flex;
    flex-direction: column;
    gap: 20px;
}

.activity-item {
    display: flex;
    align-items: flex-start;
    gap: 15px;
    padding: 20px;
    background: var(--gray-50);
    border-radius: var(--radius);
    border-left: 4px solid var(--gray-300);
    transition: all 0.3s ease;
}

.activity-item:hover {
    background: var(--white);
    border-left-color: var(--primary);
    transform: translateX(5px);
}

.activity-icon {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1rem;
    color: var(--white);
    flex-shrink: 0;
}

.activity-icon.completed {
    background: var(--success);
}

.activity-icon.pending {
    background: var(--warning);
}

.activity-content {
    flex: 1;
}

.activity-content h4 {
    color: var(--gray-700);
    font-size: 1rem;
    margin: 0 0 5px 0;
    font-weight: 600;
}

.activity-content p {
    color: var(--gray-500);
    font-size: 0.9rem;
    margin: 0;
    line-height: 1.4;
}

/* Field Cards */
.field-card {
    background: var(--white);
    border: 1px solid var(--gray-200);
    border-radius: var(--radius);
    padding: 20px;
    transition: all 0.3s ease;
}

.field-card.pending {
    border-left: 4px solid var(--warning);
    background: #FFF9E6;
}

.field-card.accepted {
    border-left: 4px solid var(--success);
    background: #F0FDF4;
}

.field-card:hover {
    border-color: var(--primary);
    box-shadow: var(--shadow);
}

.field-header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 15px;
}

.field-name-container {
    display: flex;
    align-items: center;
    gap: 8px;
    flex: 1;
}

.field-badges {
    display: flex;
    align-items: center;
    gap: 8px;
    flex-wrap: wrap;
    justify-content: flex-end;
}

.field-name {
    font-weight: 600;
    color: var(--gray-700);
    font-size: 0.9rem;
    line-height: 1.3;
}

.field-value {
    background: var(--gray-50);
    padding: 12px;
    border-radius: var(--radius);
    font-family: monospace;
    font-size: 0.9rem;
    margin-bottom: 15px;
    color: var(--gray-700);
}

.field-actions {
    display: flex;
    gap: 8px;
}

/* Info Icon and Tooltip */
.info-icon {
    width: 20px;
    height: 20px;
    background: var(--gray-400);
    color: var(--white);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.75rem;
    cursor: help;
    transition: all 0.3s ease;
    position: relative;
    flex-shrink: 0;
}

.info-icon:hover {
    background: var(--primary);
    transform: scale(1.15);
}

.tooltip {
    position: absolute;
    bottom: 30px;
    left: 50%;
    transform: translateX(-50%);
    background: var(--gray-800);
    color: var(--white);
    padding: 12px 16px;
    border-radius: var(--radius-lg);
    font-size: 0.9rem;
    white-space: nowrap;
    max-width: 400px;
    white-space: normal;
    z-index: 1000;
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s ease;
    box-shadow: var(--shadow-xl);
    line-height: 1.5;
    min-width: 250px;
    text-align: left;
    font-weight: 500;
}

.tooltip::after {
    content: '';
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translateX(-50%);
    border: 8px solid transparent;
    border-top-color: var(--gray-800);
}

.info-icon:hover .tooltip {
    opacity: 1;
    visibility: visible;
}

/* Confidence and Status Badges */
.confidence-badge {
    padding: 4px 8px;
    border-radius: 12px;
    font-size: 0.8rem;
    font-weight: 500;
}

.confidence-badge.high {
    background: var(--success);
    color: var(--white);
}

.confidence-badge.medium {
    background: var(--warning);
    color: var(--white);
}

.language-badge,
.quality-badge {
    padding: 4px 10px;
    border-radius: 12px;
    font-size: 0.75rem;
    font-weight: 500;
}

.language-badge {
    background: var(--warning);
    color: var(--white);
}

.quality-badge {
    background: var(--success);
    color: var(--white);
}
```

### File: css\document_management.css
```css
/* Document Management Stage */

/* Back Navigation */
.back-navigation {
    margin-bottom: 30px;
}

.back-navigation .btn-back-to-portal {
    background: var(--gray-200);
    color: var(--gray-700);
    border: none;
    padding: 12px 20px;
    border-radius: var(--radius);
    cursor: pointer;
    font-size: 0.9rem;
    font-weight: 600;
    transition: all 0.3s ease;
    display: flex;
    align-items: center;
    gap: 8px;
    box-shadow: var(--shadow);
}

.back-navigation .btn-back-to-portal:hover {
    background: var(--gray-300);
    transform: translateY(-1px);
    box-shadow: var(--shadow-lg);
}

/* New Patient Section */
.new-patient-section {
    display: flex;
    flex-direction: column;
    gap: 30px;
}

.upload-section {
    background: var(--white);
    border-radius: var(--radius-lg);
    box-shadow: var(--shadow);
    padding: 40px;
    max-width: 1000px;
    margin: 0 auto;
}

/* Folder Selection Interface */
.folder-selection {
    text-align: center;
}

.folder-picker-zone {
    border: 3px dashed var(--primary);
    border-radius: var(--radius-lg);
    padding: 60px 40px;
    background: var(--gray-50);
    margin-bottom: 30px;
    transition: all 0.3s ease;
}

.folder-picker-zone:hover {
    background: var(--color-light);
    transform: scale(1.02);
}

.folder-picker-zone i {
    font-size: 4rem;
    color: var(--primary);
    margin-bottom: 20px;
}

.folder-picker-zone h4 {
    color: var(--gray-700);
    font-size: 1.5rem;
    margin-bottom: 10px;
}

.folder-picker-zone p {
    color: var(--gray-500);
    margin-bottom: 30px;
}

.folder-requirements {
    background: var(--gray-50);
    border: 1px solid var(--gray-200);
    border-radius: var(--radius);
    padding: 25px;
    text-align: left;
}

.folder-requirements h4 {
    color: var(--gray-700);
    margin-bottom: 15px;
    font-size: 1.1rem;
    display: flex;
    align-items: center;
    gap: 10px;
}

.folder-requirements ul {
    list-style: none;
    padding: 0;
}

.folder-requirements li {
    margin: 10px 0;
    padding-left: 20px;
    position: relative;
    color: var(--gray-600);
}

.folder-requirements li::before {
    content: '•';
    color: var(--primary);
    font-weight: bold;
    position: absolute;
    left: 0;
}

/* Folder Analysis Results */
.folder-analysis {
    animation: fadeIn 0.5s ease-in-out;
}

.analysis-header {
    text-align: center;
    margin-bottom: 30px;
}

.analysis-header h3 {
    color: var(--success);
    font-size: 1.4rem;
    margin-bottom: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
}

.analysis-header p {
    color: var(--gray-500);
    font-style: italic;
}

.folder-contents {
    display: grid;
    grid-template-columns: 2fr 1fr;
    gap: 30px;
    margin-bottom: 30px;
}

.content-section {
    background: var(--gray-50);
    border: 1px solid var(--gray-200);
    border-radius: var(--radius);
    padding: 20px;
}

.content-section h4 {
    color: var(--gray-700);
    margin-bottom: 15px;
    font-size: 1.1rem;
    display: flex;
    align-items: center;
    gap: 10px;
}

.medical-files {
    display: flex;
    flex-direction: column;
    gap: 10px;
}

.medical-file-item {
    background: var(--white);
    border: 1px solid var(--gray-200);
    border-radius: var(--radius);
    padding: 15px;
    display: flex;
    align-items: center;
    gap: 15px;
    transition: all 0.3s ease;
}

.medical-file-item:hover {
    border-color: var(--primary);
    transform: translateX(5px);
}

.file-type-icon {
    width: 40px;
    height: 40px;
    border-radius: var(--radius);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.2rem;
    color: var(--white);
    flex-shrink: 0;
}

.file-type-pdf {
    background: #DC2626;
}

.file-type-doc {
    background: #2563EB;
}

.file-type-txt {
    background: var(--gray-600);
}

.file-type-json {
    background: var(--warning);
}

.medical-file-info {
    flex: 1;
}

.medical-file-info h5 {
    color: var(--gray-700);
    font-size: 0.9rem;
    margin-bottom: 3px;
    font-weight: 600;
}

.medical-file-info p {
    color: var(--gray-500);
    font-size: 0.8rem;
    margin: 0;
}

.schema-file {
    background: var(--white);
    border: 1px solid var(--success);
    border-radius: var(--radius);
    padding: 20px;
    text-align: center;
}

.schema-file-icon {
    width: 60px;
    height: 60px;
    background: var(--success);
    color: var(--white);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    margin: 0 auto 15px;
}

.schema-file h5 {
    color: var(--gray-700);
    font-size: 1rem;
    margin-bottom: 5px;
    font-weight: 600;
}

.schema-file p {
    color: var(--gray-500);
    font-size: 0.9rem;
    margin: 0;
}

.schema-fields-info {
    margin-top: 10px;
    padding-top: 10px;
    border-top: 1px solid var(--gray-200);
    font-size: 0.8rem;
    color: var(--gray-600);
}

.processing-summary-box {
    background: var(--gray-50);
    border: 1px solid var(--gray-200);
    border-radius: var(--radius);
    padding: 25px;
    margin-bottom: 30px;
}

.processing-summary-box h4 {
    color: var(--gray-700);
    margin-bottom: 20px;
    text-align: center;
    font-size: 1.1rem;
}

.summary-stats {
    display: flex;
    justify-content: center;
    gap: 40px;
}

.stat-item {
    text-align: center;
}

.stat-number {
    display: block;
    font-size: 2rem;
    font-weight: 700;
    color: var(--primary);
    margin-bottom: 5px;
}

.stat-label {
    color: var(--gray-600);
    font-size: 0.9rem;
    font-weight: 500;
}

.action-section {
    display: flex;
    justify-content: center;
    gap: 20px;
}
```

### File: css\forms.css
```css
/* Form Components */

.form-group {
    margin-bottom: 20px;
}

.form-group label {
    display: block;
    margin-bottom: 8px;
    color: var(--gray-600);
    font-weight: 500;
}

.form-group input,
.form-group select {
    width: 100%;
    padding: 12px 16px;
    border: 2px solid var(--gray-200);
    border-radius: var(--radius);
    font-size: 1rem;
    transition: border-color 0.3s ease;
    background: var(--white);
}

.form-group input:focus,
.form-group select:focus {
    outline: none;
    border-color: var(--primary);
}

/* Filter Components */
.filter-group {
    display: flex;
    flex-direction: column;
    gap: 5px;
    min-width: 150px;
}

.filter-group label {
    color: var(--gray-600);
    font-size: 0.85rem;
    font-weight: 500;
}

.filter-input,
.filter-select {
    padding: 10px 12px;
    border: 2px solid var(--gray-200);
    border-radius: var(--radius);
    font-size: 0.9rem;
    transition: border-color 0.3s ease;
    background: var(--white);
}

.filter-input:focus,
.filter-select:focus {
    outline: none;
    border-color: var(--primary);
}

/* Sort Controls */
.sort-select {
    padding: 8px 12px;
    border: 2px solid var(--gray-200);
    border-radius: var(--radius);
    font-size: 0.9rem;
    background: var(--white);
    min-width: 150px;
}

/* Field Input Components */
.field-input {
    width: 100%;
    padding: 12px;
    border: 2px solid var(--gray-200);
    border-radius: var(--radius);
    font-size: 0.9rem;
    margin-bottom: 15px;
    transition: border-color 0.3s ease;
}

.field-input:focus {
    outline: none;
    border-color: var(--primary);
}

.field-select {
    width: 100%;
    padding: 12px;
    border: 2px solid var(--gray-200);
    border-radius: var(--radius);
    font-size: 0.9rem;
    margin-bottom: 15px;
    background: var(--white);
    transition: border-color 0.3s ease;
}

.field-select:focus {
    outline: none;
    border-color: var(--primary);
}

/* Field constraints information */
.field-constraints {
    font-size: 0.8rem;
    color: var(--gray-500);
    margin-bottom: 10px;
    padding: 8px;
    background: var(--gray-50);
    border-radius: var(--radius);
    border-left: 3px solid var(--primary);
}
```

### File: css\layout.css
```css
/* Main Application Layout */

.app-container {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
}

/* Main Content */
.main-content {
    flex: 1;
    max-width: 1400px;
    margin: 0 auto;
    width: 100%;
    padding: 20px 40px;
}

.stage-content {
    display: none;
    animation: fadeIn 0.5s ease-in-out;
}

.stage-content.active {
    display: block;
}

.stage-header {
    text-align: center;
    margin-bottom: 40px;
}

.stage-header h1 {
    color: var(--primary);
    font-size: 2.5rem;
    font-weight: 700;
    margin-bottom: 10px;
}

.stage-header h2 {
    color: var(--gray-700);
    font-size: 2rem;
    font-weight: 600;
    margin-bottom: 10px;
}

.stage-header p {
    color: var(--gray-500);
    font-size: 1.1rem;
    max-width: 600px;
    margin: 0 auto;
}

/* Header content with controls */
.header-content {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 20px;
}

.header-text {
    flex: 1;
}

/* Portal containers */
.portal-container {
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 30px;
}

/* Section containers */
.section-card {
    background: var(--white);
    border-radius: var(--radius-lg);
    box-shadow: var(--shadow);
    overflow: hidden;
}

/* Container styles for different sections */
.results-container {
    background: var(--white);
    border-radius: var(--radius-lg);
    box-shadow: var(--shadow);
    overflow: hidden;
    min-height: 700px;
}

.translation-container {
    background: var(--white);
    border-radius: var(--radius-lg);
    box-shadow: var(--shadow);
    overflow: hidden;
    min-height: 700px;
    display: flex;
}

.database-container {
    max-width: 1400px;
    margin: 0 auto;
    background: var(--white);
    border-radius: var(--radius-lg);
    box-shadow: var(--shadow);
    overflow: hidden;
}
```

### File: css\modals.css
```css
/* Modal and Overlay Components */

/* Warning Modal */
.modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    z-index: 1000;
    display: flex;
    align-items: center;
    justify-content: center;
}

.modal-content {
    background: var(--white);
    border-radius: var(--radius-lg);
    box-shadow: var(--shadow-xl);
    max-width: 500px;
    width: calc(100% - 40px);
    max-height: calc(100vh - 40px);
    overflow-y: auto;
}

.modal-header {
    padding: 25px 30px 15px;
    border-bottom: 1px solid var(--gray-200);
}

.modal-header h3 {
    color: var(--gray-700);
    margin: 0;
    font-size: 1.3rem;
    display: flex;
    align-items: center;
    gap: 12px;
}

.modal-header i {
    color: var(--warning);
}

.modal-body {
    padding: 20px 30px;
}

.modal-body p {
    color: var(--gray-600);
    margin: 0;
    line-height: 1.6;
}

.modal-actions {
    padding: 15px 30px 25px;
    display: flex;
    gap: 12px;
    justify-content: flex-end;
}

.btn-save-progress,
.btn-discard-all,
.btn-cancel {
    padding: 10px 20px;
    border-radius: var(--radius);
    font-size: 0.9rem;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
    display: flex;
    align-items: center;
    gap: 8px;
    border: none;
}

.btn-save-progress {
    background: var(--success);
    color: var(--white);
}

.btn-save-progress:hover {
    background: #0F8F6F;
    transform: translateY(-1px);
}

.btn-discard-all {
    background: var(--danger);
    color: var(--white);
}

.btn-discard-all:hover {
    background: #DC2626;
    transform: translateY(-1px);
}

.btn-cancel {
    background: var(--gray-200);
    color: var(--gray-700);
}

.btn-cancel:hover {
    background: var(--gray-300);
    transform: translateY(-1px);
}

/* PDF Review Panel Overlay */
.pdf-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    z-index: 1999;
    opacity: 0;
    transition: opacity 0.3s ease;
    pointer-events: none;
}

.pdf-overlay.active {
    opacity: 1;
    pointer-events: auto;
}

/* PDF Review Panel */
.pdf-review-panel {
    position: fixed;
    top: 0;
    right: -600px;
    width: 600px;
    height: 100vh;
    background: var(--white);
    box-shadow: var(--shadow-xl);
    z-index: 2000;
    transition: right 0.4s ease;
    display: flex;
    flex-direction: column;
    outline: none; /* Remove default focus outline */
}

.pdf-review-panel.active {
    right: 0;
}

.pdf-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 25px;
    border-bottom: 2px solid var(--gray-200);
    background: var(--gray-50);
}

.pdf-header h3 {
    color: var(--gray-700);
    margin: 0;
    font-size: 1.2rem;
    display: flex;
    align-items: center;
    gap: 10px;
}

.pdf-header i {
    color: var(--danger);
}

.pdf-info {
    padding: 15px 25px;
    border-bottom: 1px solid var(--gray-200);
    background: var(--white);
}

.pdf-title {
    font-weight: 600;
    color: var(--gray-700);
    font-size: 0.9rem;
}

.pdf-viewer {
    flex: 1;
    padding: 25px;
    overflow-y: auto;
}

.pdf-placeholder {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
    text-align: center;
    color: var(--gray-500);
    background: var(--gray-50);
    border-radius: var(--radius);
    padding: 40px 20px;
    border: 2px dashed var(--gray-300);
}

.pdf-placeholder i {
    font-size: 4rem;
    color: var(--danger);
    margin-bottom: 20px;
}

.pdf-placeholder h4 {
    color: var(--gray-700);
    margin-bottom: 15px;
    font-size: 1.3rem;
}

.pdf-placeholder p {
    max-width: 400px;
    line-height: 1.6;
    margin-bottom: 25px;
}

.pdf-controls {
    display: flex;
    gap: 10px;
    justify-content: center;
}
```

### File: css\notifications.css
```css
/* Notification System */

/* Toast Notifications */
.notification {
    position: fixed;
    top: 20px;
    right: 20px;
    background: var(--primary);
    color: white;
    padding: 15px 20px;
    border-radius: var(--radius);
    box-shadow: var(--shadow-lg);
    z-index: 10000;
    display: flex;
    align-items: center;
    gap: 10px;
    max-width: 400px;
    opacity: 0;
    transform: translateX(100%);
    transition: all 0.3s ease;
}

.notification.success {
    background: var(--success);
}

.notification.warning {
    background: var(--warning);
}

.notification.error {
    background: var(--danger);
}

.notification.info {
    background: var(--primary);
}

/* Fixed Delivery Notification */
.delivery-notification {
    position: fixed;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);
    background: var(--white);
    border-radius: var(--radius-lg);
    box-shadow: var(--shadow-xl);
    border: 2px solid var(--success);
    z-index: 1500;
    max-width: 600px;
    width: calc(100% - 40px);
    animation: slideUpFadeIn 0.5s ease-out;
}

.delivery-notification-content {
    display: flex;
    align-items: center;
    gap: 20px;
    padding: 20px 25px;
    position: relative;
}

.delivery-notification-icon {
    width: 50px;
    height: 50px;
    background: var(--success);
    color: var(--white);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    flex-shrink: 0;
    animation: pulse 2s infinite;
}

.delivery-notification-text {
    flex: 1;
}

.delivery-notification-text h4 {
    color: var(--gray-700);
    margin: 0 0 5px 0;
    font-size: 1.1rem;
    font-weight: 600;
}

.delivery-notification-text p {
    color: var(--gray-500);
    margin: 0;
    font-size: 0.9rem;
}

/* Processing Notification Popup */
.processing-popup {
    position: fixed;
    top: 20px;
    right: 20px;
    background: var(--white);
    border-radius: var(--radius-lg);
    box-shadow: var(--shadow-xl);
    border: 1px solid var(--gray-200);
    z-index: 1000;
    min-width: 300px;
    max-width: 400px;
    transition: all 0.3s ease;
}

.popup-header {
    padding: 15px 20px;
    display: flex;
    align-items: center;
    gap: 12px;
    cursor: pointer;
    border-bottom: 1px solid var(--gray-200);
}

.popup-icon {
    color: var(--primary);
    font-size: 1.2rem;
}

.popup-content {
    flex: 1;
}

.popup-content h4 {
    color: var(--gray-700);
    font-size: 0.9rem;
    font-weight: 600;
    margin: 0 0 4px 0;
}

.popup-content p {
    color: var(--gray-500);
    font-size: 0.8rem;
    margin: 0;
}

.popup-details {
    padding: 15px 20px;
    display: none;
    border-top: 1px solid var(--gray-200);
}

.popup-details.show {
    display: block;
}

.popup-progress {
    margin-bottom: 15px;
}

.progress-info {
    display: flex;
    justify-content: space-between;
    font-size: 0.75rem;
    color: var(--gray-500);
}

.popup-stages {
    display: flex;
    flex-direction: column;
    gap: 8px;
}

.popup-stage {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 6px 10px;
    border-radius: var(--radius);
    font-size: 0.75rem;
    color: var(--gray-500);
    background: var(--gray-50);
    transition: all 0.3s ease;
}

.popup-stage.active {
    background: var(--primary);
    color: var(--white);
}

.popup-stage.completed {
    background: var(--success);
    color: var(--white);
}

.popup-stage i {
    width: 12px;
    text-align: center;
}

.processing-popup.completed {
    border-color: var(--success);
}

.processing-popup.completed .popup-icon {
    color: var(--success);
}

.processing-popup.hidden {
    opacity: 0;
    transform: translateX(100%);
    pointer-events: none;
}

/* Legacy Delivery Section (kept for reference) */
.delivery-container {
    margin-top: 40px;
    padding: 30px;
    background: var(--gray-50);
    border-radius: var(--radius-lg);
    border: 2px solid var(--success);
    display: none; /* Hidden by default - using fixed notification instead */
}

.delivery-section {
    display: flex;
    align-items: center;
    gap: 20px;
    text-align: center;
    justify-content: center;
}

.delivery-icon {
    width: 60px;
    height: 60px;
    background: var(--success);
    color: var(--white);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
}

.delivery-content h3 {
    color: var(--gray-700);
    margin: 0 0 5px 0;
    font-size: 1.3rem;
}

.delivery-content p {
    color: var(--gray-500);
    margin: 0;
    font-size: 0.9rem;
}
```

### File: css\patient_database.css
```css
/* Patient Database Styles */

.database-controls {
    background: var(--gray-50);
    border-bottom: 1px solid var(--gray-200);
    padding: 20px 30px;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    gap: 30px;
}

.controls-left {
    flex-shrink: 0;
}

.controls-center {
    flex: 1;
}

.search-filters {
    display: flex;
    gap: 20px;
    align-items: flex-end;
}

.controls-right {
    flex-shrink: 0;
}

.database-results {
    padding: 30px;
}

.results-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 25px;
    padding-bottom: 15px;
    border-bottom: 2px solid var(--gray-200);
}

.results-header h3 {
    color: var(--gray-700);
    font-size: 1.4rem;
    margin: 0;
}

.results-count {
    color: var(--gray-500);
    font-weight: normal;
    font-size: 1rem;
}

.sort-controls {
    display: flex;
    align-items: center;
    gap: 10px;
}

.sort-controls label {
    color: var(--gray-600);
    font-size: 0.9rem;
    font-weight: 500;
}
```

### File: css\processing.css
```css
/* Processing Stage Styles */

.processing-header {
    background: var(--white);
    border-radius: var(--radius-lg);
    box-shadow: var(--shadow);
    padding: 30px;
    margin-bottom: 30px;
    transition: all 0.5s ease;
}

.processing-header.completed {
    background: var(--gray-50);
    border: 2px solid var(--success);
}

.processing-header.hidden {
    opacity: 0;
    transform: translateY(-20px);
    height: 0;
    padding: 0;
    margin: 0;
    overflow: hidden;
}

.processing-section {
    background: var(--white);
    border-radius: var(--radius-lg);
    box-shadow: var(--shadow);
    padding: 40px;
    max-width: 1000px;
    margin: 0 auto;
}

.results-dashboard {
    transition: all 0.3s ease;
}

.results-dashboard.processing-active {
    margin-top: 0;
}
```

### File: css\progress.css
```css
/* Progress Indicators */

/* Main Progress Bar */
.progress-container {
    text-align: center;
    margin-bottom: 40px;
}

.progress-bar {
    background: var(--gray-200);
    border-radius: 50px;
    height: 12px;
    overflow: hidden;
    margin-bottom: 20px;
    max-width: 600px;
    margin-left: auto;
    margin-right: auto;
}

.progress-fill {
    background: linear-gradient(90deg, var(--primary) 0%, var(--color-accent) 100%);
    height: 100%;
    border-radius: 50px;
    transition: width 1s ease;
    width: 0%;
}

.progress-text {
    color: var(--gray-700);
    font-size: 1.1rem;
    font-weight: 500;
    margin-bottom: 8px;
}

.progress-time {
    color: var(--gray-500);
    font-size: 0.9rem;
}

/* Small Progress Bar for Popup */
.progress-bar-small {
    background: var(--gray-200);
    border-radius: 50px;
    height: 6px;
    overflow: hidden;
    margin-bottom: 8px;
}

.progress-fill-small {
    background: linear-gradient(90deg, var(--primary) 0%, var(--color-accent) 100%);
    height: 100%;
    border-radius: 50px;
    transition: width 1s ease;
    width: 0%;
}

/* Processing Stages */
.processing-stages {
    display: grid;
    grid-template-columns: 1fr;
    gap: 15px;
    margin-bottom: 40px;
}

.processing-stage {
    display: flex;
    align-items: center;
    gap: 15px;
    padding: 20px;
    background: var(--gray-50);
    border-radius: var(--radius);
    border-left: 4px solid var(--gray-300);
    transition: all 0.3s ease;
}

.processing-stage.active {
    border-left-color: var(--primary);
    background: var(--white);
    box-shadow: var(--shadow);
}

.processing-stage.completed {
    border-left-color: var(--success);
    background: var(--white);
}

.stage-icon {
    width: 40px;
    height: 40px;
    background: var(--gray-300);
    color: var(--white);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.1rem;
    flex-shrink: 0;
}

.processing-stage.active .stage-icon {
    background: var(--primary);
    animation: pulse 2s infinite;
}

.processing-stage.completed .stage-icon {
    background: var(--success);
}

.stage-info {
    flex: 1;
}

.stage-info h4 {
    color: var(--gray-700);
    font-size: 1rem;
    margin-bottom: 4px;
}

.stage-info p {
    color: var(--gray-500);
    font-size: 0.9rem;
}

.stage-status {
    color: var(--gray-400);
    font-size: 1.2rem;
}

.processing-stage.active .stage-status {
    color: var(--primary);
    animation: spin 2s linear infinite;
}

.processing-stage.completed .stage-status {
    color: var(--success);
}

/* Translation Stages */
.translation-stages {
    display: grid;
    grid-template-columns: 1fr;
    gap: 15px;
    margin-bottom: 40px;
}

.translation-stage {
    display: flex;
    align-items: center;
    gap: 15px;
    padding: 20px;
    background: var(--gray-50);
    border-radius: var(--radius);
    border-left: 4px solid var(--gray-300);
    transition: all 0.3s ease;
}

.translation-stage.active {
    border-left-color: var(--primary);
    background: var(--white);
    box-shadow: var(--shadow);
}

.translation-stage.completed {
    border-left-color: var(--success);
    background: var(--white);
}

/* Completion Messages */
.completion-message {
    display: none;
    text-align: center;
    padding: 40px;
    background: var(--gray-50);
    border-radius: var(--radius-lg);
    border: 2px solid var(--success);
}

.completion-message.show {
    display: block;
    animation: fadeIn 0.5s ease-in-out;
}

.completion-icon {
    font-size: 4rem;
    color: var(--success);
    margin-bottom: 20px;
}

.completion-message h3 {
    color: var(--gray-700);
    font-size: 1.5rem;
    margin-bottom: 10px;
}

.completion-message p {
    color: var(--gray-500);
    margin-bottom: 30px;
}

.translation-completion-message {
    display: none;
    text-align: center;
    padding: 40px;
    background: var(--gray-50);
    border-radius: var(--radius-lg);
    border: 2px solid var(--success);
}

.translation-completion-message.show {
    display: block;
    animation: fadeIn 0.5s ease-in-out;
}

/* Spin Animation for Loading Icons */
@keyframes spin {
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
}
```

### File: css\reset.css
```css
/* CSS Reset and Base Styles */

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

/* Prevent icons inside buttons from interfering with click events */
button i,
.btn i,
[role="button"] i {
    pointer-events: none;
}

body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui, sans-serif;
    background: linear-gradient(135deg, var(--gray-50) 0%, var(--gray-100) 100%);
    color: var(--gray-700);
    line-height: 1.6;
    min-height: 100vh;
}

/* Base animations */
@keyframes fadeIn {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
}

@keyframes pulse {
    0% { transform: scale(1); opacity: 1; }
    50% { transform: scale(1.05); opacity: 0.8; }
    100% { transform: scale(1); opacity: 1; }
}

@keyframes slideUpFadeIn {
    from {
        opacity: 0;
        transform: translateX(-50%) translateY(100%);
    }
    to {
        opacity: 1;
        transform: translateX(-50%) translateY(0);
    }
}
```

### File: css\responsive.css
```css
/* Responsive Design */

@media (max-width: 768px) {
    .main-content {
        padding: 20px;
    }

    /* Authentication Responsive */
    .auth-container {
        flex-direction: column;
    }

    .auth-left,
    .auth-right {
        padding: 40px 30px;
    }

    /* Patient Database Responsive */
    .database-controls {
        flex-direction: column;
        gap: 20px;
        align-items: stretch;
    }

    .search-filters {
        flex-direction: column;
        gap: 15px;
    }

    .filter-group {
        min-width: auto;
    }

    .results-header {
        flex-direction: column;
        gap: 15px;
        align-items: flex-start;
    }

    .table-header,
    .table-row {
        grid-template-columns: 1fr;
        gap: 0;
    }

    .header-cell,
    .table-cell {
        padding: 12px 15px;
        text-align: left;
        border-bottom: 1px solid var(--gray-200);
    }

    .header-cell:before,
    .table-cell:before {
        content: attr(data-label);
        font-weight: 600;
        color: var(--gray-500);
        font-size: 0.8rem;
        display: block;
        margin-bottom: 5px;
        text-transform: uppercase;
        letter-spacing: 0.5px;
    }

    .table-row {
        background: var(--white);
        border: 1px solid var(--gray-200);
        border-radius: var(--radius);
        margin-bottom: 15px;
        box-shadow: var(--shadow-sm);
    }

    .table-row:hover {
        box-shadow: var(--shadow);
    }

    .action-buttons {
        flex-direction: column;
        gap: 5px;
    }

    /* User Portal Responsive */
    .welcome-content {
        flex-direction: column;
        text-align: center;
        gap: 25px;
    }

    .user-info {
        flex-direction: column;
        text-align: center;
    }

    .quick-stats {
        flex-direction: column;
        gap: 15px;
        width: 100%;
    }

    .quick-stats .stat-item {
        min-width: auto;
    }

    .main-actions {
        grid-template-columns: 1fr;
        gap: 20px;
    }

    .secondary-actions {
        flex-wrap: wrap;
        gap: 20px;
        justify-content: center;
    }

    .secondary-action-item {
        min-width: 120px;
    }

    /* Document Management Responsive */
    .folder-contents {
        grid-template-columns: 1fr;
    }
    
    .summary-stats {
        flex-direction: column;
        gap: 20px;
    }

    /* Results Dashboard Responsive */
    .nav-tabs {
        flex-direction: column;
        gap: 10px;
    }

    .nav-tab {
        min-width: auto;
        width: 100%;
    }

    .summary-grid {
        grid-template-columns: repeat(2, 1fr);
        gap: 15px;
    }

    .translation-summary-grid {
        grid-template-columns: repeat(3, 1fr);
        gap: 10px;
    }

    .translation-summary-grid .summary-item {
        min-height: 60px;
        padding: 10px 6px;
    }

    .translation-summary-grid .summary-item span:first-child {
        font-size: 0.7rem;
    }

    .translation-summary-grid .summary-item span:last-child {
        font-size: 1.1rem;
    }

    .field-grid {
        grid-template-columns: 1fr;
    }

    .processing-stages {
        grid-template-columns: 1fr;
    }

    .section-header {
        flex-direction: column;
        align-items: flex-start;
        gap: 15px;
    }

    /* Translation Review Responsive */
    .translation-container {
        flex-direction: column;
    }

    .document-navigation {
        width: 100%;
        border-right: none;
        border-bottom: 1px solid var(--gray-200);
    }

    .document-viewers {
        flex-direction: column;
        height: auto;
    }

    .document-viewer {
        border-right: none;
        border-bottom: 1px solid var(--gray-200);
        min-height: 300px;
    }

    .document-viewer:last-child {
        border-bottom: none;
    }

    /* Fixed Delivery Notification Responsive */
    .delivery-notification {
        bottom: 10px;
        width: calc(100% - 20px);
        max-width: none;
    }

    .delivery-notification-content {
        flex-direction: column;
        text-align: center;
        gap: 15px;
        padding: 20px;
    }

    .delivery-notification-text {
        order: 1;
    }

    .btn-delivery-fixed {
        order: 2;
        width: 100%;
        justify-content: center;
    }

    /* PDF Review Panel Responsive */
    .pdf-review-panel {
        width: 100%;
        right: -100%;
    }

    .pdf-controls {
        flex-direction: column;
        gap: 8px;
    }

    /* Translation Summary Mobile */
    .translation-summary-grid {
        grid-template-columns: 1fr !important;
        gap: 8px !important;
    }

    .translation-summary-grid .summary-item {
        min-height: 50px !important;
        padding: 8px !important;
    }
}
```

### File: css\results_dashboard.css
```css
/* Results Dashboard Stage */

.results-navigation {
    background: var(--gray-50);
    border-bottom: 1px solid var(--gray-200);
    padding: 20px 30px;
}

.nav-tabs {
    display: flex;
    gap: 20px;
    margin-bottom: 25px;
    border-bottom: 2px solid var(--gray-200);
}

.nav-tab {
    padding: 15px 20px;
    border-radius: var(--radius) var(--radius) 0 0;
    cursor: pointer;
    transition: all 0.3s ease;
    border: 1px solid transparent;
    background: var(--white);
    min-width: 250px;
    position: relative;
    margin-bottom: -2px;
}

.nav-tab:hover {
    border-color: var(--gray-300);
}

.nav-tab.active {
    background: var(--primary);
    color: var(--white);
    border-color: var(--primary);
    border-bottom-color: var(--primary);
}

.nav-tab-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 5px;
}

.nav-tab-content h4 {
    font-size: 0.95rem;
    margin: 0;
    font-weight: 600;
}

.nav-tab-content p {
    font-size: 0.8rem;
    opacity: 0.8;
    margin: 0;
}

.field-count {
    background: rgba(255,255,255,0.2);
    color: inherit;
    padding: 4px 10px;
    border-radius: 12px;
    font-size: 0.8rem;
    font-weight: 600;
    margin-top: 5px;
    transition: all 0.3s ease;
}

.field-count.complete {
    background: var(--success);
    color: var(--white);
}

.processing-summary {
    background: var(--white);
    border: 1px solid var(--gray-200);
    border-radius: var(--radius);
    padding: 15px 20px;
}

.processing-summary h4 {
    color: var(--gray-700);
    margin-bottom: 15px;
    font-size: 1rem;
    text-align: center;
}

/* Translation Summary Grid - 3 columns instead of 4 */
.translation-summary-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 15px;
}

.translation-summary-grid .summary-item {
    text-align: center;
    padding: 12px 8px;
    border-radius: var(--radius);
    background: var(--gray-50);
    min-height: 70px;
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.translation-summary-grid .summary-item span:first-child {
    display: block;
    color: var(--gray-600);
    font-size: 0.75rem;
    margin-bottom: 5px;
    font-weight: 500;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}

.translation-summary-grid .summary-item span:last-child {
    font-weight: 600;
    font-size: 1.3rem;
    line-height: 1;
}

.summary-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
}

.summary-item {
    text-align: center;
    padding: 10px;
    border-radius: var(--radius);
    background: var(--gray-50);
}

.summary-item span:first-child {
    display: block;
    color: var(--gray-600);
    font-size: 0.8rem;
    margin-bottom: 5px;
}

.summary-item span:last-child {
    font-weight: 600;
    font-size: 1.1rem;
}

.summary-item .success {
    color: var(--success);
}

.summary-item .warning {
    color: var(--warning);
}

.summary-item .info {
    color: var(--primary);
}

.results-main {
    padding: 30px;
    overflow-y: auto;
}

.results-section {
    display: none;
}

.results-section.active {
    display: block;
}

.section-header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 30px;
    padding-bottom: 20px;
    border-bottom: 2px solid var(--gray-200);
}

.section-title-group h3 {
    color: var(--gray-700);
    font-size: 1.5rem;
    margin-bottom: 10px;
}

.section-title-group p {
    color: var(--gray-500);
    margin: 0;
}

.results-section h3 {
    color: var(--gray-700);
    font-size: 1.5rem;
    margin-bottom: 10px;
}

.results-section p {
    color: var(--gray-500);
    margin-bottom: 30px;
}

.field-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 20px;
}

/* Field Value Editing */
.field-value.editable {
    cursor: pointer;
    position: relative;
}

.field-value.editable:hover {
    background: var(--gray-100);
}

.field-value.editing {
    background: var(--white);
    border: 2px solid var(--primary);
    padding: 10px;
}
```

### File: css\styles.css
```css
/* Main CSS File - MediXtract Application */

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

### File: css\tables.css
```css
/* Table Components */

.patient-records-table {
    background: var(--white);
    border-radius: var(--radius);
    overflow: hidden;
    border: 1px solid var(--gray-200);
}

.table-header {
    display: grid;
    grid-template-columns: 1.2fr 2fr 1.3fr 1.4fr 0.8fr 1.8fr;
    background: var(--gray-100);
    border-bottom: 2px solid var(--gray-200);
    gap: 1px;
    width: 100%;
}

.header-cell {
    padding: 16px 15px;
    font-weight: 600;
    color: var(--gray-700);
    font-size: 0.85rem;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    background: var(--gray-100);
    display: flex;
    align-items: center;
}

.header-patient-id {
    background: var(--primary);
    color: var(--white);
}

.table-body {
    max-height: 600px;
    overflow-y: auto;
    border: 1px solid var(--gray-200);
    border-top: none;
    width: 100%;
}

.table-row {
    display: grid;
    grid-template-columns: 1.2fr 2fr 1.3fr 1.4fr 0.8fr 1.8fr;
    border-bottom: 1px solid var(--gray-200);
    transition: all 0.3s ease;
    gap: 1px;
    background: var(--gray-50);
    width: 100%;
}

.table-row:hover {
    background: var(--white);
    box-shadow: inset 0 0 0 1px var(--primary);
}

.table-cell {
    padding: 16px 15px;
    font-size: 0.9rem;
    color: var(--gray-700);
    display: flex;
    align-items: center;
    background: var(--white);
    line-height: 1.4;
    min-width: 0; /* Allows text truncation if needed */
}

.patient-id-cell {
    font-weight: 600;
    color: var(--primary);
}

/* Status Badges */
.status-badge {
    padding: 4px 12px;
    border-radius: 20px;
    font-size: 0.8rem;
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 0.5px;
}

.status-processing {
    background: var(--warning);
    color: var(--white);
}

.status-review {
    background: var(--primary);
    color: var(--white);
}

.status-completed {
    background: var(--success);
    color: var(--white);
}

.status-delivered {
    background: var(--gray-600);
    color: var(--white);
}

/* Action Buttons in Tables */
.action-buttons {
    display: flex;
    gap: 8px;
}
```

### File: css\translation.css
```css
/* Translation Stage Styles */

.translation-progress-header {
    background: var(--white);
    border-radius: var(--radius-lg);
    box-shadow: var(--shadow);
    padding: 30px;
    margin-bottom: 30px;
    transition: all 0.5s ease;
}

.translation-progress-header.completed {
    background: var(--gray-50);
    border: 2px solid var(--success);
}

.translation-progress-header.hidden {
    opacity: 0;
    transform: translateY(-20px);
    height: 0;
    padding: 0;
    margin: 0;
    overflow: hidden;
}

.translation-progress-section {
    background: var(--white);
    border-radius: var(--radius-lg);
    box-shadow: var(--shadow);
    padding: 40px;
    max-width: 1000px;
    margin: 0 auto;
}

.translation-review-dashboard {
    transition: all 0.3s ease;
}

/* Document Navigation */
.document-navigation {
    background: var(--gray-50);
    border-right: 1px solid var(--gray-200);
    padding: 20px 30px;
    width: 350px;
    display: flex;
    flex-direction: column;
    gap: 20px;
}

.translation-summary {
    background: var(--white);
    border: 1px solid var(--gray-200);
    border-radius: var(--radius);
    padding: 15px 20px;
}

.translation-summary h4 {
    color: var(--gray-700);
    margin-bottom: 15px;
    font-size: 1rem;
    text-align: center;
}

.document-list {
    flex: 1;
    overflow-y: auto;
}

.document-item {
    background: var(--white);
    border: 1px solid var(--gray-200);
    border-radius: var(--radius);
    padding: 15px;
    margin-bottom: 10px;
    cursor: pointer;
    transition: all 0.3s ease;
    position: relative;
}

.document-item:hover {
    border-color: var(--primary);
    box-shadow: var(--shadow);
}

.document-item.active {
    border-color: var(--primary);
    background: var(--color-light);
}

.document-item.approved {
    border-color: var(--success);
    background: #F0FDF4;
}

.document-item-header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 8px;
}

.document-name {
    font-weight: 600;
    color: var(--gray-700);
    font-size: 0.9rem;
    line-height: 1.3;
    flex: 1;
    margin-right: 10px;
}

.document-status {
    padding: 2px 8px;
    border-radius: 12px;
    font-size: 0.75rem;
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 0.3px;
}

.document-status.translated {
    background: var(--success);
    color: var(--white);
}

.document-status.pending {
    background: var(--warning);
    color: var(--white);
}

.document-status.approved {
    background: var(--primary);
    color: var(--white);
}

.document-info {
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: var(--gray-500);
    font-size: 0.8rem;
}

.translation-actions {
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding-top: 20px;
    border-top: 1px solid var(--gray-200);
}

/* Document Comparison View */
.document-comparison {
    flex: 1;
    display: flex;
    flex-direction: column;
}

.comparison-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 30px;
    border-bottom: 1px solid var(--gray-200);
    background: var(--gray-50);
}

.comparison-header h3 {
    color: var(--gray-700);
    font-size: 1.2rem;
    margin: 0;
}

.comparison-controls {
    display: flex;
    gap: 10px;
}

.document-viewers {
    flex: 1;
    display: flex;
    height: calc(100vh - 200px);
}

.document-viewer {
    flex: 1;
    display: flex;
    flex-direction: column;
    border-right: 1px solid var(--gray-200);
}

.document-viewer:last-child {
    border-right: none;
}

.viewer-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px 20px;
    background: var(--gray-50);
    border-bottom: 1px solid var(--gray-200);
}

.viewer-header h4 {
    color: var(--gray-700);
    font-size: 1rem;
    margin: 0;
    display: flex;
    align-items: center;
    gap: 8px;
}

.viewer-content {
    flex: 1;
    padding: 20px;
    overflow-y: auto;
}

.document-placeholder {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
    text-align: center;
    color: var(--gray-500);
    background: var(--gray-50);
    border-radius: var(--radius);
    padding: 40px 20px;
    border: 2px dashed var(--gray-300);
}

.document-placeholder i {
    font-size: 3rem;
    color: var(--gray-400);
    margin-bottom: 20px;
}

.document-placeholder h4 {
    color: var(--gray-700);
    margin-bottom: 15px;
    font-size: 1.2rem;
}

.document-placeholder p {
    max-width: 300px;
    line-height: 1.6;
    margin: 0;
}

/* Document Content Display */
.document-content {
    line-height: 1.6;
}

.document-content h4 {
    color: var(--gray-700);
    margin-bottom: 15px;
    font-size: 1.1rem;
}

.document-content p {
    margin-bottom: 10px;
}

.document-content strong {
    color: var(--gray-700);
}

.content-preview {
    background: var(--gray-50);
    padding: 15px;
    border-radius: var(--radius);
    border-left: 3px solid var(--primary);
    margin-top: 15px;
}

.content-preview p {
    margin: 0;
    font-style: italic;
    color: var(--gray-600);
}
```

### File: css\user_portal.css
```css
/* User Portal Styles */

/* Welcome Section */
.welcome-section {
    width: 100%;
}

/* Actions Section */
.actions-section {
    display: flex;
    flex-direction: column;
    gap: 30px;
}

.main-actions {
    display: grid;
    grid-template-columns: 2fr 1fr;
    gap: 30px;
}

/* Secondary Actions */
.secondary-actions {
    display: flex;
    justify-content: center;
    gap: 40px;
    padding: 25px;
    background: var(--gray-50);
    border-radius: var(--radius-lg);
    border: 1px solid var(--gray-200);
}

.secondary-action-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    cursor: pointer;
    padding: 15px 20px;
    border-radius: var(--radius);
    transition: all 0.3s ease;
    color: var(--gray-500);
}

.secondary-action-item:hover {
    background: var(--white);
    color: var(--primary);
    transform: translateY(-2px);
    box-shadow: var(--shadow);
}

.secondary-action-item i {
    font-size: 1.5rem;
}

.secondary-action-item span {
    font-size: 0.9rem;
    font-weight: 500;
    text-align: center;
}

/* Activity Section */
.activity-section {
    width: 100%;
}
```

### File: css\variables.css
```css
/* Modern CSS Reset & Variables */
:root {
    --color-primary: #1D6491;
    --color-accent: #4361EE;
    --color-purple: #3B1AAF;
    --color-purple-soft: #A593E0;
    --color-purple-dark: #2C1154;
    --color-background: #FFFFFF;
    --color-light: #C8DFF8;
    --color-muted-text: #3A506B;
    --color-muted: #A6B1E1;
    --color-dark: #112B3C;
    
    /* Semantic color mappings */
    --primary: var(--color-primary);
    --primary-dark: var(--color-purple);
    --success: #10B981;
    --warning: #F59E0B;
    --danger: #EF4444;
    --gray-50: #F8FAFC;
    --gray-100: var(--color-light);
    --gray-200: #E2E8F0;
    --gray-300: var(--color-muted);
    --gray-400: var(--color-purple-soft);
    --gray-500: var(--color-muted-text);
    --gray-600: var(--color-muted-text);
    --gray-700: var(--color-dark);
    --gray-800: var(--color-purple-dark);
    --gray-900: var(--color-dark);
    --white: var(--color-background);
    --radius: 8px;
    --radius-lg: 12px;
    --shadow-sm: 0 1px 2px 0 rgb(29 100 145 / 0.05);
    --shadow: 0 1px 3px 0 rgb(29 100 145 / 0.1), 0 1px 2px -1px rgb(29 100 145 / 0.1);
    --shadow-lg: 0 10px 15px -3px rgb(29 100 145 / 0.1), 0 4px 6px -4px rgb(29 100 145 / 0.1);
    --shadow-xl: 0 20px 25px -5px rgb(29 100 145 / 0.1), 0 8px 10px -6px rgb(29 100 145 / 0.1);
}
```

### File: js\ai_processing.js
```javascript
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
```

### File: js\app.js
```javascript
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
```

### File: js\authentication.js
```javascript
// Authentication Extension for MediXtractApp
Object.assign(MediXtractApp.prototype, {
    // Authentication
    async handleLogin(e) {
        e.preventDefault();
        
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const role = document.getElementById('role').value;

        if (!email || !password || !role) {
            this.showNotification('Please fill in all fields', 'warning');
            return;
        }

        // Store user info
        this.userInfo.email = email;
        this.userInfo.role = this.formatRole(role);
        this.userInfo.name = this.extractNameFromEmail(email);

        // Simulate login process
        const submitBtn = e.target.querySelector('button[type="submit"]');
        const originalText = submitBtn.innerHTML;
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Signing In...';
        submitBtn.disabled = true;

        try {
            await this.delay(500); // Faster login simulation
            
            // Complete authentication stage
            this.completeStage(1);
            this.showNotification('Login successful! Welcome to MediXtract', 'success');
            
            // Move to User Portal (stage 2) immediately
            setTimeout(() => {
                this.currentStage = 2;
                this.showStage(2);
                this.updateUserPortalInfo();
            }, 800);

        } catch (error) {
            this.showNotification('Login failed. Please try again.', 'error');
            submitBtn.innerHTML = originalText;
            submitBtn.disabled = false;
        }
    },

    formatRole(role) {
        const roleMap = {
            'physician': 'Attending Physician',
            'resident': 'Resident',
            'analyst': 'Data Analyst',
            'coordinator': 'Research Coordinator'
        };
        return roleMap[role] || role;
    },

    extractNameFromEmail(email) {
        const namePart = email.split('@')[0];
        const words = namePart.split(/[._-]/).map(word => 
            word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
        );
        return 'Dr. ' + words.join(' ');
    },

    handleSignOut() {
        this.currentStage = 1;
        this.showStage(1);
        this.completedStages = [];
        this.userInfo = { name: 'Dr. Smith', role: 'Attending Physician', email: '' };
        
        // Reset form
        const loginForm = document.getElementById('loginForm');
        if (loginForm) {
            loginForm.reset();
        }
        
        this.showNotification('Successfully signed out', 'success');
    }
});
```

### File: js\document_management.js
```javascript
// Document Management Extension for MediXtractApp
Object.assign(MediXtractApp.prototype, {
    // Folder Selection and Analysis
    async handleFolderSelection(event) {
        const files = Array.from(event.target.files);
        console.log('Selected files:', files);
        
        if (files.length === 0) {
            this.showNotification('No files selected. Please choose a folder.', 'warning');
            return;
        }

        // Separate medical documents from JSON files
        this.medicalDocuments = [];
        this.jsonFiles = [];
        
        files.forEach(file => {
            if (file.name.toLowerCase().endsWith('.json')) {
                this.jsonFiles.push(file);
            } else if (this.isMedicalDocument(file)) {
                this.medicalDocuments.push(file);
            }
        });

        console.log('Medical documents:', this.medicalDocuments);
        console.log('JSON files:', this.jsonFiles);

        // Validate folder contents
        if (this.medicalDocuments.length === 0) {
            this.showNotification('No medical documents found in selected folder.', 'warning');
            return;
        }

        if (this.jsonFiles.length === 0) {
            this.showNotification('No JSON schema file found in selected folder.', 'warning');
            return;
        }

        // Load and validate JSON file
        try {
            await this.loadJsonFromFile(this.jsonFiles[0]);
            this.showFolderAnalysis(files[0].webkitRelativePath.split('/')[0]);
        } catch (error) {
            console.error('Error loading JSON file:', error);
            this.showNotification('Error reading JSON schema file.', 'error');
        }
    },

    isMedicalDocument(file) {
        const medicalExtensions = ['.pdf', '.doc', '.docx', '.txt', '.rtf'];
        const fileName = file.name.toLowerCase();
        return medicalExtensions.some(ext => fileName.endsWith(ext));
    },

    async loadJsonFromFile(jsonFile) {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onload = (e) => {
                try {
                    this.jsonData = JSON.parse(e.target.result);
                    console.log('Successfully loaded JSON from file:', this.jsonData);
                    this.categorizeFields();
                    resolve();
                } catch (error) {
                    reject(new Error('Invalid JSON file format'));
                }
            };
            reader.onerror = () => reject(new Error('Error reading file'));
            reader.readAsText(jsonFile);
        });
    },

    showFolderAnalysis(folderName) {
        const folderSelection = document.getElementById('folderSelection');
        const folderAnalysis = document.getElementById('folderAnalysis');
        const folderPath = document.getElementById('folderPath');

        // Hide folder selection and show analysis
        folderSelection.style.display = 'none';
        folderAnalysis.style.display = 'block';

        // Update folder path
        folderPath.textContent = `Selected folder: ${folderName}`;

        // Render medical documents
        this.renderMedicalDocuments();
        
        // Show JSON schema info
        this.renderSchemaInfo();
        
        // Update summary statistics
        this.updateFolderSummary();
        
        this.showNotification(`Successfully analyzed folder: ${folderName}`, 'success');
    },

    renderMedicalDocuments() {
        const container = document.getElementById('medicalFiles');
        container.innerHTML = '';

        this.medicalDocuments.forEach(file => {
            const fileElement = document.createElement('div');
            fileElement.className = 'medical-file-item';
            
            const fileExtension = this.getFileExtension(file.name);
            const iconClass = this.getFileIconClass(fileExtension);
            const typeClass = this.getFileTypeClass(fileExtension);
            
            fileElement.innerHTML = `
                <div class="file-type-icon ${typeClass}">
                    <i class="fas ${iconClass}"></i>
                </div>
                <div class="medical-file-info">
                    <h5>${file.name}</h5>
                    <p>${this.formatFileSize(file.size)} • ${this.getFileTypeDisplay(fileExtension)}</p>
                </div>
            `;
            
            container.appendChild(fileElement);
        });
    },

    renderSchemaInfo() {
        const container = document.getElementById('schemaFile');
        const jsonFile = this.jsonFiles[0];
        // Handle both direct field structure and properties structure
        const fieldsData = this.jsonData.properties || this.jsonData;
        const fieldCount = Object.keys(fieldsData).length;
        
        container.innerHTML = `
            <div class="schema-file-icon">
                <i class="fas fa-file-code"></i>
            </div>
            <h5>${jsonFile.name}</h5>
            <p>${this.formatFileSize(jsonFile.size)}</p>
            <div class="schema-fields-info">
                Contains ${fieldCount} data field definitions
            </div>
        `;
    },

    updateFolderSummary() {
        const totalDocs = this.medicalDocuments.length;
        // Handle both direct field structure and properties structure
        const fieldsData = this.jsonData.properties || this.jsonData;
        const totalFields = Object.keys(fieldsData).length;
        const estimatedTime = Math.ceil(totalDocs * 2.5); // Estimate 2.5 minutes per document

        document.getElementById('totalDocsCount').textContent = totalDocs;
        document.getElementById('totalFieldsCount').textContent = totalFields;
        document.getElementById('estimatedTime').textContent = estimatedTime;

        // Enable translation button (was processing button)
        const translationBtn = document.getElementById('startTranslationBtn');
        if (translationBtn) {
            translationBtn.disabled = false;
        }
    },

    getFileExtension(fileName) {
        return fileName.split('.').pop().toLowerCase();
    },

    getFileIconClass(extension) {
        const icons = {
            'pdf': 'fa-file-pdf',
            'doc': 'fa-file-word',
            'docx': 'fa-file-word',
            'txt': 'fa-file-text',
            'rtf': 'fa-file-text',
            'json': 'fa-file-code'
        };
        return icons[extension] || 'fa-file';
    },

    getFileTypeClass(extension) {
        const typeMap = {
            'pdf': 'file-type-pdf',
            'doc': 'file-type-doc',
            'docx': 'file-type-doc',
            'txt': 'file-type-txt',
            'rtf': 'file-type-txt',
            'json': 'file-type-json'
        };
        return typeMap[extension] || 'file-type-txt';
    },

    getFileTypeDisplay(extension) {
        const displays = {
            'pdf': 'PDF Document',
            'doc': 'Word Document',
            'docx': 'Word Document', 
            'txt': 'Text Document',
            'rtf': 'Rich Text Document',
            'json': 'JSON Schema'
        };
        return displays[extension] || 'Document';
    }
});
```

### File: js\field_manager.js
```javascript
// Field Manager Extension for MediXtractApp
Object.assign(MediXtractApp.prototype, {
    createFieldCard(fieldName, field, category) {
        console.log(`Creating field card for: ${fieldName}, category: ${category}`, field);
        
        const card = document.createElement('div');
        card.className = 'field-card pending'; // Start as pending
        card.dataset.fieldId = fieldName;
        card.dataset.category = category;
        
        // Initialize acceptance state
        this.fieldAcceptanceState[fieldName] = false;
        
        // Add confidence indicators for different categories (no status badges)
        let confidenceBadge = '';
        if (category === 'high-confidence') {
            confidenceBadge = '<span class="confidence-badge high">99.1%</span>';
        } else if (category === 'double-check') {
            confidenceBadge = '<span class="confidence-badge medium">87.3%</span>';
        }
        
        let fieldContent = '';
        let fieldActions = '';
        
        try {
            if (category === 'high-confidence') {
                fieldContent = `
                    <div class="field-value editable" data-field="${fieldName}" data-original-value="${this.generateSampleValue(field, fieldName)}">${this.generateSampleValue(field, fieldName)}</div>
                `;
                fieldActions = `
                    <div class="field-actions">
                        <button class="btn-edit" style="display: none;">✏️ Edit</button>
                        <button class="btn-accept">✓ Accept</button>
                        <button class="btn-review">Review</button>
                    </div>
                `;
            } else if (category === 'double-check') {
                fieldContent = `
                    <div class="field-value editable" data-field="${fieldName}" data-original-value="${this.generateSampleValue(field, fieldName)}">${this.generateSampleValue(field, fieldName)}</div>
                `;
                fieldActions = `
                    <div class="field-actions">
                        <button class="btn-edit" style="display: none;">✏️ Edit</button>
                        <button class="btn-accept">✓ Accept</button>
                        <button class="btn-review">Review</button>
                    </div>
                `;
            } else if (category === 'manual-input') {
                fieldContent = this.generateInputField(field);
                fieldActions = `
                    <div class="field-actions">
                        <button class="btn-edit" style="display: none;">✏️ Edit</button>
                        <button class="btn-accept">✓ Save</button>
                    </div>
                `;
            }
            
            // Add field constraints information if available
            let constraintsInfo = '';
            if (field.anyOf && field.anyOf[0]) {
                const constraints = field.anyOf[0];
                let constraintText = '';
                
                if (constraints.minimum !== undefined && constraints.maximum !== undefined) {
                    constraintText = `Range: ${constraints.minimum}-${constraints.maximum}`;
                } else if (constraints.enum) {
                    constraintText = `Options: ${constraints.enum.length} values`;
                }
                
                if (constraintText) {
                    constraintsInfo = `<div class="field-constraints">${constraintText}</div>`;
                }
            }
            
            card.innerHTML = `
                <div class="field-header">
                    <div class="field-name-container">
                        <span class="field-name">${this.formatFieldName(fieldName)}</span>
                        <div class="info-icon">
                            <i class="fas fa-info"></i>
                            <div class="tooltip">${field.description || 'No description available'}</div>
                        </div>
                    </div>
                    <div class="field-badges">
                        ${confidenceBadge}
                    </div>
                </div>
                ${fieldContent}
                ${constraintsInfo}
                ${fieldActions}
                ${field.comments ? `<div class="field-comments" style="font-size: 0.8rem; color: var(--gray-500); margin-top: 10px; font-style: italic; line-height: 1.4; display: none;">${field.comments}</div>` : ''}
            `;
            
        } catch (error) {
            console.error('Error creating field card:', error);
            card.innerHTML = `
                <div class="field-header">
                    <div class="field-name-container">
                        <span class="field-name">${this.formatFieldName(fieldName)}</span>
                    </div>
                </div>
                <div style="color: var(--danger); padding: 10px;">Error rendering field</div>
            `;
        }
        
        return card;
    },

    generateInputField(field) {
        const fieldType = this.getFieldType(field);
        
        if (fieldType === 'select') {
            const options = this.getFieldOptions(field);
            let optionsHtml = '<option value="">Select an option...</option>';
            
            // Handle enum options with descriptions from the field description
            if (field.description && field.description.includes('Options:')) {
                const optionsText = field.description.split('Options:')[1];
                const optionPairs = optionsText.split(',').map(opt => opt.trim());
                
                optionPairs.forEach(optionPair => {
                    const match = optionPair.match(/(\d+)=(.+?)(?:,|$)/);
                    if (match) {
                        const value = match[1];
                        const label = match[2].trim();
                        optionsHtml += `<option value="${value}">${value} - ${label}</option>`;
                    }
                });
            } else {
                // Fallback to raw enum values
                options.forEach(option => {
                    optionsHtml += `<option value="${option}">${option}</option>`;
                });
            }
            
            return `<select class="field-select">${optionsHtml}</select>`;
        } else if (fieldType === 'date') {
            return `<input type="date" class="field-input">`;
        } else if (fieldType === 'number') {
            const min = this.getFieldMin(field);
            const max = this.getFieldMax(field);
            let attributes = '';
            if (min !== null) attributes += ` min="${min}"`;
            if (max !== null) attributes += ` max="${max}"`;
            return `<input type="number" class="field-input" placeholder="Enter value"${attributes}>`;
        } else {
            return `<input type="text" class="field-input" placeholder="Enter value">`;
        }
    },

    getFieldType(field) {
        if (field.anyOf && field.anyOf[0]) {
            const firstType = field.anyOf[0];
            if (firstType.enum) return 'select';
            if (firstType.format === 'date') return 'date';
            if (firstType.type === 'number' || firstType.type === 'integer') return 'number';
        }
        return 'text';
    },

    getFieldOptions(field) {
        if (field.anyOf && field.anyOf[0]) {
            if (field.anyOf[0].enum) {
                return field.anyOf[0].enum;
            }
            if (field.anyOf[0].items && field.anyOf[0].items.enum) {
                return field.anyOf[0].items.enum;
            }
        }
        return [];
    },

    getFieldMin(field) {
        if (field.anyOf && field.anyOf[0] && field.anyOf[0].minimum !== undefined) {
            return field.anyOf[0].minimum;
        }
        return null;
    },

    getFieldMax(field) {
        if (field.anyOf && field.anyOf[0] && field.anyOf[0].maximum !== undefined) {
            return field.anyOf[0].maximum;
        }
        return null;
    },

    generateSampleValue(field, fieldName = '') {
        // Generate realistic sample values based on field type and description
        const description = field.description ? field.description.toLowerCase() : '';
        
        // If fieldName wasn't passed, try to find it in the data structure
        if (!fieldName) {
            const fieldsData = this.jsonData.properties || this.jsonData;
            fieldName = Object.keys(fieldsData).find(key => fieldsData[key] === field) || '';
        }
        
        // Use field name for specific mappings
        if (fieldName.includes('record_id')) return 'K001';
        if (fieldName.includes('p_ga_weeks')) return '32 weeks';
        if (fieldName.includes('p_ga_days')) return '4 days';
        if (fieldName.includes('p_birth_weight')) return '2,450 grams';
        if (fieldName.includes('m_length')) return '42.5 cm';
        if (fieldName.includes('m_head_circ')) return '29.8 cm';
        if (fieldName.includes('p_sex')) return 'Male (2)';
        if (fieldName.includes('m_home_feeding')) return 'Human milk only (1)';
        if (fieldName.includes('m_discharge_stoma')) return 'No (0)';
        if (fieldName.includes('feeding')) return 'Human milk only (1)';
        if (fieldName.includes('stoma')) return 'No (0)';
        
        // Fallback to description-based mappings
        if (description.includes('record id') || description.includes('identifier')) return 'K001';
        if (description.includes('gestational age') && description.includes('weeks')) return '32 weeks';
        if (description.includes('gestational age') && description.includes('days')) return '4 days';
        if (description.includes('birth weight')) return '2,450 grams';
        if (description.includes('length') && description.includes('birth')) return '42.5 cm';
        if (description.includes('head circumference')) return '29.8 cm';
        if (description.includes('sex') || description.includes('gender')) return 'Male (2)';
        if (description.includes('feeding') && description.includes('discharge')) return 'Human milk only (1)';
        if (description.includes('stoma')) return 'No (0)';
        if (description.includes('number of infants')) return '2 infants';
        if (description.includes('order of births') || description.includes('rank')) return 'A (first)';
        
        // Handle enum-based fields with actual schema values
        const fieldType = this.getFieldType(field);
        if (fieldType === 'select') {
            const options = this.getFieldOptions(field);
            if (options.length > 0) {
                // Try to pick a meaningful default based on common medical values
                if (fieldName.includes('sex') && options.includes('2')) return 'Male (2)';
                if (fieldName.includes('feeding') && options.includes('1')) return this.getEnumLabelFromDescription(field, '1');
                if (fieldName.includes('stoma') && options.includes('0')) return this.getEnumLabelFromDescription(field, '0');
                if (options.includes('1')) return this.getEnumLabelFromDescription(field, '1');
                if (options.includes('0')) return this.getEnumLabelFromDescription(field, '0');
                return this.getEnumLabelFromDescription(field, options[0]);
            }
        }
        
        // Default values based on field type and schema constraints
        if (fieldType === 'number') {
            const min = this.getFieldMin(field);
            const max = this.getFieldMax(field);
            if (min !== null && max !== null) {
                // Generate sensible values within range
                if (description.includes('weight')) {
                    return Math.floor((min + max) / 2).toString() + ' grams';
                } else if (description.includes('weeks')) {
                    return Math.floor((min + max) / 2).toString() + ' weeks';
                } else if (description.includes('days')) {
                    return Math.floor(Math.random() * (max - min + 1) + min).toString() + ' days';
                } else if (description.includes('cm')) {
                    return (min + (max - min) * 0.6).toFixed(1) + ' cm';
                }
                return Math.floor((min + max) / 2).toString();
            }
            return '42';
        }
        
        if (fieldType === 'date') return '2025-01-13';
        if (fieldType === 'string' && !this.getFieldOptions(field).length) return 'Extracted from translated clinical notes';
        
        return 'Extracted from translated clinical notes';
    },

    getEnumLabelFromDescription(field, value) {
        // Extract enum labels from description if available
        if (field.description && field.description.includes('Options:')) {
            const optionsText = field.description.split('Options:')[1];
            const regex = new RegExp(`${value}=([^,]+)`);
            const match = optionsText.match(regex);
            if (match) {
                let label = match[1].trim();
                // Clean up the label (remove trailing periods, extra text after periods)
                label = label.split('.')[0].trim();
                return `${label} (${value})`;
            }
        }
        return `Option ${value}`;
    },

    formatFieldName(fieldName) {
        // Handle specific medical field name mappings
        const fieldMappings = {
            'p_ga_weeks': 'Gestational Age (Weeks)',
            'p_ga_days': 'Gestational Age (Days)', 
            'p_birth_weight': 'Birth Weight',
            'm_length': 'Length at Birth',
            'm_head_circ': 'Head Circumference',
            'p_sex': 'Patient Sex',
            'p_number_of_infants': 'Number of Infants',
            'p_rank': 'Birth Order Rank',
            'p_hospital_id': 'Hospital ID',
            'p_date_of_birth': 'Date of Birth',
            'p_date_of_admission': 'Admission Date',
            'm_nec': 'Necrotizing Enterocolitis',
            'm_sepsis': 'Sepsis Status',
            'm_surfactant': 'Surfactant Treatment',
            'ab_before': 'Antibiotics Before NEC',
            'ab_before_days': 'Antibiotic Days',
            'm_probiotics_b_nec_onset': 'Probiotics Before NEC'
        };
        
        // Use mapping if available, otherwise format the field name
        if (fieldMappings[fieldName]) {
            return fieldMappings[fieldName];
        }
        
        // Generic formatting for unmapped fields
        return fieldName
            .replace(/_/g, ' ')
            .replace(/\b\w/g, l => l.toUpperCase())
            .replace(/^(P|M|Ab|Id)\s/, (match) => {
                const prefixes = {
                    'P ': 'Patient ',
                    'M ': 'Medical ',
                    'Ab ': 'Antibiotic ',
                    'Id ': 'ID '
                };
                return prefixes[match] || match;
            })
            .trim();
    },

    // Field Editing and Actions
    enableFieldEditing(fieldElement) {
        if (fieldElement.classList.contains('editing')) return;

        const originalValue = fieldElement.dataset.originalValue || fieldElement.textContent;
        fieldElement.classList.add('editing');
        fieldElement.contentEditable = true;
        fieldElement.focus();

        // Handle blur event to save changes
        const handleBlur = () => {
            fieldElement.classList.remove('editing');
            fieldElement.contentEditable = false;
            fieldElement.removeEventListener('blur', handleBlur);
            fieldElement.removeEventListener('keydown', handleKeydown);
        };

        // Handle Enter key to save
        const handleKeydown = (e) => {
            if (e.key === 'Enter') {
                e.preventDefault();
                fieldElement.blur();
            }
        };

        fieldElement.addEventListener('blur', handleBlur);
        fieldElement.addEventListener('keydown', handleKeydown);
    },

    handleFieldAccept(button) {
        const fieldCard = button.closest('.field-card');
        const fieldValue = fieldCard.querySelector('.field-value');
        const editBtn = fieldCard.querySelector('.btn-edit');
        const fieldId = fieldCard.dataset.fieldId;
        const category = fieldCard.dataset.category;
        
        // For manual input fields, validate they are not empty
        if (category === 'manual-input') {
            const manualInput = fieldCard.querySelector('.field-input, .field-select');
            if (manualInput && (!manualInput.value || manualInput.value.trim() === '')) {
                this.showNotification('Please fill in the field before saving', 'warning');
                return; // Don't save empty fields
            }
        }
        
        button.style.background = 'var(--success)';
        button.textContent = category === 'manual-input' ? '✓ Saved' : '✓ Accepted';
        button.disabled = true;
        button.style.opacity = '0.8';

        // Mark field as accepted
        this.fieldAcceptanceState[fieldId] = true;
        fieldCard.classList.remove('pending');
        fieldCard.classList.add('accepted');

        // Handle edit button display for all field types
        if (editBtn) {
            editBtn.style.display = 'inline-block';
            editBtn.textContent = '✏️ Edit';
        }

        // For manual input fields, disable the input but keep it accessible for editing
        if (category === 'manual-input') {
            const manualInput = fieldCard.querySelector('.field-input, .field-select');
            if (manualInput) {
                manualInput.disabled = true;
                manualInput.style.opacity = '0.7';
                // Keep event listener for when edit is clicked
                manualInput.addEventListener('input', () => {
                    if (!this.fieldAcceptanceState[fieldId]) {
                        this.handleFieldEdit(fieldCard);
                    }
                });
            }
        } else {
            // For high-confidence and double-check fields, disable direct editing on field value
            if (fieldValue && fieldValue.classList.contains('editable')) {
                fieldValue.classList.remove('editable');
                fieldValue.style.cursor = 'default';
            }
        }

        // Hide other action buttons
        const otherButtons = fieldCard.querySelectorAll('.btn-review');
        otherButtons.forEach(btn => {
            btn.style.display = 'none';
        });

        // Update counters and Accept All button
        this.updateSectionCounters();
        this.updateAcceptAllButtons();
        this.updateDeliveryButton();
        this.updateDeliveryButton();
    },

    handleFieldEdit(fieldCard) {
        const fieldValue = fieldCard.querySelector('.field-value');
        const acceptBtn = fieldCard.querySelector('.btn-accept');
        const reviewBtn = fieldCard.querySelector('.btn-review');
        const editBtn = fieldCard.querySelector('.btn-edit');
        const fieldId = fieldCard.dataset.fieldId;
        const category = fieldCard.dataset.category;
        
        // Mark field as no longer accepted
        this.fieldAcceptanceState[fieldId] = false;
        fieldCard.classList.remove('accepted');
        fieldCard.classList.add('pending');

        // Hide delivery notification when any field is edited
        this.hideDeliveryNotification();

        // Reset accept button
        if (acceptBtn) {
            acceptBtn.style.background = 'var(--success)';
            acceptBtn.textContent = category === 'manual-input' ? '✓ Save' : '✓ Accept';
            acceptBtn.disabled = false;
            acceptBtn.style.opacity = '1';
        }

        // Hide edit button
        if (editBtn) {
            editBtn.style.display = 'none';
        }

        // Handle field re-editing based on category
        if (category === 'manual-input') {
            // Re-enable manual input fields
            const manualInput = fieldCard.querySelector('.field-input, .field-select');
            if (manualInput) {
                manualInput.disabled = false;
                manualInput.style.opacity = '1';
                manualInput.focus(); // Focus the input for immediate editing
            }
        } else {
            // For non-manual input fields, re-enable editing on field value
            if (fieldValue) {
                fieldValue.classList.add('editable');
                fieldValue.style.cursor = 'pointer';
                // Trigger edit mode
                this.enableFieldEditing(fieldValue);
            }

            // Show review button again if it exists
            if (reviewBtn) {
                reviewBtn.style.display = 'inline-block';
            }
        }

        // Update counters and Accept All button
        this.updateSectionCounters();
        this.updateAcceptAllButtons();
    },

    handleAcceptAll(sectionId) {
        const section = document.getElementById(sectionId);
        if (!section) return;

        const acceptButtons = section.querySelectorAll('.btn-accept:not(:disabled)');
        acceptButtons.forEach(button => {
            this.handleFieldAccept(button);
        });

        this.showNotification(`All fields in ${this.getSectionDisplayName(sectionId)} have been accepted`, 'success');
    },

    updateSectionCounters() {
        const sections = ['manual-input', 'high-confidence', 'double-check'];
        
        sections.forEach(sectionId => {
            const section = document.getElementById(sectionId);
            if (!section) return;

            const fieldCards = section.querySelectorAll('.field-card');
            const acceptedFields = section.querySelectorAll('.field-card.accepted');
            const total = fieldCards.length;
            const accepted = acceptedFields.length;

            // Update tab counter
            const tabCounter = document.getElementById(`${sectionId}-count`);
            if (tabCounter) {
                tabCounter.textContent = `${accepted}/${total}`;
                tabCounter.className = `field-count ${accepted === total && total > 0 ? 'complete' : ''}`;
            }
        });
    },

    updateAcceptAllButtons() {
        const sections = ['high-confidence', 'double-check']; // Removed manual-input
        
        sections.forEach(sectionId => {
            const section = document.getElementById(sectionId);
            if (!section) return;

            const fieldCards = section.querySelectorAll('.field-card');
            const acceptedFields = section.querySelectorAll('.field-card.accepted');
            const acceptAllBtn = section.querySelector('.btn-accept-all');
            
            if (acceptAllBtn && fieldCards.length > 0) {
                const allAccepted = acceptedFields.length === fieldCards.length;
                
                if (allAccepted) {
                    acceptAllBtn.innerHTML = '<i class="fas fa-check-double"></i> All Accepted';
                    acceptAllBtn.disabled = true;
                    acceptAllBtn.style.background = 'var(--success)';
                } else {
                    acceptAllBtn.innerHTML = '<i class="fas fa-check-double"></i> Accept All';
                    acceptAllBtn.disabled = false;
                    acceptAllBtn.style.background = 'var(--primary)';
                }
            }
        });
    }
});
```

### File: js\notifications.js
```javascript
// Notifications Extension for MediXtractApp
Object.assign(MediXtractApp.prototype, {
    showNotification(message, type = 'info') {
        // Create notification element
        const notification = document.createElement('div');
        notification.className = `notification ${type}`;
        notification.innerHTML = `
            <i class="fas fa-${this.getNotificationIcon(type)}"></i>
            <span>${message}</span>
        `;

        // Add styles
        Object.assign(notification.style, {
            position: 'fixed',
            top: '20px',
            right: '20px',
            background: this.getNotificationColor(type),
            color: 'white',
            padding: '15px 20px',
            borderRadius: 'var(--radius)',
            boxShadow: 'var(--shadow-lg)',
            zIndex: '10000',
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            maxWidth: '400px',
            opacity: '0',
            transform: 'translateX(100%)',
            transition: 'all 0.3s ease'
        });

        document.body.appendChild(notification);

        // Animate in
        setTimeout(() => {
            notification.style.opacity = '1';
            notification.style.transform = 'translateX(0)';
        }, 100);

        // Remove after delay
        setTimeout(() => {
            notification.style.opacity = '0';
            notification.style.transform = 'translateX(100%)';
            setTimeout(() => {
                if (notification.parentNode) {
                    notification.parentNode.removeChild(notification);
                }
            }, 300);
        }, 5000);
    },

    getNotificationIcon(type) {
        const icons = {
            success: 'check-circle',
            warning: 'exclamation-triangle',
            error: 'times-circle',
            info: 'info-circle'
        };
        return icons[type] || icons.info;
    },

    getNotificationColor(type) {
        const colors = {
            success: 'var(--success)',
            warning: 'var(--warning)',
            error: 'var(--danger)',
            info: 'var(--primary)'
        };
        return colors[type] || colors.info;
    },

    showDeliveryNotification() {
        const deliveryNotification = document.getElementById('deliveryNotification');
        if (deliveryNotification) {
            deliveryNotification.style.display = 'block';
            // Add a small delay for the animation to trigger properly
            setTimeout(() => {
                deliveryNotification.classList.add('visible');
            }, 100);
        }
    },

    hideDeliveryNotification() {
        const deliveryNotification = document.getElementById('deliveryNotification');
        if (deliveryNotification) {
            deliveryNotification.classList.remove('visible');
            deliveryNotification.style.display = 'none';
        }
    },

    showPDFReview() {
        const reviewPanel = document.getElementById('pdfReviewPanel');
        const overlay = document.getElementById('pdfOverlay');
        
        if (reviewPanel) {
            // Show overlay first
            if (overlay) {
                overlay.style.display = 'block';
                setTimeout(() => overlay.classList.add('active'), 10);
            }
            
            // Show panel
            reviewPanel.classList.add('active');
            
            // Simulate loading a PDF from the medical documents
            const firstDoc = this.medicalDocuments.length > 0 ? this.medicalDocuments[0].name : 'medical_report.pdf';
            const pdfTitle = reviewPanel.querySelector('.pdf-title');
            if (pdfTitle) {
                pdfTitle.textContent = firstDoc;
            }
            
            // Focus the panel for better keyboard interaction
            reviewPanel.focus();
            
            // Prevent body scrolling when panel is open
            document.body.style.overflow = 'hidden';
        }
    },

    closePDFReview() {
        const reviewPanel = document.getElementById('pdfReviewPanel');
        const overlay = document.getElementById('pdfOverlay');
        
        if (reviewPanel) {
            reviewPanel.classList.remove('active');
            
            // Hide overlay
            if (overlay) {
                overlay.classList.remove('active');
                setTimeout(() => overlay.style.display = 'none', 300);
            }
            
            // Restore body scrolling
            document.body.style.overflow = 'auto';
            
            // Remove focus from panel
            reviewPanel.blur();
        }
    }
});
```

### File: js\patient_database.js
```javascript
// Patient Database Extension for MediXtractApp
Object.assign(MediXtractApp.prototype, {
    loadPatientDatabase() {
        // Generate sample patient data
        this.allPatients = [
            { id: 'NEC-2024-023', hospital: 'General Hospital', date: '2024-01-14', status: 'completed', fields: 34, hospitalKey: 'general' },
            { id: 'NEC-2024-022', hospital: 'Children\'s Hospital', date: '2024-01-13', status: 'review', fields: 28, hospitalKey: 'children' },
            { id: 'NEC-2024-021', hospital: 'Medical Center', date: '2024-01-12', status: 'delivered', fields: 31, hospitalKey: 'medical' },
            { id: 'NEC-2024-020', hospital: 'University Hospital', date: '2024-01-11', status: 'processing', fields: 15, hospitalKey: 'university' },
            { id: 'NEC-2024-019', hospital: 'General Hospital', date: '2024-01-10', status: 'completed', fields: 33, hospitalKey: 'general' },
            { id: 'NEC-2024-018', hospital: 'Children\'s Hospital', date: '2024-01-09', status: 'delivered', fields: 29, hospitalKey: 'children' },
            { id: 'NEC-2024-017', hospital: 'Medical Center', date: '2024-01-08', status: 'review', fields: 27, hospitalKey: 'medical' },
            { id: 'NEC-2024-016', hospital: 'University Hospital', date: '2024-01-07', status: 'completed', fields: 32, hospitalKey: 'university' },
            { id: 'NEC-2024-015', hospital: 'General Hospital', date: '2024-01-06', status: 'processing', fields: 18, hospitalKey: 'general' },
            { id: 'NEC-2024-014', hospital: 'Children\'s Hospital', date: '2024-01-05', status: 'delivered', fields: 30, hospitalKey: 'children' }
        ];
        
        // Apply default sort by date (newest first)
        const sortedPatients = this.sortPatients(this.allPatients, 'date');
        this.renderPatientDatabase(sortedPatients);
        this.updateResultsCount(this.allPatients.length);
    },

    applyDatabaseFilters() {
        const patientIdFilter = document.getElementById('patientIdFilter').value.toLowerCase();
        const hospitalFilter = document.getElementById('hospitalFilter').value;
        const statusFilter = document.getElementById('statusFilter').value;
        const sortBy = document.getElementById('sortBy').value;

        let filteredPatients = this.allPatients.filter(patient => {
            const matchesId = !patientIdFilter || patient.id.toLowerCase().includes(patientIdFilter);
            const matchesHospital = !hospitalFilter || patient.hospitalKey === hospitalFilter;
            const matchesStatus = !statusFilter || patient.status === statusFilter;
            
            return matchesId && matchesHospital && matchesStatus;
        });

        // Apply sorting
        filteredPatients = this.sortPatients(filteredPatients, sortBy);

        this.renderPatientDatabase(filteredPatients);
        this.updateResultsCount(filteredPatients.length);
    },

    sortPatients(patients, sortBy) {
        const sortedPatients = [...patients];
        
        switch (sortBy) {
            case 'date':
                return sortedPatients.sort((a, b) => new Date(b.date) - new Date(a.date));
            case 'patient-id':
                return sortedPatients.sort((a, b) => a.id.localeCompare(b.id));
            case 'status':
                return sortedPatients.sort((a, b) => a.status.localeCompare(b.status));
            case 'hospital':
                return sortedPatients.sort((a, b) => a.hospital.localeCompare(b.hospital));
            default:
                return sortedPatients;
        }
    },

    clearDatabaseFilters() {
        document.getElementById('patientIdFilter').value = '';
        document.getElementById('hospitalFilter').value = '';
        document.getElementById('statusFilter').value = '';
        document.getElementById('sortBy').value = 'date';
        
        const sortedPatients = this.sortPatients(this.allPatients, 'date');
        this.renderPatientDatabase(sortedPatients);
        this.updateResultsCount(this.allPatients.length);
        this.showNotification('Filters cleared', 'info');
    },

    updateResultsCount(count) {
        const resultsCountElement = document.getElementById('resultsCount');
        if (resultsCountElement) {
            resultsCountElement.textContent = `(${count} found)`;
        }
    },

    renderPatientDatabase(patients) {
        const tbody = document.getElementById('patientRecordsBody');
        if (!tbody) return;
        
        tbody.innerHTML = '';
        
        patients.forEach(patient => {
            const row = document.createElement('div');
            row.className = 'table-row';
            row.innerHTML = `
                <div class="table-cell patient-id-cell" data-label="Patient ID">${patient.id}</div>
                <div class="table-cell" data-label="Hospital">${patient.hospital}</div>
                <div class="table-cell" data-label="Date Added">${patient.date}</div>
                <div class="table-cell" data-label="Status">
                    <span class="status-badge status-${patient.status}">${this.formatStatus(patient.status)}</span>
                </div>
                <div class="table-cell" data-label="Fields">${patient.fields}</div>
                <div class="table-cell" data-label="Actions">
                    <div class="action-buttons">
                        <button class="btn-view" onclick="window.medixtractApp.viewPatient('${patient.id}')">
                            <i class="fas fa-eye"></i> View
                        </button>
                        ${patient.status !== 'delivered' ? `<button class="btn-edit-record" onclick="window.medixtractApp.editPatient('${patient.id}')">
                            <i class="fas fa-edit"></i> Edit
                        </button>` : ''}
                    </div>
                </div>
            `;
            tbody.appendChild(row);
        });
    },

    formatStatus(status) {
        const statusMap = {
            'processing': 'Processing',
            'review': 'Under Review', 
            'completed': 'Completed',
            'delivered': 'Delivered'
        };
        return statusMap[status] || status;
    },

    viewPatient(patientId) {
        this.showNotification(`Viewing patient ${patientId}`, 'info');
        // In a real app, this would navigate to the patient details
    },

    editPatient(patientId) {
        this.showNotification(`Editing patient ${patientId}`, 'info');
        // In a real app, this would navigate to the edit interface
    }
});
```

### File: js\results_dashboard.js
```javascript
// Results Dashboard Extension for MediXtractApp
Object.assign(MediXtractApp.prototype, {
    // Results Dashboard Stage
    switchResultsSection(sectionId) {
        // Update navigation
        document.querySelectorAll('.nav-tab').forEach(tab => {
            tab.classList.remove('active');
        });
        event.currentTarget.classList.add('active');

        // Update content
        document.querySelectorAll('.results-section').forEach(section => {
            section.classList.remove('active');
        });
        const targetSection = document.getElementById(sectionId);
        if (targetSection) {
            targetSection.classList.add('active');
        }
    },

    updateDeliveryButton() {
        const deliveryNotification = document.getElementById('deliveryNotification');
        if (!deliveryNotification) return;

        // Check if all fields across all sections are accepted
        const allFieldCards = document.querySelectorAll('.field-card');
        const acceptedFieldCards = document.querySelectorAll('.field-card.accepted');
        const allAccepted = allFieldCards.length > 0 && allFieldCards.length === acceptedFieldCards.length;

        if (allAccepted) {
            this.showDeliveryNotification();
        } else {
            this.hideDeliveryNotification();
        }
    },

    // JSON Data Management
    async loadJsonData() {
        try {
            // Use sample data if no JSON was loaded from files
            if (!this.jsonData) {
                this.loadSampleData();
            }
            
            this.categorizeFields();
            this.renderFields();
            this.updateFieldCounts();
            
        } catch (error) {
            console.error('Error loading JSON data:', error);
            this.showNotification('No JSON data file found. Using sample data.', 'warning');
            this.loadSampleData();
        }
    },

    categorizeFields() {
        // Reset categories
        this.categorizedFields = {
            highConfidence: {},
            doubleCheck: {},
            manualInput: {}
        };
        
        console.log('Categorizing fields from JSON data:', this.jsonData);
        
        // Extract fields from the properties object if it exists
        const fieldsData = this.jsonData.properties || this.jsonData;
        
        Object.keys(fieldsData).forEach(fieldName => {
            const field = fieldsData[fieldName];
            const groupId = field.group_id;
            
            console.log(`Field: ${fieldName}, Group: ${groupId}`);
            
            if (groupId === 'group_1' || groupId === 'group_3') {
                this.categorizedFields.highConfidence[fieldName] = field;
            } else if (groupId === 'group_2' || groupId === 'group_5') {
                this.categorizedFields.doubleCheck[fieldName] = field;
            } else if (groupId === 'group_4') {
                this.categorizedFields.manualInput[fieldName] = field;
            } else {
                // Default to high confidence if group_id is unclear
                console.warn(`Unknown group_id: ${groupId} for field: ${fieldName}, defaulting to high confidence`);
                this.categorizedFields.highConfidence[fieldName] = field;
            }
        });
        
        console.log('Categorized fields:', this.categorizedFields);
    },

    renderFields() {
        console.log('Starting to render fields...');
        this.renderManualInputFields();
        this.renderHighConfidenceFields();
        this.renderDoubleCheckFields();
    },

    renderManualInputFields() {
        const container = document.getElementById('manual-input-fields');
        if (!container) {
            console.error('Manual input fields container not found');
            return;
        }
        
        console.log('Rendering manual input fields:', this.categorizedFields.manualInput);
        container.innerHTML = '';
        
        const manualFields = Object.keys(this.categorizedFields.manualInput);
        if (manualFields.length === 0) {
            container.innerHTML = '<p style="color: var(--gray-500); text-align: center; padding: 40px;">No manual input fields found in the current dataset.</p>';
            return;
        }
        
        manualFields.forEach(fieldName => {
            const field = this.categorizedFields.manualInput[fieldName];
            const fieldCard = this.createFieldCard(fieldName, field, 'manual-input');
            container.appendChild(fieldCard);
            
            // Add input listeners for manual input fields
            setTimeout(() => {
                const manualInput = fieldCard.querySelector('.field-input, .field-select');
                if (manualInput) {
                    manualInput.addEventListener('input', () => {
                        if (this.fieldAcceptanceState[fieldName]) {
                            this.handleFieldEdit(fieldCard);
                        }
                    });
                }
            }, 100);
        });
        
        console.log(`Rendered ${manualFields.length} manual input fields`);
    },

    renderHighConfidenceFields() {
        const container = document.getElementById('high-confidence-fields');
        if (!container) {
            console.error('High confidence fields container not found');
            return;
        }
        
        console.log('Rendering high confidence fields:', this.categorizedFields.highConfidence);
        container.innerHTML = '';
        
        const highConfidenceFields = Object.keys(this.categorizedFields.highConfidence);
        if (highConfidenceFields.length === 0) {
            container.innerHTML = '<p style="color: var(--gray-500); text-align: center; padding: 40px;">No high confidence fields found. They will appear as AI processing completes.</p>';
            return;
        }
        
        highConfidenceFields.forEach(fieldName => {
            const field = this.categorizedFields.highConfidence[fieldName];
            const fieldCard = this.createFieldCard(fieldName, field, 'high-confidence');
            container.appendChild(fieldCard);
        });
        
        console.log(`Rendered ${highConfidenceFields.length} high confidence fields`);
    },

    renderDoubleCheckFields() {
        const container = document.getElementById('double-check-fields');
        if (!container) {
            console.error('Double check fields container not found');
            return;
        }
        
        console.log('Rendering double check fields:', this.categorizedFields.doubleCheck);
        container.innerHTML = '';
        
        const doubleCheckFields = Object.keys(this.categorizedFields.doubleCheck);
        if (doubleCheckFields.length === 0) {
            container.innerHTML = '<p style="color: var(--gray-500); text-align: center; padding: 40px;">No double check fields found. They will appear as AI processing completes.</p>';
            return;
        }
        
        doubleCheckFields.forEach(fieldName => {
            const field = this.categorizedFields.doubleCheck[fieldName];
            const fieldCard = this.createFieldCard(fieldName, field, 'double-check');
            container.appendChild(fieldCard);
        });
        
        console.log(`Rendered ${doubleCheckFields.length} double check fields`);
    },

    updateFieldCounts() {
        const highConfidenceCount = Object.keys(this.categorizedFields.highConfidence).length;
        const doubleCheckCount = Object.keys(this.categorizedFields.doubleCheck).length;
        const manualInputCount = Object.keys(this.categorizedFields.manualInput).length;
        const totalCount = highConfidenceCount + doubleCheckCount + manualInputCount;
        
        console.log('Updating field counts:', {
            highConfidence: highConfidenceCount,
            doubleCheck: doubleCheckCount,
            manualInput: manualInputCount,
            total: totalCount
        });
        
        // Update total fields
        const totalFieldsElement = document.getElementById('total-fields');
        if (totalFieldsElement) {
            totalFieldsElement.textContent = totalCount;
        }
        
        // Update summary percentages (avoid division by zero)
        if (totalCount > 0) {
            const summaryElements = {
                'high-confidence-summary': `${highConfidenceCount} (${Math.round(highConfidenceCount/totalCount*100)}%)`,
                'double-check-summary': `${doubleCheckCount} (${Math.round(doubleCheckCount/totalCount*100)}%)`,
                'manual-input-summary': `${manualInputCount} (${Math.round(manualInputCount/totalCount*100)}%)`
            };
            
            Object.keys(summaryElements).forEach(id => {
                const element = document.getElementById(id);
                if (element) {
                    element.textContent = summaryElements[id];
                } else {
                    console.warn(`Summary element with id '${id}' not found`);
                }
            });
        } else {
            ['high-confidence-summary', 'double-check-summary', 'manual-input-summary'].forEach(id => {
                const element = document.getElementById(id);
                if (element) {
                    element.textContent = '0 (0%)';
                }
            });
        }

        // Update section counters and Accept All buttons
        setTimeout(() => {
            this.updateSectionCounters();
            this.updateAcceptAllButtons();
            this.updateDeliveryButton();
        }, 100);
    },

    loadSampleData() {
        console.log('Loading sample data for demonstration...');
        // Sample data that matches the JSON schema structure with properties
        this.jsonData = {
            "type": "object",
            "properties": {
                "record_id": {
                    "anyOf": [
                        {
                            "type": "string"
                        },
                        {
                            "type": "null"
                        }
                    ],
                    "default": null,
                    "description": "Record ID - Unique identifier for the medical record.",
                    "group_id": "group_1",
                    "changes": false,
                    "errors": false,
                    "improvements": false,
                    "comments": "Internal development use. K000s for K-patient (K in N)."
                },
                "p_ga_weeks": {
                    "anyOf": [
                        {
                            "type": "number",
                            "minimum": 22,
                            "maximum": 42
                        },
                        {
                            "type": "null"
                        }
                    ],
                    "default": null,
                    "description": "Weeks of gestation - Gestational age in completed weeks (validation: number, range 22-42)",
                    "group_id": "group_1",
                    "changes": false,
                    "errors": false,
                    "improvements": false,
                    "comments": "Works fine."
                },
                "p_ga_days": {
                    "anyOf": [
                        {
                            "type": "number",
                            "minimum": 0,
                            "maximum": 6
                        },
                        {
                            "type": "null"
                        }
                    ],
                    "default": null,
                    "description": "Days of gestation - Additional days beyond completed weeks (validation: number, range 0-6)",
                    "group_id": "group_1",
                    "changes": false,
                    "errors": false,
                    "improvements": true,
                    "comments": "Works fine. We found an error for patient 2: the documentation is contradictory (entries 31 6/7 and 31 1/7 GW)."
                },
                "p_birth_weight": {
                    "anyOf": [
                        {
                            "type": "number",
                            "minimum": 200,
                            "maximum": 5000
                        },
                        {
                            "type": "null"
                        }
                    ],
                    "default": null,
                    "description": "Birth weight in g - Weight at birth in grams (validation: number, range 200-5000)",
                    "group_id": "group_1",
                    "changes": false,
                    "errors": false,
                    "improvements": false,
                    "comments": "Works correctly."
                },
                "p_sex": {
                    "anyOf": [
                        {
                            "type": "string",
                            "enum": ["1", "2", "9"]
                        },
                        {
                            "type": "null"
                        }
                    ],
                    "default": null,
                    "description": "Patient Sex - Gender assignment at birth. Options: 1=female, 2=male, 9=non-determinable",
                    "group_id": "group_1",
                    "changes": false,
                    "errors": false,
                    "improvements": false,
                    "comments": "Works correctly."
                },
                "m_home_feeding": {
                    "anyOf": [
                        {
                            "type": "string",
                            "enum": ["1", "2", "3", "4"]
                        },
                        {
                            "type": "null"
                        }
                    ],
                    "default": null,
                    "description": "Enteral feeding at discharge - Options: 1=human milk only, 2=formula only, 3=human milk in combination with fortifier or formula, 4=none (only parental feeding). Critical: This field should be analyzed only if the patient was discharged alive.",
                    "group_id": "group_2",
                    "changes": false,
                    "errors": false,
                    "improvements": false,
                    "comments": "Critical: This field should be analyzed only if the patient was discharged alive, as its interpretation is not applicable in other clinical outcomes."
                },
                "m_discharge_stoma": {
                    "anyOf": [
                        {
                            "type": "string",
                            "enum": ["0", "1"]
                        },
                        {
                            "type": "null"
                        }
                    ],
                    "default": null,
                    "description": "Discharge with stoma - Options: 0=No, 1=Yes. Critical: This field should be analyzed only if the patient was discharged alive.",
                    "group_id": "group_2",
                    "changes": false,
                    "errors": true,
                    "improvements": false,
                    "comments": "Validation data for patient 2 says 1=Yes, while we say 0=No. Missing data?"
                },
                "consent_status": {
                    "anyOf": [
                        {
                            "type": "string",
                            "enum": ["1", "2", "3", "4", "5", "6", "7"]
                        },
                        {
                            "type": "null"
                        }
                    ],
                    "default": null,
                    "description": "Informed consent status - Patient consent for research participation. Options: 1=Full consent, 2=Partial consent, 3=Pending, 4=Refused, 5=Emergency, 6=Guardian consent, 7=Retrospective consent",
                    "group_id": "group_4",
                    "changes": false,
                    "errors": false,
                    "improvements": false,
                    "comments": "Requires manual input - administrative data not documented in clinical records."
                },
                "patient_ethnicity": {
                    "anyOf": [
                        {
                            "type": "string",
                            "enum": ["1", "2", "3", "4", "5", "6"]
                        },
                        {
                            "type": "null"
                        }
                    ],
                    "default": null,
                    "description": "Patient ethnicity - Ethnic background classification. Options: 1=European, 2=African, 3=Asian, 4=Hispanic/Latino, 5=Middle Eastern, 6=Mixed/Other",
                    "group_id": "group_4",
                    "changes": false,
                    "errors": false,
                    "improvements": false,
                    "comments": "Manual input required. AI can provide guidance based on extracted nationality information."
                }
            },
            "required": [],
            "additionalProperties": true
        };
        
        console.log('Sample data loaded:', this.jsonData);
        this.categorizeFields();
        this.renderFields();
        this.updateFieldCounts();
    }
});
```

### File: js\stage_manager.js
```javascript
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
```

### File: js\translation.js
```javascript
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
```

### File: js\user_portal.js
```javascript
// User Portal Extension for MediXtractApp
Object.assign(MediXtractApp.prototype, {
    // User Portal Methods
    updateUserPortalInfo() {
        const userNameElement = document.getElementById('userName');
        const userRoleElement = document.getElementById('userRole');
        
        if (userNameElement) {
            userNameElement.textContent = this.userInfo.name;
        }
        if (userRoleElement) {
            userRoleElement.textContent = this.userInfo.role;
        }
        
        this.updateUserPortalStats();
    },

    updateUserPortalStats() {
        // Update statistics in the user portal
        const ongoingElement = document.getElementById('ongoingPatients');
        const completedElement = document.getElementById('completedPatients');
        const fieldsElement = document.getElementById('totalFieldsProcessed');
        
        if (ongoingElement) {
            ongoingElement.textContent = '3'; // Could be dynamic in real app
        }
        if (completedElement) {
            completedElement.textContent = '21'; // Could be dynamic in real app
        }
        if (fieldsElement) {
            fieldsElement.textContent = '156'; // Could be dynamic in real app
        }
    },

    handleSecondaryAction(actionItem) {
        const text = actionItem.querySelector('span').textContent;
        
        switch (text) {
            case 'System Settings':
                this.showNotification('System settings coming soon', 'info');
                break;
            case 'Export Reports':
                this.showNotification('Export functionality coming soon', 'info');
                break;
            case 'Help & Support':
                this.showNotification('Help documentation coming soon', 'info');
                break;
            case 'Sign Out':
                this.handleSignOut();
                break;
            default:
                this.showNotification(`${text} feature coming soon`, 'info');
        }
    }
});
```

### File: js\utils.js
```javascript
// Utility Functions Extension for MediXtractApp
Object.assign(MediXtractApp.prototype, {
    // Utility Functions
    delay(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    },

    formatFileSize(bytes) {
        if (bytes === 0) return '0 Bytes';
        const k = 1024;
        const sizes = ['Bytes', 'KB', 'MB', 'GB'];
        const i = Math.floor(Math.log(bytes) / Math.log(k));
        return parseFloat((bytes / Math.pow(k, i)).toFixed(1)) + ' ' + sizes[i];
    },

    showNotification(message, type = 'info') {
        // Create notification element
        const notification = document.createElement('div');
        notification.className = `notification ${type}`;
        notification.innerHTML = `
            <i class="fas fa-${this.getNotificationIcon(type)}"></i>
            <span>${message}</span>
        `;

        // Add styles
        Object.assign(notification.style, {
            position: 'fixed',
            top: '20px',
            right: '20px',
            background: this.getNotificationColor(type),
            color: 'white',
            padding: '15px 20px',
            borderRadius: 'var(--radius)',
            boxShadow: 'var(--shadow-lg)',
            zIndex: '10000',
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            maxWidth: '400px',
            opacity: '0',
            transform: 'translateX(100%)',
            transition: 'all 0.3s ease'
        });

        document.body.appendChild(notification);

        // Animate in
        setTimeout(() => {
            notification.style.opacity = '1';
            notification.style.transform = 'translateX(0)';
        }, 100);

        // Remove after delay
        setTimeout(() => {
            notification.style.opacity = '0';
            notification.style.transform = 'translateX(100%)';
            setTimeout(() => {
                if (notification.parentNode) {
                    notification.parentNode.removeChild(notification);
                }
            }, 300);
        }, 5000);
    },

    getNotificationIcon(type) {
        const icons = {
            success: 'check-circle',
            warning: 'exclamation-triangle',
            error: 'times-circle',
            info: 'info-circle'
        };
        return icons[type] || icons.info;
    },

    getNotificationColor(type) {
        const colors = {
            success: 'var(--success)',
            warning: 'var(--warning)',
            error: 'var(--danger)',
            info: 'var(--primary)'
        };
        return colors[type] || colors.info;
    },

    hideDeliveryNotification() {
        const deliveryNotification = document.getElementById('deliveryNotification');
        if (deliveryNotification) {
            deliveryNotification.classList.remove('visible');
            deliveryNotification.style.display = 'none';
        }
    },

    showDeliveryNotification() {
        const deliveryNotification = document.getElementById('deliveryNotification');
        if (deliveryNotification) {
            deliveryNotification.style.display = 'block';
            // Add a small delay for the animation to trigger properly
            setTimeout(() => {
                deliveryNotification.classList.add('visible');
            }, 100);
        }
    },

    async handleDelivery() {
        // Handle both old and new delivery buttons
        const deliveryBtn = document.querySelector('.btn-delivery') || document.querySelector('.btn-delivery-fixed');
        if (!deliveryBtn) return;

        // Show delivery process
        const originalText = deliveryBtn.innerHTML;
        deliveryBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Delivering...';
        deliveryBtn.disabled = true;

        try {
            // Simulate delivery process
            await this.delay(2000);
            
            this.showNotification('Patient data delivered successfully!', 'success');
            
            // Hide the delivery notification
            this.hideDeliveryNotification();
            
            // Return to User Portal after delivery
            setTimeout(() => {
                this.currentStage = 2;
                this.showStage(2);
                // Reset field states but don't do full reset until new patient is started
                this.fieldAcceptanceState = {};
                this.updateUserPortalStats(); // Update stats after delivery
            }, 1500);

        } catch (error) {
            this.showNotification('Delivery failed. Please try again.', 'error');
            deliveryBtn.innerHTML = originalText;
            deliveryBtn.disabled = false;
        }
    },

    showPDFReview() {
        const reviewPanel = document.getElementById('pdfReviewPanel');
        const overlay = document.getElementById('pdfOverlay');
        
        if (reviewPanel) {
            // Show overlay first
            if (overlay) {
                overlay.style.display = 'block';
                setTimeout(() => overlay.classList.add('active'), 10);
            }
            
            // Show panel
            reviewPanel.classList.add('active');
            
            // Simulate loading a PDF from the medical documents
            const firstDoc = this.medicalDocuments.length > 0 ? this.medicalDocuments[0].name : 'medical_report.pdf';
            const pdfTitle = reviewPanel.querySelector('.pdf-title');
            if (pdfTitle) {
                pdfTitle.textContent = firstDoc;
            }
            
            // Focus the panel for better keyboard interaction
            reviewPanel.focus();
            
            // Prevent body scrolling when panel is open
            document.body.style.overflow = 'hidden';
        }
    },

    closePDFReview() {
        const reviewPanel = document.getElementById('pdfReviewPanel');
        const overlay = document.getElementById('pdfOverlay');
        
        if (reviewPanel) {
            reviewPanel.classList.remove('active');
            
            // Hide overlay
            if (overlay) {
                overlay.classList.remove('active');
                setTimeout(() => overlay.style.display = 'none', 300);
            }
            
            // Restore body scrolling
            document.body.style.overflow = 'auto';
            
            // Remove focus from panel
            reviewPanel.blur();
        }
    },

    getSectionDisplayName(sectionId) {
        const names = {
            'manual-input': 'Manual Input',
            'high-confidence': 'High Confidence',
            'double-check': 'Double Check'
        };
        return names[sectionId] || sectionId;
    }
});
```

