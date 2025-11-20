
const name = "Manuradha";
const age = 21;
const KYC = true;
const arr = ["new", "student", "premium"];
const profile = { id: 101, city: "Lucknow" };
const empty = null;
let pending;

function getType(value) {
  return Array.isArray(value) ? "array" : typeof value;
}

const report = [
  { label: "nameStr", value: nameStr, type: getType(nameStr) },
  { label: "ageNum", value: ageNum, type: getType(ageNum) },
  { label: "hasKYC", value: hasKYC, type: getType(hasKYC) },
  { label: "tagsArr", value: JSON.stringify(tagsArr), type: getType(tagsArr) },
  { label: "profileObj", value: JSON.stringify(profileObj), type: getType(profileObj) },
  { label: "emptyVal", value: emptyVal, type: getType(emptyVal) },
  { label: "pending", value: pending, type: getType(pending) }
];

console.table(report);
