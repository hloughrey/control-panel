<h1 align="center">Control Panel UI</h1>

# Table of Contents

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

- [Getting Started](#getting-started)
  - [Development](#development)
  - [Testing](#testing)
- [Tools](#tools)
- [Things to consider](#things-to-consider)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Getting Started

Requirements:

- node v14.17.x

### Development

```bash
yarn
yarn dev
```

### Testing

```bash
yarn
yarn test

// Coverage report
yarn test --coverage
```

## Tools

| Tool              | Description                      |
| ----------------- | -------------------------------- |
| Prettier          | Consistent code format           |
| Husky             | Git hooks                        |
| LintStaged        | Only lint staged files           |
| Eslint            | Lint Typescript files            |
| Stylelint         | Lint CSS files                   |
| Typescript        | Because why wouldn't you?        |
| Styled Components | Styling                          |
| Jest              | Test runner                      |
| Testing Library   | Render react components for jest |

## Things to consider

- Could make reducer functions a bit nicer by possibly using recursion;
- Although the test coverage is high, that doesn't reflect confidence in all aspects of functionality;
- Check accessibility;
- Check performance;
- Check server side rendering;
