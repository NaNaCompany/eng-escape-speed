# 탈출속도 계산기

천체 중력장을 벗어나는 최소 초기 속력 계산

- Plan ID: E051
- App: https://nanalab.kr/eng-escape-speed/
- Repository: https://github.com/NaNaCompany/eng-escape-speed
- Formula: `v_esc = √(2GM/r)`
- Output: 탈출속도 v_esc

## Model

M,r>0. 천체 바깥의 구대칭 뉴턴 중력장과 시험질량을 가정한다. 거리 r은 고도가 아닌 중심거리다. 대기·자전·다른 천체·추가 추력은 제외한다. 계산 속력이 광속 이상이면 이 모델로 출력하지 않는다.

Inputs are normalized to SI. Only one scalar is returned. Model conditions, finite numbers, physical boundaries, overflow and underflow are checked. External solver APIs and property databases are not used.

## Verification

Run `node --test tests/*.test.mjs` with Node.js 22 or later. Independent 70-digit Decimal example result: `11186.1651973462`. Source and license notices are in [SOURCES.md](SOURCES.md) and [LICENSE](LICENSE).

## Hosting

GitHub Pages uses `main` and `/`, with the NaNaCompany domain inherited. Google GTM, GA4, AdSense, Cloudflare analytics and the gray More Apps link are included. All code, descriptions and graphics are original.

## Static languages

Korean (existing root), English (`en/`), Spanish (`es/`), Simplified Chinese (`zh/`), Japanese (`ja/`) and German (`de/`). Each page has its own canonical URL, reciprocal hreflang, localized metadata, interface, validation messages and preview image. The language links work without JavaScript. Calculation code is shared and no runtime translation API is used.

Edit `localization/*.json` for text, `src/template.html` for the shared page, and run `python scripts/build-locales.py`. Run `python scripts/build-locales.py --check` and `npm test` before publishing. Decimal commas are accepted in Spanish and German; thousands separators are not supported.
