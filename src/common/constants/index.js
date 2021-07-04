import moment from 'moment'

export const searchDelayMillis = 500

export const errors = {
    internalServerError : {status: 500, statusText: 'Something went wrong. Please try again'}
}

export const applicationStatus = [
    { name: 'App Expired', value: { applicationStatus: 'APP_EXPIRED' } },
    { name: 'Load Paid', value: { applicationStatus: 'LOAN_PAID' } }, 
    { name: 'Loan Created', value: { applicationStatus: 'LOAN_CREATED' } },
    { name: 'Document Signed', value: { applicationStatus: 'DOCUMENT_SIGNED' } },
    { name: 'Digital Signature Completed', value: { applicationStatus: 'DIG_SIGN_COM' } },
    { name: 'EKYC Completed', value: { applicationStatus: 'EKYC_COM' } },
    { name: 'Disbursement Account Confirmed', value: { applicationStatus: 'DISB_ACC_CONF' } },
    { name: 'Credit Scoring Approved', value: { applicationStatus: 'CR_SCORE_APR' } },
    { name: 'Credit Scoring Rejected', value: { applicationStatus: 'CR_SCORE_REJ' } },
    { name: 'Credit Scoring Submited', value: { applicationStatus: 'CR_SCORE_SUB' } },
    { name: 'OCR Verification Failed', value: { applicationStatus: 'OCR_VER_FAIL' } },
    { name: 'Contact Info Saved', value: { applicationStatus: 'CON_SAVED' } },
    { name: 'Payroll Data Saved', value: { applicationStatus: 'PAY_SAVED' } },
    { name: 'Personal Data Saved', value: { applicationStatus: 'PER_SAVED' } },
    { name: 'KTP Rejected', value: { applicationStatus: 'KTP_REJECT' } },
    { name: 'KTP Saved', value: { applicationStatus: 'KTP_SAVED' } },
    { name: 'User Rejected', value: { applicationStatus: 'USR_REJECT' } },
]

export const Disbursement = [
    { name: 'SUCCESS', value: { status: 'S' } },
    { name: 'FAILED', value: { status: 'F' } }
]

export const approvalExpiration = [
    { name: 'Approved', value: { status: 'APPROVED' } },
    { name: 'Rejected', value: { status: 'REJECTED' } },
    { name: 'Canceled', value: { status: 'CANCELED' } },
    { name: 'Pending', value: { status: 'PENDING' } },
]

export const ktpVerified = [
    { name: 'Y', value: { ktpVerified: 'Y' } },
    { name: 'N', value: { ktpVerified: 'N' } }
]

export const optionFilter = [
    { name: '=', value:  '=' },
    { name: '>', value:  '>' },
    { name: '<', value:  '<' }
]

export const creditScoringResultOptions = [
    { name: 'Approve', value:  { creditScoringResult : 'APPROVE' } },
    { name: 'Reject', value:  { creditScoringResult: 'REJECT' } }
]

export const dateformat = 'YYYY-MM-DD HH:mm:ss'

export const dates = [
    { name: 'Today', value: { date: 'today', startdate: moment().startOf('day').format(dateformat), enddate: moment().endOf('day').format(dateformat) } },
    { name: 'Yesterday', value: { date: 'yesterday', startdate: moment().subtract(1, 'days').startOf('day').format(dateformat), enddate: moment().subtract(1, 'days').endOf('day').format(dateformat) } },
    { name: 'Last 7 Days', value: { date: 'last7days', startdate: moment().subtract(7, 'days').startOf('day').format(dateformat), enddate: moment().endOf('day').format(dateformat) } },
    { name: 'Last 30 Days', value: { date: 'last30days', startdate: moment().subtract(30, 'days').startOf('day').format(dateformat), enddate: moment().endOf('day').format(dateformat) } },
    { name: 'This Month', value: { date: 'thismonth', startdate: moment().startOf('month').format(dateformat), enddate: moment().endOf('month').format(dateformat) } },
    { name: 'Last Month', value: { date: 'lasthmonth', startdate: moment().subtract(1,'months').startOf('month').format(dateformat), enddate: moment().subtract(1,'months').endOf('month').format(dateformat) } },
    { name: 'This Year', value: { date: 'thisyear', startdate: moment().startOf('year').format(dateformat), enddate: moment().endOf('year').format(dateformat) } },
    { name: 'Last Year', value: { date: 'lastyear', startdate: moment().subtract(1, 'years').startOf('year').format(dateformat), enddate: moment().subtract(1, 'years').endOf('year').format(dateformat) } },
    // { id: 'custom', name: 'Custom' }
]