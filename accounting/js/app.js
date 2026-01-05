/**
 * LearnBooks - Educational Accounting Application
 * QuickBooks-style workflow demonstration
 */

// ==========================================
// Sample Data
// ==========================================

const sampleData = {
    invoices: [
        { id: 1001, date: '2024-01-15', customer: 'Acme Corporation', dueDate: '2024-02-14', amount: 2500.00, status: 'paid' },
        { id: 1002, date: '2024-01-18', customer: 'Tech Solutions Inc.', dueDate: '2024-02-17', amount: 4850.00, status: 'overdue' },
        { id: 1003, date: '2024-01-20', customer: 'Global Industries', dueDate: '2024-02-19', amount: 1200.00, status: 'paid' },
        { id: 1004, date: '2024-01-22', customer: 'Smith & Associates', dueDate: '2024-02-21', amount: 3200.00, status: 'unpaid' },
        { id: 1005, date: '2024-01-25', customer: 'Johnson LLC', dueDate: '2024-02-24', amount: 5000.00, status: 'unpaid' },
        { id: 1006, date: '2024-01-28', customer: 'Acme Corporation', dueDate: '2024-02-27', amount: 1850.00, status: 'paid' },
        { id: 1007, date: '2024-02-01', customer: 'Digital Dynamics', dueDate: '2024-03-02', amount: 7500.00, status: 'unpaid' },
        { id: 1008, date: '2024-02-05', customer: 'Peak Performance', dueDate: '2024-03-06', amount: 2100.00, status: 'paid' },
    ],

    expenses: [
        { id: 1, date: '2024-01-05', vendor: 'Office Depot', category: 'Office Supplies', description: 'Printer paper and ink', amount: 234.50, status: 'categorized' },
        { id: 2, date: '2024-01-10', vendor: 'Utility Company', category: 'Utilities', description: 'Monthly electric bill', amount: 485.00, status: 'categorized' },
        { id: 3, date: '2024-01-12', vendor: 'Amazon Business', category: 'Software', description: 'Annual software subscription', amount: 1200.00, status: 'categorized' },
        { id: 4, date: '2024-01-15', vendor: 'Delta Airlines', category: 'Travel', description: 'Flight to NYC for client meeting', amount: 450.00, status: 'categorized' },
        { id: 5, date: '2024-01-18', vendor: 'Marriott Hotels', category: 'Travel', description: 'Hotel stay NYC', amount: 380.00, status: 'categorized' },
        { id: 6, date: '2024-01-20', vendor: 'Unknown Vendor', category: '', description: 'Pending categorization', amount: 125.00, status: 'pending' },
        { id: 7, date: '2024-01-22', vendor: 'Landlord Inc.', category: 'Rent', description: 'Monthly office rent', amount: 3500.00, status: 'categorized' },
        { id: 8, date: '2024-01-25', vendor: 'Insurance Provider', category: 'Insurance', description: 'Business liability insurance', amount: 850.00, status: 'categorized' },
    ],

    chartOfAccounts: [
        { id: 1, name: 'Checking Account', type: 'asset', detailType: 'Bank', balance: 45230.00, bankBalance: 45892.34 },
        { id: 2, name: 'Savings Account', type: 'asset', detailType: 'Bank', balance: 125000.00, bankBalance: 125000.00 },
        { id: 3, name: 'Accounts Receivable', type: 'asset', detailType: 'Accounts Receivable', balance: 16150.00, bankBalance: null },
        { id: 4, name: 'Office Equipment', type: 'asset', detailType: 'Fixed Asset', balance: 15000.00, bankBalance: null },
        { id: 5, name: 'Accumulated Depreciation', type: 'asset', detailType: 'Fixed Asset', balance: -3000.00, bankBalance: null },
        { id: 6, name: 'Accounts Payable', type: 'liability', detailType: 'Accounts Payable', balance: 4500.00, bankBalance: null },
        { id: 7, name: 'Credit Card', type: 'liability', detailType: 'Credit Card', balance: 2340.00, bankBalance: 2540.00 },
        { id: 8, name: 'Sales Tax Payable', type: 'liability', detailType: 'Other Current Liability', balance: 1250.00, bankBalance: null },
        { id: 9, name: 'Owner\'s Equity', type: 'equity', detailType: 'Owner\'s Equity', balance: 150000.00, bankBalance: null },
        { id: 10, name: 'Retained Earnings', type: 'equity', detailType: 'Retained Earnings', balance: 28540.00, bankBalance: null },
        { id: 11, name: 'Sales Revenue', type: 'income', detailType: 'Sales of Product Income', balance: 124500.00, bankBalance: null },
        { id: 12, name: 'Service Revenue', type: 'income', detailType: 'Service/Fee Income', balance: 45000.00, bankBalance: null },
        { id: 13, name: 'Interest Income', type: 'income', detailType: 'Other Income', balance: 250.00, bankBalance: null },
        { id: 14, name: 'Advertising & Marketing', type: 'expense', detailType: 'Advertising/Promotional', balance: 5400.00, bankBalance: null },
        { id: 15, name: 'Office Supplies', type: 'expense', detailType: 'Office/General Administrative', balance: 1850.00, bankBalance: null },
        { id: 16, name: 'Payroll Expenses', type: 'expense', detailType: 'Payroll Expenses', balance: 45000.00, bankBalance: null },
        { id: 17, name: 'Rent Expense', type: 'expense', detailType: 'Rent or Lease', balance: 21000.00, bankBalance: null },
        { id: 18, name: 'Utilities', type: 'expense', detailType: 'Utilities', balance: 3200.00, bankBalance: null },
        { id: 19, name: 'Professional Services', type: 'expense', detailType: 'Legal & Professional Fees', balance: 4500.00, bankBalance: null },
        { id: 20, name: 'Travel & Entertainment', type: 'expense', detailType: 'Travel', balance: 2800.00, bankBalance: null },
    ],

    bankTransactions: [
        { id: 1, date: '2024-02-01', description: 'TRANSFER FROM SAVINGS', amount: 5000.00, type: 'credit', category: '', matched: false },
        { id: 2, date: '2024-02-02', description: 'AMAZON.COM*2K8F34', amount: -89.99, type: 'debit', category: 'Office Supplies', matched: false },
        { id: 3, date: '2024-02-02', description: 'UBER *TRIP', amount: -24.50, type: 'debit', category: 'Travel', matched: false },
        { id: 4, date: '2024-02-03', description: 'PAYMENT RECEIVED - ACME CORP', amount: 2500.00, type: 'credit', category: 'Sales Revenue', matched: false },
        { id: 5, date: '2024-02-03', description: 'DROPBOX.COM', amount: -19.99, type: 'debit', category: 'Software', matched: false },
        { id: 6, date: '2024-02-04', description: 'STARBUCKS #12345', amount: -12.45, type: 'debit', category: 'Meals', matched: false },
        { id: 7, date: '2024-02-04', description: 'GOOGLE *GSUITE', amount: -72.00, type: 'debit', category: 'Software', matched: false },
        { id: 8, date: '2024-02-05', description: 'CHECK #1042', amount: -3500.00, type: 'debit', category: 'Rent', matched: false },
        { id: 9, date: '2024-02-05', description: 'WIRE TRANSFER - JOHNSON LLC', amount: 7500.00, type: 'credit', category: '', matched: false },
        { id: 10, date: '2024-02-06', description: 'UTILITY COMPANY', amount: -245.00, type: 'debit', category: 'Utilities', matched: false },
        { id: 11, date: '2024-02-06', description: 'ZOOM.US', amount: -14.99, type: 'debit', category: 'Software', matched: false },
        { id: 12, date: '2024-02-07', description: 'ATM WITHDRAWAL', amount: -200.00, type: 'debit', category: '', matched: false },
    ],

    customers: [
        { id: 1, name: 'Acme Corporation', email: 'billing@acme.com', balance: 2500.00 },
        { id: 2, name: 'Tech Solutions Inc.', email: 'ap@techsolutions.com', balance: 4850.00 },
        { id: 3, name: 'Global Industries', email: 'accounts@globalind.com', balance: 0 },
        { id: 4, name: 'Smith & Associates', email: 'admin@smithassoc.com', balance: 3200.00 },
        { id: 5, name: 'Johnson LLC', email: 'finance@johnsonllc.com', balance: 5000.00 },
        { id: 6, name: 'Digital Dynamics', email: 'billing@digitald.com', balance: 7500.00 },
        { id: 7, name: 'Peak Performance', email: 'ap@peakperf.com', balance: 0 },
    ],

    vendors: [
        { id: 1, name: 'Office Depot' },
        { id: 2, name: 'Amazon Business' },
        { id: 3, name: 'Utility Company' },
        { id: 4, name: 'Insurance Provider' },
        { id: 5, name: 'Landlord Inc.' },
    ]
};

// Educational content for tooltips
const educationalContent = {
    dashboard: {
        title: 'Dashboard Overview',
        content: 'The dashboard gives you a bird\'s-eye view of your business finances. Key Performance Indicators (KPIs) show income, expenses, and profitability at a glance. Use this to spot trends and identify areas needing attention.'
    },
    invoicing: {
        title: 'Understanding Invoicing',
        content: 'Invoices are formal requests for payment. They create Accounts Receivable (money owed to you). Track payment status: Unpaid, Due Soon, Overdue, or Paid. This is crucial for cash flow management.'
    },
    expenses: {
        title: 'Expense Tracking',
        content: 'Categorizing expenses correctly is essential for accurate financial reporting and tax deductions. Common categories include: Office Supplies, Utilities, Travel, Professional Services, and Rent.'
    },
    banking: {
        title: 'Bank Reconciliation',
        content: 'Reconciliation ensures your records match your bank\'s records. The process: 1) Import transactions, 2) Categorize each one, 3) Match to existing entries, 4) Investigate discrepancies.'
    },
    reports: {
        title: 'Financial Reports',
        content: 'Key reports: Profit & Loss shows revenue minus expenses over time. Balance Sheet shows assets, liabilities, and equity at a point in time. Cash Flow tracks money in and out.'
    },
    accounting: {
        title: 'Chart of Accounts',
        content: 'The Chart of Accounts is your financial filing system. Five main types: Assets (what you own), Liabilities (what you owe), Equity (owner\'s stake), Income (money earned), Expenses (money spent).'
    }
};

// ==========================================
// Application State
// ==========================================

const state = {
    currentPage: 'dashboard',
    invoices: [...sampleData.invoices],
    expenses: [...sampleData.expenses],
    accounts: [...sampleData.chartOfAccounts],
    bankTransactions: [...sampleData.bankTransactions],
};

// ==========================================
// DOM Elements
// ==========================================

const elements = {
    navItems: document.querySelectorAll('.nav-item[data-page]'),
    pages: document.querySelectorAll('.page'),
    menuToggle: document.getElementById('menuToggle'),
    sidebar: document.querySelector('.sidebar'),
    currentPageTitle: document.querySelector('.current-page'),

    // Tables
    invoiceTableBody: document.getElementById('invoiceTableBody'),
    expenseTableBody: document.getElementById('expenseTableBody'),
    coaTableBody: document.getElementById('coaTableBody'),
    bankTransactionsList: document.getElementById('bankTransactionsList'),

    // Modals
    invoiceModal: document.getElementById('invoiceModal'),
    expenseModal: document.getElementById('expenseModal'),
    accountModal: document.getElementById('accountModal'),

    // Buttons
    createInvoiceBtn: document.getElementById('createInvoiceBtn'),
    addExpenseBtn: document.getElementById('addExpenseBtn'),
    addAccountBtn: document.getElementById('addAccountBtn'),

    // Report elements
    reportViewer: document.getElementById('reportViewer'),
    reportContent: document.getElementById('reportContent'),
    backToReports: document.getElementById('backToReports'),

    // Educational tooltip
    eduTooltip: document.getElementById('eduTooltip'),
};

// ==========================================
// Navigation
// ==========================================

function initNavigation() {
    elements.navItems.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            const page = item.dataset.page;
            navigateTo(page);
        });
    });

    // Mobile menu toggle
    if (elements.menuToggle) {
        elements.menuToggle.addEventListener('click', () => {
            elements.sidebar.classList.toggle('open');
        });
    }

    // Close mobile menu when clicking outside
    document.addEventListener('click', (e) => {
        if (window.innerWidth <= 992 &&
            !elements.sidebar.contains(e.target) &&
            !elements.menuToggle.contains(e.target)) {
            elements.sidebar.classList.remove('open');
        }
    });
}

function navigateTo(page) {
    // Update state
    state.currentPage = page;

    // Update nav active state
    elements.navItems.forEach(item => {
        item.classList.toggle('active', item.dataset.page === page);
    });

    // Show correct page
    elements.pages.forEach(p => {
        p.classList.toggle('active', p.id === page);
    });

    // Update breadcrumb
    const pageNames = {
        dashboard: 'Dashboard',
        invoicing: 'Invoices',
        expenses: 'Expenses',
        banking: 'Banking',
        reports: 'Reports',
        accounting: 'Chart of Accounts'
    };
    elements.currentPageTitle.textContent = pageNames[page] || page;

    // Close mobile sidebar
    elements.sidebar.classList.remove('open');

    // Show educational tooltip
    showEducationalTip(page);

    // Hide report viewer when navigating away from reports
    if (page !== 'reports' && elements.reportViewer) {
        elements.reportViewer.style.display = 'none';
        document.querySelector('.report-categories').style.display = 'grid';
    }
}

// ==========================================
// Modal Management
// ==========================================

function initModals() {
    // Close buttons
    document.querySelectorAll('[data-close-modal]').forEach(btn => {
        btn.addEventListener('click', closeAllModals);
    });

    // Close on overlay click
    document.querySelectorAll('.modal-overlay').forEach(overlay => {
        overlay.addEventListener('click', (e) => {
            if (e.target === overlay) {
                closeAllModals();
            }
        });
    });

    // Open modal buttons
    if (elements.createInvoiceBtn) {
        elements.createInvoiceBtn.addEventListener('click', () => openModal('invoiceModal'));
    }
    if (elements.addExpenseBtn) {
        elements.addExpenseBtn.addEventListener('click', () => openModal('expenseModal'));
    }
    if (elements.addAccountBtn) {
        elements.addAccountBtn.addEventListener('click', () => openModal('accountModal'));
    }

    // Escape key closes modals
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') closeAllModals();
    });
}

function openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
}

function closeAllModals() {
    document.querySelectorAll('.modal-overlay').forEach(modal => {
        modal.classList.remove('active');
    });
    document.body.style.overflow = '';
}

// ==========================================
// Invoice Management
// ==========================================

function renderInvoices(filter = 'all') {
    if (!elements.invoiceTableBody) return;

    let filteredInvoices = state.invoices;

    if (filter !== 'all') {
        filteredInvoices = state.invoices.filter(inv => inv.status === filter);
    }

    elements.invoiceTableBody.innerHTML = filteredInvoices.map(invoice => `
        <tr>
            <td><input type="checkbox" class="checkbox"></td>
            <td>${formatDate(invoice.date)}</td>
            <td><a href="#" class="link">#${invoice.id}</a></td>
            <td>${invoice.customer}</td>
            <td>${formatDate(invoice.dueDate)}</td>
            <td>${formatCurrency(invoice.amount)}</td>
            <td><span class="status-badge ${invoice.status}">${invoice.status}</span></td>
            <td>
                <button class="action-btn" title="View"><i class="fas fa-eye"></i></button>
                <button class="action-btn" title="Edit"><i class="fas fa-edit"></i></button>
                <button class="action-btn" title="More"><i class="fas fa-ellipsis-v"></i></button>
            </td>
        </tr>
    `).join('');
}

function initInvoiceTabs() {
    document.querySelectorAll('#invoicing .tab').forEach(tab => {
        tab.addEventListener('click', () => {
            document.querySelectorAll('#invoicing .tab').forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            renderInvoices(tab.dataset.tab);
        });
    });
}

function initInvoiceForm() {
    const addLineBtn = document.getElementById('addLineItem');
    if (addLineBtn) {
        addLineBtn.addEventListener('click', addInvoiceLineItem);
    }

    // Calculate line totals on input change
    document.addEventListener('change', (e) => {
        if (e.target.closest('.line-items-table')) {
            calculateInvoiceTotals();
        }
    });

    // Save invoice
    const saveBtn = document.getElementById('saveInvoice');
    if (saveBtn) {
        saveBtn.addEventListener('click', saveInvoice);
    }
}

function addInvoiceLineItem() {
    const tbody = document.getElementById('lineItemsBody');
    const newRow = document.createElement('tr');
    newRow.className = 'line-item';
    newRow.innerHTML = `
        <td>
            <select class="select-input" name="product">
                <option value="">Select...</option>
                <option value="consulting">Consulting Services</option>
                <option value="design">Design Services</option>
                <option value="development">Development</option>
                <option value="support">Support</option>
            </select>
        </td>
        <td><input type="text" class="text-input" name="description"></td>
        <td><input type="number" class="text-input" name="qty" value="1" min="1"></td>
        <td><input type="number" class="text-input" name="rate" value="0" step="0.01"></td>
        <td class="line-amount">$0.00</td>
        <td>
            <button type="button" class="btn btn-icon btn-delete-line">
                <i class="fas fa-trash"></i>
            </button>
        </td>
    `;
    tbody.appendChild(newRow);

    // Add delete handler
    newRow.querySelector('.btn-delete-line').addEventListener('click', () => {
        newRow.remove();
        calculateInvoiceTotals();
    });
}

function calculateInvoiceTotals() {
    let subtotal = 0;
    document.querySelectorAll('.line-item').forEach(row => {
        const qty = parseFloat(row.querySelector('[name="qty"]').value) || 0;
        const rate = parseFloat(row.querySelector('[name="rate"]').value) || 0;
        const amount = qty * rate;
        row.querySelector('.line-amount').textContent = formatCurrency(amount);
        subtotal += amount;
    });

    const tax = 0; // Could add tax calculation
    const total = subtotal + tax;

    document.getElementById('invoiceSubtotal').textContent = formatCurrency(subtotal);
    document.getElementById('invoiceTax').textContent = formatCurrency(tax);
    document.getElementById('invoiceTotal').textContent = formatCurrency(total);
}

function saveInvoice() {
    // Get form data and create invoice (demo)
    const newInvoice = {
        id: Math.max(...state.invoices.map(i => i.id)) + 1,
        date: new Date().toISOString().split('T')[0],
        customer: 'New Customer',
        dueDate: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
        amount: parseFloat(document.getElementById('invoiceTotal').textContent.replace(/[$,]/g, '')) || 0,
        status: 'unpaid'
    };

    state.invoices.unshift(newInvoice);
    renderInvoices();
    closeAllModals();
    showNotification('Invoice created successfully!', 'success');
}

// ==========================================
// Expense Management
// ==========================================

function renderExpenses() {
    if (!elements.expenseTableBody) return;

    elements.expenseTableBody.innerHTML = state.expenses.map(expense => `
        <tr>
            <td><input type="checkbox" class="checkbox"></td>
            <td>${formatDate(expense.date)}</td>
            <td>${expense.vendor}</td>
            <td>${expense.category || '<span class="status-badge pending">Uncategorized</span>'}</td>
            <td>${expense.description}</td>
            <td>${formatCurrency(expense.amount)}</td>
            <td><span class="status-badge ${expense.status}">${expense.status}</span></td>
            <td>
                <button class="action-btn" title="Edit"><i class="fas fa-edit"></i></button>
                <button class="action-btn" title="Receipt"><i class="fas fa-receipt"></i></button>
                <button class="action-btn" title="More"><i class="fas fa-ellipsis-v"></i></button>
            </td>
        </tr>
    `).join('');
}

function initExpenseForm() {
    const saveBtn = document.getElementById('saveExpense');
    if (saveBtn) {
        saveBtn.addEventListener('click', saveExpense);
    }
}

function saveExpense() {
    const form = document.getElementById('expenseForm');
    const formData = new FormData(form);

    const newExpense = {
        id: Math.max(...state.expenses.map(e => e.id)) + 1,
        date: formData.get('date') || new Date().toISOString().split('T')[0],
        vendor: formData.get('vendor') || 'Unknown',
        category: formData.get('category') || '',
        description: formData.get('description') || '',
        amount: parseFloat(formData.get('amount')) || 0,
        status: formData.get('category') ? 'categorized' : 'pending'
    };

    state.expenses.unshift(newExpense);
    renderExpenses();
    closeAllModals();
    form.reset();
    showNotification('Expense added successfully!', 'success');
}

// ==========================================
// Chart of Accounts
// ==========================================

function renderChartOfAccounts(filter = 'all') {
    if (!elements.coaTableBody) return;

    let filteredAccounts = state.accounts;
    if (filter !== 'all') {
        filteredAccounts = state.accounts.filter(acc => acc.type === filter);
    }

    elements.coaTableBody.innerHTML = filteredAccounts.map(account => `
        <tr>
            <td class="account-name">
                <span>${account.name}</span>
            </td>
            <td><span class="account-type-badge ${account.type}">${capitalizeFirst(account.type)}</span></td>
            <td>${account.detailType}</td>
            <td class="amount">${formatCurrency(account.balance)}</td>
            <td class="amount">${account.bankBalance !== null ? formatCurrency(account.bankBalance) : '-'}</td>
            <td>
                <button class="action-btn" title="View Register"><i class="fas fa-list"></i></button>
                <button class="action-btn" title="Edit"><i class="fas fa-edit"></i></button>
            </td>
        </tr>
    `).join('');
}

function initAccountFilter() {
    const filter = document.getElementById('accountTypeFilter');
    if (filter) {
        filter.addEventListener('change', () => {
            renderChartOfAccounts(filter.value);
        });
    }
}

// ==========================================
// Banking / Reconciliation
// ==========================================

function renderBankTransactions() {
    if (!elements.bankTransactionsList) return;

    const categories = ['', 'Office Supplies', 'Software', 'Utilities', 'Travel', 'Meals', 'Rent', 'Sales Revenue', 'Transfer'];

    elements.bankTransactionsList.innerHTML = state.bankTransactions.map(txn => `
        <div class="bank-transaction-item" data-id="${txn.id}">
            <input type="checkbox" class="transaction-checkbox">
            <div class="transaction-icon">
                <i class="fas ${txn.type === 'credit' ? 'fa-arrow-down' : 'fa-arrow-up'}"></i>
            </div>
            <div class="transaction-info">
                <div class="transaction-name">${txn.description}</div>
                <div class="transaction-date">${formatDate(txn.date)}</div>
            </div>
            <div class="transaction-category">
                <select class="select-input" onchange="categorizeTransaction(${txn.id}, this.value)">
                    ${categories.map(cat => `
                        <option value="${cat}" ${txn.category === cat ? 'selected' : ''}>${cat || 'Select category...'}</option>
                    `).join('')}
                </select>
            </div>
            <div class="transaction-amount ${txn.type}">
                ${txn.type === 'credit' ? '+' : ''}${formatCurrency(Math.abs(txn.amount))}
            </div>
            <div class="transaction-actions">
                <button class="btn btn-primary btn-sm" onclick="matchTransaction(${txn.id})">Match</button>
                <button class="btn btn-outline btn-sm" onclick="excludeTransaction(${txn.id})">Exclude</button>
            </div>
        </div>
    `).join('');
}

// Make functions global for onclick handlers
window.categorizeTransaction = function(id, category) {
    const txn = state.bankTransactions.find(t => t.id === id);
    if (txn) {
        txn.category = category;
        showNotification(`Transaction categorized as ${category}`, 'success');
    }
};

window.matchTransaction = function(id) {
    state.bankTransactions = state.bankTransactions.filter(t => t.id !== id);
    renderBankTransactions();
    showNotification('Transaction matched and recorded', 'success');
};

window.excludeTransaction = function(id) {
    state.bankTransactions = state.bankTransactions.filter(t => t.id !== id);
    renderBankTransactions();
    showNotification('Transaction excluded', 'info');
};

// ==========================================
// Reports
// ==========================================

function initReports() {
    document.querySelectorAll('.report-item').forEach(item => {
        item.addEventListener('click', () => {
            const reportType = item.dataset.report;
            showReport(reportType);
        });
    });

    if (elements.backToReports) {
        elements.backToReports.addEventListener('click', () => {
            elements.reportViewer.style.display = 'none';
            document.querySelector('.report-categories').style.display = 'grid';
        });
    }
}

function showReport(type) {
    const reportCategories = document.querySelector('.report-categories');
    reportCategories.style.display = 'none';
    elements.reportViewer.style.display = 'block';

    let reportHTML = '';

    switch (type) {
        case 'profit-loss':
            reportHTML = generateProfitLossReport();
            break;
        case 'balance-sheet':
            reportHTML = generateBalanceSheetReport();
            break;
        case 'ar-aging':
            reportHTML = generateARAgingReport();
            break;
        case 'expense-by-category':
            reportHTML = generateExpenseByCategoryReport();
            break;
        default:
            reportHTML = `<p>Report "${type}" coming soon...</p>`;
    }

    elements.reportContent.innerHTML = reportHTML;
}

function generateProfitLossReport() {
    const income = state.accounts.filter(a => a.type === 'income');
    const expenses = state.accounts.filter(a => a.type === 'expense');

    const totalIncome = income.reduce((sum, a) => sum + a.balance, 0);
    const totalExpenses = expenses.reduce((sum, a) => sum + a.balance, 0);
    const netIncome = totalIncome - totalExpenses;

    return `
        <div class="report-header" style="text-align: center; margin-bottom: 2rem;">
            <h2>Profit and Loss</h2>
            <p style="color: var(--color-text-muted);">January 1 - December 31, 2024</p>
        </div>
        <table class="report-table">
            <thead>
                <tr>
                    <th>Account</th>
                    <th class="amount">Total</th>
                </tr>
            </thead>
            <tbody>
                <tr class="section-header">
                    <td colspan="2"><strong>Income</strong></td>
                </tr>
                ${income.map(a => `
                    <tr>
                        <td class="indent-1">${a.name}</td>
                        <td class="amount">${formatCurrency(a.balance)}</td>
                    </tr>
                `).join('')}
                <tr class="total-row">
                    <td>Total Income</td>
                    <td class="amount">${formatCurrency(totalIncome)}</td>
                </tr>
                <tr class="section-header">
                    <td colspan="2"><strong>Expenses</strong></td>
                </tr>
                ${expenses.map(a => `
                    <tr>
                        <td class="indent-1">${a.name}</td>
                        <td class="amount">${formatCurrency(a.balance)}</td>
                    </tr>
                `).join('')}
                <tr class="total-row">
                    <td>Total Expenses</td>
                    <td class="amount">${formatCurrency(totalExpenses)}</td>
                </tr>
                <tr class="total-row" style="background: var(--qb-green-light);">
                    <td><strong>Net Income</strong></td>
                    <td class="amount"><strong>${formatCurrency(netIncome)}</strong></td>
                </tr>
            </tbody>
        </table>
    `;
}

function generateBalanceSheetReport() {
    const assets = state.accounts.filter(a => a.type === 'asset');
    const liabilities = state.accounts.filter(a => a.type === 'liability');
    const equity = state.accounts.filter(a => a.type === 'equity');

    const totalAssets = assets.reduce((sum, a) => sum + a.balance, 0);
    const totalLiabilities = liabilities.reduce((sum, a) => sum + a.balance, 0);
    const totalEquity = equity.reduce((sum, a) => sum + a.balance, 0);

    return `
        <div class="report-header" style="text-align: center; margin-bottom: 2rem;">
            <h2>Balance Sheet</h2>
            <p style="color: var(--color-text-muted);">As of December 31, 2024</p>
        </div>
        <table class="report-table">
            <thead>
                <tr>
                    <th>Account</th>
                    <th class="amount">Total</th>
                </tr>
            </thead>
            <tbody>
                <tr class="section-header">
                    <td colspan="2"><strong>Assets</strong></td>
                </tr>
                ${assets.map(a => `
                    <tr>
                        <td class="indent-1">${a.name}</td>
                        <td class="amount">${formatCurrency(a.balance)}</td>
                    </tr>
                `).join('')}
                <tr class="total-row">
                    <td>Total Assets</td>
                    <td class="amount">${formatCurrency(totalAssets)}</td>
                </tr>
                <tr class="section-header">
                    <td colspan="2"><strong>Liabilities</strong></td>
                </tr>
                ${liabilities.map(a => `
                    <tr>
                        <td class="indent-1">${a.name}</td>
                        <td class="amount">${formatCurrency(a.balance)}</td>
                    </tr>
                `).join('')}
                <tr class="total-row">
                    <td>Total Liabilities</td>
                    <td class="amount">${formatCurrency(totalLiabilities)}</td>
                </tr>
                <tr class="section-header">
                    <td colspan="2"><strong>Equity</strong></td>
                </tr>
                ${equity.map(a => `
                    <tr>
                        <td class="indent-1">${a.name}</td>
                        <td class="amount">${formatCurrency(a.balance)}</td>
                    </tr>
                `).join('')}
                <tr class="total-row">
                    <td>Total Equity</td>
                    <td class="amount">${formatCurrency(totalEquity)}</td>
                </tr>
                <tr class="total-row" style="background: var(--qb-blue-light);">
                    <td><strong>Total Liabilities + Equity</strong></td>
                    <td class="amount"><strong>${formatCurrency(totalLiabilities + totalEquity)}</strong></td>
                </tr>
            </tbody>
        </table>
    `;
}

function generateARAgingReport() {
    return `
        <div class="report-header" style="text-align: center; margin-bottom: 2rem;">
            <h2>Accounts Receivable Aging Summary</h2>
            <p style="color: var(--color-text-muted);">As of ${formatDate(new Date().toISOString().split('T')[0])}</p>
        </div>
        <table class="report-table">
            <thead>
                <tr>
                    <th>Customer</th>
                    <th class="amount">Current</th>
                    <th class="amount">1-30 Days</th>
                    <th class="amount">31-60 Days</th>
                    <th class="amount">61-90 Days</th>
                    <th class="amount">Over 90</th>
                    <th class="amount">Total</th>
                </tr>
            </thead>
            <tbody>
                ${sampleData.customers.filter(c => c.balance > 0).map(customer => `
                    <tr>
                        <td>${customer.name}</td>
                        <td class="amount">${formatCurrency(customer.balance * 0.4)}</td>
                        <td class="amount">${formatCurrency(customer.balance * 0.3)}</td>
                        <td class="amount">${formatCurrency(customer.balance * 0.2)}</td>
                        <td class="amount">${formatCurrency(customer.balance * 0.1)}</td>
                        <td class="amount">$0.00</td>
                        <td class="amount"><strong>${formatCurrency(customer.balance)}</strong></td>
                    </tr>
                `).join('')}
                <tr class="total-row">
                    <td><strong>Total</strong></td>
                    <td class="amount"><strong>${formatCurrency(sampleData.customers.reduce((s, c) => s + c.balance, 0) * 0.4)}</strong></td>
                    <td class="amount"><strong>${formatCurrency(sampleData.customers.reduce((s, c) => s + c.balance, 0) * 0.3)}</strong></td>
                    <td class="amount"><strong>${formatCurrency(sampleData.customers.reduce((s, c) => s + c.balance, 0) * 0.2)}</strong></td>
                    <td class="amount"><strong>${formatCurrency(sampleData.customers.reduce((s, c) => s + c.balance, 0) * 0.1)}</strong></td>
                    <td class="amount"><strong>$0.00</strong></td>
                    <td class="amount"><strong>${formatCurrency(sampleData.customers.reduce((s, c) => s + c.balance, 0))}</strong></td>
                </tr>
            </tbody>
        </table>
    `;
}

function generateExpenseByCategoryReport() {
    const categories = {};
    state.expenses.forEach(exp => {
        const cat = exp.category || 'Uncategorized';
        categories[cat] = (categories[cat] || 0) + exp.amount;
    });

    const total = Object.values(categories).reduce((s, v) => s + v, 0);

    return `
        <div class="report-header" style="text-align: center; margin-bottom: 2rem;">
            <h2>Expenses by Category</h2>
            <p style="color: var(--color-text-muted);">January 1 - December 31, 2024</p>
        </div>
        <table class="report-table">
            <thead>
                <tr>
                    <th>Category</th>
                    <th class="amount">Amount</th>
                    <th class="amount">% of Total</th>
                </tr>
            </thead>
            <tbody>
                ${Object.entries(categories).sort((a, b) => b[1] - a[1]).map(([cat, amount]) => `
                    <tr>
                        <td>${cat}</td>
                        <td class="amount">${formatCurrency(amount)}</td>
                        <td class="amount">${((amount / total) * 100).toFixed(1)}%</td>
                    </tr>
                `).join('')}
                <tr class="total-row">
                    <td><strong>Total Expenses</strong></td>
                    <td class="amount"><strong>${formatCurrency(total)}</strong></td>
                    <td class="amount"><strong>100%</strong></td>
                </tr>
            </tbody>
        </table>
    `;
}

// ==========================================
// Charts
// ==========================================

function initCharts() {
    initProfitLossChart();
    initExpenseChart();
}

function initProfitLossChart() {
    const ctx = document.getElementById('profitLossChart');
    if (!ctx) return;

    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            datasets: [
                {
                    label: 'Income',
                    data: [18500, 22000, 19500, 24500, 21000, 26000, 23500, 28000, 25000, 29500, 27000, 31000],
                    backgroundColor: '#2CA01C',
                    borderRadius: 4,
                },
                {
                    label: 'Expenses',
                    data: [12000, 14500, 13000, 15500, 14000, 16500, 15000, 17500, 16000, 18500, 17000, 19000],
                    backgroundColor: '#0077C5',
                    borderRadius: 4,
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'top',
                    align: 'end',
                    labels: {
                        boxWidth: 12,
                        padding: 15
                    }
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    ticks: {
                        callback: value => '$' + (value / 1000) + 'k'
                    },
                    grid: {
                        drawBorder: false
                    }
                },
                x: {
                    grid: {
                        display: false
                    }
                }
            }
        }
    });
}

function initExpenseChart() {
    const ctx = document.getElementById('expenseChart');
    if (!ctx) return;

    new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: ['Payroll', 'Rent', 'Utilities', 'Other'],
            datasets: [{
                data: [45, 25, 15, 15],
                backgroundColor: ['#2CA01C', '#0077C5', '#F5A623', '#8B5CF6'],
                borderWidth: 0,
                cutout: '65%'
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false
                }
            }
        }
    });
}

// ==========================================
// Educational Tooltips
// ==========================================

function showEducationalTip(page) {
    const content = educationalContent[page];
    if (!content || !elements.eduTooltip) return;

    const tooltipContent = elements.eduTooltip.querySelector('.edu-tooltip-content');
    tooltipContent.innerHTML = `<strong>${content.title}</strong><p style="margin-top: 8px;">${content.content}</p>`;

    elements.eduTooltip.classList.add('active');

    // Auto-hide after 10 seconds
    setTimeout(() => {
        elements.eduTooltip.classList.remove('active');
    }, 10000);
}

function initEducationalTooltip() {
    const closeBtn = elements.eduTooltip?.querySelector('.edu-tooltip-close');
    if (closeBtn) {
        closeBtn.addEventListener('click', () => {
            elements.eduTooltip.classList.remove('active');
        });
    }
}

// ==========================================
// Utility Functions
// ==========================================

function formatCurrency(amount) {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
    }).format(amount);
}

function formatDate(dateStr) {
    const date = new Date(dateStr);
    return date.toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric'
    });
}

function capitalizeFirst(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

function showNotification(message, type = 'info') {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <i class="fas ${type === 'success' ? 'fa-check-circle' : type === 'error' ? 'fa-exclamation-circle' : 'fa-info-circle'}"></i>
        <span>${message}</span>
    `;
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 12px 20px;
        background: ${type === 'success' ? '#2CA01C' : type === 'error' ? '#D13B3B' : '#0077C5'};
        color: white;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        display: flex;
        align-items: center;
        gap: 10px;
        z-index: 10000;
        animation: slideIn 0.3s ease;
    `;

    document.body.appendChild(notification);

    // Remove after 3 seconds
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// Add notification animations
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from { transform: translateX(100%); opacity: 0; }
        to { transform: translateX(0); opacity: 1; }
    }
    @keyframes slideOut {
        from { transform: translateX(0); opacity: 1; }
        to { transform: translateX(100%); opacity: 0; }
    }
`;
document.head.appendChild(style);

// ==========================================
// Initialize Application
// ==========================================

function initApp() {
    // Initialize all modules
    initNavigation();
    initModals();
    initInvoiceTabs();
    initInvoiceForm();
    initExpenseForm();
    initAccountFilter();
    initReports();
    initCharts();
    initEducationalTooltip();

    // Render initial data
    renderInvoices();
    renderExpenses();
    renderChartOfAccounts();
    renderBankTransactions();

    // Set default dates in forms
    const today = new Date().toISOString().split('T')[0];
    document.querySelectorAll('input[type="date"]').forEach(input => {
        if (!input.value) input.value = today;
    });

    // Show dashboard educational tip on load
    setTimeout(() => showEducationalTip('dashboard'), 1000);

    console.log('LearnBooks initialized successfully!');
}

// Start the app when DOM is ready
document.addEventListener('DOMContentLoaded', initApp);
