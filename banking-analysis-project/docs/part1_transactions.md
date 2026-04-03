# Part 1: Transaction Management Analysis

## 1. Identified Issue: The "Lost Update"
When two users transfer money from the same account at the same time, a **Lost Update** occurs. 
- **User A** reads Balance ($500).
- **User B** reads Balance ($500).
- **User A** subtracts $100 and saves $400.
- **User B** subtracts $50 and saves $450.
The $100 deduction is "lost" because User B's save operation completely overwrote User A's work.

## 2. Proposed Solution: Exclusive Locking (X-Lock)
I propose using an **Exclusive Lock**. 
- As soon as a transaction starts to "Write" or "Update" an account, the system must lock that row.
- No other transaction can Read or Write to that specific account until the first one is finished (Committed).

## 3. Strategy: Pessimistic Locking
**Decision:** Pessimistic Locking.
**Why?** In banking, data integrity is more important than speed. It is better to make a user wait 0.5 seconds for a lock to clear than to accidentally lose their money due to a collision.

## 4. Execution Schedule (Safe vs Unsafe)
| Step | Transaction 1 (T1) | Transaction 2 (T2) | State |
| :--- | :--- | :--- | :--- |
| 1 | Begin & **Lock** Acc #1 | | SAFE (T1 holds key) |
| 2 | Read Balance ($500) | Begin & **Request Lock** | SAFE (T2 is blocked) |
| 3 | Update ($500 - $100) | Waiting... | SAFE |
| 4 | **Commit & Unlock** | | SAFE |
| 5 | | **Lock** Acc #1 & Read ($400) | SAFE (T2 sees correct updated balance) |