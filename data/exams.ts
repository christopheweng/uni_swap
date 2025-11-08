// data/exams.ts

export type Exam = {
  university: string;   // 學校
  apply: string;        // 報名
  exam: string;         // 考試或審查方式
  result: string;       // 放榜
  brochure: string;     // 「114簡章 / 115簡章」這類文字
  brochureUrl?: string; // 簡章 PDF 連結（自動帶）
  note?: string;        // 備註
};

// PDF 連結
export const brochure115Map: Record<string, string> = {
  // 成功大學
  成功大學:
    'https://adms-acad.ncku.edu.tw/var/file/44/1044/img/3931/714343466.pdf',

  // 中興大學（寒假轉學甄試）
  中興大學:
    'https://recruit.nchu.edu.tw/college-exam/TS/114/114TS_PAPER.pdf',

  // 屏東大學
  屏東大學:
    'https://admission.nptu.edu.tw/var/file/5/1005/attach/22/pta_173552_1817606_39628.pdf',

  // 台東大學（轉學考資訊網 mirror）
  台東大學:
    'https://transfer.get.com.tw/schedule/pdf/nttu114%E5%AD%B8%E5%A3%AB%E7%8F%AD%E5%AF%92%E5%81%87%E8%BD%89%E5%AD%B8%E6%8B%9B%E7%94%9F%E7%B0%A1%E7%AB%A0.pdf',

  // 世新大學
  世新大學:
    'https://gc.shu.edu.tw/wp-content/uploads/2025/10/114%E6%97%A5%E9%96%93%E5%AD%B8%E5%88%B6%E5%AD%B8%E5%A3%AB%E7%8F%AD%E5%AF%92%E5%81%87%E8%BD%89%E5%AD%B8%E7%94%9F%E6%8B%9B%E7%94%9F%E7%B0%A1%E7%AB%A0.pdf',

  // 東海大學
  東海大學:
    'https://exam2.thu.edu.tw/EXAM/doc/1675723542_public_001.pdf',

  // 慈濟大學
  慈濟大學:
    'https://admissions.tcu.edu.tw/wp-content/uploads/2025/10/114%E5%AD%B8%E5%B9%B4%E5%BA%A6%E3%80%8C%E5%AF%92%E5%81%87%E8%BD%89%E5%AD%B8%E8%80%83%E3%80%8D%E6%8B%9B%E7%94%9F%E7%B0%A1%E7%AB%A0.pdf',

  // 中國醫
  中國醫:
    'https://adm21.cmu.edu.tw/sites/default/files/114%E5%AF%92%E8%BD%89%E7%B0%A1%E7%AB%A0.pdf',

  //台南大學
  台南大學:
    'http://apply2.daso.com.tw:8080/comp/upload/8262.pdf',

  //嘉義大學
  嘉義大學:
    'http://apply2.daso.com.tw:8080/comp/upload/8300.pdf',

  //文化大學
  文化大學:
    'http://apply2.daso.com.tw:8080/comp/upload/8297.pdf',

  //元智大學
  元智大學:
    'http://apply2.daso.com.tw:8080/comp/upload/8298.pdf',
};

// 你原本那張表整理成 rawExams（之後新增或修改資料也改這裡）
type RawExam = {
  university: string;
  apply: string;
  exam: string;
  result: string;
  brochure: string;
  note?: string;
};

const rawExams: RawExam[] = [
  // —— 國立大學 & 師大 ——
  {
    university: '清華大學',
    apply: '12/10-12/16',
    exam: '書審、術科',
    result: '1/16',
    brochure: '114簡章',
    note: '術科：1/13',
  },
  {
    university: '成功大學',
    apply: '11/17-11/24',
    exam: '書審',
    result: '1/12',
    brochure: '115簡章',
  },
  {
    university: '陽明交通大學',
    apply: '12/12-12/18',
    exam: '書審、面試',
    result: '1/24',
    brochure: '114簡章',
    note: '面試：1/13-1/15',
  },
  {
    university: '中山大學',
    apply: '12/4-12/10',
    exam: '書審、面試、筆試',
    result: '1/23',
    brochure: '114簡章',
    note: '面試、筆試：1/13',
  },
  {
    university: '中興大學',
    apply: '11/17-12/1',
    exam: '書審',
    result: '1/6',
    brochure: '115簡章',
  },
  {
    university: '海洋大學',
    apply: '12/2-12/16',
    exam: '書審',
    result: '1/13',
    brochure: '114簡章',
  },
  {
    university: '聯合大學',
    apply: '12/4-12/24',
    exam: '書審',
    result: '1/22',
    brochure: '114簡章',
  },
  {
    university: '暨南大學',
    apply: '12/24-1/8',
    exam: '書審',
    result: '1/22',
    brochure: '114簡章',
  },
  {
    university: '台南大學',
    apply: '11/17-12/15',
    exam: '書審、面試、術科',
    result: '1/21',
    brochure: '115簡章',
    note: '面試、術科：1/12',
  },
  {
    university: '嘉義大學',
    apply: '11/25-12/10',
    exam: '書審',
    result: '1/9',
    brochure: '115簡章',
  },
  {
    university: '高雄大學',
    apply: '12/3-12/17',
    exam: '書審、面試、筆試',
    result: '1/8',
    brochure: '114簡章',
    note: '面試、筆試：12/28',
  },
  {
    university: '台東大學',
    apply: '11/3-12/26',
    exam: '書審、面試、術科',
    result: '1/20',
    brochure: '115簡章',
    note: '面試、術科：1/12',
  },
  {
    university: '屏東大學',
    apply: '11/18-11/28',
    exam: '書審',
    result: '1/5',
    brochure: '115簡章',
  },
  {
    university: '東華大學',
    apply: '12/10-12/24',
    exam: '書審',
    result: '1/14',
    brochure: '114簡章',
  },
  {
    university: '宜蘭大學',
    apply: '12/2-12/19',
    exam: '書審',
    result: '1/14',
    brochure: '114簡章',
  },
  {
    university: '金門大學',
    apply: '12/6-1/3',
    exam: '書審',
    result: '1/23',
    brochure: '114簡章',
  },
  {
    university: '北教大',
    apply: '11/20-12/4',
    exam: '書審、面試',
    result: '2/2',
    brochure: '115簡章',
    note: '面試：1/12',
  },
  {
    university: '中教大',
    apply: '12/4-12/23',
    exam: '書審、面試',
    result: '2/5',
    brochure: '114簡章',
    note: '面試：1/13',
  },
  {
    university: '北市大',
    apply: '12/17-12/23',
    exam: '書審、面試',
    result: '1/20',
    brochure: '114簡章',
    note: '面試：1/11',
  },
  {
    university: '彰師大',
    apply: '12/12-12/26',
    exam: '書審、面試',
    result: '1/23',
    brochure: '114簡章',
    note: '面試：1/13-1/14',
  },
  {
    university: '高師大',
    apply: '11/17-12/11',
    exam: '書審、面試、筆試',
    result: '1/29',
    brochure: '115簡章',
    note: '面試、筆試：1/12-1/13',
  },

  // —— 醫學 & 私立大學 ——
  {
    university: '中山醫',
    apply: '12/12-12/24',
    exam: '1/10',
    result: '1/16',
    brochure: '115簡章',
  },
  {
    university: '中國醫',
    apply: '11/13-11/18',
    exam: '1/11',
    result: '1/28',
    brochure: '115簡章',
  },
  {
    university: '台北醫',
    apply: '12/9-12/16',
    exam: '書審、面試、筆試',
    result: '1/22',
    brochure: '114簡章',
    note: '面試：1/13-1/14、筆試：1/14',
  },
  {
    university: '高雄醫',
    apply: '11/25-12/4',
    exam: '書審、面試',
    result: '1/22',
    brochure: '115簡章',
    note: '面試：1/10',
  },
  {
    university: '東吳大學',
    apply: '12/2-12/16',
    exam: '書審',
    result: '1/13',
    brochure: '114簡章',
  },
  {
    university: '輔仁大學',
    apply: '11/18-11/25',
    exam: '書審',
    result: '1/9',
    brochure: '115簡章',
  },
  {
    university: '淡江大學',
    apply: '12/10-12/20',
    exam: '書審',
    result: '1/16',
    brochure: '114簡章',
  },
  {
    university: '世新大學',
    apply: '11/7-11/24',
    exam: '書審',
    result: '1/9',
    brochure: '115簡章',
  },
  {
    university: '實踐大學',
    apply: '12/6-12/25',
    exam: '書審、術科',
    result: '1/14',
    brochure: '114簡章',
    note: '術科：1/7',
  },
  {
    university: '實踐大學（高雄校區）',
    apply: '12/6-12/25',
    exam: '書審',
    result: '1/14',
    brochure: '114簡章',
    note: '高雄校區',
  },
  {
    university: '銘傳大學',
    apply: '12/13-12/25',
    exam: '書審',
    result: '1/15',
    brochure: '114簡章',
  },
  {
    university: '中原大學',
    apply: '11/25-12/16',
    exam: '書審',
    result: '1/8',
    brochure: '115簡章',
  },
  {
    university: '長庚大學',
    apply: '12/16-12/26',
    exam: '書審',
    result: '1/22',
    brochure: '114簡章',
  },
  {
    university: '文化大學',
    apply: '12/3-12/24',
    exam: '書審',
    result: '1/20',
    brochure: '115簡章',
  },
  {
    university: '真理大學',
    apply: '12/9-12/31',
    exam: '書審',
    result: '1/13',
    brochure: '114簡章',
  },
  {
    university: '東海大學',
    apply: '11/13-12/15',
    exam: '書審',
    result: '1/12',
    brochure: '115簡章',
  },
  {
    university: '開南大學',
    apply: '12/16-1/16',
    exam: '書審',
    result: '1/22',
    brochure: '114簡章',
  },
  {
    university: '逢甲大學',
    apply: '11/18-12/17',
    exam: '書審',
    result: '1/10',
    brochure: '115簡章',
  },
  {
    university: '亞洲大學',
    apply: '12/9-1/2',
    exam: '書審',
    result: '1/14',
    brochure: '114簡章',
  },
  {
    university: '元智大學',
    apply: '12/8-12/29',
    exam: '書審',
    result: '1/16',
    brochure: '115簡章',
  },
  {
    university: '靜宜大學',
    apply: '11/17-12/3',
    exam: '書審',
    result: '1/9',
    brochure: '115簡章',
  },
  {
    university: '大葉大學',
    apply: '12/2-1/14',
    exam: '書審',
    result: '1/23',
    brochure: '114簡章',
  },
  {
    university: '義守大學',
    apply: '12/5-12/30',
    exam: '書審',
    result: '1/13',
    brochure: '114簡章',
  },
  {
    university: '大同大學',
    apply: '12/10-1/20',
    exam: '書審、面試',
    result: '2/7',
    brochure: '114簡章',
    note: '面試：1/23',
  },
  {
    university: '慈濟大學',
    apply: '11/11-11/28',
    exam: '書審、筆試',
    result: '1/9',
    brochure: '115簡章',
    note: '藥學系筆試：12/19',
  },
  {
    university: '佛光大學',
    apply: '11/27-1/7',
    exam: '書審',
    result: '1/22',
    brochure: '115簡章',
  },
  {
    university: '玄奘大學',
    apply: '12/16-1/8',
    exam: '書審',
    result: '1/23',
    brochure: '114簡章',
  },
  {
    university: '中華大學',
    apply: '12/9-1/8',
    exam: '書審',
    result: '1/16',
    brochure: '114簡章',
  },
  {
    university: '嘉藥大學',
    apply: '12/2-12/20',
    exam: '書審、筆試',
    result: '1/17',
    brochure: '114簡章',
    note: '藥學系筆試：1/4',
  },

  // —— 科技大學 & 技術學院 ——
  {
    university: '勤益科技大學',
    apply: '11/11-12/3',
    exam: '書審',
    result: '1/5',
    brochure: '115簡章',
  },
  {
    university: '高雄科技大學',
    apply: '12/12-12/24',
    exam: '書審、面試',
    result: '1/20',
    brochure: '114簡章',
    note: '面試：1/3',
  },
  {
    university: '屏東科技大學',
    apply: '12/1-12/15',
    exam: '書審',
    result: '1/5',
    brochure: '115簡章',
  },
  {
    university: '澎湖科技大學',
    apply: '12/9-12/23',
    exam: '書審',
    result: '1/13',
    brochure: '114簡章',
  },
  {
    university: '德明科技大學',
    apply: '11/10-1/23',
    exam: '書審',
    result: '2/3',
    brochure: '115簡章',
  },
  {
    university: '城市科技大學',
    apply: '12/1-1/19',
    exam: '書審',
    result: '2/6',
    brochure: '114簡章',
  },
  {
    university: '中國科技大學（台北校區）',
    apply: '11/5-1/21',
    exam: '書審',
    result: '1/27',
    brochure: '115簡章',
    note: '台北校區',
  },
  {
    university: '中國科技大學（新竹校區）',
    apply: '11/5-1/21',
    exam: '書審',
    result: '1/27',
    brochure: '115簡章',
    note: '新竹校區',
  },
  {
    university: '景文科技大學',
    apply: '10/29-2/2',
    exam: '書審',
    result: '2/5',
    brochure: '115簡章',
  },
  {
    university: '萬能科技大學',
    apply: '12/2-1/9',
    exam: '書審',
    result: '1/15',
    brochure: '114簡章',
  },
  {
    university: '健行科技大學',
    apply: '11/3-1/26',
    exam: '書審',
    result: '2/2',
    brochure: '115簡章',
  },
  {
    university: '明新科技大學',
    apply: '11/25-12/30',
    exam: '書審',
    result: '1/19',
    brochure: '115簡章',
  },
  {
    university: '元培醫事科大',
    apply: '10/27-1/26',
    exam: '書審',
    result: '1/30',
    brochure: '115簡章',
  },
  {
    university: '嶺東科技大學',
    apply: '12/2-1/13',
    exam: '書審',
    result: '1/20',
    brochure: '114簡章',
  },
  {
    university: '朝陽科技大學',
    apply: '11/24-12/30',
    exam: '書審',
    result: '1/20',
    brochure: '115簡章',
  },
  {
    university: '弘光科技大學',
    apply: '11/26-12/30',
    exam: '書審',
    result: '1/21',
    brochure: '115簡章',
  },
  {
    university: '修平科技大學',
    apply: '12/4-12/20',
    exam: '書審',
    result: '1/6',
    brochure: '114簡章',
  },
  {
    university: '南台科技大學',
    apply: '12/10-1/2',
    exam: '書審',
    result: '1/22',
    brochure: '114簡章',
  },
  {
    university: '崑山科技大學',
    apply: '11/24-12/24',
    exam: '書審',
    result: '1/8',
    brochure: '115簡章',
  },
  {
    university: '樹德科技大學',
    apply: '12/3-1/15',
    exam: '書審、面試',
    result: '1/22',
    brochure: '114簡章',
    note: '面試：1/20',
  },
  {
    university: '台中科技大學',
    apply: '12/4-12/11',
    exam: '書審',
    result: '1/16',
    brochure: '114簡章',
  },
  {
    university: '致理科技大學',
    apply: '10/27-1/26',
    exam: '書審',
    result: '1/29',
    brochure: '115簡章',
  },
  {
    university: '醒吾科技大學',
    apply: '11/24-1/13',
    exam: '書審',
    result: '1/16',
    brochure: '115簡章',
  },
  {
    university: '中臺科技大學',
    apply: '11/19-12/10',
    exam: '書審',
    result: '1/2',
    brochure: '115簡章',
  },
  {
    university: '龍華科技大學',
    apply: '12/13-1/3',
    exam: '書審',
    result: '1/17',
    brochure: '114簡章',
  },
  {
    university: '文藻外語大學',
    apply: '1/1-1/13',
    exam: '書審、面試',
    result: '1/22',
    brochure: '114簡章',
    note: '面試：1/15',
  },
  {
    university: '台南應用科技大學',
    apply: '11/25-1/12',
    exam: '書審、術科',
    result: '1/21',
    brochure: '115簡章',
    note: '僅舞蹈系需視訊考試：1/17',
  },
];

// 這裡自動依 brochure115Map 幫「115簡章」帶入連結
export const exams: Exam[] = rawExams.map((e) => ({
  ...e,
  brochureUrl:
    e.brochure === '115簡章' ? brochure115Map[e.university] ?? undefined : undefined,
}));
