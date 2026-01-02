/**
 * Type-safe localStorage utilities with error handling.
 * Handles SSR (server-side rendering) gracefully by checking for window availability.
 * All operations are wrapped in try/catch to handle cases where localStorage
 * is unavailable (e.g., private browsing mode, storage quota exceeded).
 *
 * @example
 * ```ts
 * import { setItem, getItem, removeItem } from "../libs/storage";
 *
 * setItem("user", { name: "John" });
 * const user = getItem<{ name: string }>("user");
 * removeItem("user");
 * ```
 */

/**
 * Checks if localStorage is available in the current environment.
 * @returns true if localStorage is available, false otherwise
 */
function isStorageAvailable(): boolean {
	if (typeof window === "undefined") return false;

	try {
		const testKey = "__storage_test__";
		window.localStorage.setItem(testKey, testKey);
		window.localStorage.removeItem(testKey);
		return true;
	} catch {
		return false;
	}
}

/**
 * Retrieves and parses a value from localStorage.
 * @template T - The expected type of the stored value
 * @param key - The storage key to retrieve
 * @returns The parsed value of type T, or null if not found or on error
 * @example
 * ```ts
 * const user = getItem<{ name: string }>("user");
 * // user is { name: string } | null
 * ```
 */
export function getItem<T>(key: string): T | null {
	if (!isStorageAvailable()) return null;

	try {
		const item = window.localStorage.getItem(key);
		if (item === null) return null;
		return JSON.parse(item) as T;
	} catch {
		return null;
	}
}

/**
 * Serializes and stores a value in localStorage.
 * @template T - The type of the value to store
 * @param key - The storage key
 * @param value - The value to store (will be JSON serialized)
 * @returns true if the operation was successful, false otherwise
 * @example
 * ```ts
 * const success = setItem("user", { name: "John" });
 * if (!success) console.warn("Failed to save user");
 * ```
 */
export function setItem<T>(key: string, value: T): boolean {
	if (!isStorageAvailable()) return false;

	try {
		const serialized = JSON.stringify(value);
		window.localStorage.setItem(key, serialized);
		return true;
	} catch {
		return false;
	}
}

/**
 * Removes an item from localStorage.
 * @param key - The storage key to remove
 * @returns true if the operation was successful, false otherwise
 * @example
 * ```ts
 * removeItem("user");
 * ```
 */
export function removeItem(key: string): boolean {
	if (!isStorageAvailable()) return false;

	try {
		window.localStorage.removeItem(key);
		return true;
	} catch {
		return false;
	}
}

/**
 * Clears all items from localStorage.
 * Use with caution as this removes all stored data.
 * @returns true if the operation was successful, false otherwise
 * @example
 * ```ts
 * clearStorage();
 * ```
 */
export function clearStorage(): boolean {
	if (!isStorageAvailable()) return false;

	try {
		window.localStorage.clear();
		return true;
	} catch {
		return false;
	}
}
