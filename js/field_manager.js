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