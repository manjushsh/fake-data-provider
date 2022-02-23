# Mock Data Generator
Easy dummy data generation using Faker.js [https://www.npmjs.com/package/faker/v/5.5.3]

## API Reference

#### Get all options

```https
  GET /available-options
```
Returns object of languages and keys available to customize Data response.

#### Get data by type

```https
  GET /api/:type
```
Takes Faker key and returns data as per key. If not passed, all data will be returned.

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `type`    | `string` | **Optional**. type to fetch       |


#### Get data by type and language

```https
  GET /api/:type/:locale
```
Takes Faker key and language to return data as per key and locale. If type not passed, all data will be returned in that locale.

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `type`    | `string` | **Optional**. type to fetch       |
| `locale`  | `string` | **Optional**. language to fetch   |   |

#### add(num1, num2)

Takes two numbers and returns the sum.

# How to run :
- Clone the repository

```bash
git clone https://github.com/manjushsh/fake-data-provider.git
```

- Start Server

```bash
cd fake-data-provider
npm install
npm run watch
```