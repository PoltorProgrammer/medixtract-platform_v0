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