export const ethereumAddresses = [
  "0xafa57bd80dfef746aaa7bea1e9e024e89ab1056e",
  "0xffaa6990069ecba8570dab82cba2caf6ff77b8fa",
  "0xc7c7b0001efd1cf4fa1369a36f1bcf98fbf8c9ba"
];

export const ethereumBlocks = [
  {
    "address": "0xafa57bd80dfef746aaa7bea1e9e024e89ab1056e",
    "balance": 542,
    "gasUsed": 3051
  },
  {
    "address": "0xffaa6990069ecba8570dab82cba2caf6ff77b8fa",
    "balance": 690,
    "gasUsed": 4665
  },
  {
    "address": "0xc7c7b0001efd1cf4fa1369a36f1bcf98fbf8c9ba",
    "balance": 654,
    "gasUsed": 2232
  }
];

export const mockTransactions = [
  {
  "source":"0xffaa6990069ecba8570dab82cba2caf6ff77b8fa",
  "destination":"0xafa57bd80dfef746aaa7bea1e9e024e89ab1056e",
  "amount":"250",
  "status":"SUCCESS",
  "gasUsed":"21000",
  "receiptHash":"0x1fb62d5f02d350a2e1c00e299649cf973af7469ada664a1fb849643cdf9b63e4",
  "created": "2022-04-07T11:20:30",
  "updated": "2023-12-15T12:20:00"
  },
  {
    "source":"0xafa57bd80dfef746aaa7bea1e9e024e89ab1056e",
    "destination":"0xffaa6990069ecba8570dab82cba2caf6ff77b8fa",
    "amount":"350",
    "status":"SUCCESS",
    "gasUsed":"24000",
    "receiptHash":"0x1fd62d5f02d350a2e1c00e642999cf973af7469ada664a1fb849643cdd9d36a4",
    "created": "2022-08-09T10:20:30",
    "updated": "2024-01-15T11:20:00"
  },
  {
    "source":"0xffaa6990069ecba8570dab82cba2caf6ff77b8fa",
    "destination":"0xc7c7b0001efd1cf4fa1369a36f1bcf98fbf8c9ba",
    "amount":"150",
    "status":"FAILED",
    "gasUsed":"19000",
    "receiptHash":"0x1fb62d5f02d350a2e1c00e299649cf973af7469ada664a1fb849643cdf9b63e4",
    "created": "2022-04-07T11:20:30",
    "updated": "2023-12-15T12:20:00"
  },
  {
    "source":"0xc7c7b0001efd1cf4fa1369a36f1bcf98fbf8c9ba",
    "destination":"0xffaa6990069ecba8570dab82cba2caf6ff77b8fa",
    "amount":"200",
    "status":"SUCCESS",
    "gasUsed":"20000",
    "receiptHash":"0x1fd62d5f02d350a2e1c00e642999cf973af7469ada664a1fb849643cdd9d36a4",
    "created": "2022-08-09T10:20:30",
    "updated": "2024-01-15T11:20:00"
  }
];