const fs = require('fs');
const path = require('path');
const os = require('os');

const brain = path.join(os.homedir(), '.gemini', 'antigravity', 'brain', '411b7941-0246-454a-82ac-bb0695e9dc91');
const dest = path.join(__dirname, 'public', 'images');

// Copy team photo
const teamSrc = path.join(brain, 'dental_team_1775487189617.png');
if (fs.existsSync(teamSrc)) {
  fs.copyFileSync(teamSrc, path.join(dest, 'team-photo.png'));
  console.log('✅ Copied team photo → public/images/team-photo.png');
} else {
  console.log('❌ Team photo not found at:', teamSrc);
}

// Copy doctor portrait
const docSrc = path.join(brain, 'doctor_portrait_1775486641835.png');
if (fs.existsSync(docSrc)) {
  fs.copyFileSync(docSrc, path.join(dest, 'doctor-portrait.png'));
  console.log('✅ Copied doctor portrait → public/images/doctor-portrait.png');
} else {
  console.log('❌ Doctor portrait not found at:', docSrc);
}

console.log('\nDone! You can delete this file now: del copy-image.js');
