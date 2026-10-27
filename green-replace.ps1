$srcPath = "C:\Users\thishalini\OneDrive\Desktop\Office (work)\SMART-PVT-LTD - Copy\src"
$files = Get-ChildItem -Path $srcPath -Recurse -Include "*.jsx","*.js"

$from = @('#C026D3','#E879F9','#A21CAF','#86198F','#6B21A8','#FAF0FF','#FDF5FF','#FDF0FF','#2D1040','#1A0F22','#0F0A14','#3D1F52','#4D1F6A','#F0D6FA','#F0E6F6','#F5EAF9','#EDBBFA','#EDCFFB','#D8B4F8','#F5DCFF','#B09EC4','#6B5880','#9B8AAE','#7A5C9A','#1A0A2E','purple-500','purple-400','purple-200','purple-900','purple-100')
$to   = @('#16A34A','#4ADE80','#15803D','#166534','#14532D','#F0FDF4','#F0FDF4','#F0FDF4','#052E16','#0D2818','#071A0F','#14532D','#166534','#D1FAE5','#D1FAE5','#DCFCE7','#86EFAC','#86EFAC','#6EE7B7','#DCFCE7','#86EFAC','#4A7C59','#5A8A6A','#166534','#052E16','green-500','green-400','green-200','green-900','green-100')

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
