$srcPath = "C:\Users\thishalini\OneDrive\Desktop\Office (work)\SMART-PVT-LTD - Copy\src"
$files = Get-ChildItem -Path $srcPath -Recurse -Include "*.jsx","*.js","*.css"

$from = @(
  '#16A34A','#4ADE80','#15803D','#166534','#14532D',
  '#F0FDF4','#DCFCE7','#D1FAE5','#86EFAC','#6EE7B7',
  '#0D2818','#071A0F','#052E16',
  '#4A7C59','#5A8A6A','#6B9E7A',
  'green-500','green-400','green-200','green-900','green-100',
  'rgba(22, 163, 74','rgba(22,163,74',
  'rgba(74, 222, 128','rgba(74,222,128',
  'rgba(134, 239, 172','rgba(134,239,172',
  'rgba(5, 46, 22','rgba(5,46,22',
  'rgba(13, 40, 24','rgba(13,40,24',
  'rgba(20, 83, 45','rgba(20,83,45'
)
$to = @(
  '#BE185D','#F472B6','#9D174D','#831843','#500724',
  '#FFF1F7','#FCE7F3','#FBCFE8','#F9A8D4','#F472B6',
  '#3B0A1F','#1F0512','#4A0020',
  '#7C3055','#9D3A6A','#B05A80',
  'pink-600','pink-400','pink-200','pink-900','pink-100',
  'rgba(190, 24, 93','rgba(190,24,93',
  'rgba(244, 114, 182','rgba(244,114,182',
  'rgba(249, 168, 212','rgba(249,168,212',
  'rgba(74, 0, 32','rgba(74,0,32',
  'rgba(59, 10, 31','rgba(59,10,31',
  'rgba(80, 7, 36','rgba(80,7,36'
)

$count = 0
foreach ($file in $files) {
  $content = [System.IO.File]::ReadAllText($file.FullName)
  $original = $content
  for ($i = 0; $i -lt $from.Length; $i++) {
    $content = $content.Replace($from[$i], $to[$i])
  }
  if ($content -ne $original) {
    [System.IO.File]::WriteAllText($file.FullName, $content)
    $count++
  }
}
Write-Output "Updated $count files"
