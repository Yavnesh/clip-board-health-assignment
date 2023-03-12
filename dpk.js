const crypto = require("crypto");

exports.deterministicPartitionKey = (event) => {
  const TRIVIAL_PARTITION_KEY = "0";
  const MAX_PARTITION_KEY_LENGTH = 256;

  const candidate = event && event.partitionKey ? event.partitionKey : crypto.createHash("sha3-512").update(JSON.stringify(event) || "").digest("hex");
  const key = typeof candidate === "string" ? candidate : JSON.stringify(candidate);

  return key.length > MAX_PARTITION_KEY_LENGTH ? crypto.createHash("sha3-512").update(key).digest("hex") : key || TRIVIAL_PARTITION_KEY;
};