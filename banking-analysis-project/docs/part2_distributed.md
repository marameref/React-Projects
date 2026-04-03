# Part 2: Distributed Design for Tunis, Sousse, and Sfax

## 1. Horizontal Fragmentation (Rows)
**Strategy:** Fragment the `Customers` table by **Branch_Location**.
- **Fragment 1:** All customers belonging to the **Tunis** branch.
- **Fragment 2:** All customers belonging to the **Sousse** branch.
- **Fragment 3:** All customers belonging to the **Sfax** branch.
*Benefit: Branch employees only query local data, making the system much faster.*

## 2. Vertical Fragmentation (Columns)
**Strategy:** Separate the `Security_Credentials` from the `Basic_Info`.
- **Table A (General):** ID, Name, Email, Phone.
- **Table B (Secret):** ID, Password_Hash, Secret_PIN, Recovery_Answers.
*Benefit: Increases security by placing sensitive columns on a more restricted server segment.*

## 3. Replication Strategy
- **Replicate Fully:** `Bank_Metadata` and `Branch_Codes`.
- **Why?** These are small files used for routing. Every branch needs to know the codes for other branches to facilitate transfers.
- **Do Not Replicate:** `Transaction_History`. It's too large and grows too fast to copy everywhere.

## 4. Data Allocation
**Decision:** **Static Allocation**.
**Justification:** Transaction history for a "Sousse" account should stay on the "Sousse" server. This makes auditing easier and ensures that legal data residency requirements are met without the complexity of moving data around automatically (Dynamic).