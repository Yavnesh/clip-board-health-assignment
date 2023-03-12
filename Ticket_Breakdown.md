# Ticket Breakdown
We are a staffing company whose primary purpose is to book Agents at Shifts posted by Facilities on our platform. We're working on a new feature which will generate reports for our client Facilities containing info on how many hours each Agent worked in a given quarter by summing up every Shift they worked. Currently, this is how the process works:

- Data is saved in the database in the Facilities, Agents, and Shifts tables
- A function `getShiftsByFacility` is called with the Facility's id, returning all Shifts worked that quarter, including some metadata about the Agent assigned to each
- A function `generateReport` is then called with the list of Shifts. It converts them into a PDF which can be submitted by the Facility for compliance.

## You've been asked to work on a ticket. It reads:

**Currently, the id of each Agent on the reports we generate is their internal database id. We'd like to add the ability for Facilities to save their own custom ids for each Agent they work with and use that id when generating reports for them.**


Based on the information given, break this ticket down into 2-5 individual tickets to perform. Provide as much detail for each ticket as you can, including acceptance criteria, time/effort estimates, and implementation details. Feel free to make informed guesses about any unknown details - you can't guess "wrong".


You will be graded on the level of detail in each ticket, the clarity of the execution plan within and between tickets, and the intelligibility of your language. You don't need to be a native English speaker, but please proof-read your work.

## Your Breakdown Here

Ticket 1: Add a custom id field for the Agent in Facility table

Acceptance Criteria:
A new column called "Custom ID" need to be added to the Facility table in the database.
The column is nullable and has length of 50 characters.
Facilities can enter custom ID for Agent with whom they work.
Time and Effort Estimate: 2 hours
How to implement:
Add the migration file to add a new column to the Facility table.
Update Facility model to include "Custom ID" field.
Update Facility creation and edit forms to include "Custom ID" field.
Update getShiftsByFacility function to return custom ID if it exists, or internal ID if it does not.


Ticket 2: Update Shifts table to store Facility's custom ID for Agent

Acceptance Criteria:
A new column called "Custom ID" is added to Shifts table in database.
When a Shift is created, the Agent's custom ID (if available) is stored in "Custom ID" column of Shifts table.
Time/Effort Estimate: 1 hour
How to implement:
Add a migration file to add new column to Shifts table.
Update Shift model to include a "Custom ID" field.
Update Shift creation form to store Agent's custom ID if available, or internal ID if it does not.


Ticket 3: Update generateReport function to use Facility's custom ID for Agent

Acceptance Criteria:
When generating a report, if the Facility has a custom ID for an Agent, it must be used instead of internal ID.
Report includes custom ID column.
Time/Effort Estimate: 4 hours
How to implement:
Update generateReport function to check if Facility has a custom ID for each Agent in Shifts list.
If a custom ID is available, use it instead of the internal ID when generating the report.
Include the custom ID column in the report.


Ticket 4: Add validation to ensure custom ID is unique within Facility

Acceptance Criteria:
When a Facility enters the custom ID for an Agent, the system checks if it's unique within the Facility.
If the custom ID is not unique, an error message is displayed.
Time/Effort Estimate: 3 hours
How to implement:
Add a validation rule to the Facility model to check if the custom ID is unique within the Facility.
Update Facility creation and edit forms to display an error message if the custom ID is not unique.


Ticket 5: Update documentation for Facilities to explain custom ID feature

Acceptance Criteria:
Documentation is updated to explain the custom ID feature for Facilities.
It includes instructions on how to enter custom ID and how will they be used in reports.
Time/Effort Estimate: 2 hours
How to implement:
Update documentation to include a section on the custom ID feature.
Include screenshots of Facility creation and edit forms with new "Custom ID" field.
Include examples of how custom ID will be used in reports.