export const tool={
  "id": "E051",
  "slug": "eng-escape-speed",
  "title": "탈출속도 계산기",
  "title_en": "Escape Speed Calculator",
  "category": "우주",
  "category_en": "Space",
  "fields": [
    {
      "key": "m",
      "label": "천체 질량 M",
      "label_en": "Central body mass M",
      "dimension": "mass",
      "example": 5.9722e+24,
      "constraint": "positive",
      "display_unit": "kg",
      "display_value": "5.9722e+24"
    },
    {
      "key": "r",
      "label": "천체 중심부터 거리 r",
      "label_en": "Distance from the body center r",
      "dimension": "length",
      "example": 6371000,
      "constraint": "positive",
      "display_unit": "km",
      "display_value": "6371"
    }
  ],
  "result_label": "탈출속도 v_esc",
  "result_label_en": "Escape speed v_esc",
  "result_dimension": "speed",
  "formula": "v_esc = √(2GM/r)",
  "purpose": "천체 중력장을 벗어나는 최소 초기 속력 계산",
  "purpose_en": "Calculate the minimum initial speed to escape an isolated body.",
  "assumptions": "M,r>0. 천체 바깥의 구대칭 뉴턴 중력장과 시험질량을 가정한다. 거리 r은 고도가 아닌 중심거리다. 대기·자전·다른 천체·추가 추력은 제외한다. 계산 속력이 광속 이상이면 이 모델로 출력하지 않는다.",
  "assumptions_en": "Required: M,r>0 and an exterior spherical Newtonian gravity field. Use center distance, not altitude. Excluded: atmosphere, rotation, other bodies and continued thrust. Results at or above light speed are rejected.",
  "sources": [
    {
      "label": "OpenStax · 13 3 gravitational potential energy and total energy",
      "url": "https://openstax.org/books/university-physics-volume-1/pages/13-3-gravitational-potential-energy-and-total-energy"
    }
  ],
  "condition": "",
  "condition_en": "",
  "site": "https://nanalab.kr/eng-escape-speed/",
  "repository": "https://github.com/NaNaCompany/eng-escape-speed",
  "output_unit": "kms"
};
