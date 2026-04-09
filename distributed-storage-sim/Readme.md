```markdown
# Distributed Key-Value Storage Simulator

This project is a high-level simulation of a **Distributed Key-Value Storage System**. It demonstrates core architectural principles like **Consistent Hashing**, **LRU Caching**, and **Fault Tolerance**. The system is designed to show how distributed databases scale and manage data across multiple nodes while remaining transparent to the end user.

---

## 🏗 System Architecture

The simulator consists of three primary layers:

1.  **Consistent Hashing Ring:** Dynamically maps data keys to specific server nodes. This ensures that when a node joins or leaves, only a fraction of the keys need to be remapped, providing high scalability.
2.  **LRU Caching Layer:** A "Least Recently Used" cache that sits in front of the storage nodes to reduce latency and network load.
3.  **Virtual Nodes:** Simulated storage units that hold JSON data and can be toggled "online" or "offline" to simulate real-world hardware failures.



---

## 📁 File Structure

```text
distributed-storage-sim/
├── cache.js         # Logic for the Least Recently Used (LRU) Cache
├── storage.js       # Core engine: Consistent Hashing and Node Management
├── package.json     # Project configuration
└── README.md        # Documentation
```

---

## 🚀 Getting Started

### 1. Prerequisites
* **Node.js** installed on your Mac.
* **VS Code** (or any preferred text editor).

### 2. Setup
1. Clone or create the project folder:
   ```bash
   mkdir distributed-storage-sim
   cd distributed-storage-sim
   ```
2. Initialize the project:
   ```bash
   npm init -y
   ```

### 3. Execution
To run the simulation and observe the logs for data distribution, cache hits/misses, and node failures:
```bash
node storage.js
```

---

## 🛠 Features Demonstrated

* **Transparency:** The client interacts with a single interface without needing to know which specific node stores the data.
* **Consistent Hashing:** Uses MD5 hashing to distribute keys evenly across a logical ring of 1,000 positions.
* **Availability Simulation:** Marks nodes as inactive to demonstrate how the system handles localized failures.
* **Cache Eviction:** Automatically removes the oldest data from memory once the cache capacity (3 items) is reached.

---

## 📝 Author & Engineer

**Engr. Amarachi Crystal Omereife** *Software Engineer* This checkpoint project serves as a demonstration of distributed systems logic and backend engineering principles.

---

## 📜 License {GOMYCODE University of Technology X Woolfe College}
This project is for educational purposes as part of a software engineering technical checkpoint.
```