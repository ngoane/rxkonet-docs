---
sidebar_position: 2
---

# ✉️ SMS Templates

Learn how to **create and manage reusable SMS message templates** for communicating with clients. RxKonet supports two types of templates:

- **Tenant Templates** – Specific to a single branch/pharmacy.
- **Global Templates** – Available across multiple branches managed by an organization admin.

---

<iframe src="https://www.loom.com/embed/c7bc0d872e2c406696b14018782f5b6b?sid=e17ade4d-e9b0-4757-82f2-f23ea8f4d26d"
width="100%" height="600" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>

---

## 🧾 Tenant Templates

Tenant templates are only accessible within the **specific pharmacy branch** where they were created.

### 🔍 View Templates

- Navigate to **Communications > Templates > View Templates**.
- Use the **search bar** to find templates by name or subject.
- Template details include:
  - **Name**
  - **Subject**
  - **Pharmacy**
  - **Actions** (View, Edit, Delete)

---

### ➕ Create a Tenant Template

1️⃣ Go to **Communications > Templates > Create Template**  
2️⃣ Fill in:

- **Template Name**
- **Subject**
- **Message Body** (max 160 characters)  
  3️⃣ Use available placeholders:
- `{{firstName}}`, `{{lastName}}`, `{{phone}}`, `{{email}}`
- `{{pharmacyName}}`, `{{pharmacyPhone}}`  
  4️⃣ Click **Create Template** to save.

📌 **Example Output**:  
`Hello {{firstName}}, your prescription is ready for pickup at {{pharmacyName}}.`

---

## 🌍 Global Templates

Global templates are **shared across multiple pharmacies** managed under the same admin account.

### 🔍 View Global Templates

- Navigate to **Communications > Templates > View Global Templates**
- Use filters to search templates by name or category.
- Each template shows:
  - **Name**
  - **Category**
  - **Description**

---

### ➕ Create a Global Template

1️⃣ Go to **Communications > Templates > Create Global Template**  
2️⃣ Enter:

- **Template Name**
- **Category**
- **Description**
- **Subject**
- **Message Body** (max 160 characters)  
  3️⃣ Use placeholders (same as tenant templates)  
  4️⃣ Click **Create Template**

🔹 These templates can be imported and reused across branches.

---

## ✅ Best Practices

- Keep messages under **160 characters** for SMS delivery.
- Use **placeholders** to personalize communication.
- Use **tenant templates** for branch-specific messages.
- Use **global templates** to ensure messaging consistency across multiple pharmacies.

---
