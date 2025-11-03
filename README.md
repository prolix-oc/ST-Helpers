# Vector Distance Module

A high-performance JavaScript module for calculating vector distances using pure mathematical implementations. Designed specifically for SillyTavern UI extensions, with no external dependencies.

## Features

- **Three Core Distance Algorithms:**
  - **Jaccard Distance** - Set-based similarity for binary/sparse vectors
  - **Hamming Distance** - Element-wise difference counting
  - **Cosine Similarity/Distance** - Direction-based similarity for continuous vectors

- **Pure JavaScript** - No external packages required
- **Efficient Matrix Operations** - Batch processing and pairwise calculations
- **K-Nearest Neighbors** - Built-in search functionality
- **Utility Functions** - Vector validation, normalization, and more

## Installation

Simply copy `vectorDistance.js` into your project directory.

```javascript
const { Jaccard, Hamming, Cosine, DocumentSearch, Utils } = require('./vectorDistance.js');
```

## Quick Start

### High-Level Document Search API (Recommended)

The simplest way to perform semantic search with automatic scoring and ranking:

```javascript
const { DocumentSearch } = require('./vectorDistance.js');

const docSearch = DocumentSearch.search({
  message: [0.88, 0.74, 0.11, 0.44, 0.15, 0.92, 0.30],  // Query embedding
  documents: [
    {
      documentText: "Machine learning focuses on data-driven algorithms.",
      embeddingArray: [0.85, 0.72, 0.15, 0.42, 0.18, 0.91, 0.33]
    },
    {
      documentText: "The best chocolate chip cookie recipe.",
      embeddingArray: [0.12, 0.08, 0.89, 0.15, 0.76, 0.11, 0.82]
    }
  ],
  algorithm: 'cosine',  // 'cosine', 'jaccard', or 'hamming'
  top_k: 5              // Optional: return only top 5 results
});

// Results are automatically sorted by score (higher = better match)
docSearch.results.forEach(result => {
  console.log(`Score: ${result.score}, Text: ${result.resultText}`);
});
```

### Low-Level APIs

For direct algorithm access:

### Cosine Similarity (Most Common)

```javascript
const vec1 = [1, 2, 3, 4, 5];
const vec2 = [2, 4, 6, 8, 10];

const similarity = Cosine.similarity(vec1, vec2);
// Returns: 1.0 (perfectly aligned, same direction)

const distance = Cosine.distance(vec1, vec2);
// Returns: 0.0 (very similar)
```

### Jaccard Distance (Binary/Sparse Data)

```javascript
const vec1 = [1, 1, 0, 0, 1, 0];
const vec2 = [1, 0, 0, 1, 1, 0];

const similarity = Jaccard.similarity(vec1, vec2);
// Returns: 0.5 (50% overlap)

const distance = Jaccard.distance(vec1, vec2);
// Returns: 0.5
```

### Hamming Distance (Exact Matching)

```javascript
const vec1 = [1, 0, 1, 1, 0, 1, 0, 0];
const vec2 = [1, 0, 0, 1, 1, 1, 0, 1];

const distance = Hamming.distance(vec1, vec2);
// Returns: 3 (three positions differ)

const normalized = Hamming.normalizedDistance(vec1, vec2);
// Returns: 0.375 (3/8 = 37.5%)
```

## API Reference

### DocumentSearch (High-Level API)

#### `DocumentSearch.search(params)`

Performs semantic search with automatic scoring, sorting, and optional top-k filtering.

**Parameters:**
- `params.message` (Array<number>, required): Query embedding vector
- `params.documents` (Array<Object>, required): Array of documents to search
  - `documents[].documentText` (string): The text content of the document
  - `documents[].embeddingArray` (Array<number>): The embedding vector
- `params.algorithm` (string, required): Algorithm to use: `'cosine'`, `'jaccard'`, or `'hamming'`
- `params.top_k` (number, optional): Return only top k results (omit for all results)
- `params.threshold` (number, optional): Threshold for Jaccard binarization (default: 0)
- `params.normalized` (boolean, optional): Use normalized Hamming distance (default: true)
- `params.suppressWarnings` (boolean, optional): Suppress compatibility warnings (default: false)

**Returns:**
```javascript
{
  results: [
    { resultText: string, score: number },
    // ... sorted by score (descending)
  ],
  algorithm: string,
  warning: string | null,
  totalDocuments: number,
  returnedDocuments: number
}
```

**Algorithm Selection Guide:**
- **Cosine**: Use for CONTINUOUS embeddings (neural networks, transformers, word2vec)
  - ✓ Most common for modern semantic search
  - ✓ Best for dense embeddings from ML models
- **Jaccard**: Use for BINARY vectors (0s and 1s only)
  - ✓ Best for set-based comparisons, tags, categories
  - ⚠️ Thresholds continuous values, losing precision
- **Hamming**: Use for BINARY or QUANTIZED discrete vectors
  - ✓ Best for hash codes, binary fingerprints
  - ⚠️ Not suitable for continuous embeddings

**Example:**
```javascript
const results = DocumentSearch.search({
  message: queryEmbedding,
  documents: [
    { documentText: "AI research", embeddingArray: [0.8, 0.6, ...] },
    { documentText: "Cooking tips", embeddingArray: [0.1, 0.2, ...] }
  ],
  algorithm: 'cosine',
  top_k: 10
});

if (results.warning) {
  console.warn(results.warning);
}

results.results.forEach(({ resultText, score }) => {
  console.log(`${score.toFixed(4)}: ${resultText}`);
});
```

### Jaccard Distance

#### `Jaccard.similarity(vecA, vecB, threshold = 0)`
Calculate Jaccard similarity between two vectors.
- **Formula:** |A ∩ B| / |A ∪ B|
- **Returns:** Number between 0 and 1 (higher = more similar)
- **threshold:** Values above threshold are treated as 1, below as 0

#### `Jaccard.distance(vecA, vecB, threshold = 0)`
Calculate Jaccard distance (1 - similarity).
- **Returns:** Number between 0 and 1 (lower = more similar)

#### `Jaccard.pairwiseDistance(matrixA, matrixB, threshold = 0)`
Calculate pairwise distances between two matrices.
- **Returns:** 2D array of distances

#### `Jaccard.kNearest(query, vectors, k, threshold = 0)`
Find k nearest neighbors using Jaccard distance.
- **Returns:** Array of `{index, distance}` objects

### Hamming Distance

#### `Hamming.distance(vecA, vecB, tolerance = 1e-10)`
Count positions where elements differ.
- **Returns:** Integer count of differences
- **tolerance:** Floating-point comparison tolerance

#### `Hamming.normalizedDistance(vecA, vecB, tolerance = 1e-10)`
Hamming distance divided by vector length.
- **Returns:** Number between 0 and 1

#### `Hamming.pairwiseDistance(matrixA, matrixB, normalized = false, tolerance = 1e-10)`
Calculate pairwise Hamming distances.
- **Returns:** 2D array of distances

#### `Hamming.kNearest(query, vectors, k, normalized = false, tolerance = 1e-10)`
Find k nearest neighbors using Hamming distance.
- **Returns:** Array of `{index, distance}` objects

### Cosine Similarity/Distance

#### `Cosine.similarity(vecA, vecB)`
Calculate cosine of angle between vectors.
- **Formula:** (A · B) / (||A|| × ||B||)
- **Returns:** Number between -1 and 1 (1 = same direction, -1 = opposite, 0 = orthogonal)

#### `Cosine.distance(vecA, vecB)`
Calculate cosine distance (1 - similarity).
- **Returns:** Number between 0 and 2 (lower = more similar)

#### `Cosine.angularDistance(vecA, vecB)`
Calculate angle between vectors in radians.
- **Returns:** Number between 0 and π

#### `Cosine.pairwiseDistance(matrixA, matrixB)`
Calculate pairwise cosine distances.
- **Returns:** 2D array of distances

#### `Cosine.pairwiseSimilarity(matrixA, matrixB)`
Calculate pairwise cosine similarities.
- **Returns:** 2D array of similarities

#### `Cosine.kNearest(query, vectors, k)`
Find k nearest neighbors using cosine distance.
- **Returns:** Array of `{index, distance, similarity}` objects

#### `Cosine.batchSimilarity(query, vectors)`
Optimized batch similarity calculation.
- **Returns:** Array of similarity scores

### Utility Functions

#### `Utils.isValidVector(vec)`
Validate that input is a valid 1D array of numbers.
- **Returns:** Boolean

#### `Utils.isValidMatrix(matrix)`
Validate that input is a valid 2D array of numbers.
- **Returns:** Boolean

#### `Utils.normalize(vec)`
Normalize vector to unit length (L2 normalization).
- **Returns:** Normalized vector array

#### `Utils.topK(arr, k, descending = true)`
Find indices of top k values.
- **Returns:** Array of `{index, value}` objects

## Use Cases

### Semantic Search

```javascript
// Find similar documents based on embeddings
const query = [0.85, 0.7, 0.1, 0.4, 0.1];
const documents = [
  [0.8, 0.6, 0.1, 0.3, 0.2],   // Similar
  [0.1, 0.1, 0.9, 0.2, 0.8],   // Different
  [0.75, 0.65, 0.15, 0.35, 0.15]  // Very similar
];

const results = Cosine.kNearest(query, documents, 2);
// Returns top 2 most similar documents
```

### Duplicate Detection

```javascript
// Find near-duplicate items using Hamming distance
const item = [1, 0, 1, 1, 0, 1, 0, 0];
const database = [
  [1, 0, 1, 1, 0, 1, 0, 0],  // Exact match
  [1, 0, 1, 1, 0, 1, 0, 1],  // 1 bit different
  [0, 1, 0, 0, 1, 0, 1, 1]   // Very different
];

const duplicates = Hamming.kNearest(item, database, 2);
// Find 2 nearest matches
```

### Clustering & Similarity Analysis

```javascript
// Compare all vectors to each other
const vectors = [
  [1, 2, 3],
  [2, 4, 6],
  [1, 1, 1]
];

const similarityMatrix = Cosine.pairwiseSimilarity(vectors, vectors);
// Create full similarity matrix for clustering
```

### Binary Feature Matching

```javascript
// Match binary feature vectors (e.g., tags, categories)
const userPrefs = [1, 0, 1, 1, 0];  // Likes: action, sci-fi, not romance
const item1 = [1, 1, 1, 0, 0];      // Action, adventure, sci-fi
const item2 = [0, 1, 0, 0, 1];      // Adventure, romance

const match1 = Jaccard.similarity(userPrefs, item1);  // Higher match
const match2 = Jaccard.similarity(userPrefs, item2);  // Lower match
```

## Algorithm Details

### Jaccard Distance
- **Best for:** Binary/sparse vectors, set comparisons
- **Time Complexity:** O(n) where n is vector length
- **Space Complexity:** O(1)
- **Use when:** Comparing presence/absence of features (tags, categories, binary attributes)

### Hamming Distance
- **Best for:** Binary vectors, exact position matching
- **Time Complexity:** O(n) where n is vector length
- **Space Complexity:** O(1)
- **Use when:** Comparing exact matches at each position (checksums, error detection)

### Cosine Similarity
- **Best for:** Continuous vectors, embeddings, direction comparison
- **Time Complexity:** O(n) where n is vector length
- **Space Complexity:** O(1)
- **Use when:** Comparing semantic meaning, embeddings, or when magnitude doesn't matter
- **Note:** Robust to vector magnitude differences

## Performance Tips

1. **Use batch operations** for multiple comparisons:
   ```javascript
   // Good: Single call for multiple comparisons
   const distances = Cosine.pairwiseDistance(matrixA, matrixB);
   
   // Avoid: Multiple individual calls
   // for (let i = 0; i < matrixA.length; i++) {
   //   for (let j = 0; j < matrixB.length; j++) {
   //     Cosine.distance(matrixA[i], matrixB[j]);
   //   }
   // }
   ```

2. **Pre-normalize vectors** when doing many cosine comparisons:
   ```javascript
   const normalized = Utils.normalize(vector);
   // Use normalized vectors for multiple comparisons
   ```

3. **Choose the right algorithm:**
   - Cosine: Semantic similarity, embeddings
   - Jaccard: Set overlap, sparse binary data
   - Hamming: Exact position matching, checksums

## Mathematical Formulas

### Jaccard Similarity
```
J(A, B) = |A ∩ B| / |A ∪ B|
```

### Hamming Distance
```
H(A, B) = Σ(aᵢ ≠ bᵢ)
```

### Cosine Similarity
```
cos(θ) = (A · B) / (||A|| × ||B||)
where:
  A · B = Σ(aᵢ × bᵢ)
  ||A|| = √Σ(aᵢ²)
```

## Examples

Run the included examples files:

### Low-Level Algorithm Examples
```bash
node examples.js
```

Demonstrates:
- Basic usage of all three algorithms
- K-nearest neighbors search
- Pairwise distance calculations
- Batch operations
- Utility functions
- Practical semantic search example

### High-Level Document Search Examples
```bash
node documentSearchExample.js
```

Demonstrates:
- DocumentSearch API usage with all three algorithms
- Automatic scoring and ranking
- Top-k filtering
- Compatibility warnings
- Error handling
- Binary vs continuous vector handling

## Error Handling

All functions validate input and throw descriptive errors:

```javascript
// Vectors must have equal length
Cosine.similarity([1, 2], [1, 2, 3]);
// Error: Vectors must have equal length

// Validates number types
Utils.isValidVector([1, 2, "three"]);
// Returns: false
```

## Browser Compatibility

Works in all modern JavaScript environments:
- Node.js (all versions)
- Modern browsers (ES6+)
- SillyTavern UI extensions
- Browser extensions

No polyfills or transpilation required for ES6+ environments.

## License

ISC

## Contributing

This module is designed to be dependency-free and self-contained. All algorithms use pure JavaScript and native Math functions only.
