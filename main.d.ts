declare module '@orderandchaos/tidy-yml' {
    /**
     * Tidies the YAML, removing extra whitespace to the left and extra blank lines.
     *
     * @param {TemplateStringsArray} strings - Template literal strings.
     * @param {...any} values - Template literal values.
     *
     * @returns {string} - The tidied YAML string.
     */
    export default function tidyYml(
        strings: TemplateStringsArray,
        ...values: any[]
    ): string;
}
