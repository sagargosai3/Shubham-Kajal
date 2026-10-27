Add-Type -AssemblyName System.Drawing

$srcPath = "b:\shubham\Spotify-Indian-Wedding-Invitation\public\og-image.jpeg"
$destSquare = "b:\shubham\Spotify-Indian-Wedding-Invitation\public\og-preview.jpeg"

$src = [System.Drawing.Bitmap]::FromFile($srcPath)
# Crop region: x=0, y=40, width=720, height=720
$cropRect = New-Object System.Drawing.Rectangle(0, 40, 720, 720)
$dest = New-Object System.Drawing.Bitmap(800, 800)
$g = [System.Drawing.Graphics]::FromImage($dest)
$g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
$g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
$g.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality
$destRect = New-Object System.Drawing.Rectangle(0, 0, 800, 800)
$g.DrawImage($src, $destRect, $cropRect, [System.Drawing.GraphicsUnit]::Pixel)

$codec = [System.Drawing.Imaging.ImageCodecInfo]::GetImageEncoders() | Where-Object { $_.MimeType -eq 'image/jpeg' }
$encoderParams = New-Object System.Drawing.Imaging.EncoderParameters(1)
$encoderParams.Param[0] = New-Object System.Drawing.Imaging.EncoderParameter([System.Drawing.Imaging.Encoder]::Quality, [long]92)

$dest.Save($destSquare, $codec, $encoderParams)
$g.Dispose()
$dest.Dispose()
$src.Dispose()

# Also save as og-image.jpeg (this will be the primary WhatsApp link preview image)
Copy-Item -Path $destSquare -Destination $srcPath -Force

# Create 192x192 favicon / apple-touch-icon
$iconDest = New-Object System.Drawing.Bitmap(192, 192)
$iconG = [System.Drawing.Graphics]::FromImage($iconDest)
$iconG.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
$thumbSrc = [System.Drawing.Bitmap]::FromFile($destSquare)
$iconG.DrawImage($thumbSrc, 0, 0, 192, 192)
$iconDest.Save("b:\shubham\Spotify-Indian-Wedding-Invitation\public\apple-touch-icon.png", [System.Drawing.Imaging.ImageFormat]::Png)
$iconDest.Save("b:\shubham\Spotify-Indian-Wedding-Invitation\public\favicon.png", [System.Drawing.Imaging.ImageFormat]::Png)
$iconG.Dispose()
$iconDest.Dispose()
$thumbSrc.Dispose()

Write-Output "Successfully generated optimized og-image.jpeg, og-preview.jpeg, and icons!"
