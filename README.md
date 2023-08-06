# tidyYml

`tidyYml` is a JavaScript utility function that tidies YAML strings by removing extra whitespace to the left and extra blank lines.

## Installation

Install `@orderandchaos/tidy-yml` using npm:

```bash
npm install @orderandchaos/tidy-yml
```

## Usage

Use `tidyYml` as a tagged template literal to tidy your YAML data:

```javascript
import tidyYml from '@orderandchaos/tidy-yml';

const tidiedYaml = tidyYml`
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
`;

console.log(tidiedYaml);
```

## API

`tidyYml(strings: TemplateStringsArray, ...values: any[]): string`

This function takes a template literal containing YAML strings and values, and it returns the tidied YAML string.

## License

MIT License

## Contributing

Contributions are welcome! Feel free to open a GitHub issue or submit a pull request.

---

**Note**: Customize the examples and description based on your project. Replace "Your Name" and "yourusername" with your actual name and GitHub username. Add more usage examples or API details if needed.
