// This class manages a small, fast memory layer
class LRUCache {
    constructor(capacity) {
        this.capacity = capacity; // Maximum items allowed in cache
        this.cache = new Map();   // Map preserves insertion order
    }

    // Retrieve from cache
    get(key) {
        if (!this.cache.has(key)) return null;
        
        // "Refresh" the item: delete and re-insert so it's marked as 'most recent'
        const val = this.cache.get(key);
        this.cache.delete(key);
        this.cache.set(key, val);
        return val;
    }

    // Add to cache
    put(key, value) {
        // If key exists, refresh it
        if (this.cache.has(key)) {
            this.cache.delete(key);
        } else if (this.cache.size >= this.capacity) {
            // If cache is full, delete the 'Least Recently Used' (the first item)
            const oldestKey = this.cache.keys().next().value;
            this.cache.delete(oldestKey);
            console.log(`[Cache] Evicted oldest key: ${oldestKey}`);
        }
        this.cache.set(key, value);
    }
}

module.exports = LRUCache;