# Banking System: Concurrency & Distributed Design

## Overview
This project analyzes the architectural requirements for a multi-branch banking system. It focuses on preventing data loss during concurrent transactions and optimizing data layout across three geographical locations.

## How to Navigate
1.  **Concurrency Analysis:** See `docs/part1_transactions.md` for locking strategies.
2.  **Distributed Planning:** See `docs/part2_distributed.md` for fragmentation and replication rules.

## Key Learnings
- **Pessimistic Locking** is mandatory for financial accuracy.
- **Horizontal Fragmentation** improves local performance.
- **Primary Keys** are required to reconstruct vertically fragmented tables.