"""Generate glossary-data.json from Fertility Snippets Excel."""
import json
import re
from pathlib import Path

import pandas as pd

ROOT = Path(__file__).resolve().parents[1]
EXCEL_DEFAULT = Path.home() / "Downloads" / "Fertility Snippets - Social Media Engagement.xlsx"
OUT_PATH = ROOT / "src/sections/resources/fertilityGlossary/glossary-data.json"

GROUPS = [
    {"id": "a-d", "label": "A - D", "start": "A", "end": "D"},
    {"id": "e-h", "label": "E - H", "start": "E", "end": "H"},
    {"id": "i-m", "label": "I - M", "start": "I", "end": "M"},
    {"id": "n-p", "label": "N - P", "start": "N", "end": "P"},
    {"id": "r-z", "label": "R - Z", "start": "R", "end": "Z"},
]


def first_letter(term: str) -> str:
    match = re.search(r"[A-Za-z]", term)
    return match.group(0).upper() if match else "Z"


def parse_sheet_fertility(path: Path) -> tuple[list[dict], str]:
    df = pd.read_excel(path, sheet_name="Fertility Snippets")
    entries = [{"term": df.columns[0], "definition": str(df.columns[1])}]
    source_url = "https://www.icmartivf.org/glossary/"

    for _, row in df.iterrows():
        term = str(row.iloc[0]).strip() if pd.notna(row.iloc[0]) else ""
        definition = str(row.iloc[1]).strip() if pd.notna(row.iloc[1]) else ""
        if term.startswith("http"):
            source_url = term
            continue
        if term:
            entries.append({"term": term, "definition": definition})

    return entries, source_url


def parse_sheet_additional(path: Path, source_url: str) -> tuple[list[dict], str]:
    df = pd.read_excel(path, sheet_name="Additional Snippets")
    entries = [{"term": df.columns[0], "definition": ""}]

    for _, row in df.iterrows():
        term = str(row.iloc[0]).strip() if pd.notna(row.iloc[0]) else ""
        definition = (
            str(row.iloc[1]).strip()
            if pd.notna(row.iloc[1]) and str(row.iloc[1]) != "nan"
            else ""
        )
        if term.startswith("http"):
            source_url = term
            continue
        if term:
            entries.append({"term": term, "definition": definition})

    return entries, source_url


def main(excel_path: Path = EXCEL_DEFAULT) -> None:
    fertility_entries, source_url = parse_sheet_fertility(excel_path)
    additional_entries, source_url = parse_sheet_additional(excel_path, source_url)

    seen: set[str] = set()
    unique: list[dict] = []
    for entry in fertility_entries + additional_entries:
        key = entry["term"].lower()
        if key in seen:
            continue
        seen.add(key)
        entry["letter"] = first_letter(entry["term"])
        unique.append(entry)

    OUT_PATH.parent.mkdir(parents=True, exist_ok=True)
    payload = {
        "sourceUrl": source_url,
        "groups": GROUPS,
        "entries": unique,
    }
    OUT_PATH.write_text(json.dumps(payload, ensure_ascii=False, indent=2), encoding="utf-8")
    print(f"Wrote {len(unique)} entries to {OUT_PATH}")
    print(f"Source: {source_url}")


if __name__ == "__main__":
    main()
