# Task 1: Top 10 Test Scenarios (Ranked by Risk)

1. **REST API Form Persistence & HTTP Status Code Validation**
   - **Risk Level:** Critical
   - **Rationale:** Core submission flow failure prevents core data persistence and breaks downstream processing.

2. **Invalid Input Handling and Error Message Display**
   - **Risk Level:** Critical
   - **Rationale:** If invalid inputs persist or fail silently, bad data pollutes the database without notifying the user.

3. **Data Contract Compliance & Type Validation (FR-05)**
   - **Risk Level:** High
   - **Rationale:** Schema mismatches (e.g., string instead of boolean or missing keys) cause downstream integration/analytics failures.

4. **Timezone & Local Timestamp Formatting (`start_date`, `end_date`)**
   - **Risk Level:** High
   - **Rationale:** Incorrect local timestamp processing leads to audit inaccuracies and incorrect time tracking.

5. **Suggestion Selection & Input Population (UI Flow)**
   - **Risk Level:** High
   - **Rationale:** Primary user interaction method; failure to update the input field directly impacts UX and submission data.

6. **Default Prefix Suggestion Filtering (FR-02)**
   - **Risk Level:** Medium
   - **Rationale:** Core autocomplete functionality; non-matching items appearing degrades user experience.

7. **Configurable Substring Match Filtering (FR-03)**
   - **Risk Level:** Medium
   - **Rationale:** Feature toggle misconfigurations can hide relevant suggestions when backend mode changes.

8. **IETF BCP 47 Locale Parsing (`en-IN` verification)**
   - **Risk Level:** Medium
   - **Rationale:** Incorrect locale values corrupt localized backend processing and analytics reporting.

9. **Keyboard Accessibility & Tab/Enter Navigation**
   - **Risk Level:** Low
   - **Rationale:** Affects accessibility and power users without blocking core GUI mouse interactions.

10. **Escape Key Clear/Close Suggestion Panel**
    - **Risk Level:** Low
    - **Rationale:** Minor UX convenience feature that does not directly impact data submission.
