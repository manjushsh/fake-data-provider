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

| Parameter | Type     | Description                 |
| :-------- | :------- | :-------------------------- |
| `type`    | `string` | **Optional**. type to fetch |

#### Get data by type and language

```https
  GET /api/:type/:locale
```

Takes Faker key and language to return data as per key and locale. If type not passed, all data will be returned in that locale.

| Parameter | Type     | Description                     |
| :-------- | :------- | :------------------------------ |
| `type`    | `string` | **Optional**. type to fetch     |
| `locale`  | `string` | **Optional**. language to fetch |

#### Get Placeholder Image

```https
  POST /api/placeholder
```

With given body parameters, returns base64 image. Pass JSON parameters in request body.

| Parameter         | Type     | Description                        |
| :---------------- | :------- | :--------------------------------- |
| `text`            | `string` | _Optional_. Text to display        |
| `width`           | `number` | _Optional_. Image width            |
| `height`          | `number` | _Optional_. Image height           |
| `fontSize`        | `string` | _Optional_. Image text size in px  |
| `backgroundColor` | `string` | _Optional_. Image background color |
| `textColor`       | `string` | _Optional_. Image text color       |

Example parameter body:

```json
{
  "text": "Placeholder Text",
  "width": 1920,
  "height": 1080,
  "fontSize": "24px",
  "backgroundColor": "#ACACAC",
  "textColor": "#FEFEFF"
}
```

# How to run locally:

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
