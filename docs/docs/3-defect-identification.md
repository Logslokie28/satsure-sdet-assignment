# Task 2: Discrepancy Analysis (FR-05 Data Contract)

| Field Name | Expected (FR-05) | Received API Payload | Discrepancy Found |
| :--- | :--- | :--- | :--- |
| **Account ID** | Key: `account_id` | Key: `"account id"` | Invalid JSON key (contains space instead of underscore). |
| **Account Email** | Key: `account_email` | Key: `"account_email"` | Matches key name. |
| **Start Date** | Key: `start_date` (Local time ISO string) | Key: `"start date"`, Value: `"2024-03-15T10:30:00Z"` | Key name has a space instead of underscore. Value uses UTC (`Z`) instead of IST local offset (`+05:30`). |
| **End Date** | Key: `end_date` (Local time ISO string) | Key: `"end date"`, Value: `"2024-03-15T10:32:00Z"` | Key name has a space instead of underscore. Value uses UTC (`Z`) instead of IST local offset (`+05:30`). |
| **Locale** | Key: `locale` (IETF BCP 47 format, e.g., `en-IN`) | Key: `"locale"`, Value: `"en"` | Value is incomplete; missing region tag (`en-IN`) for India user context. |
| **Text** | Key: `text` | Key: `"text"` | Matches expectation. |
| **Suggestion List** | Key: `suggestion_list` | Key: `"suggestion_list"`, Value: `"agile methodology, agile methodology process, agile methodology process testing"` | Trailing comma in payload creates invalid JSON syntax. |
| **Completed Status** | Key: `completed` (Boolean: `true`) | Key: `"completed"`, Value: `"true"` | Data type mismatch: returned string `"true"` instead of boolean `true`. |
