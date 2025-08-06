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