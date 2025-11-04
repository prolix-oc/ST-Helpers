/**
 * ST-Helpers - Utility Modules for SillyTavern UI Extensions
 * Pure JavaScript implementations with no external dependencies
 * 
 * @module st-helpers
 */

// Import all modules
import AsyncUtils from './asyncUtils.js';
import StringUtils from './stringUtils.js';
import DOMUtils from './domUtils.js';
import { StorageManager, createStorage, createSessionStorage } from './storageManager.js';
import {
  LRUCache,
  Queue,
  PriorityQueue,
  CircularBuffer,
  Trie,
  BloomFilter,
  BiMap,
  SetOps
} from './dataStructures.js';
import {
  Jaccard,
  Hamming,
  Cosine,
  DocumentSearch,
  Utils as VectorUtils
} from './vectorDistance.js';

// Export all modules
export {
  // Async utilities
  AsyncUtils,
  
  // String utilities
  StringUtils,
  
  // DOM utilities
  DOMUtils,
  
  // Storage
  StorageManager,
  createStorage,
  createSessionStorage,
  
  // Data structures
  LRUCache,
  Queue,
  PriorityQueue,
  CircularBuffer,
  Trie,
  BloomFilter,
  BiMap,
  SetOps,
  
  // Vector distance
  Jaccard,
  Hamming,
  Cosine,
  DocumentSearch,
  VectorUtils
};

// Default export with all utilities
export default {
  AsyncUtils,
  StringUtils,
  DOMUtils,
  StorageManager,
  createStorage,
  createSessionStorage,
  LRUCache,
  Queue,
  PriorityQueue,
  CircularBuffer,
  Trie,
  BloomFilter,
  BiMap,
  SetOps,
  Jaccard,
  Hamming,
  Cosine,
  DocumentSearch,
  VectorUtils
};
