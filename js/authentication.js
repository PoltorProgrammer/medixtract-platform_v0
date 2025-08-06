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