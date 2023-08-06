import tidyYml from "../main.js";

describe('tidyYml', () => {
    it('Should tidy the yaml, removing extra whitespace to the left', () => {
        const result = tidyYml`
            person:
              name: John Doe
              age: 30
              is_employee: true
              favorite_numbers:
                - 42
                - 7
              address:
                street: 123 Main St
                city: Exampleville
                country: Exampleland
              contact_details:
                email: john@example.com
                phone: "+1 (555) 123-4567"
              null_value: null
              multiline_string: |
                This is a multiline string
                spanning multiple lines
                in YAML.
              timestamp: 2023-08-06T12:34:56Z
        `
        const expectedOutput = 'person:\n  name: John Doe\n  age: 30\n  is_employee: true\n  favorite_numbers:\n    - 42\n    - 7\n  address:\n    street: 123 Main St\n    city: Exampleville\n    country: Exampleland\n  contact_details:\n    email: john@example.com\n    phone: "+1 (555) 123-4567"\n  null_value: null\n  multiline_string: |\n    This is a multiline string\n    spanning multiple lines\n    in YAML.\n  timestamp: 2023-08-06T12:34:56Z';
        expect(result).toEqual(expectedOutput);
    });

    it('Should remove extra blank lines', () => {
        const result = tidyYml`
        person:
        
        
          name: John Doe
          
          
          age: 30
            
        `
        const expectedOutput = 'person:\n  name: John Doe\n  age: 30';
        expect(result).toEqual(expectedOutput);
    });

    it('Should work with values', () => {
        const result = tidyYml`
            person:
              name: John Doe
              age: ${20 + 20}
              
              contact_details:
                email: john@example.com
                phone: "+${22 + 22} ${22222 - 11111} ${333333 + 333333}"
         
              timestamp: ${(new Date('2023-08-06T16:49:32.880Z')).toISOString()}
        `
        const expectedOutput = 'person:\n' +
            '  name: John Doe\n' +
            '  age: 40\n' +
            '  contact_details:\n' +
            '    email: john@example.com\n' +
            '    phone: "+44 11111 666666"\n' +
            '  timestamp: 2023-08-06T16:49:32.880Z';
        expect(result).toEqual(expectedOutput);
    });

    it('Should handle empty template strings', () => {
        const result = tidyYml``;
        const expectedOutput = '';
        expect(result).toEqual(expectedOutput);
    });

    it('Should handle template strings with only values', () => {
        const result = tidyYml`${'key'}: ${'value'}`;
        const expectedOutput = 'key: value';
        expect(result).toEqual(expectedOutput);
    });

    it('Should handle template strings with indentation and values', () => {
        const name = 'John Doe';
        const age = 30;
        const result = tidyYml`
          person:
            name: ${name}
            age: ${age}
        `;
        const expectedOutput = 'person:\n  name: John Doe\n  age: 30';
        expect(result).toEqual(expectedOutput);
    });
});
