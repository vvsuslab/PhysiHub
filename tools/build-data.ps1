# Sinh lại data/*.js từ data/*.json (chạy: pwsh -File tools/build-data.ps1)
$dir = Join-Path $PSScriptRoot '..\data'
$map = @{ terms = 'PH.TERMS'; pairs = 'PH.PAIRS'; content = 'PH.CONTENT'; exams = 'PH.EXAMS' }
foreach ($n in $map.Keys) {
  $f = Join-Path $dir "$n.json"; if (-not (Test-Path $f)) { Write-Host "bỏ qua $n.json (chưa có)"; continue }
  $json = Get-Content -Raw -Encoding UTF8 $f
  $null = $json | ConvertFrom-Json          # kiểm tra cú pháp; lỗi thì dừng
  $js = "// PhysiHub — sinh từ $n.json bằng tools/build-data.ps1. Sửa $n.json rồi chạy lại.`nwindow.PH = window.PH || {};`n$($map[$n]) = $json;`n"
  [IO.File]::WriteAllText((Join-Path $dir "$n.js"), $js, (New-Object Text.UTF8Encoding $false))
  Write-Host "$n.js OK"
}
