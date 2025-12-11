# Web RPG（GitHub Pages）

Play: https://0118ERIC.github.io/RPG/

## 結構
- docs/  ← GitHub Pages 發佈入口（index.html 在此）
- assets/ ← 圖片、音樂、地圖
- data/   ← 實體資料（對話、物品定義）

## 本機測試
```bash
python3 -m http.server 5500
# 然後開 http://localhost:5500/docs/
```

## 部署
1. 先建立 GitHub 倉庫 `RPG` 於帳號 `0118ERIC`
2. 推送本專案到 main 分支
3. 到 Settings → Pages：Source 選 Deploy from a branch；Branch: main；Folder: docs/
4. 等 1～3 分鐘：網站可於 https://0118ERIC.github.io/RPG/ 访问
