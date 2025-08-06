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