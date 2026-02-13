# QA Portfolio: Manual & Automation Testing

Project ini dibuat sebagai bagian dari Technical Test QA Internship di **Asian Sigma Technology**. Proyek ini mencakup pengujian manual (HRIS & CRM) serta automasi pada platform OrangeHRM.

## 📁 Dokumentasi Manual
Hasil pengujian manual mencakup 46 Test Case, Bug Report, dan Summary dapat diakses pada link berikut:
👉 [Link Google Sheets Lo di Sini]

## 🤖 Automasi (Playwright)
Framework automasi menggunakan **Playwright** dengan bahasa **TypeScript**.
- **Arsitektur:** Page Object Model (POM)
- **Metode:** Data-Driven Testing (via JSON)
- **Browser:** Chromium (Desktop Chrome)

### Cara Menjalankan Tes:
1. Clone repository:
   ```bash
   git clone [https://github.com/DavaRay13/playwright-ts-orangehrm-automation]

   ```
2. Install dependencies:
   ```bash
   npm install

   ```
3. Jalankan tes:
   ```bash
   npx playwright test