// data/universityTags.ts
// 輔助標記：以別名集合強化「國立/私立/科技大學」的辨識

const nationalAliases = new Set<string>([
  // 一般大學
  '清華大學',
  '成功大學',
  '陽明交通大學',
  '中山大學',
  '中興大學',
  '海洋大學',
  '聯合大學',
  '暨南大學',
  '台南大學',
  '嘉義大學',
  '高雄大學',
  '台東大學',
  '屏東大學',
  '東華大學',
  '宜蘭大學',
  '金門大學',
  // 師培/教育大學（常見簡稱）
  '北教大', // 國立臺北教育大學
  '國立臺北教育大學',
  '台中教育大學',
  '國立台中教育大學',
  '國立臺中教育大學',
  '彰師大', // 國立彰化師範大學
  '國立彰化師範大學',
  '高師大', // 國立高雄師範大學
  '國立高雄師範大學',
]);

const municipalAliases = new Set<string>([
  '臺北市立大學',
  '台北市立大學',
  '北市大',
]);

// 科技大學常見校名/簡稱（補齊未必含「科技大學/科大」關鍵字者）
const techAliases = new Set<string>([
  '勤益科技大學',
  '高雄科技大學',
  '屏東科技大學',
  '澎湖科技大學',
  '德明科技大學',
  '城市科技大學',
  '中國科技大學',
  '景文科技大學',
  '萬能科技大學',
  '健行科技大學',
  '明新科技大學',
  '元培醫事科大',
  '嶺東科技大學',
  '朝陽科技大學',
  '弘光科技大學',
  '修平科技大學',
  '南台科技大學',
  '崑山科技大學',
  '樹德科技大學',
  '台中科技大學',
  '致理科技大學',
  '醒吾科技大學',
  '中臺科技大學',
  '龍華科技大學',
  '文藻外語大學',
  '台南應用科技大學',
]);

// 私立常見校名/簡稱
const privateAliases = new Set<string>([
  // 醫學與綜合私校（常用簡稱併校名）
  '中山醫', '中山醫學大學',
  '中國醫', '中國醫藥大學',
  '台北醫', '臺北醫學大學', '台北醫學大學',
  '高雄醫', '高雄醫學大學',
  '東吳大學',
  '輔仁大學',
  '淡江大學',
  '世新大學',
  '實踐大學',
  '銘傳大學',
  '中原大學',
  '長庚大學',
  '文化大學', '中國文化大學',
  '真理大學',
  '東海大學',
  '開南大學',
  '逢甲大學',
  '亞洲大學',
  '元智大學',
  '靜宜大學',
  '大葉大學',
  '義守大學',
  '大同大學',
  '慈濟大學',
  '佛光大學',
  '玄奘大學',
  '中華大學',
  '嘉藥大學', '嘉南藥理大學',
]);

export function classifyUniversity(name: string) {
  const n = name.trim();
  const isTech = n.includes('科技大學') || n.endsWith('科大') || techAliases.has(n);
  const isNational = n.includes('國立') || nationalAliases.has(n);
  const isMunicipal = n.includes('市立') || municipalAliases.has(n);
  const isPrivate = privateAliases.has(n) || (!isNational && !isMunicipal); // 明確或其餘視為私立
  return { national: isNational, private: isPrivate, tech: isTech };
}
