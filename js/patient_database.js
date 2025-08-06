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