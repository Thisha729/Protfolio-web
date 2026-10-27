$srcPath = "C:\Users\thishalini\OneDrive\Desktop\Office (work)\SMART-PVT-LTD - Copy\src"
$files = Get-ChildItem -Path $srcPath -Recurse -Include "*.jsx","*.js","*.css"

$from = @(
  '#BE185D','#F472B6','#9D174D','#831843','#500724',
  '#FFF1F7','#FCE7F3','#FBCFE8','#F9A8D4',
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
$to = @(
  '#1D4ED8','#60A5FA','#1E40AF','#1E3A8A','#172554',
  '#EFF6FF','#DBEAFE','#BFDBFE','#93C5FD',
  '#0D1F4A','#06112B','#0A1E3F',
  '#2D4A8A','#3B5FAA','#4A70BB',
  'blue-600','blue-400','blue-200','blue-900','blue-100',
  'rgba(29, 78, 216','rgba(29,78,216',
  'rgba(96, 165, 250','rgba(96,165,250',
  'rgba(147, 197, 253','rgba(147,197,253',
  'rgba(10, 30, 63','rgba(10,30,63',
  'rgba(13, 31, 74','rgba(13,31,74',
  'rgba(23, 37, 84','rgba(23,37,84'
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
