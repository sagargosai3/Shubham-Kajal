Add-Type -AssemblyName System.Drawing

$srcPath = "b:\shubham\Spotify-Indian-Wedding-Invitation\photos\WhatsApp Image 2026-10-25 at 3.42.57 PM.jpeg"
$destPath = "b:\shubham\Spotify-Indian-Wedding-Invitation\public\og-image.jpeg"
$destPreview = "b:\shubham\Spotify-Indian-Wedding-Invitation\public\preview.jpeg"

$img = [System.Drawing.Bitmap]::FromFile($srcPath)
Write-Output "Source dimensions: $($img.Width) x $($img.Height)"

# Save with 78% quality to ensure strictly < 300KB (e.g. 200-260KB)
$codec = [System.Drawing.Imaging.ImageCodecInfo]::GetImageEncoders() | Where-Object { $_.MimeType -eq 'image/jpeg' }
$encoderParams = New-Object System.Drawing.Imaging.EncoderParameters(1)
$encoderParams.Param[0] = New-Object System.Drawing.Imaging.EncoderParameter([System.Drawing.Imaging.Encoder]::Quality, [long]78)

$img.Save($destPath, $codec, $encoderParams)
$img.Save($destPreview, $codec, $encoderParams)
$img.Dispose()

$len = (Get-Item $destPath).Length
Write-Output "Generated og-image.jpeg: $len bytes"
