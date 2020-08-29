
/**
 * @param {Uint8Array} data
 * @returns {string}
 */
export function decode(data) {
    if (typeof Buffer !== "undefined") {
        return Buffer.from(data).toString("utf8");
    }

    // eslint-disable-next-line node/no-unsupported-features/node-builtins
    return new TextDecoder().decode(data);
}

/**
 * @param {string} text
 * @returns {Uint8Array}
 */
export function encode(text) {
    if (typeof Buffer !== "undefined") {
        return Buffer.from(text, "utf8");
    }

    // eslint-disable-next-line node/no-unsupported-features/node-builtins
    return new TextEncoder().encode(text);
}