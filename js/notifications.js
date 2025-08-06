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