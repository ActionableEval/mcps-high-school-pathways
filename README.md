# MCPS High School Pathways

A concise, interactive guide for middle school students and their families entering MCPS high school in 2027–28.

[Open the current site](https://mcps-high-school-pathways.aacom-6349.chatgpt.site/)

## What the guide covers

- Center programs at a student's home school versus another school in the same region.
- Tabbed qualification examples for Science & Engineering, IB, Environmental & Medical programs, and Humanities & CAP.
- A fictional applicant pool, randomized seat illustration, and separate home-school seat allocation.
- Program ranking, application rounds, Round 1 dates, and automatic central review.

All applicant counts and seat allocations are illustrative. The site links directly to official MCPS guidance. It is an independent family guide, not an official MCPS website.

## Preview locally

This is a static website. No build step or package installation is required.

From this folder, run:

```sh
python3 -m http.server 8000
```

Then open `http://localhost:8000` in a browser.

## Files

| File | Purpose |
| --- | --- |
| `index.html` | Page content, comparison table, example charts, and source links |
| `styles.css` | Desktop and mobile layout |
| `app.js` | Program tabs, requirements, student examples, and randomized dot selection |

Program requirements and student examples are in the `programs` object in `app.js`. If changing the default Science & Engineering example, also update its initial markup in `index.html`.

The site can be hosted by any static web host. Google Fonts provides the typefaces; local system fonts serve as fallbacks.

## Source references

- [MCPS regional model overview](https://www.montgomeryschoolsmd.org/curriculum/regional-programs-and-themes/regional-model-overview/)
- [MCPS admissions FAQ](https://docs.google.com/document/d/1eo16IGdb6oKjR-njroOkR_vx9P0mMnPtQcTOT9saBF0/edit)
- [MCPS academic benchmarks](https://docs.google.com/document/d/1MY8_c9_WIpl6S5oMUsnimm8PCFJhRlpitc-E3LMiTF4/edit)
- [MCPS forms, timeline, and program resources](https://www.montgomeryschoolsmd.org/curriculum/regional-programs-and-themes/)

Guidance was checked on October 13, 2026. Review current MCPS sources before updating requirements or dates.
