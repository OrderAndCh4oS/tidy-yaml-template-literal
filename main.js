/**
 * Tidies the YAML, removing extra whitespace to the left and extra blank lines.
 *
 * @param {TemplateStringsArray} strings - Template literal strings.
 * @param {...any} values - Template literal values.
 *
 * @returns {string} - The tidied YAML string.
 */
export default function tidyYml(strings, ...values) {
    let output = '';
    for (let i = 0; i < values.length; i++) {
        output += strings[i] + values[i];
    }
    output += strings[values.length];

    if(!output) return '';

    const leadingWhitespaceList = output.match(/^ *(?=\S)/gm)
    let minLength = Infinity;

    for (const leadingWhitespace of leadingWhitespaceList) {
        const length = leadingWhitespace.length;
        if (length < minLength)
            minLength = length;
        if (minLength === 0) break;
    }

    return output
        .split('\n')
        .map(line => line.slice(minLength).trimEnd())
        .join('\n')
        .replace(/\n\n+/g, "\n")
        .trim();
}
