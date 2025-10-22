const fs = require('fs');
const path = require('path');

const gradlePath = path.join(__dirname, 'android', 'build.gradle');
let content = fs.readFileSync(gradlePath, 'utf8');
if (!content.includes('playServicesLocationVersion')) {
  content = content.replace(
    'buildscript {',
    `buildscript {\n  ext { playServicesLocationVersion = "21.0.1" }`
  );
  fs.writeFileSync(gradlePath, content);
}