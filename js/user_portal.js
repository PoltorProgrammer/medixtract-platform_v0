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