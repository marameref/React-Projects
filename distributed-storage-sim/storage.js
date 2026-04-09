const crypto = require('crypto');
const LRUCache = require('./cache');

// Helper: Creates a numeric hash between 0-999 for any string
const getHash = (key) => {
    return crypto.createHash('md5').update(key).digest().readUInt32BE(0) % 1000;
};

class DistributedSystem {
    constructor() {
        this.nodes = new Map();     // Stores Node data
        this.sortedHashes = [];     // Positions of nodes on the 'ring'
        this.cache = new LRUCache(3); // Small cache for performance
    }

    // JOIN: Add a new server node to the system
    addNode(nodeId) {
        const hash = getHash(nodeId);
        this.nodes.set(hash, { id: nodeId, storage: {}, active: true });
        this.sortedHashes.push(hash);
        this.sortedHashes.sort((a, b) => a - b); // Keep the ring sorted
        console.log(`[System] Node ${nodeId} joined at Ring Position: ${hash}`);
    }

    // TRANSPARENCY: Find which node should handle a specific key
    findNode(key) {
        const keyHash = getHash(key);
        // Look for the first node that comes after the key's hash
        for (let nodeHash of this.sortedHashes) {
            if (keyHash <= nodeHash) return this.nodes.get(nodeHash);
        }
        // If we reach the end of the ring, wrap around to the first node
        return this.nodes.get(this.sortedHashes[0]);
    }

    // SAVE: Distributed write operation
    save(key, value) {
        const targetNode = this.findNode(key);
        if (!targetNode || !targetNode.active) {
            console.log(`[Error] System unavailable for ${key}`);
            return;
        }
        targetNode.storage[key] = value;
        this.cache.put(key, value); // Update cache on write
        console.log(`[Storage] Saved ${key} to ${targetNode.id}`);
    }

    // GET: Distributed read operation with Caching
    get(key) {
        // 1. Check Caching Layer
        const cached = this.cache.get(key);
        if (cached) {
            console.log(`[Cache Hit] Returning ${key} from memory`);
            return cached;
        }

        // 2. If not in cache, go to the Node
        const targetNode = this.findNode(key);
        if (targetNode && targetNode.active) {
            console.log(`[Cache Miss] Fetching ${key} from ${targetNode.id}`);
            return targetNode.storage[key];
        }
        return "Data Unreachable (Node Offline)";
    }

    // LEAVE/FAILURE: Simulate a node going offline
    failNode(nodeId) {
        const hash = getHash(nodeId);
        if (this.nodes.has(hash)) {
            this.nodes.get(hash).active = false;
            console.log(`[System] ALERT: ${nodeId} is now OFFLINE`);
        }
    }
}

// --- SIMULATION EXECUTION ---
const system = new DistributedSystem();

// 1. Add Nodes
system.addNode("Server_Alpha");
system.addNode("Server_Beta");
system.addNode("Server_Gamma");

// 2. Data to Store
const users = [
    {id: "user:101", data: {"name": "Alice"}},
    {id: "user:102", data: {"name": "Bob"}},
    {id: "user:103", data: {"name": "Charlie"}},
    {id: "user:104", data: {"name": "Diana"}},
    {id: "user:105", data: {"name": "Eve"}},
    {id: "user:106", data: {"name": "Frank"}}
];

console.log("\n--- STARTING STORAGE OPS ---");
users.forEach(u => system.save(u.id, u.data));

console.log("\n--- TESTING CACHE PERFORMANCE ---");
system.get("user:101"); // Cache Hit (since it was just saved)

console.log("\n--- SIMULATING NODE FAILURE ---");
// Let's assume user:102 is on Server_Beta
system.failNode("Server_Beta");
console.log("Accessing user:102:", system.get("user:102"));